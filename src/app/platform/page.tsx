'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

/* ── Animation helpers ── */
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
  visible: { transition: { staggerChildren: 0.12 } },
}

const vp = { once: true, margin: '-12% 0px' as const }

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

/* ── Page ── */
export default function PlatformPage() {
  return (
    <>
      {/* ─── 1. HERO ─── */}
      <section className="pt-32 pb-12 px-6 md:px-8 lg:px-16 xl:px-24 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={stagger}
          className="max-w-5xl"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="text-xs font-medium tracking-widest uppercase text-slate-400 mb-6"
          >
            <span className="opacity-40">&mdash; </span>The Platform
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-serif text-4xl md:text-5xl font-normal tracking-tight leading-[1.05] text-slate-900 max-w-[800px] mb-6"
          >
            Boost grows your <em className="italic bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent">topline.</em>
            <br />
            Automation runs the <em className="italic bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent">backend.</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-base text-slate-500 leading-relaxed max-w-[580px]"
          >
            Launchpad Boost handles SEO, Google Ads, LSA, and Meta Ads to drive customers to you.
            Launchpad Automation handles AI agents, CRM, data management, and workflow automation so
            every lead is captured, qualified, followed up, and closed — without manual work.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="mt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white text-sm font-medium tracking-wide uppercase px-8 py-3.5 rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
            >
              Schedule a call <ArrowIcon />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── 2. LAUNCHPAD BOOST DASHBOARD (Dark Bento Grid) ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={vp}
        variants={stagger}
        className="py-20 px-6 md:px-8 lg:px-16 xl:px-24 bg-slate-50 border-b border-stone-100"
      >
        <motion.div variants={fadeUp} custom={0} className="mb-10">
          <div className="text-xs tracking-widest uppercase text-indigo-600 mb-4">
            Launchpad Boost &mdash; Dashboard Preview
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.05] text-slate-900">
            See your SEO &amp; ads<br />performance. <em className="italic bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">One view.</em>
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={1}
          className="grid grid-cols-1 md:grid-cols-[1.1fr_2fr_1fr] md:grid-rows-2 gap-4"
        >
          {/* Cell 1 — Keyword Rankings (tall, spans 2 rows) */}
          <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 md:row-span-2">
            <div className="text-xs tracking-widest uppercase text-indigo-600 mb-3 flex items-center gap-2">
              Keyword Rankings
              <span className="w-[6px] h-[6px] rounded-full bg-indigo-500 animate-pulse" />
            </div>
            <div className="flex flex-col mt-2">
              {[
                { kw: 'personal injury lawyer', pos: '#2', change: '+4' },
                { kw: 'car accident attorney miami', pos: '#1', change: '+7' },
                { kw: 'slip and fall lawyer fl', pos: '#3', change: '+2' },
                { kw: 'abogado de accidentes', pos: '#5', change: '+12' },
                { kw: 'accident attorney hialeah', pos: '#4', change: '+3' },
              ].map((r, i) => (
                <div key={i} className="flex justify-between items-center py-2.5 border-b border-slate-100">
                  <span className="text-xs text-slate-500">{r.kw}</span>
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-sm bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">{r.pos}</span>
                    <span className="font-mono text-xs text-green-600">{r.change}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Cell 2 — Lead Funnel (wide, spans 2 cols) */}
          <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 md:col-span-2">
            <div className="text-xs tracking-widest uppercase text-indigo-600 mb-3 flex items-center gap-2">
              Lead Funnel &mdash; This Month
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
              {[
                { label: 'Impressions', val: '14,200' },
                { label: 'Clicks', val: '1,840' },
                { label: 'Leads', val: '127' },
                { label: 'Qualified', val: '84' },
                { label: 'Closed', val: '31' },
              ].map((step, i, arr) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <span className="font-mono text-xl text-slate-900 font-semibold">{step.val}</span>
                    <span className="text-xs text-slate-500 uppercase tracking-wider mt-1">{step.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="text-slate-300 text-sm">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Cell 3 — Channel Mix */}
          <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-xs tracking-widest uppercase text-indigo-600 mb-3">
              Channel Mix
            </div>
            <div className="flex flex-col gap-2.5 mt-3">
              {[
                { color: 'bg-indigo-500', label: 'Organic', val: '38%' },
                { color: 'bg-blue-500', label: 'Google Ads', val: '28%' },
                { color: 'bg-purple-500', label: 'Meta', val: '18%' },
                { color: 'bg-yellow-400', label: 'Referral', val: '10%' },
                { color: 'bg-pink-500', label: 'LSA', val: '6%' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className={`w-2 h-2 rounded-sm shrink-0 ${c.color}`} />
                  <span className="text-sm text-slate-500 flex-1">{c.label}</span>
                  <span className="font-mono text-sm text-slate-700">{c.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cell 4 — Average ROI */}
          <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center">
            <div className="text-xs tracking-widest uppercase text-indigo-600 mb-4 self-start">
              Average ROI
            </div>
            <div className="font-serif text-5xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight font-semibold">5.2x</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider mt-3">
              Across all campaigns
            </div>
          </div>

          {/* Cell 5 — Leads This Month */}
          <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-xs tracking-widest uppercase text-indigo-600 mb-3 flex items-center gap-2">
              Leads This Month
              <span className="w-[6px] h-[6px] rounded-full bg-indigo-500 animate-pulse" />
            </div>
            <div className="mt-2">
              <div className="font-serif text-5xl text-slate-900 leading-none tracking-tight">127</div>
              <div className="text-sm text-green-600 mt-3">+18% vs last month</div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ─── 3. AUTOMATION FEATURES (2-column) ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={vp}
        variants={stagger}
        className="py-20 px-6 md:px-8 lg:px-16 xl:px-24 bg-slate-50/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left — Feature cards */}
          <motion.div variants={fadeUp} custom={0} className="flex flex-col gap-4">
            {[
              {
                t: 'AI Chat & Lead Capture',
                d: 'A 24/7 AI assistant on your website that qualifies leads, answers questions, and books appointments — even while you sleep.',
              },
              {
                t: 'Missed Call Text-Back',
                d: "Every missed call gets an instant automated text. Never lose a lead just because you couldn't pick up.",
              },
              {
                t: 'SMS & Email Sequences',
                d: 'Multi-step follow-up that fires in seconds. Nurture leads from first contact to booked job — automatically.',
              },
              {
                t: 'Appointment Booking',
                d: 'Customers book 24/7. Automated confirmations and reminders cut no-shows and keep your calendar full.',
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-100"
              >
                <div className="text-sm font-semibold text-slate-900 mb-2">
                  {f.t}
                </div>
                <div className="text-sm text-slate-500 leading-relaxed">{f.d}</div>
              </div>
            ))}
          </motion.div>

          {/* Right — Heading + body + CTA */}
          <motion.div variants={fadeUp} custom={1} className="md:sticky md:top-32">
            <div className="text-xs font-medium tracking-widest uppercase text-slate-400 mb-4">
              <span className="opacity-40">&mdash; </span>Launchpad Automation
            </div>
            <h2 className="font-serif text-3xl md:text-4xl italic text-slate-900 mb-5 leading-[1.05] tracking-tight">
              The backend that never <em className="not-italic bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent">sleeps.</em>
            </h2>
            <p className="text-base text-slate-500 leading-relaxed mb-8">
              Boost drives leads to your door. Automation makes sure every single one gets a response
              in seconds — AI-powered intake, qualification, follow-up, and CRM management running 24/7
              without human intervention.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white text-sm font-medium tracking-wide uppercase px-8 py-3.5 rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
            >
              See how it works <ArrowIcon />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ─── 4. AI AGENT DEMO (Dark Grid) ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={vp}
        variants={stagger}
        className="py-20 px-6 md:px-8 lg:px-16 xl:px-24 bg-white border-b border-stone-100 relative overflow-hidden"
      >
        <motion.div variants={fadeUp} custom={0} className="relative z-10 mb-10">
          <div className="text-xs tracking-widest uppercase text-indigo-600 mb-4">
            Launchpad Automation &mdash; AI Agents Live Preview
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.05] text-slate-900 mb-6">
            Your backend AI workforce.<br />
            <em className="italic bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Always on.</em>
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={1}
          className="relative z-10 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4"
        >
          {/* Cell 1 — AI Chat (tall, spans 2 rows) */}
          <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 md:row-span-2">
            <div className="text-xs tracking-widest uppercase text-indigo-600 mb-4 flex items-center gap-2">
              AI Chat &mdash; Website
              <span className="w-[6px] h-[6px] rounded-full bg-indigo-500 animate-pulse" />
            </div>
            <div className="flex flex-col gap-3 mt-2">
              {[
                { type: 'visitor' as const, text: 'Hi, I was in a car accident last week and I think I need a lawyer.' },
                { type: 'system' as const, text: '— AI agent activated —' },
                { type: 'ai' as const, text: 'I can help connect you with our personal injury team right away. Were there any injuries?' },
                { type: 'visitor' as const, text: 'Yes, I went to the ER. Whiplash and a broken wrist.' },
                { type: 'ai' as const, text: 'That qualifies for a free case evaluation. Can I get your name and phone number?' },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                  className={`text-sm leading-relaxed px-3.5 py-2.5 rounded-xl max-w-[90%] ${
                    m.type === 'visitor'
                      ? 'bg-slate-100 text-slate-600 self-start rounded-bl-sm'
                      : m.type === 'ai'
                      ? 'bg-indigo-50 text-indigo-700 self-end rounded-br-sm'
                      : 'font-mono text-xs text-slate-300 self-center'
                  }`}
                >
                  {m.text}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cell 2 — Lead Routing */}
          <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-xs tracking-widest uppercase text-indigo-600 mb-4">
              Lead Routing
            </div>
            {[
              { name: 'Maria Gonzalez', dot: 'bg-indigo-400', status: 'routed', cls: 'bg-indigo-50 text-indigo-600' },
              { name: 'David Chen', dot: 'bg-yellow-400', status: 'qualifying', cls: 'bg-blue-50 text-blue-600' },
              { name: 'James Wilson', dot: 'bg-blue-400', status: 'booked', cls: 'bg-green-50 text-green-600' },
            ].map((r, i) => (
              <div key={i} className="flex items-center gap-3 py-3 border-b border-slate-100">
                <span className={`w-2 h-2 rounded-full shrink-0 ${r.dot}`} />
                <span className="text-sm text-slate-500 flex-1">{r.name}</span>
                <span className={`font-mono text-xs px-2 py-0.5 rounded uppercase ${r.cls}`}>
                  {r.status}
                </span>
              </div>
            ))}
          </div>

          {/* Cell 3 — Activity Feed */}
          <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-xs tracking-widest uppercase text-indigo-600 mb-4">
              Activity Feed
            </div>
            {[
              { time: 'Just now', text: 'Maria Gonzalez routed to Hialeah intake' },
              { time: '12s ago', text: 'SMS confirmation sent to +1 786-555-0142' },
              { time: '28s ago', text: 'AI qualified lead — PI / Auto Accident' },
              { time: '1m ago', text: 'New chat session started from Google Ads' },
              { time: '2m ago', text: 'Appointment confirmed for Sandra Reyes' },
            ].map((a, i) => (
              <div key={i} className="flex gap-3 py-2.5 border-b border-slate-100">
                <span className="font-mono text-xs text-slate-300 w-16 shrink-0">{a.time}</span>
                <span className="text-sm text-slate-500">{a.text}</span>
              </div>
            ))}
          </div>

          {/* Cell 4 — Outbound SMS (wide, spans 2 cols) */}
          <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 md:col-span-2">
            <div className="text-xs tracking-widest uppercase text-indigo-600 mb-4">
              Outbound SMS &mdash; Auto-Triggered Responses
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              {[
                {
                  trigger: 'Chat lead qualified',
                  to: '+1 786-555-0142',
                  body: 'Hi Maria, this is Launchpad confirming your case evaluation. A team member will call within 2 minutes.',
                  badge: 'sent',
                },
                {
                  trigger: 'Missed call text-back',
                  to: '+1 832-555-0287',
                  body: 'Hi David, thanks for reaching out. An attorney will review your case and follow up today.',
                  badge: 'queued',
                },
                {
                  trigger: 'Appointment reminder',
                  to: '+1 305-555-0193',
                  body: 'Hi Sandra, your appointment is confirmed for today at 3:00 PM. Reply STOP to cancel.',
                  badge: 'sent',
                },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="bg-slate-50 border border-slate-100 p-4 rounded-xl"
                >
                  <div className="font-mono text-xs text-indigo-600 tracking-wide uppercase mb-1.5">
                    &#9656; {s.trigger}
                  </div>
                  <div className="font-mono text-xs text-slate-300 mb-2">TO: {s.to}</div>
                  <div className="text-sm text-slate-500 leading-relaxed mb-3">{s.body}</div>
                  <span
                    className={`font-mono text-xs uppercase tracking-wider px-2 py-0.5 rounded ${
                      s.badge === 'sent'
                        ? 'bg-green-50 text-green-600'
                        : 'bg-yellow-50 text-yellow-600'
                    }`}
                  >
                    {s.badge}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ─── 5. CTA BAND ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={vp}
        variants={stagger}
        className="py-16 px-6 md:px-8 lg:px-16 xl:px-24 bg-white border-t border-stone-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.05] text-slate-900"
          >
            See the <em className="italic bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent">results.</em>
          </motion.h2>
          <motion.div variants={fadeUp} custom={1}>
            <Link
              href="/results"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white shadow-md hover:shadow-xl hover:-translate-y-0.5 text-sm font-medium tracking-wide uppercase px-8 py-3.5 rounded-full transition-all duration-300"
            >
              View case studies <ArrowIcon />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ─── 6. FOOTER ─── */}
      <footer className="border-t border-slate-200 px-6 md:px-8 lg:px-16 xl:px-24 py-8 flex justify-between flex-wrap gap-4 bg-white">
        <div className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Launchpad. All rights reserved.
        </div>
        <nav className="flex gap-6">
          {[
            { label: 'Platform', href: '/platform' },
            { label: 'Results', href: '/results' },
            { label: 'Contact', href: '/contact' },
            { label: 'Privacy', href: '/privacy' },
          ].map((lnk) => (
            <Link
              key={lnk.href}
              href={lnk.href}
              className="text-sm text-slate-400 hover:text-slate-900 transition-colors duration-200"
            >
              {lnk.label}
            </Link>
          ))}
        </nav>
      </footer>
    </>
  )
}
