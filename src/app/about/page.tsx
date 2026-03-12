'use client'

import Link from 'next/link'
import { Footer, ArrowIcon, useScrollReveal } from '../layout'

export default function AboutPage() {
  useScrollReveal()

  return (
    <>
      <div className="chero">
        <div className="tag o sr" style={{ marginBottom: '1.5rem' }}>About</div>
        <h1 className="chero-h sr d1">Built for businesses<br />that want to <em>grow.</em></h1>
        <p className="chero-p sr d2">We&apos;re a team of marketers, engineers, and operators who believe growth shouldn&apos;t require ten vendors and a six-month timeline. Launchpad combines marketing and automation into one platform, one team, and one outcome: more revenue.</p>
      </div>

      {/* Mission */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid var(--s1)', borderBottom: '1px solid var(--s1)' }}>
        <div style={{ padding: '5rem 48px', borderRight: '1px solid var(--s1)' }}>
          <div className="tag o sr" style={{ marginBottom: '1.2rem' }}>Our Mission</div>
          <h2 style={{ fontFamily: 'var(--fs)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 400, letterSpacing: '-.04em', lineHeight: '.95', color: 'var(--ink)', marginBottom: '1.5rem' }} className="sr d1">Make growth<br /><em style={{ fontStyle: 'italic', color: 'var(--org)' }}>simple.</em></h2>
          <p style={{ fontSize: '.78rem', color: 'var(--mid)', lineHeight: 1.9 }} className="sr d2">Most businesses don&apos;t need more tools. They need fewer tools that actually work together. We build that — a single platform where marketing drives leads and automation converts them, with full visibility from first click to closed deal.</p>
        </div>
        <div style={{ padding: '5rem 48px' }}>
          <div className="tag o sr" style={{ marginBottom: '1.2rem' }}>How We&apos;re Different</div>
          <h2 style={{ fontFamily: 'var(--fs)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 400, letterSpacing: '-.04em', lineHeight: '.95', color: 'var(--ink)', marginBottom: '1.5rem' }} className="sr d1">Two divisions.<br />One <em style={{ fontStyle: 'italic', color: 'var(--org)' }}>team.</em></h2>
          <p style={{ fontSize: '.78rem', color: 'var(--mid)', lineHeight: 1.9 }} className="sr d2">Launchpad Boost handles all marketing: SEO, Google Ads, LSA, Meta Ads, and reputation management. Launchpad Automation handles all operations: AI agents, CRM, workflow automation, and data management. Your dedicated account team manages both — no handoffs, no gaps.</p>
        </div>
      </div>

      {/* By the Numbers */}
      <div style={{ padding: '5rem 48px', borderBottom: '1px solid var(--s1)' }}>
        <div className="tag o sr" style={{ marginBottom: '1.5rem' }}>By the numbers</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0, marginTop: '2rem' }}>
          {[
            { v: '$180M+', l: 'Client revenue served' },
            { v: '14+', l: 'Industries' },
            { v: '95%+', l: 'Client retention' },
            { v: '5x+', l: 'Average ROI' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '2.5rem 0', borderRight: i < 3 ? '1px solid var(--s1)' : 'none', paddingLeft: i > 0 ? '2rem' : 0 }} className={`sr d${i + 1}`}>
              <div style={{ fontFamily: 'var(--fs)', fontSize: 'clamp(2rem,3vw,3rem)', fontWeight: 400, letterSpacing: '-.04em', color: 'var(--ink)', lineHeight: 1, marginBottom: '.5rem' }}><em style={{ fontStyle: 'italic', color: 'var(--org)' }}>{s.v}</em></div>
              <div style={{ fontSize: '.56rem', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '.08em' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div style={{ padding: '5rem 48px', borderBottom: '1px solid var(--s1)' }}>
        <div className="tag o sr" style={{ marginBottom: '1.5rem' }}>What We Value</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderTop: '1px solid var(--s1)', marginTop: '2rem' }}>
          {[
            { t: 'Outcomes over outputs', d: 'We measure success in revenue and closed deals — not reports, impressions, or vanity metrics.' },
            { t: 'Speed to value', d: 'Most clients are live within 2–4 weeks. We build fast, launch fast, and optimize in real time.' },
            { t: 'Radical transparency', d: 'Every dollar, every lead, every conversion — tracked and reported in real time. No black boxes.' },
            { t: 'Operator mindset', d: 'We think like business operators, not agency people. We care about your P&L as much as your CTR.' },
          ].map((v, i) => (
            <div key={i} style={{
              padding: '2.5rem 0',
              borderBottom: i < 2 ? '1px solid var(--s1)' : 'none',
              borderRight: i % 2 === 0 ? '1px solid var(--s1)' : 'none',
              paddingRight: i % 2 === 0 ? '3rem' : 0,
              paddingLeft: i % 2 === 1 ? '3rem' : 0,
            }} className={`sr d${i + 1}`}>
              <div style={{ fontSize: '.72rem', fontWeight: 500, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.6rem' }}>{v.t}</div>
              <div style={{ fontSize: '.68rem', color: 'var(--mid)', lineHeight: 1.8 }}>{v.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-band">
        <div className="cta-band-h">Let&apos;s talk about<br />your <em>growth.</em></div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
          <Link href="/contact" className="btn btn-dk" style={{ background: '#fff', color: 'var(--ink)' }}>Schedule a call <ArrowIcon /></Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
