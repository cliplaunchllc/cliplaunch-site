'use client'

import { useState, FormEvent } from 'react'

type FormState = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactCTA() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: '',
    budget: '',
    message: '',
  })

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setState('sending')
    // Wire up to your preferred form handler (Resend, Formspree, etc.)
    // For now, simulate a brief delay then succeed
    await new Promise(r => setTimeout(r, 1000))
    setState('sent')
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="cl-section">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-16 items-start">
          {/* Left: copy */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="cl-section-label">Get started</p>
              <h2 className="cl-section-title">
                Ready to launch<br />
                your <span style={{ color: 'var(--brand-bright)' }}>campaign?</span>
              </h2>
              <p className="cl-section-sub">
                Tell us about your content and goals. We'll review your submission
                and get back to you within one business day.
              </p>
            </div>

            {/* Trust points */}
            <div className="flex flex-col gap-4">
              {[
                { icon: '→', text: 'Most campaigns launch within 48 hours' },
                { icon: '→', text: 'Minimum $500 budget cap to get started' },
                { icon: '→', text: 'No monthly fees or agency retainers' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <span style={{ color: 'var(--brand-bright)', fontWeight: 700, fontSize: '14px' }}>
                    {icon}
                  </span>
                  <span style={{ fontSize: '14px', color: 'var(--ink-muted)' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="cl-card">
            {state === 'sent' ? (
              <div className="flex flex-col items-center text-center gap-4 py-8">
                <span
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(61,214,140,0.12)', color: 'var(--positive)' }}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M4 11l5 5 9-9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ink)' }}>
                  Message sent
                </h3>
                <p style={{ color: 'var(--ink-muted)', fontSize: '15px' }}>
                  We'll review your submission and get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name + Email */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      style={{ fontSize: '13px', fontWeight: 500, color: 'var(--ink-subtle)' }}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      style={{
                        height: '40px',
                        padding: '0 12px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--line-strong)',
                        background: 'var(--bg)',
                        color: 'var(--ink)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '14px',
                        outline: 'none',
                        width: '100%',
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      style={{ fontSize: '13px', fontWeight: 500, color: 'var(--ink-subtle)' }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      style={{
                        height: '40px',
                        padding: '0 12px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--line-strong)',
                        background: 'var(--bg)',
                        color: 'var(--ink)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '14px',
                        outline: 'none',
                        width: '100%',
                      }}
                    />
                  </div>
                </div>

                {/* Content type */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="type"
                    style={{ fontSize: '13px', fontWeight: 500, color: 'var(--ink-subtle)' }}
                  >
                    Content type
                  </label>
                  <select
                    id="type"
                    required
                    value={form.type}
                    onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                    style={{
                      height: '40px',
                      padding: '0 12px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--line-strong)',
                      background: 'var(--bg)',
                      color: form.type ? 'var(--ink)' : 'var(--ink-subtle)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      outline: 'none',
                      width: '100%',
                      appearance: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="" disabled>Select a category…</option>
                    <option value="gaming">Gaming / Esports</option>
                    <option value="podcast">Podcast / Talk show</option>
                    <option value="irl">IRL / Lifestyle</option>
                    <option value="sports">Sports / Fitness</option>
                    <option value="entertainment">Entertainment / Commentary</option>
                    <option value="brand">Brand / Product</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="budget"
                    style={{ fontSize: '13px', fontWeight: 500, color: 'var(--ink-subtle)' }}
                  >
                    Budget range
                  </label>
                  <select
                    id="budget"
                    required
                    value={form.budget}
                    onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
                    style={{
                      height: '40px',
                      padding: '0 12px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--line-strong)',
                      background: 'var(--bg)',
                      color: form.budget ? 'var(--ink)' : 'var(--ink-subtle)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      outline: 'none',
                      width: '100%',
                      appearance: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="" disabled>Select a range…</option>
                    <option value="500-1000">$500 – $1,000</option>
                    <option value="1000-5000">$1,000 – $5,000</option>
                    <option value="5000-20000">$5,000 – $20,000</option>
                    <option value="20000+">$20,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    style={{ fontSize: '13px', fontWeight: 500, color: 'var(--ink-subtle)' }}
                  >
                    Tell us about your content
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="What's the content? Who's the audience? Any specific goals for the campaign?"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--line-strong)',
                      background: 'var(--bg)',
                      color: 'var(--ink)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      lineHeight: '21px',
                      outline: 'none',
                      width: '100%',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state === 'sending'}
                  className="cl-btn cl-btn-primary"
                  style={{ width: '100%', justifyContent: 'center', opacity: state === 'sending' ? 0.7 : 1 }}
                >
                  {state === 'sending' ? 'Sending…' : 'Submit campaign request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
