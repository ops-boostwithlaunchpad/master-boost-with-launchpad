'use client'

import Link from 'next/link'
import { Footer, ArrowIcon, useScrollReveal } from '../layout'

export default function PlatformPage() {
  useScrollReveal()

  return (
    <>
      <div className="chero" style={{ paddingBottom: '4rem' }}>
        <div className="tag o sr" style={{ marginBottom: '1.5rem' }}>The Platform</div>
        <h1 className="chero-h sr d1">Boost grows your<br />topline. Automation<br />runs the <em>backend.</em></h1>
        <p className="chero-p sr d2">Launchpad Boost handles SEO, Google Ads, LSA, and Meta Ads to drive customers to you. Launchpad Automation handles AI agents, CRM, data management, and workflow automation so every lead is captured, qualified, followed up, and closed — without manual work.</p>
        <div className="sr d3" style={{ marginTop: '1.5rem' }}>
          <Link href="/contact" className="btn btn-dk">Schedule a call <ArrowIcon /></Link>
        </div>
      </div>

      {/* Dashboard Bento */}
      <section className="bento-section-dark sr">
        <div className="bento-hdr">
          <div className="tag" style={{ color: 'rgba(255,255,255,.22)', marginBottom: '1rem' }}>Launchpad Boost — Dashboard Preview</div>
          <h2 style={{ fontFamily: 'var(--fs)', fontSize: 'clamp(2rem,4vw,4rem)', fontWeight: 400, letterSpacing: '-.04em', lineHeight: '.9', color: '#fff' }}>See your SEO & ads<br />performance. <em style={{ fontStyle: 'italic', color: 'var(--org)' }}>One view.</em></h2>
        </div>
        <div className="bento-grid-dark">
          <div className="bc bc-tall">
            <div className="bc-label">Keyword Rankings — Illustrative</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: '.5rem' }}>
              {[
                { pos: '1', kw: 'personal injury lawyer miami', change: '▲ 4', up: true },
                { pos: '2', kw: 'accident attorney hialeah', change: '▲ 7', up: true },
                { pos: '3', kw: 'car accident lawyer near me', change: '▼ 1', up: false },
                { pos: '5', kw: 'abogado de accidentes', change: '▲ 12', up: true },
                { pos: '4', kw: 'slip and fall attorney fl', change: '—', up: false },
              ].map((r, i) => (
                <div key={i} className="rr">
                  <div className="rr-pos">{r.pos}</div>
                  <div className="rr-kw">{r.kw}</div>
                  <div className={r.change.includes('▲') ? 'rr-up' : r.change.includes('▼') ? 'rr-dn' : 'rr-nc'}>{r.change}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bc bc-wide">
            <div className="bc-label">Lead Funnel — This Month</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', padding: '.5rem 0', marginTop: '.5rem' }}>
              {[
                { label: 'Impressions', w: '95%', val: '24,800' },
                { label: 'Clicks', w: '65%', val: '3,420' },
                { label: 'Leads', w: '35%', val: '412' },
                { label: 'Qualified', w: '20%', val: '187' },
                { label: 'Closed', w: '10%', val: '38' },
              ].map((f, i) => (
                <div key={i} className="fb-step" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <div style={{ height: '34px', background: 'var(--org)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '2px', width: f.w, transition: 'width 1.2s cubic-bezier(.22,1,.36,1)' }}>
                    <span style={{ fontSize: '.5rem', fontWeight: 500, color: '#fff', letterSpacing: '.07em', textTransform: 'uppercase', whiteSpace: 'nowrap', padding: '0 12px' }}>{f.label} · {f.val}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bc">
            <div className="bc-label">Channel Mix</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '.8rem' }}>
              {[
                { color: 'var(--org)', label: 'Organic SEO', val: '38%' },
                { color: 'var(--blue)', label: 'Google Ads', val: '28%' },
                { color: 'var(--purple)', label: 'Meta Ads', val: '18%' },
                { color: 'var(--yellow)', label: 'Referral', val: '10%' },
                { color: 'var(--pink)', label: 'LSA', val: '6%' },
              ].map((c, i) => (
                <div key={i} className="dl-item">
                  <div className="dl-dot" style={{ width: '7px', height: '7px', borderRadius: '1px', flexShrink: 0, background: c.color }} />
                  <div className="dl-lbl">{c.label}</div>
                  <div className="dl-val">{c.val}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bc">
            <div className="bc-label">Average ROI</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '.6rem 0', marginTop: '.4rem' }}>
              <div style={{ fontFamily: 'var(--fs)', fontSize: '1.8rem', fontWeight: 400, color: '#fff', letterSpacing: '-.04em' }}>5.2x</div>
              <div style={{ fontSize: '.5rem', color: 'rgba(255,255,255,.25)', textTransform: 'uppercase', letterSpacing: '.1em', marginTop: '.7rem' }}>Across all campaigns</div>
            </div>
          </div>
          <div className="bc">
            <div className="bc-label">Leads This Month — Illustrative</div>
            <div style={{ marginTop: '.5rem' }}>
              <div style={{ fontFamily: 'var(--fs)', fontSize: '3.8rem', fontWeight: 400, color: '#fff', lineHeight: 1, letterSpacing: '-.05em' }}>127</div>
              <div style={{ fontSize: '.56rem', color: 'rgba(255,255,255,.25)', marginTop: '.4rem' }}>Verified leads generated</div>
              <div style={{ display: 'inline-block', fontSize: '.5rem', color: 'var(--org)', background: 'rgba(13,148,136,.1)', padding: '3px 10px', marginTop: '.7rem', letterSpacing: '.06em', textTransform: 'uppercase' }}>+34% vs last month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <div style={{ borderTop: '1px solid var(--s1)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--s1)' }} className="pf-row">
          <div style={{ padding: '5rem 48px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { t: 'AI Chat & Lead Capture', d: 'A 24/7 AI assistant on your website that qualifies leads, answers questions, and books appointments — even while you sleep.' },
                { t: 'Missed Call Text-Back', d: 'Every missed call gets an instant automated text. Never lose a lead just because you couldn\'t pick up.' },
                { t: 'SMS & Email Sequences', d: 'Multi-step follow-up that fires in seconds. Nurture leads from first contact to booked job — automatically.' },
                { t: 'Appointment Booking', d: 'Customers book 24/7. Automated confirmations and reminders cut no-shows and keep your calendar full.' },
              ].map((f, i) => (
                <div key={i} className={`pfeat sr${i > 0 ? ` d${i}` : ''}`} style={{ border: 'none', borderBottom: i < 3 ? '1px solid var(--s1)' : 'none', padding: '1.8rem 0' }}>
                  <div className="pfeat-t">{f.t}</div>
                  <div className="pfeat-d">{f.d}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: '5rem 48px', borderLeft: '1px solid var(--s1)' }}>
            <div className="tag o sr" style={{ marginBottom: '1.2rem' }}>Launchpad Automation</div>
            <h2 style={{ fontFamily: 'var(--fs)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 400, letterSpacing: '-.04em', lineHeight: '.95', color: 'var(--ink)', marginBottom: '1.5rem' }} className="sr d1">The backend that<br />never <em style={{ fontStyle: 'italic', color: 'var(--org)' }}>sleeps.</em></h2>
            <p style={{ fontSize: '.78rem', color: 'var(--mid)', lineHeight: 1.9, marginBottom: '2rem' }} className="sr d2">Boost drives leads to your door. Automation makes sure every single one gets a response in seconds — AI-powered intake, qualification, follow-up, and CRM management running 24/7 without human intervention.</p>
            <Link href="/contact" className="btn btn-dk sr d3">See how it works <ArrowIcon /></Link>
          </div>
        </div>
      </div>

      {/* AI Agent Demo */}
      <section className="agent-section sr">
        <div style={{ fontSize: '.5rem', letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.18)', marginBottom: '1rem', position: 'relative', zIndex: 2 }}>Launchpad Automation — AI Agents Live Preview</div>
        <h2 style={{ fontFamily: 'var(--fs)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 400, letterSpacing: '-.04em', lineHeight: '.9', color: '#fff', marginBottom: '3rem', position: 'relative', zIndex: 2 }}>Your backend AI workforce.<br /><em style={{ fontStyle: 'italic', color: 'var(--org)' }}>Always on.</em></h2>
        <div className="agent-grid">
          <div className="agent-cell agent-tall">
            <div className="agent-cell-label">AI Chat — Website <span className="ag-pulse" style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--org)', animation: 'agPulse 2s infinite', flexShrink: 0 }} /></div>
            <div className="chat-msgs">
              {[
                { type: 'visitor', text: 'Hi, I was in a car accident last week and I think I need a lawyer.' },
                { type: 'system', text: '— AI agent activated —' },
                { type: 'ai', text: 'I can help connect you with our personal injury team right away. Were there any injuries?' },
                { type: 'visitor', text: 'Yes, I went to the ER. Whiplash and a broken wrist.' },
                { type: 'ai', text: 'That qualifies for a free case evaluation. Can I get your name and phone number?' },
              ].map((m, i) => (
                <div key={i} className={`chat-msg ${m.type}`} style={{ animationDelay: `${i * 0.3}s` }}>{m.text}</div>
              ))}
            </div>
          </div>
          <div className="agent-cell">
            <div className="agent-cell-label">Lead Routing</div>
            {[
              { name: 'Maria Gonzalez', dot: 'hot', status: 'routed', text: 'ROUTED' },
              { name: 'David Chen', dot: 'warm', status: 'qualifying', text: 'QUALIFYING' },
              { name: 'James Wilson', dot: 'new', status: 'qualifying', text: 'AI CHAT' },
            ].map((r, i) => (
              <div key={i} className="route-item" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className={`route-dot ${r.dot}`} />
                <div className="route-name">{r.name}</div>
                <div className={`route-status ${r.status}`}>{r.text}</div>
              </div>
            ))}
          </div>
          <div className="agent-cell">
            <div className="agent-cell-label">Activity Feed</div>
            {[
              { time: 'Just now', text: 'Maria Gonzalez routed to Hialeah intake' },
              { time: '12s ago', text: 'SMS confirmation sent to +1 786-555-0142' },
              { time: '28s ago', text: 'AI qualified lead — PI / Auto Accident' },
            ].map((a, i) => (
              <div key={i} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,.04)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '.42rem', color: 'rgba(255,255,255,.15)', marginBottom: '3px' }}>{a.time}</div>
                <div style={{ fontSize: '.56rem', color: 'rgba(255,255,255,.4)', lineHeight: 1.5 }}>{a.text}</div>
              </div>
            ))}
          </div>
          <div className="agent-cell agent-wide">
            <div className="agent-cell-label">Outbound SMS — Auto-Triggered Responses</div>
            <div className="sms-preview">
              {[
                { to: '+1 786-555-0142', trigger: 'Chat lead qualified', body: 'Hi Maria, this is Launchpad confirming your case evaluation. A team member will call within 2 minutes.', badge: 'sent' },
                { to: '+1 832-555-0287', trigger: 'Missed call text-back', body: 'Hi David, thanks for reaching out. An attorney will review your case and follow up today.', badge: 'queued' },
                { to: '+1 305-555-0193', trigger: 'Appointment reminder', body: 'Hi Sandra, your appointment is confirmed for today at 3:00 PM. Reply STOP to cancel.', badge: 'sent' },
              ].map((s, i) => (
                <div key={i} className="sms-card" style={{ animationDelay: `${i * 0.2}s` }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '.36rem', color: 'var(--org)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: '4px', opacity: .7 }}>▸ {s.trigger}</div>
                  <div className="sms-to">TO: {s.to}</div>
                  <div className="sms-body">{s.body}</div>
                  <div className={`sms-badge ${s.badge}`}>{s.badge}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
