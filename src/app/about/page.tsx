'use client'

import Link from 'next/link'
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

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
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

/* ── About Page ── */
export default function AboutPage() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="pt-32 pb-12 px-6 md:px-8 lg:px-16 xl:px-24"
      >
        <motion.div
          variants={fadeUp}
          className="text-xs font-medium tracking-[0.14em] uppercase text-slate-400 mb-6"
        >
          <span className="opacity-40">&mdash; </span>WHO WE ARE
        </motion.div>
        <motion.h1
          variants={fadeUp}
          custom={1}
          className="font-serif text-4xl md:text-5xl font-normal tracking-tight leading-tight text-slate-900 mb-6"
        >
          Built for businesses that want to{' '}
          <em className="italic gradient-text">grow.</em>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-base text-slate-500 leading-relaxed max-w-[560px]"
        >
          One platform, one team, one outcome. We combine marketing that drives
          revenue with automation that protects it.
        </motion.p>
      </motion.section>

      {/* ═══════════ TWO-COLUMN GRID ═══════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
        variants={stagger}
        className="py-20 px-6 md:px-8 lg:px-16 xl:px-24 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Mission */}
        <motion.div
          variants={fadeUp}
          className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <h2 className="font-serif text-2xl md:text-3xl italic text-slate-900 mb-6">
            Our <em className="gradient-text">Mission</em>
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Make growth simple. Most agencies sell tactics. We sell outcomes —
            more leads, faster response times, and higher close rates. One
            platform where marketing drives leads and automation converts them,
            with full visibility from first click to closed deal.
          </p>
        </motion.div>

        {/* How We're Different */}
        <motion.div
          variants={fadeUp}
          custom={1}
          className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <h2 className="font-serif text-2xl md:text-3xl italic text-slate-900 mb-6">
            How We&apos;re <em className="gradient-text">Different</em>
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Two divisions. One team. Launchpad Boost handles SEO, paid ads, LSA,
            Meta Ads, and reputation management. Launchpad Automation handles AI
            agents, CRM, workflow automation, and data management. Your dedicated
            account team manages both — no handoffs, no gaps.
          </p>
        </motion.div>
      </motion.section>

      {/* ═══════════ BY THE NUMBERS ═══════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
        variants={stagger}
        className="py-16 px-6 md:px-8 lg:px-16 xl:px-24"
      >
        <motion.div
          variants={fadeUp}
          className="text-xs font-medium tracking-[0.14em] uppercase text-slate-400 mb-10"
        >
          <span className="opacity-40">&mdash; </span>BY THE NUMBERS
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: '$180M+', l: 'Client revenue served' },
            { v: '14+', l: 'Industries' },
            { v: '95%+', l: 'Client retention' },
            { v: '5x+', l: 'Average ROI' },
          ].map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="text-center md:text-left"
            >
              <div className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-slate-900 leading-none mb-2">
                <em className="italic gradient-text">{s.v}</em>
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wide">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ═══════════ CORE VALUES (2x2) ═══════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
        variants={stagger}
        className="py-20 px-6 md:px-8 lg:px-16 xl:px-24 bg-slate-50"
      >
        <motion.div
          variants={fadeUp}
          className="text-xs font-medium tracking-[0.14em] uppercase text-slate-400 mb-6"
        >
          <span className="opacity-40">&mdash; </span>WHAT DRIVES US
        </motion.div>
        <motion.h2
          variants={fadeUp}
          custom={1}
          className="font-serif text-3xl md:text-4xl font-normal tracking-tight leading-tight text-slate-900 mb-12"
        >
          We believe in <em className="italic gradient-text">clarity.</em>
        </motion.h2>
        <motion.div
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            {
              t: 'Outcomes over outputs',
              d: 'We measure success in revenue and closed deals — not reports, impressions, or vanity metrics.',
            },
            {
              t: 'Speed to value',
              d: 'Most clients are live within 2–4 weeks. We build fast, launch fast, and optimize in real time.',
            },
            {
              t: 'Radical transparency',
              d: 'Every dollar, every lead, every conversion — tracked and reported in real time. No black boxes.',
            },
            {
              t: 'Operator mindset',
              d: "We think like business operators, not agency people. We care about your P&L as much as your CTR.",
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">
                {v.t}
              </div>
              <div className="text-sm text-slate-500 leading-relaxed">
                {v.d}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ═══════════ CTA BAND ═══════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
        variants={stagger}
        className="py-16 px-6 md:px-8 lg:px-16 xl:px-24 bg-white border-t border-stone-100 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center"
      >
        <motion.h2
          variants={fadeUp}
          className="font-serif text-3xl md:text-4xl font-normal tracking-tight leading-tight text-slate-900"
        >
          Let&apos;s talk about your{' '}
          <em className="italic bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">growth.</em>
        </motion.h2>
        <motion.div variants={fadeUp}>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white text-sm font-medium tracking-wide uppercase px-6 py-3 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Schedule a call <ArrowIcon />
          </Link>
        </motion.div>
      </motion.section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="border-t border-slate-200 px-6 md:px-8 lg:px-16 xl:px-24 py-8 flex items-center justify-between flex-wrap gap-4">
        <span className="text-xs text-slate-400 tracking-wide">
          &copy; 2026 Boost with Launchpad.
        </span>
        <nav className="flex gap-6">
          {[
            { href: '/privacy', label: 'Privacy' },
            { href: '/terms', label: 'Terms' },
            { href: '/legal', label: 'Legal' },
            { href: '/cookies', label: 'Cookies' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-slate-400 tracking-wide hover:text-slate-900 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </footer>
    </>
  )
}
