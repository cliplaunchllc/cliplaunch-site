export default function Hero() {
  return (
    <section
      className="cl-ambient flex flex-col items-center justify-center text-center min-h-screen pt-16 px-6"
      style={{ paddingBottom: '80px' }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Eyebrow */}
        <span className="cl-pill cl-pill-brand">
          <span className="cl-dot" />
          Pay-per-view short-form clipping
        </span>

        {/* Headline */}
        <h1
          style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 700,
            letterSpacing: '-0.035em',
            lineHeight: 1.0,
            color: 'var(--ink)',
          }}
        >
          50,000 clippers.{' '}
          <br className="hidden sm:block" />
          Your content.{' '}
          <span style={{ color: 'var(--brand-bright)' }}>Millions</span> of views.
        </h1>

        {/* Sub */}
        <p
          className="max-w-2xl"
          style={{ fontSize: '18px', lineHeight: '28px', color: 'var(--ink-muted)' }}
        >
          ClipLaunch deploys thousands of verified short-form clippers onto your videos.
          They create the clips, post them across TikTok, Shorts, and Reels —
          and you only pay for the views they actually earn.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <a href="#contact" className="cl-btn cl-btn-primary" style={{ height: '52px', fontSize: '16px', padding: '0 32px' }}>
            Start a campaign
          </a>
          <a href="#how-it-works" className="cl-btn cl-btn-ghost" style={{ height: '52px', fontSize: '16px', padding: '0 32px' }}>
            See how it works
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-6 w-full"
          style={{ borderTop: '1px solid var(--line)' }}
        >
          {[
            { value: '288M+',   label: 'views delivered' },
            { value: '$0.06',   label: 'avg CPM' },
            { value: '50,000+', label: 'active clippers' },
            { value: '2,900+',  label: 'clips per campaign' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span
                style={{
                  fontSize: '24px',
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
