export default function SectionHeader({ index, title, subtitle }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs mb-2" style={{ color: 'var(--color-primary)' }}>
        {String(index).padStart(2, '0')} // {title.toLowerCase().replace(' ', '_')}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base max-w-xl" style={{ color: 'var(--color-text-muted)' }}>
          {subtitle}
        </p>
      )}
      <div
        className="mt-4 h-px w-16"
        style={{ background: 'linear-gradient(to right, var(--color-primary), transparent)' }}
      />
    </div>
  )
}
