'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FOOTER_LINKS } from '@/lib/constants'

interface LegalSection {
  title: string
  content: string
}

interface LegalPageTemplateProps {
  tag: string
  title: string
  titleEm: string
  updatedDate: string
  sections: LegalSection[]
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function LegalPageTemplate({ tag, title, titleEm, updatedDate, sections }: LegalPageTemplateProps) {
  return (
    <>
      <div className="pt-40 pb-16 px-6 md:px-12">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-[0.58rem] font-medium tracking-[0.14em] uppercase text-dim mb-6"
        >
          <span className="opacity-40">— </span>{tag}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[clamp(2.2rem,4.5vw,3.8rem)] font-normal tracking-[-0.04em] leading-[0.9] text-ink mb-4"
        >
          {title} <em className="italic gradient-text">{titleEm}</em>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[0.62rem] text-dim mb-16"
        >
          Last updated: {updatedDate}
        </motion.p>
      </div>

      <div className="px-6 md:px-12 pb-24 max-w-[800px]">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={i === 0 ? '' : 'mt-12'}
          >
            <h3 className="font-serif text-[clamp(1.2rem,2vw,1.6rem)] italic text-ink mb-4 font-normal">
              {section.title}
            </h3>
            <p className="text-[0.72rem] text-mid leading-[1.85]">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>

      <footer className="mt-24 border-t border-stone-1 px-6 md:px-12 py-8 flex justify-between flex-wrap gap-4">
        <p className="text-[0.56rem] text-dim tracking-wide">
          &copy; 2026 Boost with Launchpad
        </p>
        <div className="flex gap-6">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.56rem] text-dim hover:text-ink transition-colors tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </footer>
    </>
  )
}
