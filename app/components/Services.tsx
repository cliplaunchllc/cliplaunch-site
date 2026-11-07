const models = [
  {
    badge: 'Recommended',
    badgeStyle: { background: 'var(--brand-soft)', color: 'var(--brand-bright)', border: '1px solid rgba(255,90,95,0.25)' },
    title: 'Dedicated content team',
    tagline: 'Build a predictable content engine that posts every day.',
    body: 'A dedicated team of clippers builds and runs pages built entirely around you. Flat monthly rate based on clippers, pages, and clip volume.',
    best: 'Best for consistent long-term distribution and complete creative control.',
    pricing: 'Flat monthly rate',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="3"/>
        <path d="M3 20a6 6 0 0 1 12 0"/>
        <circle cx="17" cy="9" r="2"/>
        <path d="M14.5 20a4.5 4.5 0 0 1 9 0" strokeWidth="1.5"/>
      </svg>
    ),
    glowing: true,
  },
  {
    badge: 'CPM-based',
    badgeStyle: { background: 'var(--surface)', color: 'var(--ink-muted)', border: '1px solid var(--line)' },
    title: 'Private campaigns',
    tagline: 'A middle ground between mass distribution and guaranteed dedicated output.',
    body: 'Hand-selects stronger, more experienced clippers — controlled, higher-quality distribution without a guaranteed output structure.',
    best: 'Best for brands that want quality over quantity.',
    pricing: 'Pay per view (CPM)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    glowing: false,
  },
  {
    badge: 'CPM-based',
    badgeStyle: { background: 'var(--surface)', color: 'var(--ink-muted)', border: '1px solid var(--line)' },
    title: 'Public network',
    tagline: 'Maximum reach across our full 50,000+ clipper network.',
    body: 'Open your campaign to our entire clipper network. The highest volume option — hundreds to thousands of clips posted across TikTok, Shorts, and Reels.',
    best: 'Best for maximum exposure and viral reach.',
    pricing: 'Pay per view (CPM)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="9"/>
        <path d="M11 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        <path d="M2 11h18"/>
      </svg>
    ),
    glowing: false,
  },
]

export default function Services() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="cl-section">
        <div className="mb-16">
          <p className="cl-section-label">Distribution models</p>
          <h2 className="cl-section-title">
            Three ways to work<br />
            <span style={{ color: 'var(--ink-muted)', fontWeight: 600 }}>with ClipLaunch.</span>
          </h2>
          <p className="cl-section-sub">
            Whether you need a full dedicated team or a one-time campaign burst,
            we have a model that fits your content and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {models.map((m) => (
            <div
              key={m.title}
              className="cl-card flex flex-col gap-5"
              style={m.glowing ? { borderColor: 'rgba(255,90,95,0.2)', boxShadow: 'var(--shadow-card), 0 0 0 1px rgba(255,90,95,0.08)' } : {}}
            >
              {/* Icon + badge */}
              <div className="flex items-start justify-between">
                <span style={{ color: m.glowing ? 'var(--brand-bright)' : 'var(--ink-subtle)' }}>
                  {m.icon}
                </span>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={m.badgeStyle}
                >
                  {m.badge}
                </span>
              </div>

              {/* Title + tagline */}
              <div>
                <h3
                  style={{
                    fontSize: '18px', fontWeight: 600, letterSpacing: '-0.015em',
                    color: 'var(--ink)', marginBottom: '6px',
                  }}
                >
                  {m.title}
                </h3>
                <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--brand-bright)', marginBottom: '10px' }}>
                  {m.tagline}
                </p>
                <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--ink-muted)' }}>
                  {m.body}
                </p>
              </div>

              {/* Best for */}
              <p style={{ fontSize: '13px', color: 'var(--ink-subtle)', fontStyle: 'italic' }}>
                {m.best}
              </p>

              {/* Pricing */}
              <div
                className="mt-auto pt-4 flex items-center justify-between"
                style={{ borderTop: '1px solid var(--line)' }}
              >
                <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--ink-subtle)' }}>Pricing</span>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>{m.pricing}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#contact" className="cl-btn cl-btn-primary" style={{ height: '52px', fontSize: '16px', padding: '0 40px' }}>
            Book a strategy call
          </a>
          <p style={{ fontSize: '13px', color: 'var(--ink-subtle)', marginTop: '12px' }}>
            We'll recommend the right model for your content and goals.
          </p>
        </div>
      </div>
    </section>
  )
}
