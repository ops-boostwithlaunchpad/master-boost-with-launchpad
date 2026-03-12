import React from 'react'

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
}

export default function SectionHeading({
  children,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${className}`.trim()}>
      <h2 className="font-serif text-[clamp(2rem,3.8vw,3.8rem)] font-normal tracking-tight leading-[0.95] text-ink [&>em]:italic [&>em]:text-brand">
        {children}
      </h2>
    </div>
  )
}
