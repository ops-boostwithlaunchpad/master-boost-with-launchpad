'use client'

import Link from 'next/link'
import Script from 'next/script'
import { motion } from 'framer-motion'

/* ── Animation Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.12 },
  }),
}

const viewportOpts = { once: true, margin: '-12% 0px' as const }

/* ── Arrow Icon ── */
function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 11 11"
      className="w-[11px] h-[11px] stroke-current stroke-2 fill-none transition-transform group-hover:translate-x-0.5"
    >
      <path d="M2 5.5h7M5.5 2l3.5 3.5L5.5 9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ── Data ── */
const steps = [
  { n: '01', t: 'Discovery', d: 'We\'ll ask about your current stack, where leads are leaking, and what growth looks like for you.' },
  { n: '02', t: 'Fit Assessment', d: 'We\'ll be honest about whether Launchpad is the right solution. If it\'s not, we\'ll tell you.' },
  { n: '03', t: 'Next Steps', d: 'If there\'s a fit, we\'ll outline a custom scope, timeline, and pricing — no generic proposals.' },
]

const trustSignals = [
  { v: '<24h', l: 'Response time' },
  { v: '95%+', l: 'Client retention' },
  { v: '14', l: 'Industries served' },
  { v: '2-4 wk', l: 'Avg time to launch' },
]

const footerLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Legal', href: '/legal' },
  { label: 'Cookies', href: '/cookies' },
]

export default function ContactPage() {
  return (
    <>

      {/* ── Main Split ── */}
      <div className="grid pt-10 grid-cols-1 lg:grid-cols-[0.42fr_0.58fr] border-t border-slate-200">
        {/* Left Column */}
        <div className="p-10 lg:p-12 border-r-0 lg:border-r border-slate-200 flex flex-col justify-between">
          <div>
            <motion.div
              className="font-serif text-2xl italic text-slate-900 mb-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
            >
              What to expect.
            </motion.div>

            {/* Steps */}
            <div className="flex flex-col">
              {steps.map((item, i) => (
                <motion.div
                  key={i}
                  className="py-4 border-b border-slate-200 grid grid-cols-[32px_1fr] gap-4 items-start hover:bg-slate-50 transition-all duration-300 rounded-lg"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOpts}
                  custom={i}
                >
                  <div className="text-xs font-serif italic text-slate-400 pt-px">{item.n}</div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 mb-1.5">{item.t}</div>
                    <div className="text-sm text-slate-500 leading-relaxed">{item.d}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Signals */}
            <motion.div
              className="grid grid-cols-2 gap-0 mt-8 border border-slate-200 rounded-2xl overflow-hidden"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
              custom={3}
            >
              {trustSignals.map((s, i) => (
                <div
                  key={i}
                  className={`p-5 ${i % 2 === 0 ? 'border-r border-slate-200' : ''} ${i >= 2 ? 'border-t border-slate-200' : ''}`}
                >
                  <div className="font-serif text-2xl gradient-text tracking-tight leading-none">{s.v}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mt-1.5">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Contact Details */}
          <motion.div
            className="mt-8 pt-8 border-t border-slate-200 flex flex-col gap-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
          >
            <div>
              <div className="text-xs font-medium tracking-widest uppercase text-indigo-500 mb-1">Location</div>
              <div className="text-sm text-slate-900">Palm Beach Gardens, FL</div>
            </div>
            <div>
              <div className="text-xs font-medium tracking-widest uppercase text-indigo-500 mb-1">Hours</div>
              <div className="text-sm text-slate-900">Mon &ndash; Fri, 9am &ndash; 6pm EST</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Calendly */}
        <div className="bg-slate-50 relative flex flex-col">
          <div className="p-5 lg:p-6 pb-3">
            <motion.div
              className="font-serif text-xl italic text-slate-900 mb-1"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
            >
              Pick a time.
            </motion.div>
            <div className="text-sm text-slate-500 leading-relaxed">
              45 minutes, no obligation. We&apos;ll confirm via email.
            </div>
          </div>
          <div className="flex-1 min-h-[900px] mx-6 mb-6 bg-white rounded-2xl shadow-sm overflow-hidden">
            <div
              className="calendly-inline-widget"
              data-url={process.env.NEXT_PUBLIC_CALENDLY_URL}
              style={{ minWidth: '280px', height: '100%', minHeight: '900px' }}
            />
          </div>
        </div>
      </div>

      {/* ── Already a Client Bar ── */}
      <div className="py-5 px-6 md:px-8 lg:px-16 xl:px-24 bg-slate-900 flex items-center justify-between gap-8 flex-wrap">
        <div className="flex items-center gap-6">
          <span className="text-xs text-white/40">Already a client?</span>
          <a
            href="https://portal.boostwithlaunchpad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-indigo-400 font-medium tracking-wide flex items-center gap-1.5 hover:text-indigo-300 transition-colors group"
          >
            Go to Portal <ArrowIcon />
          </a>
        </div>
        <div className="text-xs text-white/20 tracking-wide">
          Structured engagements &middot; Dedicated teams &middot; Measurable outcomes
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-200 px-6 md:px-8 lg:px-16 xl:px-24 py-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="text-xs text-slate-400 tracking-wide">
            &copy; 2026 Boost with Launchpad
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

      {/* ── Scripts ── */}
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </>
  )
}
