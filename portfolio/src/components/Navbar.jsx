import { useState, useEffect } from 'react'
import { Terminal, Menu, X } from 'lucide-react'

const links = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'projects', href: '#projects' },
  { label: 'contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,15,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #1e1e2e' : '1px solid transparent',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <Terminal size={18} style={{ color: 'var(--color-primary)' }} />
          <span
            className="font-mono text-sm font-semibold tracking-wider"
            style={{ color: 'var(--color-primary)' }}
          >
            aditya<span style={{ color: 'var(--color-text-muted)' }}>@dev</span>
            <span className="cursor-blink" style={{ color: 'var(--color-primary)' }}>_</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm transition-colors duration-200"
                style={{ color: 'var(--color-text-muted)' }}
                onMouseEnter={e => { e.target.style.color = 'var(--color-primary)' }}
                onMouseLeave={e => { e.target.style.color = 'var(--color-text-muted)' }}
              >
                <span style={{ color: 'var(--color-primary)' }}>./</span>{link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          style={{ color: 'var(--color-text-muted)' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{ background: 'rgba(10,10,15,0.98)', borderColor: 'var(--color-border)' }}
        >
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm"
              style={{ color: 'var(--color-text-muted)' }}
              onClick={() => setOpen(false)}
            >
              <span style={{ color: 'var(--color-primary)' }}>./</span>{link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
