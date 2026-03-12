'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'

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

/* ── Word Cycler ── */
function WordCycler() {
  const words = ['everything.', 'intake.', 'follow-up.', 'reporting.', 'billing.', 'retention.']
  const [idx, setIdx] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setIdx((i) => (i + 1) % words.length)
        setAnimating(false)
      }, 400)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  return (
    <span className="inline-block relative overflow-hidden align-bottom">
      <span className={`cycle-word${animating ? ' out' : ''}`}>{words[idx]}</span>
    </span>
  )
}

/* ── Home Page ── */
export default function HomePage() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="min-h-[90vh] pt-[58px] px-6 md:px-8 lg:px-16 xl:px-24 flex flex-col relative overflow-hidden bg-white">
        {/* Dot pattern background */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[length:36px_36px] pointer-events-none"
          style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)' }}
        />
        <div className="absolute top-20 right-[20%] w-[500px] h-[500px] rounded-full bg-indigo-500/[0.04] blur-[120px] animate-float pointer-events-none" />
        <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] rounded-full bg-purple-500/[0.03] blur-[120px] animate-float-delayed pointer-events-none" />

        {/* Hero main content */}
        <div className="flex-1 flex flex-col justify-end pb-16 relative z-10">
          {/* Eyebrow */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-3 mb-10"
          >
            <span className="rounded-full px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-medium tracking-wide uppercase">
              Now live
            </span>
            <span className="text-xs font-medium tracking-wide uppercase text-stone-400">
              Launchpad Boost &middot; Launchpad Automation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="font-serif font-normal text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.9] text-stone-900 max-w-[900px] mb-12"
          >
            <span>We grow your revenue.</span>
            <br />
            <span>Then automate <WordCycler /></span>
          </motion.h1>

          {/* Footer area */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Left: description */}
            <motion.p
              variants={fadeUp}
              className="text-base text-stone-500 leading-relaxed max-w-[480px]"
            >
              Local SEO, Google Ads, and Meta Ads to put you in front of customers — that&apos;s{' '}
              <strong className="text-stone-800 font-medium">Launchpad Boost.</strong> AI agents, CRM,
              workflow automation, and data management to convert and retain them — that&apos;s{' '}
              <strong className="text-stone-800 font-medium">Launchpad Automation.</strong> One team runs
              both. One dashboard tracks everything.
            </motion.p>

            {/* Right: actions */}
            <motion.div variants={fadeUp} className="flex flex-col items-start md:items-end gap-4">
              <div className="flex gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white text-sm font-medium px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Schedule a call <ArrowIcon />
                </Link>
                <Link
                  href="/results"
                  className="group inline-flex items-center gap-2 bg-white text-stone-700 border border-stone-200 text-sm font-medium px-8 py-3 rounded-full hover:border-indigo-300 hover:shadow-md transition-all duration-300"
                >
                  See client results <ArrowIcon />
                </Link>
              </div>
              <span className="text-xs text-stone-400 tracking-wide">
                Launchpad Boost: SEO + Paid Ads &middot; Launchpad Automation: AI + CRM + Workflows
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 border-t border-stone-100 relative z-10"
        >
          {[
            { value: '$180M', suffix: '+', l1: 'Combined revenue of', l2: 'companies we serve' },
            { value: '5x', suffix: '+ ROI', l1: 'Up to return on', l2: 'platform investment' },
            { value: '95%', suffix: '+', l1: 'Client retention', l2: 'last 12 months' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="py-7 pl-8 border-r-0 md:border-r border-stone-100 last:border-r-0 hover:bg-indigo-50/40 transition-all duration-300 rounded-lg"
            >
              <div className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-stone-900 leading-none mb-2">
                <em>{stat.value}</em>{stat.suffix}
              </div>
              <div className="text-xs text-stone-400 tracking-wide uppercase leading-relaxed">
                {stat.l1}
                <br />
                {stat.l2}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════ INDUSTRY STRIP ═══════════ */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
        variants={fadeUp}
        className="py-5 px-6 md:px-8 lg:px-16 xl:px-24 border-b border-stone-100 flex items-center justify-center gap-8 flex-wrap bg-white"
      >
        <span className="text-xs text-stone-400 tracking-widest uppercase font-medium">Boost</span>
        {['Legal', 'Healthcare', 'Real Estate'].map((item, i) => (
          <span key={item} className="flex items-center gap-8">
            {i > 0 && <span className="text-stone-200">&middot;</span>}
            <span className="text-xs text-stone-400 tracking-widest uppercase">{item}</span>
          </span>
        ))}
        <span className="w-px h-4 bg-stone-200" />
        <span className="text-xs text-stone-400 tracking-widest uppercase font-medium">Automation</span>
        {['Telecom', 'Financial Services', 'Enterprise SaaS'].map((item, i) => (
          <span key={item} className="flex items-center gap-8">
            {i > 0 && <span className="text-stone-200">&middot;</span>}
            <span className="text-xs text-stone-400 tracking-widest uppercase">{item}</span>
          </span>
        ))}
      </motion.div>

      {/* ═══════════ INTRO SECTION ═══════════ */}
      <section className="py-20 px-6 md:px-8 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-16 lg:gap-24 items-start border-b border-stone-100 bg-white">
        {/* Left column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-xs font-medium tracking-widest uppercase text-indigo-600 mb-6">
            Why Boost with Launchpad
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl md:text-4xl font-normal tracking-tight leading-[0.95] text-stone-900 mb-8"
          >
            Two divisions.
            <br />
            One <em className="italic bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">outcome.</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-stone-500 leading-relaxed mb-10">
            <strong className="text-stone-800 font-medium">Launchpad Boost</strong> drives customers to your
            door — local SEO, Google Ads, LSA, and Meta Ads, managed end to end.{' '}
            <strong className="text-stone-800 font-medium">Launchpad Automation</strong> makes sure none of
            them slip through the cracks — AI agents, CRM, automated follow-up, and workflow automation
            that runs 24/7. Together, they turn marketing spend into closed revenue.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/platform"
              className="group inline-flex items-center gap-2 bg-stone-900 text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-indigo-600 hover:shadow-lg transition-all duration-300"
            >
              See the platform <ArrowIcon />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right column: numbered points */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          variants={stagger}
          className="flex flex-col gap-2"
        >
          {[
            {
              n: '01',
              t: 'Get found',
              badge: 'Boost',
              badgeClass: 'bg-blue-50 text-blue-600',
              d: 'Local SEO, Google Ads, LSA, and Meta Ads — managed end to end. We put you in front of customers actively searching for what you do, in English and Spanish. More visibility, more calls, more walk-ins.',
            },
            {
              n: '02',
              t: 'Respond instantly',
              badge: 'Automation',
              badgeClass: 'bg-purple-50 text-purple-600',
              d: 'AI agents handle lead intake, qualification, and follow-up in seconds — via text, email, and chat. Every missed call gets a text-back. Every lead gets a response before your competitors pick up the phone.',
            },
            {
              n: '03',
              t: 'Close more deals',
              badge: 'Automation',
              badgeClass: 'bg-purple-50 text-purple-600',
              d: 'Automated SMS and email sequences nurture every lead. Your CRM tracks every conversation from first click to signed contract — pipeline, revenue, and attribution all in one place.',
            },
            {
              n: '04',
              t: 'See what\'s working',
              badge: 'Both',
              badgeClass: 'bg-indigo-50 text-indigo-600',
              d: 'One dashboard shows your ad spend, lead flow, close rates, and revenue — all in real time. Marketing and operations data unified so you always know exactly which dollars are driving results.',
            },
          ].map((point, i) => (
            <motion.div
              key={point.n}
              variants={fadeUp}
              custom={i}
              className="p-6 bg-white border border-stone-100 rounded-2xl grid grid-cols-[40px_1fr] gap-5 items-start hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className="font-serif text-sm italic text-stone-300 pt-0.5">{point.n}</span>
              <div>
                <div className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-2">
                  {point.t}{' '}
                  <span
                    className={`inline rounded-full text-xs tracking-wide px-3 py-1 ml-2 font-medium ${point.badgeClass}`}
                  >
                    {point.badge}
                  </span>
                </div>
                <div className="text-sm text-stone-500 leading-relaxed">{point.d}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════ PLATFORM FEATURES (2x2 Grid) ═══════════ */}
      <section className="py-20 px-6 md:px-8 lg:px-16 xl:px-24 bg-stone-50 border-b border-stone-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-xs font-medium tracking-widest uppercase text-indigo-600 mb-4">
            What we build
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl md:text-4xl font-normal tracking-tight leading-[0.95] text-stone-900 mb-14"
          >
            What we <em className="italic bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">do.</em>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            {
              div: 'Launchpad Boost',
              t: 'SEO & Paid Media',
              d: 'Local SEO, AI SEO, Google Ads, LSA, Meta Ads — managed end to end with full attribution. Bilingual campaigns for Spanish-speaking markets.',
            },
            {
              div: 'Launchpad Automation',
              t: 'AI Agents & Workflows',
              d: 'AI-powered intake, lead routing, SMS/email sequences, missed-call text-back, appointment booking — all running autonomously 24/7.',
            },
            {
              div: 'Launchpad Automation',
              t: 'CRM & Pipeline Management',
              d: 'Custom CRM built around your operations. Every lead, conversation, and deal tracked from first touch to closed revenue — across every office, channel, and team member.',
            },
            {
              div: 'Both Divisions',
              t: 'Reputation & Reporting',
              d: 'Automated review generation, monitoring, and response. Real-time dashboards that unify your marketing spend, lead flow, ops data, and revenue in one view.',
            },
          ].map((feat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-stone-100"
            >
              <div className="text-xs tracking-widest uppercase text-indigo-600 mb-4 font-medium">
                {feat.div}
              </div>
              <div className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-3">
                {feat.t}
              </div>
              <div className="text-sm text-stone-500 leading-relaxed">{feat.d}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════ HOW WE OPERATE ═══════════ */}
      <section className="py-20 px-6 md:px-8 lg:px-16 xl:px-24 bg-slate-50 border-b border-stone-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-xs font-medium tracking-widest uppercase text-indigo-600 mb-6">
            How we operate
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight leading-[0.92] text-stone-900 mb-16"
          >
            Marketing to drive
            <br />
            revenue. Automation to
            <br />
            <em className="italic bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">keep it.</em>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              n: '01',
              t: 'Discovery & Audit',
              d: "We audit your marketing channels, lead flow, and tech stack. We identify where you're losing leads, overpaying for acquisition, and leaving revenue on the table.",
              b: 'Week 1',
            },
            {
              n: '02',
              t: 'Build Both Layers',
              d: 'Boost: SEO and ad campaigns go into production. Automation: CRM, AI agents, and workflow automations are custom-built around your operations. Both launch together.',
              b: 'Week 2-3',
            },
            {
              n: '03',
              t: 'Launch & Optimize',
              d: 'Ads drive traffic. AI agents catch every lead. CRM tracks every conversation. Your dedicated account team monitors performance daily and optimizes weekly.',
              b: 'Week 3-4',
            },
            {
              n: '04',
              t: 'Scale & Report',
              d: "Monthly performance reviews with your team. We expand what's working, cut what isn't, and tie every dollar back to pipeline and revenue.",
              b: 'Ongoing',
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="font-serif text-5xl italic tracking-tight mb-8 bg-gradient-to-br from-indigo-200 to-purple-200 bg-clip-text text-transparent">
                {step.n}
              </div>
              <div className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-3">
                {step.t}
              </div>
              <div className="text-sm text-stone-500 leading-relaxed">{step.d}</div>
              <span className="mt-5 inline-block rounded-full bg-indigo-50 text-indigo-600 px-3 py-1 text-xs tracking-wide uppercase font-medium">
                {step.b}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════ CTA BAND ═══════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
        variants={stagger}
        className="py-16 px-6 md:px-8 lg:px-16 xl:px-24 bg-white border-b border-stone-100 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center"
      >
        <motion.h2
          variants={fadeUp}
          className="font-serif text-3xl md:text-4xl font-normal tracking-tight leading-[0.92] text-stone-900"
        >
          Ready to <em className="italic bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">grow?</em>
        </motion.h2>
        <motion.div variants={fadeUp}>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white text-sm font-medium px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Schedule a call <ArrowIcon />
          </Link>
        </motion.div>
      </motion.section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="border-t border-stone-100 px-6 md:px-8 lg:px-16 xl:px-24 py-8 flex items-center justify-between flex-wrap gap-4 bg-white">
        <span className="text-xs text-stone-400 tracking-wide">
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
              className="text-xs text-stone-400 tracking-wide hover:text-stone-800 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </footer>
    </>
  )
}
