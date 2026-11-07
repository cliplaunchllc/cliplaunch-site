const founders = [
  {
    name: 'Andrew Saline',
    role: 'Co-founder',
    bio: 'Grew his personal channels to 100K+ followers and 100M+ views. Andrew built ClipLaunch after seeing firsthand how short-form clipping could scale a creator\'s reach without extra effort.',
    stats: [
      { value: '100K+', label: 'Followers' },
      { value: '100M+', label: 'Views' },
    ],
  },
  {
    name: 'Evan Willman',
    role: 'Co-founder',
    bio: 'Systems and operations specialist. Evan built the infrastructure behind ClipLaunch — from the clipper network and campaign tracking to the analytics and payout systems that power every campaign.',
    stats: [
      { value: '50K+', label: 'Clippers managed' },
      { value: '1B+',  label: 'Views tracked' },
    ],
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="cl-section">
        <div className="mb-16">
          <p className="cl-section-label">About us</p>
          <h2 className="cl-section-title">
            Built by creators,<br />
            <span style={{ color: 'var(--ink-muted)', fontWeight: 600 }}>for creators.</span>
          </h2>
          <p className="cl-section-sub">
            We didn't build a tool — we built an agency from the ground up,
            starting with our own content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {founders.map((f) => (
            <div key={f.name} className="cl-card flex flex-col gap-6">
              {/* Avatar + name */}
              <div className="flex items-center gap-4">
                <span
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0"
                  style={{ background: 'var(--brand-soft)', color: 'var(--brand-bright)', border: '1px solid rgba(255,90,95,0.2)' }}
                >
                  {f.name[0]}
                </span>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em' }}>
                    {f.name}
                  </h3>
                  <span style={{ fontSize: '13px', color: 'var(--ink-subtle)' }}>{f.role}</span>
                </div>
              </div>

              {/* Bio */}
              <p style={{ fontSize: '15px', lineHeight: '23px', color: 'var(--ink-muted)' }}>
                {f.bio}
              </p>

              {/* Stats */}
              <div
                className="grid grid-cols-2 gap-4 pt-4"
                style={{ borderTop: '1px solid var(--line)' }}
              >
                {f.stats.map(({ value, label }) => (
                  <div key={label}>
                    <p style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums', color: 'var(--ink)' }}>
                      {value}
                    </p>
                    <p style={{ fontSize: '12px', color: 'var(--ink-subtle)', fontWeight: 500 }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
