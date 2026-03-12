'use client'

import LegalPageTemplate from '@/components/LegalPageTemplate'

export default function PrivacyPage() {
  return (
    <LegalPageTemplate
      tag="PRIVACY POLICY"
      title="Your privacy"
      titleEm="matters."
      updatedDate="March 2026"
      sections={[
        { title: '1. Information We Collect', content: 'We collect information you provide directly, including your name, email address, phone number, company name, and any other details submitted through our contact forms, onboarding process, or client portal. We also automatically collect usage data such as IP addresses, browser type, pages visited, and interaction patterns through cookies and similar technologies.' },
        { title: '2. How We Use Your Information', content: 'We use your information to provide and improve our services, communicate with you about your account, send marketing and operational updates, process transactions, analyze platform usage, and comply with legal obligations. We may also use aggregated data for internal research and performance benchmarking.' },
        { title: '3. Information Sharing', content: 'We do not sell your personal information. We may share data with trusted third-party service providers who assist in operating our platform (including Stripe for payments, Twilio for communications, Google for advertising services, and Supabase for data storage). These providers are contractually obligated to handle your information securely and only for the purposes we specify.' },
        { title: '4. Data Security', content: 'We implement industry-standard security measures to protect your information, including encryption in transit and at rest, access controls, regular security audits, and secure hosting infrastructure. While no system is completely secure, we take reasonable precautions to safeguard your data.' },
        { title: '5. Data Retention', content: 'We retain your information for as long as your account is active or as needed to provide services. Upon termination of a client engagement, we retain data for a period necessary to fulfill legal, accounting, or reporting requirements, after which it is securely deleted.' },
        { title: '6. Your Rights', content: 'You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, contact us at hello@boostwithlaunchpad.com. We will respond to all requests within 30 days.' },
        { title: '7. Changes to This Policy', content: 'We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the updated policy.' },
        { title: '8. Contact', content: 'For questions about this Privacy Policy, contact us at hello@boostwithlaunchpad.com or through our contact page.' },
      ]}
    />
  )
}
