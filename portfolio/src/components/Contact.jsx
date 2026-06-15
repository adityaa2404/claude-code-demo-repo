import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index={5}
          title="Get in Touch"
          subtitle="Have a question or want to collaborate?"
        />

        <div className="space-y-4">
          <p className="leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            You can reach me at <a href="mailto:aditya@example.com">aditya@example.com</a>.
          </p>
        </div>
      </div>
    </section>
  )
}