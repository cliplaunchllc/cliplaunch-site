const features = [
  'No monthly subscription',
  'No setup cost',
  'No wasted impressions',
  'You set your CPM rate',
  'You set a hard budget cap',
  'Campaign auto-stops when cap is hit',
  'Real-time view tracking per clip',
  'Payouts handled by ClipLaunch',
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="cl-section">
        {/* Header */}
        <div className="mb-16">
          <p className="cl-section-label">Pricing</p>
          <h2 className="cl-section-title">
            Simple pricing.<br />
            <span style={{ color: 'var(--ink-muted)', fontWeight: 600 }}>No surprises.</span>
          </h2>
          <p className="cl-section-sub">
            You control every dollar. Set your rate, set your cap, and pay only for
            the views your clips actually earn — nothing more.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.1fr] gap-6 items-start">
          {/* How it's calculated */}
          <div className="flex flex-col gap-4">
            {[
              {
                step: '1',
                title: 'Set your CPM',
                body: 'CPM is what you pay per 1,000 views. Set it higher to attract more clippers faster. Set it lower to maximise reach on a tight budget. The sweet spot is $0.50–$2.00.',
              },
              {
                step: '2',
                title: 'Set a budget cap',
                body: 'Your cap is the absolute max you\'ll spend. When your campaign hits it, it stops automatically. No overages, ever. Minimum cap to launch is $500.',
              },
              {
                step: '3',
                title: 'Pay for real views',
                body: 'Every view on every clip is tracked. ClipLaunch handles clipper payouts from your budget. You\'re billed only for verified view counts — not estimates.',
              },
            ].map(item => (
              <div
                key={item.step}
                className="cl-card flex gap-4"
              >
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
                  style={{
                    background: 'var(--brand-soft)',
                    color: 'var(--brand-bright)',
                    border: '1px solid rgba(255,90,95,0.2)',
                  }}
                >
                  {item.step}
                </span>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', marginBottom: '4px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: '21px', color: 'var(--ink-muted)' }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing card */}
          <div
            className="cl-card"
            style={{
              background: 'var(--surface)',
              borderColor: 'rgba(255,90,95,0.15)',
              boxShadow: 'var(--shadow-card), 0 0 0 1px rgba(255,90,95,0.08)',
            }}
          >
            {/* Top */}
            <div
              className="pb-5 mb-5"
              style={{ borderBottom: '1px solid var(--line)' }}
            >
              <span className="cl-pill cl-pill-brand mb-3" style={{ display: 'inline-flex' }}>
                Pay-per-view
              </span>
              <div
                className="flex items-end gap-2"
                style={{ marginBottom: '6px' }}
              >
                <span
                  style={{
                    fontSize: '48px',
                    fontWeight: 700,
                    letterSpacing: '-0.04em',
                    fontVariantNumeric: 'tabular-nums',
                    color: 'var(--ink)',
                    lineHeight: 1,
                  }}
                >
                  $0
                </span>
                <span style={{ color: 'var(--ink-muted)', fontSize: '15px', paddingBottom: '6px' }}>
                  / month
                </span>
              </div>
              <p style={{ color: 'var(--ink-muted)', fontSize: '14px' }}>
                You only pay when your clips get views.
                Minimum $500 to launch a campaign.
              </p>
            </div>

            {/* Features */}
            <ul className="flex flex-col gap-3 mb-6" style={{ listStyle: 'none' }}>
              {features.map(f => (
                <li key={f} className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: 'var(--brand-soft)' }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 2.5" stroke="var(--brand-bright)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span style={{ fontSize: '14px', color: 'var(--ink-muted)' }}>{f}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="cl-btn cl-btn-primary w-full justify-center" style={{ width: '100%' }}>
              Start a campaign
            </a>

            <p style={{ fontSize: '12px', color: 'var(--ink-subtle)', textAlign: 'center', marginTop: '12px' }}>
              No credit card required to get started.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
