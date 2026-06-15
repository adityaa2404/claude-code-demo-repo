import { useState, useEffect } from 'react'

const FEATURED = ['legal-assist', 'algo-lens', 'bill-master', 'cyber-trace']

const MANUAL_META = {
  'legal-assist': {
    description: 'Privacy-preserving AI platform for automated legal document analysis — clause extraction, risk scoring, and interactive Q&A with zero-retention architecture.',
    tags: ['TypeScript', 'FastAPI', 'Pinecone', 'Gemini', 'RAG'],
    demo: null,
  },
  'algo-lens': {
    description: 'AI-powered code review inside your LeetCode workflow. Get instant Gemini-powered feedback — complexity breakdown, edge cases, pattern tags, and an optimized rewrite.',
    tags: ['JavaScript', 'Chrome Extension', 'Gemini API'],
    demo: null,
  },
  'bill-master': {
    description: 'Full-stack billing and estimation platform for electricians — modular MVC backend with REST APIs and responsive UI with live editing.',
    tags: ['Node.js', 'Express', 'MongoDB', 'React', 'Redux', 'TailwindCSS'],
    demo: null,
  },
  'cyber-trace': {
    description: 'Cybersecurity tooling project focused on network tracing and threat analysis.',
    tags: ['TypeScript'],
    demo: null,
  },
}

export function useGitHubProjects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch('https://api.github.com/users/adityaa2404/repos?per_page=100&sort=updated')
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
        const repos = await res.json()

        const featured = FEATURED.map(name => {
          const repo = repos.find(r => r.name === name)
          if (!repo) return null
          const meta = MANUAL_META[name] || {}
          return {
            id: repo.id,
            name: repo.name,
            description: meta.description || repo.description || '',
            url: repo.html_url,
            demo: meta.demo || null,
            stars: repo.stargazers_count,
            language: repo.language,
            tags: meta.tags || (repo.language ? [repo.language] : []),
            updatedAt: repo.updated_at,
          }
        }).filter(Boolean)

        setProjects(featured)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  return { projects, loading, error }
}
