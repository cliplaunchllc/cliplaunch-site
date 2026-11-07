const bars = [42, 52, 48, 66, 74, 60, 86, 98, 80, 106, 112, 94, 126, 146, 118, 130, 122, 134]
const maxBar = 150

export default function Results() {
  return (
    <section
      id="results"
      className="scroll-mt-20"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="cl-section">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="cl-section-label">Real results</p>
            <h2 className="cl-section-title">
              288M views.<br />
              <span style={{ color: 'var(--ink-muted)', fontWeight: 600 }}>One campaign.</span>
            </h2>
            <p className="cl-section-sub">
              A single creator ran a 30-day face reveal campaign. Here's what their
              ClipLaunch dashboard looked like on day 18.
            </p>
          </div>
          <span className="cl-pill cl-pill-brand flex-shrink-0">
            <span className="cl-dot" />
            Live · day 18 of 30
          </span>
        </div>

        {/* Campaign card */}
        <div className="cl-card" style={{ padding: '32px' }}>
          {/* Stat row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total views',  value: '288.4M', foot: <><span className="cl-delta cl-delta-pos">+18.2%</span> vs last week</> },
              { label: 'Clips posted', value: '2,914',  foot: <><span className="cl-delta cl-delta-pos">+341</span> this week</> },
              { label: 'Effective CPM',value: '$0.06',  foot: 'Target $0.50–$2.00' },
              { label: 'Budget used',  value: '$16,420', foot: 'of $20,000 cap' },
            ].map(({ label, value, foot }) => (
              <div key={label} className="cl-stat">
                <span className="cl-stat-label">{label}</span>
                <span className="cl-stat-value">{value}</span>
                <span className="cl-stat-foot">{foot}</span>
              </div>
            ))}
          </div>

          {/* Chart + platforms */}
          <div className="grid md:grid-cols-[1.6fr_1fr] gap-4">
            {/* Bar chart */}
            <div
              className="cl-card"
              style={{ padding: '20px', background: 'var(--surface)' }}
            >
              <div
                className="flex items-center justify-between mb-4"
                style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}
              >
                <span>Daily views</span>
                <span className="cl-pill" style={{ fontSize: '11px' }}>Millions</span>
              </div>
              <svg
                viewBox="0 0 580 160"
                className="w-full"
                style={{ height: '160px' }}
                preserveAspectRatio="none"
                aria-label="Daily views, last 18 days"
              >
                {/* Grid lines */}
                {[20, 80, 140].map(y => (
                  <line key={y} x1="0" y1={y} x2="580" y2={y} stroke="var(--line)" strokeWidth="1"/>
                ))}
                <text x="2" y="15" fill="var(--ink-subtle)" fontSize="10" fontFamily="var(--font-sans)">30M</text>
                <text x="2" y="75" fill="var(--ink-subtle)" fontSize="10" fontFamily="var(--font-sans)">15M</text>

                {/* Bars */}
                <g transform="translate(24,0)">
                  {bars.map((h, i) => {
                    const y = 150 - h
                    const isHi = i === 13
                    return (
                      <rect
                        key={i}
                        x={i * 31}
                        y={y}
                        width="20"
                        height={h}
                        rx="4"
                        fill={isHi ? 'var(--brand)' : '#3A1C20'}
                      />
                    )
                  })}
                </g>

                {/* Axis labels */}
                <text x="24"  y="158" fill="var(--ink-subtle)" fontSize="9" fontFamily="var(--font-sans)">Oct 14</text>
                <text x="395" y="158" fill="var(--ink-subtle)" fontSize="9" fontFamily="var(--font-sans)">Oct 27 · 29.1M</text>
              </svg>
            </div>

            {/* Platform breakdown */}
            <div
              className="cl-card flex flex-col gap-4"
              style={{ padding: '20px', background: 'var(--surface)' }}
            >
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>
                Views by platform
              </span>
              {[
                { name: 'TikTok', pct: 78, value: '164.2M' },
                { name: 'Shorts', pct: 44, value: '71.8M' },
                { name: 'Reels',  pct: 26, value: '38.5M' },
                { name: 'X',      pct: 9,  value: '13.9M' },
              ].map(({ name, pct, value }) => (
                <div
                  key={name}
                  className="grid items-center gap-3"
                  style={{ gridTemplateColumns: '64px 1fr 56px', fontSize: '14px' }}
                >
                  <span style={{ color: 'var(--ink-muted)' }}>{name}</span>
                  <div
                    className="rounded-full overflow-hidden"
                    style={{
                      height: '7px',
                      background: 'var(--bg)',
                      border: '1px solid var(--line)',
                    }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${pct}%`, background: 'var(--brand-bright)' }}
                    />
                  </div>
                  <span
                    className="text-right"
                    style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--ink)', fontWeight: 500 }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top clips table */}
        <div className="cl-card mt-4">
          <div className="flex items-center justify-between mb-5">
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--ink)' }}>Top clips</h3>
            <button className="cl-btn cl-btn-sm">View all clips</button>
          </div>
          <div className="overflow-x-auto">
            <table className="cl-table">
              <thead>
                <tr>
                  <th>Clip</th>
                  <th>Clipper</th>
                  <th>Platform</th>
                  <th className="cl-num">Views</th>
                  <th className="cl-num">Paid out</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { clip: 'Reaction to the reveal', clipper: '@kuri8',   platform: 'TikTok', views: '30.4M', paid: '$1,824', status: 'Paid',      statusClass: 'cl-pill-pos' },
                  { clip: 'Chat goes silent',       clipper: '@bestlacy', platform: 'TikTok', views: '25.7M', paid: '$1,542', status: 'Paid',      statusClass: 'cl-pill-pos' },
                  { clip: 'The 3-second pause',     clipper: '@eclipwze', platform: 'Shorts', views: '17.8M', paid: '$1,068', status: 'Verifying', statusClass: 'cl-pill-warn' },
                ].map(row => (
                  <tr key={row.clip}>
                    <td className="cl-strong">{row.clip}</td>
                    <td>{row.clipper}</td>
                    <td>{row.platform}</td>
                    <td className="cl-num">{row.views}</td>
                    <td className="cl-num">{row.paid}</td>
                    <td>
                      <span className={`cl-pill ${row.statusClass}`}>
                        <span className="cl-dot" />
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
