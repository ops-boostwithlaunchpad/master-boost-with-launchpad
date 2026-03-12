'use client'

import React from 'react'
import Link from 'next/link'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'dark' | 'brand' | 'ghost' | 'ghost-white'
  href?: string
  external?: boolean
  children: React.ReactNode
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 5.5H10M10 5.5L6 1.5M10 5.5L6 9.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const variantStyles: Record<string, string> = {
  dark: 'bg-ink text-white hover:bg-brand',
  brand: 'bg-brand text-white hover:bg-brand-dark',
  ghost: 'bg-transparent text-ink-2 border border-stone-2 hover:border-stone-3',
  'ghost-white':
    'bg-transparent text-white/45 border border-white/[0.12] hover:text-white hover:border-white/40',
}

const baseStyles =
  'group inline-flex items-center gap-2 text-[0.68rem] font-medium tracking-[0.07em] uppercase px-6 py-3 transition-all duration-300'

export default function Button({
  variant = 'dark',
  href,
  external = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`.trim()

  const content = (
    <>
      {children}
      <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-[3px]" />
    </>
  )

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    )
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
