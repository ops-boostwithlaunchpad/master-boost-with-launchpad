'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Footer, ArrowIcon, useScrollReveal } from './layout'

/* ── Word Cycler ── */
function WordCycler() {
  const words = ['everything.', 'intake.', 'follow-up.', 'reporting.', 'billing.', 'retention.']
  const [idx, setIdx] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true)
      setTimeout(() => { setIdx(i => (i + 1) % words.length); setAnimating(false) }, 400)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  return (
    <span className="cycle-wrap">
      <span className={`cycle-word${animating ? ' out' : ''}`}>{words[idx]}</span>
    </span>
  )
}

/* ── Home Page ── */
export default function HomePage() {
  useScrollReveal()

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-main">
          <div className="hero-eyebrow sr">
            <span>Now live</span>
            Launchpad Boost · Launchpad Automation
          </div>
          <h1 className="hero-h">
            <span className="sr d1">We grow your</span><br />
            <span className="sr d2"><em>revenue.</em> Then automate <WordCycler /></span>
          </h1>
          <div className="hero-foot">
            <p className="hero-desc sr d3">Local SEO, Google Ads, and Meta Ads to put you in front of customers — that&apos;s <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Launchpad Boost.</strong> AI agents, CRM, workflow automation, and data management to convert and retain them — that&apos;s <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Launchpad Automation.</strong> One team runs both. One dashboard tracks everything.</p>
            <div className="hero-actions sr d3">
              <div className="hero-btns">
                <Link href="/contact" className="btn btn-dk">Schedule a call <ArrowIcon /></Link>
                <Link href="/results" className="btn btn-ghost">See client results</Link>
              </div>
              <div className="hero-note">Launchpad Boost: SEO + Paid Ads · Launchpad Automation: AI + CRM + Workflows</div>
            </div>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hs sr">
            <div className="hs-n">$<em>180M</em>+</div>
            <div className="hs-l">Combined revenue of<br />companies we serve</div>
          </div>
          <div className="hs sr d1">
            <div className="hs-n"><em>5</em>x+</div>
            <div className="hs-l">Up to return on<br />platform investment</div>
          </div>
          <div className="hs sr d2">
            <div className="hs-n"><em>95</em>%+</div>
            <div className="hs-l">Client retention<br />last 12 months</div>
          </div>
        </div>
      </section>

      {/* INDUSTRY STRIP */}
      <div style={{ padding: '1.2rem 48px', borderBottom: '1px solid var(--s1)', background: 'var(--s0)', display: 'flex', alignItems: 'center', gap: '2.5rem', overflow: 'hidden' }}>
        <span style={{ fontSize: '.46rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--dim)', flexShrink: 0, fontWeight: 500 }}>Industries we serve</span>
        <div style={{ width: '1px', height: '14px', background: 'var(--s2)', flexShrink: 0 }} />
        <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'nowrap', overflow: 'hidden', alignItems: 'center' }}>
          <span style={{ fontSize: '.42rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--org)', fontWeight: 500, whiteSpace: 'nowrap' }}>Boost</span>
          {['Legal', 'Healthcare', 'Real Estate'].map(i => (
            <span key={i} style={{ fontFamily: 'var(--fs)', fontSize: '.85rem', fontStyle: 'italic', color: 'var(--ink)', whiteSpace: 'nowrap', opacity: .5 }}>{i}</span>
          ))}
          <span style={{ width: '1px', height: '14px', background: 'var(--s2)', flexShrink: 0 }} />
          <span style={{ fontSize: '.42rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--org)', fontWeight: 500, whiteSpace: 'nowrap' }}>Automation</span>
          {['Telecom', 'Financial Services', 'Enterprise SaaS'].map(i => (
            <span key={i} style={{ fontFamily: 'var(--fs)', fontSize: '.85rem', fontStyle: 'italic', color: 'var(--ink)', whiteSpace: 'nowrap', opacity: .5 }}>{i}</span>
          ))}
          <span style={{ fontFamily: 'var(--fs)', fontSize: '.85rem', fontStyle: 'italic', color: 'var(--org)', whiteSpace: 'nowrap', opacity: .7 }}>+ more</span>
        </div>
      </div>

      {/* INTRO */}
      <section className="intro">
        <div className="intro-left sr">
          <div className="tag o" style={{ marginBottom: '1.5rem' }}>Why Boost with Launchpad</div>
          <h2 className="intro-h">Two divisions.<br />One <em>outcome.</em></h2>
          <p className="intro-p"><strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Launchpad Boost</strong> drives customers to your door — local SEO, Google Ads, LSA, and Meta Ads, managed end to end. <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Launchpad Automation</strong> makes sure none of them slip through the cracks — AI agents, CRM, automated follow-up, and workflow automation that runs 24/7. Together, they turn marketing spend into closed revenue.</p>
          <Link href="/platform" className="btn btn-dk">See the platform <ArrowIcon /></Link>
        </div>
        <div className="intro-right">
          {[
            { n: '01', t: 'Get found', badge: 'Boost', d: 'Local SEO, Google Ads, LSA, and Meta Ads — managed end to end. We put you in front of customers actively searching for what you do, in English and Spanish. More visibility, more calls, more walk-ins.' },
            { n: '02', t: 'Respond instantly', badge: 'Automation', d: 'AI agents handle lead intake, qualification, and follow-up in seconds — via text, email, and chat. Every missed call gets a text-back. Every lead gets a response before your competitors pick up the phone.' },
            { n: '03', t: 'Close more deals', badge: 'Automation', d: 'Automated SMS and email sequences nurture every lead. Your CRM tracks every conversation from first click to signed contract — pipeline, revenue, and attribution all in one place.' },
            { n: '04', t: 'See what\'s working', badge: 'Both', d: 'One dashboard shows your ad spend, lead flow, close rates, and revenue — all in real time. Marketing and operations data unified so you always know exactly which dollars are driving results.' },
          ].map((p, i) => (
            <div className={`ipoint sr${i > 0 ? ` d${i}` : ''}`} key={p.n}>
              <div className="ipoint-n">{p.n}</div>
              <div>
                <div className="ipoint-t">{p.t} <span style={{ fontSize: '.42rem', color: 'var(--org)', fontWeight: 500, letterSpacing: '.14em', textTransform: 'uppercase', marginLeft: '6px', verticalAlign: 'middle' }}>{p.badge}</span></div>
                <div className="ipoint-d">{p.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORM FEATURES — 2x2 */}
      <section className="platform" id="feat">
        <div className="section-head sr">
          <div className="tag o" style={{ marginBottom: '1rem' }}>The Platform</div>
          <h2>What we <em>do.</em></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid var(--s1)', marginTop: '4rem', background: 'var(--w)' }}>
          {[
            { div: 'Launchpad Boost', t: 'SEO & Paid Media', d: 'Local SEO, AI SEO, Google Ads, LSA, Meta Ads — managed end to end with full attribution. Bilingual campaigns for Spanish-speaking markets.', br: true, bb: true },
            { div: 'Launchpad Automation', t: 'AI Agents & Workflows', d: 'AI-powered intake, lead routing, SMS/email sequences, missed-call text-back, appointment booking — all running autonomously 24/7.', br: false, bb: true },
            { div: 'Launchpad Automation', t: 'CRM & Pipeline Management', d: 'Custom CRM built around your operations. Every lead, conversation, and deal tracked from first touch to closed revenue — across every office, channel, and team member.', br: true, bb: false },
            { div: 'Both Divisions', t: 'Reputation & Reporting', d: 'Automated review generation, monitoring, and response. Real-time dashboards that unify your marketing spend, lead flow, ops data, and revenue in one view.', br: false, bb: false },
          ].map((f, i) => (
            <div key={i} className={`pfeat sr${i > 0 ? ` d${i}` : ''}`} style={{
              borderRight: f.br ? '1px solid var(--s1)' : 'none',
              borderBottom: f.bb ? '1px solid var(--s1)' : 'none',
              padding: '2.8rem 2.5rem'
            }}>
              <div style={{ fontSize: '.44rem', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--org)', marginBottom: '1.2rem', fontWeight: 500 }}>{f.div}</div>
              <div className="pfeat-t">{f.t}</div>
              <div className="pfeat-d">{f.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE OPERATE */}
      <section className="dark">
        <div className="tag sr">How we operate</div>
        <h2 style={{ fontFamily: 'var(--fs)', fontSize: 'clamp(2.5rem,5vw,5.5rem)', fontWeight: 400, letterSpacing: '-.05em', lineHeight: '.88', color: '#fff', margin: '1.5rem 0 5rem' }} className="sr d1">Marketing to drive<br />revenue. Automation to<br /><em style={{ fontStyle: 'italic', color: 'var(--org)' }}>keep it.</em></h2>
        <div className="steps">
          {[
            { n: '01', t: 'Discovery & Audit', d: 'We audit your marketing channels, lead flow, and tech stack. We identify where you\'re losing leads, overpaying for acquisition, and leaving revenue on the table.', b: 'Week 1' },
            { n: '02', t: 'Build Both Layers', d: 'Boost: SEO and ad campaigns go into production. Automation: CRM, AI agents, and workflow automations are custom-built around your operations. Both launch together.', b: 'Week 2–3' },
            { n: '03', t: 'Launch & Optimize', d: 'Ads drive traffic. AI agents catch every lead. CRM tracks every conversation. Your dedicated account team monitors performance daily and optimizes weekly.', b: 'Week 3–4' },
            { n: '04', t: 'Scale & Report', d: 'Monthly performance reviews with your team. We expand what\'s working, cut what isn\'t, and tie every dollar back to pipeline and revenue.', b: 'Ongoing' },
          ].map((s, i) => (
            <div key={i} className={`step sr d${i + 1}`}>
              <div className="step-n">{s.n}</div>
              <div className="step-t">{s.t}</div>
              <div className="step-d">{s.d}</div>
              <div className="step-badge">{s.b}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap', marginTop: '5rem', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,.06)' }}>
          <div style={{ fontFamily: 'var(--fs)', fontSize: 'clamp(1.8rem,3.2vw,3.2rem)', fontWeight: 400, letterSpacing: '-.04em', lineHeight: '.95', color: '#fff' }}>Ready to <em style={{ fontStyle: 'italic', color: 'var(--org)' }}>grow?</em></div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end' }}>
            <Link href="/contact" className="btn btn-org">Schedule a call <ArrowIcon /></Link>
            <div style={{ fontSize: '.58rem', color: 'rgba(255,255,255,.25)', textAlign: 'right', letterSpacing: '.04em' }}>Structured engagements · Dedicated teams · Measurable outcomes</div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
