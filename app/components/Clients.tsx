const clients = [
  'Justin Jesso', 'Noah Danenhower', 'Sidequest Drew', 'Stella', 'Stephen Sharer',
  'Whileresume', 'Woody & Kleiny', 'OGLightskins', 'Predecessor', 'Rizz App',
  'Royalty Family', 'Kason Grainger', 'Mischief AI', 'NappStar NYC', 'Claude VonStoke',
  'Nicole Arbour', 'Alex Schor', 'Arik Armstead', 'Baby Spice', 'Bluffs',
  'ChainsFR', 'Crispy Concords', 'DamnBruh',
]

export default function Clients() {
  return (
    <section style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', overflow: 'hidden' }}>
      <div
        className="py-5"
        style={{ background: 'var(--surface)' }}
      >
        {/* Label */}
        <p
          className="text-center mb-4"
          style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-subtle)' }}
        >
          Trusted by the best creators and brands
        </p>

        {/* Marquee */}
        <div className="relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <div className="cl-marquee">
            <div className="cl-marquee-track">
              {[...clients, ...clients].map((name, i) => (
                <span key={i} className="cl-marquee-item">
                  <span className="cl-dot" style={{ background: 'var(--brand)', marginRight: '12px' }} />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
