'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'How is my CPM calculated?',
    a: 'CPM (cost per mille) is the amount you pay per 1,000 verified views across all clips. If you set a $1.00 CPM and your campaign earns 10M views, you pay $10,000. Views are tracked per clip, per platform, and aggregated in real time.',
  },
  {
    q: 'Who are the clippers?',
    a: 'ClipLaunch has 50,000+ verified short-form content creators — people who specialize in cutting and posting clips on TikTok, YouTube Shorts, and Instagram Reels. They apply to campaigns that match their niche and are paid out by us when their clips earn views.',
  },
  {
    q: 'How fast will I see results?',
    a: 'Most campaigns see their first clips posted within 24 hours of launch. By day 3–5, you\'ll have hundreds of clips live across platforms. Views ramp up as the best clips gain traction and are boosted by the platforms\' algorithms.',
  },
  {
    q: 'What content works best?',
    a: 'Long-form content with clear moments — gaming highlights, podcast conversations, commentary, reaction streams, and IRL content. The more raw footage you have, the more angles clippers can cut. Face reveals, announcements, and emotional moments tend to perform especially well.',
  },
  {
    q: 'Can I review clips before they go live?',
    a: 'By default, clippers post directly. If you need a review step — for brand safety, sponsorship guidelines, or sensitive content — we can enable an approval queue for your campaign. Reach out when you apply and we\'ll set it up.',
  },
  {
    q: 'What if I want to pause or stop my campaign?',
    a: 'You can pause or stop your campaign at any time from the dashboard. Clippers stop receiving new assignments immediately, and any views earned up to that point are settled normally. You\'re never locked in.',
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
        {/* Header */}
        <div className="mb-12">
          <p className="cl-section-label">FAQ</p>
          <h2 className="cl-section-title">Common questions</h2>
          <p className="cl-section-sub">
            Still have questions?{' '}
            <a href="#contact" style={{ color: 'var(--brand-bright)' }}>
              Reach out and we'll get back to you same day.
            </a>
          </p>
        </div>

        {/* Accordion */}
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
