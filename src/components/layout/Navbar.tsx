'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, PORTAL_URL } from '@/lib/constants'

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-[58px] bg-white/[0.93] backdrop-blur-[20px] backdrop-saturate-[1.6] border-b border-ink/[0.07] transition-shadow duration-300"
        style={{
          boxShadow: scrolled ? '0 2px 28px rgba(17,17,16,0.06)' : 'none',
        }}
      >
        <div className="flex items-center justify-between h-full px-6 min-[960px]:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-[9px]">
            <div className="w-7 h-7 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.86 0L4.4 7.2h2.4L5.14 12l4.06-7.2H6.86L8.6 0H6.86Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="font-serif text-lg text-ink tracking-tight">
              Boost with <em className="italic gradient-text">Launchpad</em>
            </span>
          </Link>

          {/* Center nav links - desktop */}
          <ul className="hidden min-[960px]:flex items-center gap-[0.3rem]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm px-3 py-1.5 transition-colors ${
                    pathname === link.href ? 'text-accent-indigo' : 'text-mid hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <div className="w-px h-4 bg-stone-2 mx-1" />
          </ul>

          {/* Right actions - desktop */}
          <div className="hidden min-[960px]:flex items-center gap-3">
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-mid border border-stone-2 px-5 py-2 hover:text-ink hover:border-stone-3 transition-all"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
              Client Portal
            </a>
            <Link
              href="/contact"
              className="text-sm font-medium bg-gradient-brand text-white px-5 py-2 hover:opacity-90 rounded-full transition-all"
            >
              Schedule a Call
            </Link>
          </div>

          {/* Hamburger - mobile */}
          <button
            className="flex min-[960px]:hidden flex-col items-center justify-center gap-[5px] w-8 h-8"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-px bg-ink transition-all duration-300 origin-center"
              style={{
                transform: mobileOpen
                  ? 'translateY(3px) rotate(45deg)'
                  : 'none',
              }}
            />
            <span
              className="block w-5 h-px bg-ink transition-all duration-300"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-px bg-ink transition-all duration-300 origin-center"
              style={{
                transform: mobileOpen
                  ? 'translateY(-3px) rotate(-45deg)'
                  : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 top-[58px] bg-white z-[490] p-10 px-6 min-[960px]:hidden overflow-y-auto"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <nav className="flex flex-col">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    className="block font-serif text-3xl md:text-4xl italic text-ink border-b border-stone-1 py-2 hover:text-accent-indigo transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex flex-col gap-3 mt-10">
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm text-mid border border-stone-2 px-5 py-3 hover:text-ink hover:border-stone-3 transition-all"
              >
                <span className="w-[5px] h-[5px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                Client Portal
              </a>
              <Link
                href="/contact"
                className="text-center text-sm font-medium bg-gradient-brand text-white px-5 py-3 hover:opacity-90 rounded-full transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Schedule a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
