import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'brand' | 'dark'
  className?: string
}

const variantStyles: Record<string, string> = {
  default: 'text-dim',
  brand: 'text-brand',
  dark: 'text-white/20',
}

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`text-[0.58rem] font-medium tracking-[0.14em] uppercase ${variantStyles[variant]} ${className}`.trim()}
    >
      <span className="opacity-40">&mdash; </span>
      {children}
    </span>
  )
}
