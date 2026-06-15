import { GitBranch, ExternalLink, Star, Loader2, AlertCircle } from 'lucide-react'
import { useGitHubProjects } from '../hooks/useGitHubProjects.js'
import SectionHeader from '../components/SectionHeader.jsx'
import Tag from '../components/Tag.jsx'

const LANG_COLORS = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3572A5',
  default: '#64748b',
}

function ProjectCard({ project }) {
  return (
    <div
      className="group relative p-6 rounded-lg border flex flex-col gap-4 transition-all duration-300"
      style={{
        background: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(0,255,136,0.4)'
        e.currentTarget.style.boxShadow = '0 0 30px rgba(0,255,136,0.08), 0 4px 20px rgba(0,0,0,0.3)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--color-border)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2">
          {project.language && (
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ background: LANG_COLORS[project.language] || LANG_COLORS.default }}
            />
          )}
          <h3 className="font-mono font-semibold text-base" style={{ color: 'var(--color-text)' }}>
            {project.name}
          </h3>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {project.stars > 0 && (
            <span className="flex items-center gap-1 font-mono text-xs" style={{ color: 'var(--color-text-muted)' }}>
              <Star size={12} />
              {project.stars}
            </span>
          )}
          <div className="flex items-center gap-2">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors duration-150"
              style={{ color: 'var(--color-text-dim)' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-primary)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-dim)' }}
            >
              <GitBranch size={16} />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label="Live demo"
                className="transition-colors duration-150"
                style={{ color: 'var(--color-text-dim)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-cyan)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-dim)' }}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-text-muted)' }}>
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {project.tags.map(tag => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const { projects, loading, error } = useGitHubProjects()

  return (
    <section id="projects" className="py-24 px-6" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index={3}
          title="Projects"
          subtitle="Things I've built — pulled live from GitHub."
        />

        {loading && (
          <div className="flex items-center gap-3 py-12" style={{ color: 'var(--color-text-muted)' }}>
            <Loader2 size={18} className="animate-spin" style={{ color: 'var(--color-primary)' }} />
            <span className="font-mono text-sm">fetching repos from GitHub API...</span>
          </div>
        )}

        {error && (
          <div
            className="flex items-center gap-3 p-4 rounded-lg border mb-8"
            style={{
              background: 'rgba(239,68,68,0.05)',
              borderColor: 'rgba(239,68,68,0.2)',
              color: '#f87171',
            }}
          >
            <AlertCircle size={16} />
            <span className="font-mono text-sm">GitHub API error — showing cached data. {error}</span>
          </div>
        )}

        {!loading && (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <a
            href="https://github.com/adityaa2404"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm transition-colors duration-200"
            style={{ color: 'var(--color-text-muted)' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-primary)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-muted)' }}
          >
            <GitBranch size={16} />
            view all repositories on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
