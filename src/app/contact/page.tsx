'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Footer, ArrowIcon, useScrollReveal } from '../layout'

declare global {
  interface Window { Calendly?: { initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void } }
}

export default function ContactPage() {
  useScrollReveal()
  const calRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_CALENDLY_URL
    if (!url) return

    function init() {
      if (window.Calendly && calRef.current) {
        calRef.current.innerHTML = ''
        window.Calendly.initInlineWidget({ url: url!, parentElement: calRef.current! })
      }
    }

    if (window.Calendly) {
      init()
    } else {
      const css = document.createElement('link')
      css.rel = 'stylesheet'
      css.href = 'https://assets.calendly.com/assets/external/widget.css'
      document.head.appendChild(css)

      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.onload = init
      document.body.appendChild(script)
    }
  }, [])

  return (
    <>
      {/* Hero */}
      <div className="chero" style={{ paddingBottom: '3rem' }}>
        <div className="tag o sr" style={{ marginBottom: '1.5rem' }}>Get in touch</div>
        <h1 className="chero-h sr d1">Let&apos;s talk about<br />your <em>growth.</em></h1>
        <p className="chero-p sr d2">30 minutes. No pitch deck, no pressure. Just a conversation about where you are, where you want to be, and whether we&apos;re the right fit to get you there.</p>
      </div>

      {/* Main split */}
      <div style={{ display: 'grid', gridTemplateColumns: '.42fr .58fr', borderTop: '1px solid var(--s1)' }}>
        {/* Left column */}
        <div style={{ padding: '4rem 48px', borderRight: '1px solid var(--s1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: 'var(--fs)', fontSize: 'clamp(1.5rem,2.5vw,2.2rem)', fontWeight: 400, fontStyle: 'italic', letterSpacing: '-.03em', color: 'var(--ink)', lineHeight: 1.1, marginBottom: '2.5rem' }} className="sr">What to expect.</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { n: '01', t: 'Discovery', d: 'We\'ll ask about your current stack, where leads are leaking, and what growth looks like for you.' },
                { n: '02', t: 'Fit Assessment', d: 'We\'ll be honest about whether Launchpad is the right solution. If it\'s not, we\'ll tell you.' },
                { n: '03', t: 'Next Steps', d: 'If there\'s a fit, we\'ll outline a custom scope, timeline, and pricing — no generic proposals.' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '1.4rem 0', borderBottom: '1px solid var(--s1)', display: 'grid', gridTemplateColumns: '32px 1fr', gap: '1rem', alignItems: 'start' }} className={`sr${i > 0 ? ` d${i}` : ''}`}>
                  <div style={{ fontFamily: 'var(--fs)', fontSize: '.65rem', fontWeight: 400, color: 'var(--dim)', fontStyle: 'italic', paddingTop: '1px' }}>{item.n}</div>
                  <div>
                    <div style={{ fontSize: '.7rem', fontWeight: 500, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.35rem' }}>{item.t}</div>
                    <div style={{ fontSize: '.64rem', color: 'var(--mid)', lineHeight: 1.75 }}>{item.d}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust signals */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, marginTop: '2.5rem', border: '1px solid var(--s1)' }} className="sr d3">
              {[
                { v: '< 24h', l: 'Response time' },
                { v: '95%+', l: 'Client retention' },
                { v: '14', l: 'Industries served' },
                { v: '2–4 wk', l: 'Avg. time to launch' },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: '1.2rem 1.4rem',
                  borderRight: i % 2 === 0 ? '1px solid var(--s1)' : 'none',
                  borderTop: i >= 2 ? '1px solid var(--s1)' : 'none'
                }}>
                  <div style={{ fontFamily: 'var(--fs)', fontSize: '1.6rem', fontWeight: 400, color: 'var(--org)', letterSpacing: '-.04em', lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontSize: '.48rem', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '.08em', marginTop: '.3rem' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact details */}
          <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--s1)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <div style={{ fontSize: '.46rem', fontWeight: 500, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--org)', marginBottom: '.3rem' }}>Location</div>
                <div style={{ fontSize: '.72rem', color: 'var(--ink)' }}>Palm Beach Gardens, FL</div>
              </div>
              <div>
                <div style={{ fontSize: '.46rem', fontWeight: 500, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--org)', marginBottom: '.3rem' }}>Hours</div>
                <div style={{ fontSize: '.72rem', color: 'var(--ink)' }}>Mon – Fri, 9am – 6pm EST</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Calendly */}
        <div style={{ background: 'var(--s0)', position: 'relative', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '2.5rem 3rem 1.5rem' }}>
            <div style={{ fontFamily: 'var(--fs)', fontSize: '1.3rem', fontWeight: 400, fontStyle: 'italic', color: 'var(--ink)', marginBottom: '.3rem' }}>Pick a time.</div>
            <div style={{ fontSize: '.62rem', color: 'var(--dim)', lineHeight: 1.7 }}>45 minutes, no obligation. We&apos;ll confirm via email.</div>
          </div>
          <div ref={calRef} style={{ flex: 1, minHeight: '900px', margin: '0 1.5rem 1.5rem', background: 'var(--w)' }} />
        </div>
      </div>

      {/* Already a client bar */}
      <div style={{ padding: '1.8rem 48px', background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ fontSize: '.62rem', color: 'rgba(255,255,255,.4)' }}>Already a client?</div>
          <a href="https://portal.boostwithlaunchpad.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '.58rem', color: 'var(--org)', textDecoration: 'none', fontWeight: 500, letterSpacing: '.04em', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>Go to Portal <ArrowIcon /></a>
        </div>
        <div style={{ fontSize: '.5rem', color: 'rgba(255,255,255,.2)', letterSpacing: '.04em' }}>Structured engagements · Dedicated teams · Measurable outcomes</div>
      </div>

      <Footer />

    </>
  )
}
