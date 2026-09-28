export default function Section({ id, eyebrow, title, description, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 ${className}`}>
      <div className="reveal mb-10 max-w-2xl sm:mb-12">
        {eyebrow && (
          <p className="font-mono text-[13px]" style={{ color: 'var(--accent)' }}>
            {eyebrow}
          </p>
        )}
        <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        {description && (
          <p className="mt-3 text-[15px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
