import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  dark?: boolean
}

export default function Card({
  children,
  className = '',
  hover = false,
  dark = false,
}: CardProps) {
  const baseStyles = 'transition-all duration-300'

  const themeStyles = dark
    ? `bg-ink border border-white/[0.06] ${hover ? 'hover:bg-[#161614]' : ''}`
    : `bg-white border border-stone-1 ${hover ? 'hover:bg-stone-0' : ''}`

  return (
    <div className={`${baseStyles} ${themeStyles} ${className}`.trim()}>
      {children}
    </div>
  )
}
