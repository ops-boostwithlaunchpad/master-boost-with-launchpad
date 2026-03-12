'use client'

import '@/styles/globals.css'
import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* ── Arrow Icon (reusable) ── */
export function ArrowIcon() {
  return (
    <svg viewBox="0 0 11 11"><path d="M2 5.5h7M5.5 2l3.5 3.5L5.5 9" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}

/* ── Custom Cursor ── */
function CustomCursor() {
  const crRef = useRef<HTMLDivElement>(null)
  const cr2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return
    const cr = crRef.current, cr2 = cr2Ref.current
    if (!cr || !cr2) return
    let mx = window.innerWidth / 2, my = window.innerHeight / 2, lx = mx, ly = my

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; cr.style.left = mx + 'px'; cr.style.top = my + 'px' }
    document.addEventListener('mousemove', onMove)

    let raf: number
    const lag = () => {
      lx += (mx - lx) * 0.13; ly += (my - ly) * 0.13
      cr2.style.left = lx + 'px'; cr2.style.top = ly + 'px'
      raf = requestAnimationFrame(lag)
    }
    raf = requestAnimationFrame(lag)

    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      <div id="cr" ref={crRef} />
      <div id="cr2" ref={cr2Ref} />
    </>
  )
}

/* ── Cookie Consent ── */
function CookieConsent() {
  const [show, setShow] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [analytics, setAnalytics] = useState(true)
  const [marketing, setMarketing] = useState(true)
  const [functional, setFunctional] = useState(true)

  useEffect(() => {
    const consent = localStorage.getItem('bwl_cookie_consent')
    if (!consent) {
      setTimeout(() => setShow(true), 800)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('bwl_cookie_consent', JSON.stringify({ essential: true, analytics: true, marketing: true, functional: true, timestamp: Date.now() }))
    setShow(false)
  }

  const savePrefs = () => {
    localStorage.setItem('bwl_cookie_consent', JSON.stringify({ essential: true, analytics, marketing, functional, timestamp: Date.now() }))
    setModalOpen(false)
    setShow(false)
  }

  return (
    <>
      <div id="cookie-consent" className={show ? 'show' : ''}>
        <div className="cc-inner">
          <div className="cc-text">
            <div className="cc-title">We use cookies.</div>
            <div className="cc-desc">This site uses cookies to improve your experience, analyze traffic, and support our marketing efforts. By clicking &quot;Accept All,&quot; you consent to our use of cookies. Read our <Link href="/cookies">Cookie Policy</Link> and <Link href="/privacy">Privacy Policy</Link>.</div>
          </div>
          <div className="cc-actions">
            <button className="cc-btn cc-settings" onClick={() => setModalOpen(true)}>Settings</button>
            <button className="cc-btn cc-accept" onClick={acceptAll}>Accept All</button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div id="cookie-modal" style={{ display: 'flex' }}>
          <div className="cm-box">
            <button className="cm-close" onClick={() => setModalOpen(false)}>×</button>
            <div className="cm-title">Cookie <em>Settings</em></div>
            <div className="cm-desc">Choose which cookies you allow. Essential cookies are required and cannot be disabled.</div>
            <div className="cm-group">
              <div className="cm-group-head">
                <div className="cm-group-name">Essential Cookies</div>
                <div className="cm-group-req">Always On</div>
              </div>
              <div className="cm-group-desc">Required for the website to function. Handles session management, security, and navigation.</div>
            </div>
            <div className="cm-group">
              <div className="cm-group-head">
                <div className="cm-group-name">Analytics Cookies</div>
                <button className={`cm-toggle${analytics ? ' on' : ''}`} onClick={() => setAnalytics(!analytics)} />
              </div>
              <div className="cm-group-desc">Help us understand how visitors interact with our site using Google Analytics.</div>
            </div>
            <div className="cm-group">
              <div className="cm-group-head">
                <div className="cm-group-name">Marketing Cookies</div>
                <button className={`cm-toggle${marketing ? ' on' : ''}`} onClick={() => setMarketing(!marketing)} />
              </div>
              <div className="cm-group-desc">Used to deliver relevant advertising and track campaign performance.</div>
            </div>
            <div className="cm-group">
              <div className="cm-group-head">
                <div className="cm-group-name">Functional Cookies</div>
                <button className={`cm-toggle${functional ? ' on' : ''}`} onClick={() => setFunctional(!functional)} />
              </div>
              <div className="cm-group-desc">Remember your preferences such as login status and portal authentication.</div>
            </div>
            <button className="cm-save" onClick={savePrefs}>Save Preferences</button>
          </div>
        </div>
      )}
    </>
  )
}

/* ── Nav ── */
function Nav() {
  const pathname = usePathname()
  const [lifted, setLifted] = useState(false)
  const [mobOpen, setMobOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setLifted(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobOpen(false)
  }, [pathname])

  const links = [
    { href: '/', label: 'Home', id: 'home' },
    { href: '/platform', label: 'Platform', id: 'platform' },
    { href: '/results', label: 'Results', id: 'results' },
    { href: '/about', label: 'About', id: 'about' },
    { href: '/insights', label: 'Insights', id: 'insights' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav className={lifted ? 'lifted' : ''}>
        <Link href="/" className="nlogo">
          <span className="nlogo-name">Boost with <em>Launchpad</em></span>
        </Link>
        <ul className="nl">
          {links.map(l => (
            <li key={l.id}><Link href={l.href} className={isActive(l.href) ? 'act' : ''}>{l.label}</Link></li>
          ))}
          <div className="nl-sep" />
          <li>
            <a className="n-portal" href="https://portal.boostwithlaunchpad.com" target="_blank" rel="noopener noreferrer">
              <span>Client Portal</span>
            </a>
          </li>
          <li><Link href="/contact" className="n-cta">Schedule a Call</Link></li>
        </ul>
        <button className={`hbg${mobOpen ? ' o' : ''}`} onClick={() => setMobOpen(!mobOpen)}>
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mob${mobOpen ? ' o' : ''}`}>
        {links.map(l => (
          <Link key={l.id} href={l.href}>{l.label}</Link>
        ))}
        <Link href="/contact">Contact</Link>
        <a href="https://portal.boostwithlaunchpad.com" target="_blank" rel="noopener noreferrer">Portal</a>
      </div>
    </>
  )
}

/* ── Scroll Reveal Hook ── */
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.sr:not(.v)')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('v'); obs.unobserve(e.target) } })
    }, { threshold: 0.12 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  })
}

/* ── Footer ── */
export function Footer() {
  return (
    <footer style={{ padding: '2rem 48px' }}>
      <div className="fb" style={{ borderTop: '1px solid var(--s1)', paddingTop: '1.5rem' }}>
        <div className="fb-copy">© 2026 Boost with Launchpad.</div>
        <div className="fb-right" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link href="/privacy" className="fb-link">Privacy Policy</Link>
          <Link href="/terms" className="fb-link">Terms of Service</Link>
          <Link href="/legal" className="fb-link">Legal Disclaimer</Link>
          <Link href="/cookies" className="fb-link">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  )
}

/* ── Root Layout ── */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Boost with Launchpad — Local SEO &amp; Paid Ads + AI Automation &amp; CRM</title>
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Instrument+Sans:wght@400;500&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CustomCursor />
        <Nav />
        <main>{children}</main>
        <CookieConsent />
      </body>
    </html>
  )
}
