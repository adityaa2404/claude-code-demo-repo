# PostToolUse hook — runs after Claude edits a file, shows review to user

$raw = [Console]::In.ReadToEnd()
try {
    $data = $raw | ConvertFrom-Json
    $filePath = $data.tool_input.file_path
    if (-not $filePath) { exit 0 }
} catch { exit 0 }

# Skip non-code paths and generated output
$skipPatterns = @('node_modules','dist','build','.git','.claude','public/')
foreach ($p in $skipPatterns) {
    if ($filePath.Replace('\','/') -like "*$p*") { exit 0 }
}

$skipExts = @('.lock','.log','.png','.jpg','.jpeg','.gif','.ico','.svg','.woff','.woff2','.ttf','.eot','.map','.css')
$ext = [System.IO.Path]::GetExtension($filePath).ToLower()
if ($skipExts -contains $ext) { exit 0 }

$skipFiles = @('package-lock.json','yarn.lock','pnpm-lock.yaml','README.md','CLAUDE.md','tasks.md','.gitignore','.dockerignore')
$filename = [System.IO.Path]::GetFileName($filePath)
if ($skipFiles -contains $filename) { exit 0 }

# Build prompt using here-string to avoid parser issues
$prompt = @"
You are a code reviewer. Review the file at: $filePath

Read the file. Check only for real issues: correctness bugs, security vulnerabilities like XSS or injection, bad async patterns, missing awaits, obvious performance problems.

Output ONLY in one of these two formats with no preamble:

Format 1 (clean): PASS - one sentence summary.

Format 2 (issues found): WARN or FAIL followed by bullets like: Line N: exact problem. Fix: exact one-line fix.

Maximum 5 bullets. Be terse. Only real specific issues, no generic advice.
"@

$result = ($prompt | claude --print 2>&1) | Out-String
$result = $result.Trim()

if ([string]::IsNullOrWhiteSpace($result)) { exit 0 }

$msg = "[$filename] $result"
[PSCustomObject]@{ systemMessage = $msg } | ConvertTo-Json -Compress | Write-Output
