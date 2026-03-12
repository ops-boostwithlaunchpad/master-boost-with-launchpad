'use client'

import Link from 'next/link'
import { FOOTER_LINKS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-stone-1 px-6 min-[960px]:px-12 py-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <p className="text-xs text-dim tracking-wide">
          &copy; 2026 Boost with Launchpad
        </p>
        <div className="flex gap-6">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-dim hover:text-ink transition-colors tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
