'use client'

import LegalPageTemplate from '@/components/LegalPageTemplate'

export default function CookiesPage() {
  return (
    <LegalPageTemplate
      tag="Legal"
      title="Cookie"
      titleEm="Policy"
      date="March 2026"
      sections={[
        { title: '1. What Are Cookies', content: 'Cookies are small text files stored on your device when you visit our website. They help us recognize your browser, remember your preferences, and understand how you interact with our site. We also use similar technologies such as pixels, local storage, and session identifiers.' },
        { title: '2. Cookies We Use', content: 'Essential Cookies: Required for the website to function. These handle session management, security, and basic navigation. They cannot be disabled. Analytics Cookies: Help us understand how visitors interact with our site using tools such as Google Analytics. These collect anonymous usage data including pages visited, time spent, and referral sources. Marketing Cookies: Used to deliver relevant advertising and track campaign performance across platforms including Google Ads, Meta Ads, and LinkedIn. Functional Cookies: Remember your preferences such as login status, language settings, and portal authentication.' },
        { title: '3. Third-Party Cookies', content: 'We use services from Google (Analytics, Ads, Tag Manager), Meta (Pixel), Stripe (payment processing), and other providers that may set their own cookies. These third parties have their own privacy policies governing the use of their cookies.' },
        { title: '4. Managing Cookies', content: 'You can manage your cookie preferences through the consent banner displayed on your first visit. You can also modify your browser settings to block or delete cookies. Note that disabling certain cookies may affect website functionality.' },
        { title: '5. Contact', content: 'For questions about our use of cookies, contact us at hello@boostwithlaunchpad.com.' },
      ]}
    />
  )
}
