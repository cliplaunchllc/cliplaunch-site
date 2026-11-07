'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'How long does it take to get my clipping system running?',
    a: 'Pay-per-view campaigns are typically live within 48 hours of launching. Dedicated content teams require a bit more time for recruitement and vetting, but offer guaranteed daily output and much greater creative control over your content.',
  },
  {
    q: 'How does the process work?',
    a: 'You submit your content — a VOD, YouTube link, or clip URL. We set up your campaign, brief the clippers, and they start posting clips across TikTok, YouTube Shorts, and Instagram Reels. You get a live dashboard showing every clip, every view, and every dollar in real time.',
  },
  {
    q: 'What are clip approvals?',
    a: 'By default, clippers post directly to maximise speed and volume. If you need a review step — for brand safety, sponsorship guidelines, or sensitive content — we can enable an approval queue where our team or you review clips before they go live.',
  },
  {
    q: 'How much does it cost?',
    a: 'It depends on the model. Public network and private campaigns are CPM-based — you set your rate and a budget cap, and pay only for real views. Dedicated content teams are priced on a flat monthly rate based on the number of clippers, pages, and clip volume. Book a call and we\'ll build a custom quote.',
  },
  {
    q: 'What results can I expect?',
    a: 'Results vary by content type and niche. One client generated 245M views at $0.06 CPM over a single campaign. Most campaigns see their first clips within 24 hours and ramp up significantly by day 3–5 as top-performing clips gain algorithm traction.',
  },
  {
    q: 'What niches do you work with?',
    a: 'All of them. Gaming, esports, podcasts, IRL/lifestyle, sports, fitness, entertainment, commentary, and brands. If your content exists on video, we can clip it.',
  },
  {
    q: 'Are the views authentic?',
    a: 'Yes. Every view is earned organically through clips posted by real clippers on real accounts. Our team manually reviews analytics submissions — we don\'t accept inflated or fake view counts. You\'re paying for genuine platform views.',
  },
  {
    q: 'How do clippers actually convert?',
    a: 'Clippers find your campaign on our platform, create short-form clips from your content, and post them on their own TikTok, Shorts, and Reels accounts. Views on those clips are tracked and attributed to your campaign. When a clip earns views, the clipper gets paid out from your budget.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="scroll-mt-20"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="cl-section">
        <div className="mb-12">
          <p className="cl-section-label">FAQ</p>
          <h2 className="cl-section-title">Common questions</h2>
          <p className="cl-section-sub">
            Still have questions?{' '}
            <a href="#contact" style={{ color: 'var(--brand-bright)' }}>
              Book a call and we'll answer everything.
            </a>
          </p>
        </div>

        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: '1px solid var(--line)', background: 'var(--surface-raised)' }}
        >
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                style={{ borderBottom: i < faqs.length - 1 ? '1px solid var(--line)' : 'none' }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                  style={{
                    padding: '20px 24px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--ink)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '15px',
                    fontWeight: 600,
                  }}
                >
                  <span>{item.q}</span>
                  <span
                    className="flex-shrink-0"
                    style={{
                      color: 'var(--ink-subtle)',
                      transition: 'transform 0.2s',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      display: 'flex',
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 4v10M4 9h10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 24px 20px' }}>
                    <p style={{ fontSize: '15px', lineHeight: '23px', color: 'var(--ink-muted)' }}>
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
