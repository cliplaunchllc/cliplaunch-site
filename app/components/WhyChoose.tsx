const reasons = [
  {
    title: 'Verified & approved',
    body: '5/5 star rating from thousands of clippers on Whop. We\'re an officially verified agency on Content Rewards.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4"/>
        <path d="M10.5 2.5l1.5 1.5h2l.75 2.25L17 7.5l-.75 2.25.75 2.25-2.25.75L13 14.5h-2L9.5 16l-1.5-1.5h-2l-.75-2.25L3 11l.75-2.25L3 6.5l2.25-.75L7 3.5h2l1.5-1z"/>
      </svg>
    ),
  },
  {
    title: 'Manual analytics review',
    body: 'Our team manually reviews every clipper submission and analytics report — no automated approvals, no faked views.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" transform="scale(0.85) translate(1.5,1.5)"/>
      </svg>
    ),
  },
  {
    title: 'We handle everything',
    body: 'From strategy to distribution, clip review to payout — we manage the entire operation so you don\'t have to.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2L2.5 7.5v9A1.5 1.5 0 0 0 4 18h12a1.5 1.5 0 0 0 1.5-1.5v-9L10 2z"/>
        <path d="M7 18v-6h6v6"/>
      </svg>
    ),
  },
  {
    title: '50,000+ clipper network',
    body: 'Our verified clipper network spans every niche — gaming, sports, entertainment, lifestyle, brands, and more.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="6.5" r="2.5"/>
        <path d="M2 18a6 6 0 0 1 12 0"/>
        <circle cx="15" cy="8" r="2"/>
        <path d="M13 18a4 4 0 0 1 8 0"/>
      </svg>
    ),
  },
  {
    title: 'Built for every niche',
    body: 'Gaming, esports, podcasts, IRL, sports, brands — we\'ve run successful campaigns across every content category.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="6.5" height="8" rx="1.5"/>
        <rect x="11.5" y="3" width="6.5" height="4" rx="1.5"/>
        <rect x="11.5" y="10" width="6.5" height="7" rx="1.5"/>
        <rect x="2" y="14" width="6.5" height="3" rx="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Real-time reporting',
    body: 'Live dashboards show every clip, every view, and every dollar — updated every 15 minutes so you always know where you stand.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="8"/>
        <polyline points="10 6 10 10 13 13"/>
      </svg>
    ),
  },
]

export default function WhyChoose() {
  return (
    <section
      id="why"
      className="scroll-mt-20"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="cl-section">
        <div className="mb-16">
          <p className="cl-section-label">Why ClipLaunch</p>
          <h2 className="cl-section-title">
            The agency for those<br />
            <span style={{ color: 'var(--ink-muted)', fontWeight: 600 }}>who want the best.</span>
          </h2>
          <p className="cl-section-sub">
            We've generated over 1 billion views for brands and creators. Here's why
            they keep coming back.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div key={r.title} className="cl-card flex flex-col gap-4">
              <span
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--brand-soft)', color: 'var(--brand-bright)' }}
              >
                {r.icon}
              </span>
              <div>
                <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>
                  {r.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '21px', color: 'var(--ink-muted)' }}>
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
