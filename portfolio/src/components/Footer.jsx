import { GitBranch, Globe, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="border-t py-8"
      style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg)' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs" style={{ color: 'var(--color-text-dim)' }}>
          <span style={{ color: 'var(--color-primary)' }}>©</span> 2025 Aditya Potdar — built with React + Vite
        </span>
        <div className="flex items-center gap-4">
          {[
            { icon: GitBranch, href: 'https://github.com/adityaa2404', label: 'GitHub' },
            { icon: Globe, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:placeholder@example.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="transition-colors duration-200"
              style={{ color: 'var(--color-text-dim)' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-primary)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-dim)' }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
