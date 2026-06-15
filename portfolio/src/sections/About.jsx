import SectionHeader from '../components/SectionHeader.jsx'
import { Code2, Brain, Rocket } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack',
    body: 'Comfortable across the entire stack — React frontends, Node/Express APIs, Python backends, and cloud deployments.',
  },
  {
    icon: Brain,
    title: 'AI/ML',
    body: 'Hands-on with RAG pipelines, LLM APIs (Gemini, GPT), vector databases, and production AI integrations.',
  },
  {
    icon: Rocket,
    title: 'Shipping',
    body: 'I build complete, deployed products — not just demos. Real apps with real users and real constraints.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index={1}
          title="About Me"
          subtitle="A bit about who I am and what drives me."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-4">
            <p className="leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              I'm a full-stack developer who enjoys building tools that solve real problems. My work spans
              AI-powered platforms, billing systems, browser extensions, and cybersecurity tooling — anything
              where software can make a meaningful dent.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              I gravitate toward projects where the technical challenge and the user impact are both high.
              Whether it's wiring a RAG pipeline to analyze legal documents or shipping a live-editing
              estimator for electricians, I like work that's grounded in real-world needs.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              When I'm not building, I'm usually exploring new models, contributing to open source, or
              breaking things to understand how they work.
            </p>

            <div className="pt-4 flex gap-4">
              <a
                href="https://github.com/adityaa2404"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm transition-colors duration-200"
                style={{ color: 'var(--color-primary)' }}
              >
                github.com/adityaa2404 →
              </a>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="space-y-4">
            {highlights.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="p-5 rounded-lg border flex gap-4 transition-all duration-200 group"
                style={{
                  background: 'var(--color-surface-2)',
                  borderColor: 'var(--color-border)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,255,136,0.3)'
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,136,0.05)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  className="mt-0.5 w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(0,255,136,0.1)' }}
                >
                  <Icon size={16} style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: 'var(--color-text)' }}>{title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
