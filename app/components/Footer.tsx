const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)' }}>
      <div className="max-w-site mx-auto px-8 py-16 grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'var(--brand)', boxShadow: 'var(--shadow-glow)' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span style={{ fontWeight: 700, fontSize: '16px', letterSpacing: '-0.02em', color: 'var(--ink)' }}>
              ClipLaunch
            </span>
          </div>
          <p style={{ fontSize: '14px', lineHeight: '21px', color: 'var(--ink-subtle)', maxWidth: '220px' }}>
            Pay for views. Not promises.
          </p>
          <p style={{ fontSize: '12px', color: 'var(--ink-subtle)' }}>
            © {year} ClipLaunch. All rights reserved.
          </p>
        </div>

        {/* Product */}
        <div className="flex flex-col gap-4">
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink-subtle)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Product
          </span>
          <nav className="flex flex-col gap-3">
            {(['How it works', 'Results', 'Pricing', 'FAQ'] as const).map(label => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(' ', '-')}`}
                className="cl-footer-link"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-4">
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink-subtle)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Company
          </span>
          <nav className="flex flex-col gap-3">
            {(['About', 'Blog', 'Careers', 'Contact'] as const).map(label => (
              <a key={label} href="#contact" className="cl-footer-link">
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4">
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink-subtle)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Legal
          </span>
          <nav className="flex flex-col gap-3">
            {(['Privacy policy', 'Terms of service', 'Cookie policy'] as const).map(label => (
              <a key={label} href="#" className="cl-footer-link">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
