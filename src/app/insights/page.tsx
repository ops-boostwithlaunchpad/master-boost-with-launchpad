'use client'

import Link from 'next/link'
import { Footer, ArrowIcon, useScrollReveal } from '../layout'

const articles = [
  { cat: 'Strategy', title: 'Why Law Firms Are Replacing Intake Teams with AI Agents', desc: 'The average personal injury firm loses 62% of leads because follow-up takes too long. We break down how AI intake automation changes the math — and the three metrics that matter most.', time: '8 min read' },
  { cat: 'Operations', title: 'The Real Cost of Slow Lead Response (And How to Fix It in 48 Hours)', desc: 'Harvard Business Review found that companies responding within 5 minutes are 100x more likely to connect. Most companies average 47 hours. Here\'s the playbook we use to get clients under 60 seconds.', time: '6 min read' },
  { cat: 'SEO', title: 'Bilingual SEO: The Untapped Channel for South Florida Markets', desc: '68% of Miami-Dade searches happen in Spanish. If your SEO strategy is English-only, you\'re invisible to more than half your market. Here\'s how we build bilingual campaigns that rank in both.', time: '7 min read' },
  { cat: 'Automation', title: 'From 5 Tools to 1: What Happens When You Consolidate Your Stack', desc: 'A $42M law firm was spending $14K/month across four vendors with zero unified reporting. We replaced the entire stack and cut operational overhead by 60% in 90 days.', time: '10 min read' },
  { cat: 'Healthcare', title: 'AI Patient Intake: How We Cut CPA by 67% for a Multi-Location Practice', desc: 'Manual intake is costing healthcare groups thousands in lost patients. We walk through the exact automation workflow that tripled new patient volume at a $28M ortho practice.', time: '9 min read' },
  { cat: 'Enterprise', title: 'Building an AI-First Sales Pipeline: Lessons from a $120M Telecom Deployment', desc: 'When a national carrier asked us to automate 94% of their ops workflows, we learned what works at scale — and what breaks. Here\'s the framework.', time: '12 min read' },
]

export default function InsightsPage() {
  useScrollReveal()

  return (
    <>
      <div className="chero">
        <div className="tag o sr" style={{ marginBottom: '1.5rem' }}>Insights</div>
        <h1 className="chero-h sr d1">Insights &<br /><em>playbooks.</em></h1>
        <p className="chero-p sr d2">Guides, case breakdowns, and the thinking behind how we use SEO, paid ads, and AI automation to grow businesses. Written by the team that builds it.</p>
      </div>

      <div style={{ borderTop: '1px solid var(--s1)', padding: '5rem 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1px', background: 'var(--s1)' }}>
          {articles.map((a, i) => (
            <div key={i} className={`sr${i > 0 ? ` d${Math.min(i, 3)}` : ''}`} style={{ background: 'var(--w)', padding: '2.5rem' }}>
              <div style={{ fontSize: '.44rem', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--org)', fontWeight: 500, marginBottom: '1.5rem' }}>{a.cat}</div>
              <h3 style={{ fontFamily: 'var(--fs)', fontSize: '1.3rem', fontWeight: 400, fontStyle: 'italic', letterSpacing: '-.03em', color: 'var(--ink)', lineHeight: 1.2, marginBottom: '1rem' }}>{a.title}</h3>
              <p style={{ fontSize: '.66rem', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '1.5rem' }}>{a.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '.5rem', color: 'var(--dim)', letterSpacing: '.06em' }}>{a.time}</span>
                <span style={{ fontSize: '.5rem', color: 'var(--org)', letterSpacing: '.06em', fontWeight: 500, cursor: 'pointer' }}>Coming soon →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '5rem 48px', background: 'var(--s0)', borderTop: '1px solid var(--s1)', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--fs)', fontSize: 'clamp(1.5rem,3vw,2.5rem)', fontWeight: 400, fontStyle: 'italic', color: 'var(--ink)', letterSpacing: '-.03em', marginBottom: '1rem' }} className="sr">More articles are on the way.</div>
        <p style={{ fontSize: '.72rem', color: 'var(--mid)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '460px', marginLeft: 'auto', marginRight: 'auto' }} className="sr d1">We publish deep dives on growth strategy, automation, and the operational playbooks behind our client work.</p>
        <Link href="/contact" className="btn btn-dk sr d2">Schedule a call <ArrowIcon /></Link>
      </div>

      <Footer />
    </>
  )
}
