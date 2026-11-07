const steps = [
  {
    n: '01',
    title: 'Submit your content',
    body: 'Upload a VOD, link a YouTube video, or drop a clip URL. Set your CPM rate — how much you pay per 1,000 views — and a budget cap. That\'s your max spend.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Clippers go to work',
    body: '50,000+ verified short-form clippers see your campaign, pick the best moments, and post clips across TikTok, YouTube Shorts, and Instagram Reels — at scale, fast.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3.5"/>
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0"/>
        <circle cx="17" cy="10" r="2.5"/>
        <path d="M14.5 20a4.5 4.5 0 0 1 9 0"/>
      </svg>
    ),
  },
  {
    n: '03',
    title: 'You pay for views',
    body: 'Every clip is tracked across every platform. When a clip earns views, the clipper gets paid from your budget. When your cap is hit, the campaign ends. No surprises.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2.5" y="5" width="19" height="14" rx="3"/>
        <path d="M2.5 10h19M7 15h3"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="cl-section">
        {/* Header */}
        <div className="mb-16">
          <p className="cl-section-label">How it works</p>
          <h2 className="cl-section-title">
            Launch in minutes.<br />
            <span style={{ color: 'var(--ink-muted)', fontWeight: 600 }}>
              Results in days.
            </span>
          </h2>
          <p className="cl-section-sub">
            No agency contracts, no content teams to manage. Submit your content,
            set your rate, and let thousands of clippers do the work.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className="cl-card flex flex-col gap-5"
              style={{ position: 'relative' }}
            >
              {/* Number badge */}
              <div className="flex items-center gap-3">
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm"
                  style={{
                    background: i === 0 ? 'var(--brand)' : 'var(--surface)',
                    boxShadow: i === 0 ? 'var(--shadow-glow)' : 'none',
                    border: i !== 0 ? '1px solid var(--line)' : 'none',
                    color: i === 0 ? 'var(--on-brand)' : 'var(--ink-subtle)',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {step.n}
                </span>
                <span style={{ color: 'var(--ink-subtle)' }}>{step.icon}</span>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    letterSpacing: '-0.015em',
                    color: 'var(--ink)',
                    marginBottom: '8px',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ color: 'var(--ink-muted)', fontSize: '15px', lineHeight: '23px' }}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
