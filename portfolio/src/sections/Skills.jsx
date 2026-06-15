import SectionHeader from '../components/SectionHeader.jsx'

const SKILLS = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Redux Toolkit', 'Vite'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'FastAPI', 'Python', 'REST APIs', 'WebSockets'],
  },
  {
    category: 'AI / ML',
    items: ['LLM APIs', 'RAG Pipelines', 'Gemini', 'Pinecone', 'LangChain', 'Prompt Engineering'],
  },
  {
    category: 'Database',
    items: ['MongoDB', 'PostgreSQL', 'Redis', 'Pinecone', 'Mongoose'],
  },
  {
    category: 'DevOps & Cloud',
    items: ['Docker', 'Nginx', 'Google Cloud', 'GitHub Actions', 'ngrok', 'Vertex AI'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Linux', 'VS Code', 'Postman', 'Claude Code'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 grid-bg" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index={2}
          title="Skills"
          subtitle="Technologies I work with regularly."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map(({ category, items }) => (
            <div
              key={category}
              className="p-6 rounded-lg border transition-all duration-200"
              style={{
                background: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.05)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--color-border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <p
                className="font-mono text-xs font-semibold mb-4 tracking-wider uppercase"
                style={{ color: 'var(--color-primary)' }}
              >
                // {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-md text-sm font-mono transition-colors duration-150 cursor-default"
                    style={{
                      background: 'var(--color-surface-2)',
                      color: 'var(--color-text-muted)',
                      border: '1px solid var(--color-border)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'var(--color-text)'
                      e.currentTarget.style.borderColor = 'rgba(0,255,136,0.3)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'var(--color-text-muted)'
                      e.currentTarget.style.borderColor = 'var(--color-border)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
