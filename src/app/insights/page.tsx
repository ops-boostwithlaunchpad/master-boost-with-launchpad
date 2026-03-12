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

/* ── Data ── */
const articles = [
  { cat: 'Strategy', title: 'Why Law Firms Are Replacing Intake Teams with AI Agents', time: '8 min read' },
  { cat: 'Operations', title: 'The Real Cost of Slow Lead Response', time: '6 min read' },
  { cat: 'SEO', title: 'Bilingual SEO: The Untapped Channel for South Florida Markets', time: '7 min read' },
  { cat: 'Automation', title: 'From 5 Tools to 1: What Happens When You Consolidate Your Stack', time: '10 min read' },
  { cat: 'Healthcare', title: 'AI Patient Intake: How We Cut CPA by 67%', time: '9 min read' },
  { cat: 'Enterprise', title: 'Building an AI-First Sales Pipeline', time: '12 min read' },
]

const footerLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Legal', href: '/legal' },
  { label: 'Cookies', href: '/cookies' },
]

export default function InsightsPage() {
  return (
    <>
      {/* ── Hero ── */}
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
          <span className="opacity-40">&mdash; </span>INSIGHTS
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={1}
          className="font-serif text-4xl md:text-5xl font-normal tracking-tight leading-tight text-slate-900 mb-6"
        >
          Thinking that drives <em className="italic gradient-text">results.</em>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-base text-slate-500 leading-relaxed max-w-[560px]"
        >
          Guides, case breakdowns, and the thinking behind how we use SEO, paid ads, and AI automation to grow businesses. Written by the team that builds it.
        </motion.p>
      </motion.section>

      {/* ── Articles Grid ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
        variants={stagger}
        className="py-12 px-6 md:px-8 lg:px-16 xl:px-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative group"
              variants={fadeUp}
              custom={Math.min(i, 3)}
            >
              {/* Coming soon badge */}
              <span className="absolute top-4 right-4 text-xs tracking-wide uppercase px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-medium">
                Coming soon
              </span>

              <div className="text-xs font-medium tracking-[0.14em] uppercase text-indigo-500 mb-4">
                {a.cat}
              </div>
              <h3 className="font-serif text-lg italic text-slate-900 leading-snug mb-4 group-hover:text-indigo-600 transition-colors">
                {a.title}
              </h3>
              <div className="text-xs text-slate-400 tracking-wide">
                {a.time}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Bottom CTA ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
        variants={stagger}
        className="py-20 px-6 md:px-8 lg:px-16 xl:px-24 border-t border-slate-200"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-2xl md:text-3xl italic text-slate-900 mb-4"
            >
              More articles are on the way.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-sm text-slate-500 leading-relaxed max-w-[460px]"
            >
              We publish deep dives on growth strategy, automation, and the operational playbooks behind our client work.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} custom={2}>
            <Link
              href="/contact"
              className="btn-gradient group inline-flex items-center gap-2 text-white text-sm font-medium tracking-wide uppercase px-6 py-3 rounded-full hover:opacity-90 transition-all duration-300"
            >
              Schedule a call <ArrowIcon />
            </Link>
          </motion.div>
        </div>
      </motion.section>

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
    </>
  )
}
