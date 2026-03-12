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

/* ── Results Page ── */
export default function ResultsPage() {
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
          <span className="opacity-40">&mdash; </span>PROOF
        </motion.div>
        <motion.h1
          variants={fadeUp}
          custom={1}
          className="font-serif text-4xl md:text-5xl font-normal tracking-tight leading-tight text-slate-900 mb-6"
        >
          Real results from real{' '}
          <em className="italic gradient-text">clients.</em>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-base text-slate-500 leading-relaxed max-w-[560px]"
        >
          Case studies and performance data from businesses we&apos;ve worked
          with across legal, healthcare, and telecom. Every metric comes from a
          real engagement — with timeframes, context, and the work behind it.
        </motion.p>
      </motion.section>

      {/* ═══════════ STATS ROW ═══════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
        variants={stagger}
        className="py-12 px-6 md:px-8 lg:px-16 xl:px-24"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: '$180M+', l: 'Combined revenue of companies we serve' },
            { n: '5x+', l: 'Up to return on platform investment' },
            { n: '67%', l: 'Average CPA reduction' },
            { n: '95%+', l: 'Client retention rate' },
          ].map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="text-center md:text-left"
            >
              <div className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-slate-900 leading-none mb-2">
                <em className="italic gradient-text">{s.n}</em>
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wide leading-relaxed">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ═══════════ FEATURED CASE STUDY ═══════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
        variants={stagger}
        className="py-20 px-6 md:px-8 lg:px-16 xl:px-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm">
          {/* Left — Light with gradient accent */}
          <motion.div
            variants={fadeUp}
            className="bg-slate-50 p-10 md:p-12"
          >
            <div className="text-xs font-medium tracking-[0.14em] uppercase text-indigo-600 mb-8">
              <span className="opacity-40">&mdash; </span>FEATURED
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-widest mb-6">
              Legal &middot; Personal Injury
            </div>
            <h3 className="font-serif text-2xl md:text-3xl italic text-slate-900 mb-10">
              Dream Team Accident Attorneys
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { v: '340%', l: 'Increase in qualified leads' },
                { v: '67%', l: 'Reduction in CPA' },
                { v: '< 30s', l: 'Average lead response time' },
                { v: '4.9\u2605', l: 'Google rating (140+ reviews)' },
              ].map((m, i) => (
                <div key={i}>
                  <div className="font-serif text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {m.v}
                  </div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide mt-1.5 leading-relaxed">
                    {m.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Light */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="bg-slate-50 p-10 md:p-12 flex flex-col justify-center"
          >
            <h4 className="font-serif text-xl italic text-slate-900 mb-4">
              The Challenge
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed mb-10">
              $18K/month in marketing spend with no call tracking, no CRM, and no
              visibility into which channels were producing real cases. They were
              losing 60%+ of leads to slow response times and had zero visibility
              into which campaigns were driving actual cases.
            </p>
            <div className="border-l-2 border-indigo-500 pl-6">
              <p className="font-serif text-base italic text-slate-900 leading-relaxed">
                &ldquo;Launchpad didn&apos;t just fix our marketing — they rebuilt
                how we operate.&rdquo;
              </p>
              <div className="mt-4">
                <div className="text-xs font-semibold text-slate-900 uppercase tracking-wide">
                  Managing Partner
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Dream Team Accident Attorneys
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
        variants={stagger}
        className="py-20 px-6 md:px-8 lg:px-16 xl:px-24"
      >
        <motion.div
          variants={fadeUp}
          className="text-xs font-medium tracking-[0.14em] uppercase text-slate-400 mb-10"
        >
          <span className="opacity-40">&mdash; </span>CLIENT VOICES
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote:
                'They replaced four vendors and gave us a single dashboard. Our cost per case dropped by half in 90 days.',
              name: 'Sarah Mitchell',
              role: 'Operations Director, Apex Legal Group',
            },
            {
              quote:
                'The AI follow-up alone changed our business. We went from missing 60% of leads to responding in under 30 seconds.',
              name: 'Marcus Rivera',
              role: 'Owner, Rivera Healthcare Clinics',
            },
            {
              quote:
                'Launchpad treats our budget like their own. Transparent reporting, real results, and a team that actually picks up the phone.',
              name: 'Jennifer Tran',
              role: 'CMO, Pinnacle Telecom',
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-1 mb-5 text-indigo-500">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-sm">{'\u2605'}</span>
                ))}
              </div>
              <p className="font-serif text-sm italic text-slate-900 leading-relaxed mb-7">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="text-xs font-semibold text-slate-900 uppercase tracking-wide">
                {t.name}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">{t.role}</div>
            </motion.div>
          ))}
        </div>
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
          Ready to see your{' '}
          <em className="italic bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">numbers?</em>
        </motion.h2>
        <motion.div variants={fadeUp}>
          <Link
            href="/calculator"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white text-sm font-medium tracking-wide uppercase px-6 py-3 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Try the calculator <ArrowIcon />
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
