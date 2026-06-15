import { Mail, GitBranch, Globe, Terminal } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const SOCIALS = [
  {
    icon: GitBranch,
    label: 'GitHub',
    handle: '@adityaa2404',
    href: 'https://github.com/adityaa2404',
    color: 'var(--color-text)',
  },
  {
    icon: Globe,
    label: 'LinkedIn',
    handle: 'Aditya Potdar',
    href: '#',
    color: '#0a66c2',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'placeholder@example.com',
    href: 'mailto:placeholder@example.com',
    color: 'var(--color-primary)',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 grid-bg" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index={4}
          title="Contact"
          subtitle="Want to collaborate or just say hi? Reach out."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — CTA */}
          <div>
            <div
              className="p-6 rounded-lg border font-mono text-sm"
              style={{
                background: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
                <Terminal size={14} style={{ color: 'var(--color-primary)' }} />
                <span style={{ color: 'var(--color-text-muted)' }}>terminal</span>
                <div className="ml-auto flex gap-1.5">
                  {['#ff5f57','#febc2e','#28c840'].map(c => (
                    <span key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                  ))}
                </div>
              </div>
              <p style={{ color: 'var(--color-text-muted)' }}>
                <span style={{ color: 'var(--color-primary)' }}>❯</span> send_message --to aditya
              </p>
              <p className="mt-2" style={{ color: 'var(--color-text)' }}>
                I'm open to freelance projects, full-time roles, and interesting collaborations.
              </p>
              <p className="mt-3" style={{ color: 'var(--color-text-muted)' }}>
                <span style={{ color: 'var(--color-primary)' }}>❯</span> response_time --expected
              </p>
              <p className="mt-2" style={{ color: 'var(--color-cyan)' }}>
                Usually within 24–48 hours.
              </p>
              <p className="mt-4" style={{ color: 'var(--color-text-dim)' }}>
                <span className="cursor-blink">█</span>
              </p>
            </div>

            <p className="mt-4 text-xs font-mono" style={{ color: 'var(--color-text-dim)' }}>
              // contact form coming in Phase 2 with backend
            </p>
          </div>

          {/* Right — Social links */}
          <div className="space-y-4">
            {SOCIALS.map(({ icon: Icon, label, handle, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-5 rounded-lg border transition-all duration-200 group"
                style={{
                  background: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,255,136,0.3)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)' }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>{label}</p>
                  <p className="text-xs font-mono" style={{ color: 'var(--color-text-muted)' }}>{handle}</p>
                </div>
                <span
                  className="ml-auto font-mono text-lg transition-transform duration-200 group-hover:translate-x-1"
                  style={{ color: 'var(--color-text-dim)' }}
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
