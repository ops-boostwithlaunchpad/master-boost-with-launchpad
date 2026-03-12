'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'

function fmt(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`
  return `$${Math.round(n)}`
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const viewportOpts = { once: true, margin: '-50px' as const }

const footerLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Legal', href: '/legal' },
  { label: 'Cookies', href: '/cookies' },
]

export default function CalculatorPage() {
  const [leads, setLeads] = useState(150)
  const [cpa, setCpa] = useState(350)
  const [dealValue, setDealValue] = useState(5000)
  const [closeRate, setCloseRate] = useState(12)
  const [responseTime, setResponseTime] = useState(4)

  const results = useMemo(() => {
    const respImprovement = Math.min(responseTime / 2, 12)
    const cpaReduction = Math.min(0.55 + respImprovement * 0.02, 0.70)
    const rateBoost = Math.min(responseTime * 0.008, 0.08)
    const newCloseRate = Math.min(closeRate / 100 + rateBoost, 0.45)
    const newCPA = cpa * (1 - cpaReduction)
    const currentRevenue = leads * (closeRate / 100) * dealValue
    const projectedRevenue = leads * newCloseRate * dealValue
    const additionalAnnual = (projectedRevenue - currentRevenue) * 12

    const revLift = currentRevenue > 0
      ? Math.round(((projectedRevenue - currentRevenue) / currentRevenue) * 100)
      : 0
    const cpaRedPct = Math.round(cpaReduction * 100)
    const rateBoostPts = Math.round(rateBoost * 100)

    return {
      projectedRevenue,
      newCPA,
      newCloseRate,
      additionalAnnual,
      revLift,
      cpaRedPct,
      rateBoostPts,
    }
  }, [leads, cpa, dealValue, closeRate, responseTime])

  const sliders = [
    {
      label: 'Monthly Leads',
      value: leads,
      min: 20,
      max: 1000,
      step: 10,
      set: setLeads,
      display: `${leads}`,
    },
    {
      label: 'Current Cost Per Acquisition',
      value: cpa,
      min: 50,
      max: 1000,
      step: 10,
      set: setCpa,
      display: `$${cpa.toLocaleString()}`,
    },
    {
      label: 'Average Deal Value',
      value: dealValue,
      min: 500,
      max: 100000,
      step: 500,
      set: setDealValue,
      display: `$${dealValue.toLocaleString()}`,
    },
    {
      label: 'Lead-to-Close Rate',
      value: closeRate,
      min: 2,
      max: 40,
      step: 1,
      set: setCloseRate,
      display: `${closeRate}%`,
    },
    {
      label: 'Avg. Response Time',
      value: responseTime,
      min: 1,
      max: 48,
      step: 1,
      set: setResponseTime,
      display: responseTime === 1 ? '1 hr' : `${responseTime} hrs`,
    },
  ]

  return (
    <>
      <style>{`
        input[type='range'] {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 2px;
          background: #e2e8f0;
          outline: none;
          border-radius: 2px;
        }
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #6366f1;
          cursor: pointer;
          transition: transform 0.2s;
        }
        input[type='range']::-webkit-slider-thumb:hover {
          transform: scale(1.3);
        }
        input[type='range']::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #6366f1;
          cursor: pointer;
          border: none;
        }
      `}</style>

      {/* Hero */}
      <motion.section
        className="pt-32 pb-12 px-6 md:px-8 lg:px-16 xl:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
      >
        <motion.div
          className="text-xs font-medium tracking-widest uppercase text-indigo-500 mb-6"
          variants={fadeUp}
          custom={0}
        >
          &mdash; ROI CALCULATOR
        </motion.div>

        <motion.h1
          className="font-serif text-4xl md:text-5xl tracking-tight leading-tight text-slate-900 max-w-[700px] mb-6"
          variants={fadeUp}
          custom={1}
        >
          See what <em className="italic gradient-text">Launchpad</em> could do for you.
        </motion.h1>

        <motion.p
          className="text-base text-slate-500 leading-relaxed max-w-[520px]"
          variants={fadeUp}
          custom={2}
        >
          Adjust the sliders to match your current operations. We&apos;ll estimate the
          impact based on real performance data from clients in your range.
        </motion.p>
      </motion.section>

      {/* Calculator Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-t border-slate-200">
        {/* Left Side - Inputs */}
        <motion.div
          className="p-10 lg:p-12 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
        >
          <motion.div
            className="font-serif text-xl italic text-slate-900 mb-8"
            variants={fadeUp}
            custom={0}
          >
            Adjust the sliders
          </motion.div>

          {sliders.map((slider, i) => (
            <motion.div
              key={slider.label}
              className="mb-6"
              variants={fadeUp}
              custom={i + 1}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  {slider.label}
                </span>
                <span className="font-mono text-sm text-slate-900 font-medium">
                  {slider.display}
                </span>
              </div>
              <input
                type="range"
                min={slider.min}
                max={slider.max}
                step={slider.step}
                value={slider.value}
                onChange={(e) => slider.set(Number(e.target.value))}
                className="w-full"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side - Results */}
        <motion.div
          className="p-10 lg:p-12 bg-slate-50 border-l border-slate-200"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Projected Monthly Revenue */}
            <motion.div
              className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm"
              variants={fadeUp}
              custom={0}
            >
              <div className="text-xs text-slate-400 tracking-wider uppercase mb-3">
                Projected Monthly Revenue
              </div>
              <motion.div
                className="font-serif text-3xl text-slate-900"
                key={results.projectedRevenue}
                initial={{ opacity: 0.6, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {fmt(Math.round(results.projectedRevenue))}
              </motion.div>
              <div className="text-xs text-green-600 mt-2">
                &uarr; {results.revLift}% vs current
              </div>
            </motion.div>

            {/* Projected CPA */}
            <motion.div
              className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm"
              variants={fadeUp}
              custom={1}
            >
              <div className="text-xs text-slate-400 tracking-wider uppercase mb-3">
                Projected CPA
              </div>
              <motion.div
                className="font-serif text-3xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                key={results.newCPA}
                initial={{ opacity: 0.6, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                ${Math.round(results.newCPA).toLocaleString()}
              </motion.div>
              <div className="text-xs text-green-600 mt-2">
                &darr; {results.cpaRedPct}% reduction
              </div>
            </motion.div>

            {/* Projected Close Rate */}
            <motion.div
              className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm"
              variants={fadeUp}
              custom={2}
            >
              <div className="text-xs text-slate-400 tracking-wider uppercase mb-3">
                Projected Close Rate
              </div>
              <motion.div
                className="font-serif text-3xl text-slate-900"
                key={results.newCloseRate}
                initial={{ opacity: 0.6, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {(results.newCloseRate * 100).toFixed(1)}%
              </motion.div>
              <div className="text-xs bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2">
                +{results.rateBoostPts} pts from AI
              </div>
            </motion.div>

            {/* Additional Annual Revenue */}
            <motion.div
              className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm"
              variants={fadeUp}
              custom={3}
            >
              <div className="text-xs text-slate-400 tracking-wider uppercase mb-3">
                Additional Annual Revenue
              </div>
              <motion.div
                className="font-serif text-3xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                key={results.additionalAnnual}
                initial={{ opacity: 0.6, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {fmt(Math.round(results.additionalAnnual))}
              </motion.div>
              <div className="text-xs text-slate-400 mt-2">
                additional revenue per year
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 pt-8 border-t border-slate-200 flex items-center justify-between gap-4">
            <p className="text-sm text-slate-400 max-w-[220px] leading-relaxed">
              Like what you see? Let&apos;s build a custom plan for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white text-xs font-medium tracking-wider uppercase px-6 py-3 rounded-full transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              Get your custom ROI
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                className="ml-1"
              >
                <path
                  d="M3 8h10m0 0L9 4m4 4L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 px-6 md:px-8 lg:px-16 xl:px-24 border-t border-slate-200">
        <p className="text-xs text-slate-400 leading-relaxed max-w-[600px]">
          Projections are estimates based on the inputs you provide and our historical
          client performance data. Actual results may vary depending on industry,
          market conditions, and implementation. These figures are not guarantees of
          future performance.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-6 md:px-8 lg:px-16 xl:px-24 py-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="text-xs text-slate-400 tracking-wide">
            &copy; {new Date().getFullYear()} Boost with Launchpad
          </p>
          <div className="flex gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-slate-400 hover:text-slate-900 transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
