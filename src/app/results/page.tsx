'use client'

import Link from 'next/link'
import { Footer, ArrowIcon, useScrollReveal } from '../layout'

export default function ResultsPage() {
  useScrollReveal()

  return (
    <>
      {/* Hero */}
      <div style={{ padding: '9rem 48px 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ fontSize: '.58rem', fontWeight: 500, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--org)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }} className="sr">
          <span style={{ width: '32px', height: '1px', background: 'var(--org)', display: 'inline-block' }} />Results
        </div>
        <h1 style={{ fontFamily: 'var(--fs)', fontSize: 'clamp(3.5rem,8vw,8rem)', fontWeight: 400, letterSpacing: '-.05em', lineHeight: '.87', color: 'var(--ink)', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }} className="sr d1">Real results from<br />real <em style={{ fontStyle: 'italic', color: 'var(--org)' }}>clients.</em></h1>
        <p style={{ fontSize: '.88rem', color: 'var(--mid)', lineHeight: 1.85, maxWidth: '520px', position: 'relative', zIndex: 1 }} className="sr d2">Case studies and performance data from businesses we&apos;ve worked with across legal, healthcare, and telecom. Every metric comes from a real engagement — with timeframes, context, and the work behind it.</p>
        <div className="sr d3" style={{ marginTop: '2rem' }}>
          <Link href="/contact" className="btn btn-dk">Start your growth story <ArrowIcon /></Link>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid var(--s1)', borderBottom: '1px solid var(--s1)' }}>
        {[
          { n: '$180M+', l: 'Combined revenue of\ncompanies we serve' },
          { n: '5x+', l: 'Up to return on\nplatform investment' },
          { n: '67%', l: 'Average CPA\nreduction' },
          { n: '95%+', l: 'Client retention\nrate' },
        ].map((s, i) => (
          <div key={i} style={{ padding: '3.5rem 2rem', textAlign: 'center', position: 'relative' }} className="sr">
            <div style={{ fontFamily: 'var(--fs)', fontSize: 'clamp(2.4rem,3.5vw,3.6rem)', fontWeight: 400, letterSpacing: '-.04em', color: 'var(--ink)', lineHeight: 1, marginBottom: '8px' }}><em style={{ fontStyle: 'italic', color: 'var(--org)' }}>{s.n}</em></div>
            <div style={{ fontSize: '.54rem', color: 'var(--dim)', letterSpacing: '.08em', textTransform: 'uppercase', lineHeight: 1.65, whiteSpace: 'pre-line' }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Featured Case Study */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '520px' }}>
        <div style={{ background: 'var(--ink)', padding: '5rem 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
          <div>
            <div style={{ fontSize: '.5rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--org)', marginBottom: '.8rem', fontWeight: 500 }}>Legal · Personal Injury</div>
            <div style={{ fontFamily: 'var(--fs)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 400, fontStyle: 'italic', color: '#fff', lineHeight: 1, marginBottom: '2.5rem' }}>Dream Team Accident Attorneys</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {[
              { v: '340%', l: 'Increase in\nqualified leads' },
              { v: '67%', l: 'Reduction\nin CPA' },
              { v: '< 30s', l: 'Average lead\nresponse time' },
              { v: '4.9★', l: 'Google rating\n(140+ reviews)' },
            ].map((m, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--fs)', fontSize: 'clamp(2rem,3vw,3rem)', fontWeight: 400, color: 'var(--org)', letterSpacing: '-.04em', lineHeight: 1 }}>{m.v}</div>
                <div style={{ fontSize: '.52rem', color: 'rgba(255,255,255,.3)', textTransform: 'uppercase', letterSpacing: '.08em', marginTop: '6px', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{m.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: '5rem 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderBottom: '1px solid var(--s1)' }}>
          <div style={{ fontSize: '.5rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '12px', height: '1px', background: 'var(--s3)', display: 'inline-block' }} />The Challenge
          </div>
          <p style={{ fontSize: '.78rem', color: 'var(--mid)', lineHeight: 1.9, marginBottom: '2rem' }}>A multi-location personal injury firm in South Florida was spending $18K/month on Google Ads with no call tracking, no CRM, and no automated follow-up. They were losing 60%+ of leads to slow response times and had zero visibility into which campaigns were driving actual cases.</p>
          <div style={{ borderLeft: '2px solid var(--org)', paddingLeft: '1.5rem', marginTop: '2rem' }}>
            <p style={{ fontFamily: 'var(--fs)', fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.6, marginBottom: '.8rem' }}>&ldquo;Launchpad didn&apos;t just fix our marketing — they rebuilt how we operate. We close more cases with less spend.&rdquo;</p>
            <div style={{ fontSize: '.58rem', fontWeight: 500, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '.06em' }}>Managing Partner, Dream Team Accident Attorneys</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-band">
        <div className="cta-band-h">Ready to see results<br />like <em>these?</em></div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
          <Link href="/contact" className="btn btn-dk" style={{ background: '#fff', color: 'var(--ink)' }}>Schedule a call <ArrowIcon /></Link>
          <div style={{ fontSize: '.58rem', color: 'rgba(255,255,255,.5)', textAlign: 'right' }}>30 minutes. No pitch deck.</div>
        </div>
      </div>

      <Footer />
    </>
  )
}
