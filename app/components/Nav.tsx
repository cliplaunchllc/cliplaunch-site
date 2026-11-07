'use client'

import { useState } from 'react'
import Link from 'next/link'

const links = [
  { label: 'Home',         href: '/' },
  { label: 'Case studies', href: '#results' },
  { label: 'FAQ',          href: '#faq' },
  { label: 'Contact',      href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(14,16,19,0.85)',
        borderBottom: '1px solid var(--line)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div className="max-w-site mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold text-lg no-underline"
          style={{ letterSpacing: '-0.02em', color: 'var(--ink)' }}
        >
          <span
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: 'var(--brand)', boxShadow: 'var(--shadow-glow)' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          ClipLaunch
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="cl-nav-link px-4 h-9 flex items-center rounded-full text-sm font-medium"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a href="#contact" className="cl-btn cl-btn-ghost cl-btn-sm hidden md:inline-flex">
            Become a clipper
          </a>
          <a href="#contact" className="cl-btn cl-btn-primary cl-btn-sm hidden md:inline-flex">
            Book a call
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: 'var(--ink-muted)', background: 'transparent', border: 'none', cursor: 'pointer' }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {open ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
              ) : (
                <>
                  <line x1="3" y1="6"  x2="17" y2="6"  stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                  <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                  <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-1"
          style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}
        >
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="h-11 flex items-center rounded-xl px-3 text-sm font-medium cl-nav-link"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-2">
            <a href="#contact" className="cl-btn cl-btn-ghost justify-center" onClick={() => setOpen(false)}>
              Become a clipper
            </a>
            <a href="#contact" className="cl-btn cl-btn-primary justify-center" onClick={() => setOpen(false)}>
              Book a call
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
