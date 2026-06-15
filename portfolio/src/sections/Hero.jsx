import { useEffect, useState } from 'react'
import { ArrowDown, GitBranch } from 'lucide-react'

const ROLES = [
  'Full-Stack Developer',
  'AI/ML Enthusiast',
  'Open Source Builder',
  'Problem Solver',
]

function useTypingEffect(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setWordIdx(i => (i + 1) % words.length)
          setCharIdx(0)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

export default function Hero() {
  const role = useTypingEffect(ROLES)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center grid-bg px-6"
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto fade-in-up">
        {/* Terminal prompt */}
        <p className="font-mono text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
          <span style={{ color: 'var(--color-primary)' }}>❯</span> whoami
        </p>

        {/* Avatar placeholder */}
        <div
          className="w-24 h-24 rounded-full mx-auto mb-8 flex items-center justify-center border-2 glow-green"
          style={{
            borderColor: 'var(--color-primary)',
            background: 'var(--color-surface)',
          }}
        >
          <span className="font-mono text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>
            AP
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          <span style={{ color: 'var(--color-text)' }}>Hi, I'm </span>
          <span className="text-glow" style={{ color: 'var(--color-primary)' }}>Aditya Potdar</span>
        </h1>

        <div className="h-10 mb-6 flex items-center justify-center">
          <span className="font-mono text-lg md:text-xl" style={{ color: 'var(--color-cyan)' }}>
            {role}
            <span className="cursor-blink" style={{ color: 'var(--color-primary)' }}>|</span>
          </span>
        </div>

        <p className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
          Building things that matter — from AI-powered legal tools to full-stack billing platforms.
          I write code that ships.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg font-mono text-sm font-semibold transition-all duration-200 border glow-green"
            style={{
              background: 'rgba(0,255,136,0.1)',
              borderColor: 'var(--color-primary)',
              color: 'var(--color-primary)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,255,136,0.2)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,255,136,0.1)' }}
          >
            view_projects()
          </a>
          <a
            href="https://github.com/adityaa2404"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg font-mono text-sm font-semibold transition-all duration-200 border flex items-center gap-2"
            style={{
              borderColor: 'var(--color-border)',
              color: 'var(--color-text-muted)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--color-text-muted)'
              e.currentTarget.style.color = 'var(--color-text)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--color-border)'
              e.currentTarget.style.color = 'var(--color-text-muted)'
            }}
          >
            <GitBranch size={16} />
            GitHub
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ color: 'var(--color-text-dim)' }}
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
