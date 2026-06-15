const Groq = require('groq-sdk');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

function collectFiles(dir, exts, excludes, results = [], depth = 0) {
  if (depth > 5) return results;
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (excludes.some(e => full.includes(e))) continue;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) collectFiles(full, exts, excludes, results, depth + 1);
    else if (exts.some(e => entry.endsWith(e))) results.push(full);
  }
  return results;
}

async function main() {
  const issueNumber = process.env.ISSUE_NUMBER;
  const issueTitle = process.env.ISSUE_TITLE;
  const issueBody = process.env.ISSUE_BODY;

  const files = collectFiles('.', ['.jsx', '.js', '.css', '.html', '.md', '.yml', '.json'], [
    'node_modules', '.git', 'dist', 'package-lock.json',
  ]).slice(0, 25);

  const filesContext = files.map(f => {
    try {
      return `=== FILE: ${f} ===\n${fs.readFileSync(f, 'utf8')}\n`;
    } catch {
      return '';
    }
  }).join('\n');

  console.log(`Read ${files.length} files. Calling Groq...`);

  const prompt = `You are a coding agent implementing a GitHub issue.

Issue #${issueNumber}: ${issueTitle}

${issueBody}

Here are the current repository files:

${filesContext}

Your task: implement ALL changes requested in the issue.

Respond with ONLY a valid JSON array — no markdown, no explanation:
[
  {
    "path": "relative/file/path",
    "content": "full file content"
  }
]

Rules:
- Include COMPLETE file content for every file you change or create
- Only include files that need changing
- Use relative paths from repo root (e.g. "portfolio/src/sections/Contact.jsx")`;

  const response = await groq.chat.completions.create({
    model: 'moonshotai/kimi-k2-instruct',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.2,
  });

  const raw = response.choices[0].message.content.trim();
  console.log('Raw response preview:', raw.slice(0, 300));

  const match = raw.match(/\[[\s\S]*\]/);
  if (!match) {
    console.error('No JSON array found in response');
    process.exit(1);
  }

  const changes = JSON.parse(match[0]);
  console.log(`Applying ${changes.length} file change(s)...`);

  for (const change of changes) {
    const dir = path.dirname(change.path);
    if (dir && dir !== '.') fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(change.path, change.content);
    console.log(`Written: ${change.path}`);
  }
}

main().catch(e => { console.error(e); process.exit(1); });
