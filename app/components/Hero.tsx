export default function Hero() {
  return (
    <section
      className="cl-ambient flex flex-col items-center justify-center text-center min-h-screen pt-16 px-6"
      style={{ paddingBottom: '80px' }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Trust badge */}
        <span className="cl-pill cl-pill-brand">
          <span className="cl-dot" />
          Verified AGENCY on CONTENT REWARDS &nbsp;·&nbsp; 1B+ Views GENERATED
        </span>

        {/* Headline */}
        <h1
          style={{
            fontSize: 'clamp(36px, 5.5vw, 64px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: 'var(--ink)',
          }}
        >
          The #1 clipping agency for{' '}
          <span style={{ color: 'var(--brand-bright)' }}>brands</span> and{' '}
          <span style={{ color: 'var(--brand-bright)' }}>creators.</span>
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            fontWeight: 600,
            letterSpacing: '-0.01em',
            color: 'var(--ink-muted)',
          }}
        >
          Mass clipping distribution that actually converts.
        </p>

        {/* Body */}
        <p
          className="max-w-2xl"
          style={{ fontSize: '17px', lineHeight: '27px', color: 'var(--ink-muted)' }}
        >
          ClipLaunch is the #1 trusted clipping agency for brands powered by our
          50,000+ clipper network, turning your content into hundreds to thousands
          of clips that flood every platform.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <a
            href="#contact"
            className="cl-btn cl-btn-primary"
            style={{ height: '52px', fontSize: '16px', padding: '0 32px' }}
          >
            Book a call
          </a>
          <a
            href="#contact"
            className="cl-btn"
            style={{ height: '52px', fontSize: '16px', padding: '0 32px' }}
          >
            Become a clipper
          </a>
        </div>

        {/* Sub-note */}
        <p style={{ fontSize: '13px', color: 'var(--ink-subtle)' }}>
          System live in 24–48 hours
        </p>

        {/* Stats row */}
        <div
          className="flex flex-wrap items-center justify-center gap-8 mt-4 pt-6 w-full"
          style={{ borderTop: '1px solid var(--line)' }}
        >
          {[
            { value: '1B+',     label: 'Views generated' },
            { value: '5/5',     label: 'Stars on Whop' },
            { value: '50,000+', label: 'Clipper network' },
            { value: '24–48h',  label: 'System live' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span
                style={{
                  fontSize: '26px',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  fontVariantNumeric: 'tabular-nums',
                  color: 'var(--ink)',
                }}
              >
                {value}
              </span>
              <span style={{ fontSize: '13px', color: 'var(--ink-subtle)', fontWeight: 500 }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
