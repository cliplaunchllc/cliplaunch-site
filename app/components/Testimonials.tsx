const quotes = [
  {
    name: 'Tensz',
    role: 'ClipLaunch Clipper',
    quote: 'I got to learn the basics easily here at ClipLaunch. The steps were clearly understandable especially for a beginner.',
  },
  {
    name: 'Abhay',
    role: 'ClipLaunch Clipper',
    quote: "It's just FIRE!! ClipLaunch's challenges and campaigns are too good because they have higher CPM and videos go viral.",
  },
  {
    name: 'arshiamosavi',
    role: 'ClipLaunch Clipper',
    quote: "I've been clipping for a while and I have to say that this campaign is legittt.",
  },
  {
    name: 'Divyy',
    role: 'ClipLaunch Clipper',
    quote: 'Joining the ClipLaunch Whop completely changes the game. Before, clipping felt lonely, but you find your crew here.',
  },
  {
    name: 'Donn Stephy',
    role: 'ClipLaunch Clipper',
    quote: 'This campaign makes consistency feel rewarding. It genuinely keeps me motivated to create and makes every post feel like it has purpose.',
  },
  {
    name: 'nullhooks',
    role: 'ClipLaunch Clipper',
    quote: "It's so good that I don't even know what to say anymore.",
  },
]

const videoCreators = ['Woody & Kleiny', 'ChainsFR', 'OGLightskins', 'AntCEO', 'DamnBruh']

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-20"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="cl-section">
        <div className="mb-16">
          <p className="cl-section-label">Testimonials</p>
          <h2 className="cl-section-title">
            Clippers love it.<br />
            <span style={{ color: 'var(--ink-muted)', fontWeight: 600 }}>Clients love the results.</span>
          </h2>
          <p className="cl-section-sub">
            5/5 stars on Whop from thousands of verified clippers in our network.
          </p>
        </div>

        {/* Featured video creators */}
        <div
          className="cl-card mb-6 flex flex-col gap-4"
          style={{ background: 'var(--surface)' }}
        >
          <div className="flex items-center gap-3">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'var(--brand-soft)', color: 'var(--brand-bright)' }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M11 6l4-2v8l-4-2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </span>
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>Video testimonials</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {videoCreators.map(name => (
              <span key={name} className="cl-pill">
                {name}
              </span>
            ))}
          </div>
          <p style={{ fontSize: '13px', color: 'var(--ink-subtle)' }}>
            Video testimonials available — reach out or book a call to see them.
          </p>
        </div>

        {/* Quote grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {quotes.map((t) => (
            <div key={t.name} className="cl-card flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="var(--brand-bright)">
                    <path d="M7 1l1.5 4H13l-3.5 2.5L11 12 7 9.5 3 12l1.5-4.5L1 5h4.5z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--ink-muted)', flex: 1 }}>
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto pt-4" style={{ borderTop: '1px solid var(--line)' }}>
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{ background: 'var(--brand-soft)', color: 'var(--brand-bright)' }}
                >
                  {t.name[0].toUpperCase()}
                </span>
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>{t.name}</p>
                  <p style={{ fontSize: '12px', color: 'var(--ink-subtle)' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
