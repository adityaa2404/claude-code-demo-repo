export default function Tag({ label = '' }) {
  return (
    <span
      className="inline-block px-2 py-0.5 rounded font-mono text-xs border"
      style={{
        color: 'var(--color-cyan)',
        borderColor: 'rgba(0,212,255,0.25)',
        background: 'rgba(0,212,255,0.05)',
      }}
    >
      {label}
    </span>
  )
}
