'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { Footer, ArrowIcon, useScrollReveal } from '../layout'

export default function CalculatorPage() {
  useScrollReveal()

  const [leads, setLeads] = useState(150)
  const [cpa, setCpa] = useState(350)
  const [deal, setDeal] = useState(5000)
  const [rate, setRate] = useState(12)
  const [resp, setResp] = useState(4)

  const respImprovement = Math.min(resp / 2, 12)
  const cpaReduction = 0.55 + Math.min(respImprovement * 0.02, 0.15)
  const newCpa = Math.round(cpa * (1 - cpaReduction))
  const rateBoost = Math.min(Math.round(resp * 0.8), 8)
  const newRate = Math.min(rate + rateBoost, 45)
  const currentCloses = Math.round(leads * (rate / 100))
  const currentRevenue = currentCloses * deal
  const newCloses = Math.round(leads * (newRate / 100))
  const newRevenue = newCloses * deal
  const revLift = currentRevenue > 0 ? Math.round(((newRevenue - currentRevenue) / currentRevenue) * 100) : 0
  const annualDelta = (newRevenue - currentRevenue) * 12
  const cpaRedPct = Math.round(cpaReduction * 100)

  const fmt = (n: number) => n >= 1000000 ? '$' + (n / 1000000).toFixed(1) + 'M' : n >= 1000 ? '$' + Math.round(n / 1000) + 'K' : '$' + n.toLocaleString()

  return (
    <>
      <div style={{ padding: '7rem 48px 5rem' }}>
        <div className="tag o sr" style={{ marginBottom: '1.5rem' }}>ROI Calculator</div>
        <h1 style={{ fontFamily: 'var(--fs)', fontSize: 'clamp(3rem,7vw,6rem)', fontWeight: 400, letterSpacing: '-.05em', lineHeight: '.87', color: 'var(--ink)', marginBottom: '1rem' }} className="sr d1">See what the<br />platform <em style={{ fontStyle: 'italic', color: 'var(--org)' }}>returns.</em></h1>
        <p style={{ fontSize: '.82rem', color: 'var(--mid)', lineHeight: 1.9, maxWidth: '540px', marginBottom: '3rem' }} className="sr d2">Adjust the sliders to match your current operations. We&apos;ll estimate the impact based on real performance data from clients in your range.</p>
      </div>

      <div style={{ padding: '0 48px 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid var(--s1)', minHeight: '520px' }} className="sr">
          {/* Inputs */}
          <div style={{ padding: '3rem', background: 'var(--w)', display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            <div style={{ fontFamily: 'var(--fs)', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--ink)', marginBottom: '.5rem' }}>Your current numbers</div>
            {[
              { label: 'Monthly Leads', val: leads, unit: 'leads / month', min: 20, max: 1000, step: 10, set: setLeads, display: String(leads) },
              { label: 'Current Cost Per Acquisition', val: cpa, unit: 'per lead', min: 50, max: 1000, step: 10, set: setCpa, display: '$' + cpa.toLocaleString() },
              { label: 'Average Deal Value', val: deal, unit: 'per closed deal', min: 500, max: 100000, step: 500, set: setDeal, display: '$' + deal.toLocaleString() },
              { label: 'Lead-to-Close Rate', val: rate, unit: 'of leads close', min: 2, max: 40, step: 1, set: setRate, display: rate + '%' },
              { label: 'Avg. Response Time', val: resp, unit: 'hours to first contact', min: 1, max: 48, step: 1, set: setResp, display: resp === 1 ? '1 hr' : resp + ' hrs' },
            ].map((input, i) => (
              <div key={i}>
                <label>{input.label}</label>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'var(--fs)', fontSize: '1.6rem', fontWeight: 400, color: 'var(--ink)', letterSpacing: '-.03em' }}>{input.display}</span>
                  <span style={{ fontSize: '.56rem', color: 'var(--dim)', letterSpacing: '.04em' }}>{input.unit}</span>
                </div>
                <input
                  type="range"
                  min={input.min}
                  max={input.max}
                  step={input.step}
                  value={input.val}
                  onChange={e => input.set(Number(e.target.value))}
                  style={{ width: '100%', height: '3px', appearance: 'none', background: 'var(--s2)', outline: 'none', borderRadius: '2px', cursor: 'pointer', marginBottom: '.3rem' }}
                />
              </div>
            ))}
          </div>

          {/* Results */}
          <div style={{ padding: '3rem', background: 'var(--ink)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '.38rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.2)', marginBottom: '6px' }}>Projected Monthly Revenue</div>
              <div style={{ fontFamily: 'var(--fs)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 400, color: '#fff', letterSpacing: '-.04em', lineHeight: 1, marginBottom: '3px' }}><em style={{ fontStyle: 'italic', color: 'var(--org)' }}>${newRevenue.toLocaleString()}</em></div>
              <div style={{ fontSize: '.52rem', color: 'rgba(255,255,255,.25)', letterSpacing: '.04em', marginBottom: '1.8rem' }}><span style={{ color: 'var(--green)' }}>▲ {revLift}%</span> vs current</div>

              <div style={{ height: '1px', background: 'rgba(255,255,255,.06)', margin: 0 }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '.38rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.2)', marginBottom: '6px' }}>Projected CPA</div>
                  <div style={{ fontFamily: 'var(--fs)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 400, color: '#fff', letterSpacing: '-.04em', lineHeight: 1, marginBottom: '3px' }}><em style={{ fontStyle: 'italic', color: 'var(--org)' }}>${newCpa.toLocaleString()}</em></div>
                  <div style={{ fontSize: '.52rem', color: 'rgba(255,255,255,.25)' }}><span style={{ color: 'var(--green)' }}>▼ {cpaRedPct}%</span> reduction</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '.38rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.2)', marginBottom: '6px' }}>Projected Close Rate</div>
                  <div style={{ fontFamily: 'var(--fs)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 400, color: '#fff', letterSpacing: '-.04em', lineHeight: 1, marginBottom: '3px' }}><em style={{ fontStyle: 'italic', color: 'var(--org)' }}>{newRate}%</em></div>
                  <div style={{ fontSize: '.52rem', color: 'rgba(255,255,255,.25)' }}><span style={{ color: 'var(--green)' }}>▲ {rateBoost}pts</span> with AI response</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '.38rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.2)', marginBottom: '6px' }}>Additional Annual Revenue</div>
                  <div style={{ fontFamily: 'var(--fs)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 400, color: '#fff', letterSpacing: '-.04em', lineHeight: 1, marginBottom: '3px' }}><em style={{ fontStyle: 'italic', color: 'var(--org)' }}>{fmt(annualDelta)}</em></div>
                  <div style={{ fontSize: '.52rem', color: 'rgba(255,255,255,.25)' }}>additional revenue per year</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
              <div style={{ fontSize: '.52rem', color: 'rgba(255,255,255,.2)', maxWidth: '200px', lineHeight: 1.5 }}>Estimates based on real client performance data</div>
              <Link href="/contact" className="btn btn-org">Get your custom ROI <ArrowIcon /></Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
