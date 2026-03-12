'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const STORAGE_KEY = 'bwl_cookie_consent'

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  functional: false,
}

function Toggle({
  enabled,
  disabled,
  onToggle,
}: {
  enabled: boolean
  disabled?: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      disabled={disabled}
      onClick={onToggle}
      className={`relative w-9 h-5 rounded-full transition-colors ${
        enabled ? 'bg-brand' : 'bg-stone-2'
      } ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span
        className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform"
        style={{
          transform: enabled ? 'translateX(16px)' : 'translateX(0)',
        }}
      />
    </button>
  )
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] =
    useState<CookiePreferences>(DEFAULT_PREFERENCES)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      // Consent already given, don't show banner
      return
    }
    const timer = setTimeout(() => setVisible(true), 800)
    return () => clearTimeout(timer)
  }, [])

  const saveConsent = useCallback((prefs: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
    setVisible(false)
    setShowSettings(false)
  }, [])

  const acceptAll = useCallback(() => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    })
  }, [saveConsent])

  const saveSettings = useCallback(() => {
    saveConsent({ ...preferences, essential: true })
  }, [preferences, saveConsent])

  const togglePreference = useCallback(
    (key: keyof Omit<CookiePreferences, 'essential'>) => {
      setPreferences((prev) => ({ ...prev, [key]: !prev[key] }))
    },
    []
  )

  const TOGGLE_GROUPS: {
    key: keyof CookiePreferences
    label: string
    disabled: boolean
  }[] = [
    { key: 'essential', label: 'Essential', disabled: true },
    { key: 'analytics', label: 'Analytics', disabled: false },
    { key: 'marketing', label: 'Marketing', disabled: false },
    { key: 'functional', label: 'Functional', disabled: false },
  ]

  return (
    <>
      {/* Cookie Banner */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[700] bg-white border-t border-stone-1 transition-transform duration-500 ease-out"
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          boxShadow: '0 -4px 40px rgba(17,17,16,0.06)',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 min-[960px]:px-12 py-5 flex flex-col min-[960px]:flex-row items-start min-[960px]:items-center gap-6 min-[960px]:gap-8">
          <div className="flex-1">
            <p className="font-serif text-base text-ink">
              Cookie <em className="italic">preferences.</em>
            </p>
            <p className="text-sm text-mid mt-1 leading-relaxed">
              We use cookies to improve your experience and analyze site usage.
              Read more in our{' '}
              <Link
                href="/cookies"
                className="text-ink underline underline-offset-2 hover:text-brand transition-colors"
              >
                cookie policy
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSettings(true)}
              className="text-sm text-mid border border-stone-2 px-5 py-2 rounded-lg hover:text-ink hover:border-stone-3 transition-all"
            >
              Settings
            </button>
            <button
              onClick={acceptAll}
              className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 hover:opacity-90 rounded-lg transition-all"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            className="fixed inset-0 z-[800] bg-ink/50 backdrop-blur-[8px] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              className="bg-white max-w-[500px] w-[90%] p-10 relative rounded-2xl"
              initial={{ opacity: 0, scale: 0.97, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowSettings(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-mid hover:text-ink transition-colors"
                aria-label="Close settings"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1l12 12M13 1L1 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <h2 className="font-serif text-2xl text-ink">
                Cookie <em className="italic">settings.</em>
              </h2>
              <p className="text-sm text-mid mt-2 leading-relaxed">
                Choose which cookies you&apos;d like to accept. Essential cookies
                are required for the site to function properly.
              </p>

              <div className="mt-8 flex flex-col gap-5">
                {TOGGLE_GROUPS.map(({ key, label, disabled }) => (
                  <div
                    key={key}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-ink">{label}</span>
                    <Toggle
                      enabled={preferences[key]}
                      disabled={disabled}
                      onToggle={() => {
                        if (!disabled) {
                          togglePreference(
                            key as keyof Omit<CookiePreferences, 'essential'>
                          )
                        }
                      }}
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={saveSettings}
                className="w-full mt-8 text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-3 hover:opacity-90 rounded-lg transition-all"
              >
                Save preferences
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
