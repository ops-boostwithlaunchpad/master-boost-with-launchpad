'use client'

import { useScrollReveal } from '@/app/layout'

interface LegalSection {
  title: string
  content: string
}

interface LegalPageProps {
  tag: string
  title: string
  titleEm: string
  date: string
  sections: LegalSection[]
}

export default function LegalPageTemplate({ tag, title, titleEm, date, sections }: LegalPageProps) {
  useScrollReveal()

  return (
    <>
      <div className="chero" style={{ paddingBottom: '4rem' }}>
        <div className="tag o sr" style={{ marginBottom: '1.5rem' }}>{tag}</div>
        <h1 className="chero-h sr d1">{title} <em>{titleEm}</em></h1>
        <p className="chero-p sr d2">Last updated: {date}</p>
      </div>
      <div style={{ padding: '4rem 48px 6rem', maxWidth: '800px' }}>
        <div className="sr" style={{ fontSize: '.78rem', color: 'var(--mid)', lineHeight: 2 }}>
          {sections.map((s, i) => (
            <div key={i}>
              <h3 style={{ fontFamily: 'var(--fs)', fontSize: '1.3rem', fontWeight: 400, color: 'var(--ink)', margin: '0 0 1rem', fontStyle: 'italic' }}>{s.title}</h3>
              <p style={{ marginBottom: '2rem' }}>{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
