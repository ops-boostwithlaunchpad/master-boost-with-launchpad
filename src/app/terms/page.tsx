'use client'

import LegalPageTemplate from '@/components/LegalPageTemplate'

export default function TermsPage() {
  return (
    <LegalPageTemplate
      tag="TERMS OF SERVICE"
      title="Terms of"
      titleEm="service."
      updatedDate="March 2026"
      sections={[
        { title: '1. Agreement to Terms', content: 'By accessing or using services provided by Boost with Launchpad ("Company," "we," "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services. These terms apply to all clients, visitors, and users of our platform and website.' },
        { title: '2. Services', content: 'We provide marketing, automation, CRM, and AI agent services as described in your specific service agreement. The scope, deliverables, timelines, and fees for each engagement are defined in individual Statements of Work (SOWs) or service agreements executed between you and the Company.' },
        { title: '3. Engagement Structure', content: 'All client engagements are governed by individual service agreements that define term length, scope, pricing, and deliverables. Engagements are structured with defined terms and renewal provisions as specified in your agreement. Early termination is subject to the terms outlined in your specific service agreement.' },
        { title: '4. Payment Terms', content: 'Payment terms are specified in your service agreement. Unless otherwise stated, invoices are due upon receipt. Late payments may incur interest at 1.5% per month. We reserve the right to suspend services for accounts with outstanding balances exceeding 30 days past due.' },
        { title: '5. Intellectual Property', content: 'All custom work product created specifically for your engagement (including websites, ad campaigns, and custom automation workflows) becomes your property upon full payment. Our proprietary platform, tools, frameworks, and pre-existing intellectual property remain the exclusive property of Boost with Launchpad.' },
        { title: '6. Client Responsibilities', content: 'You agree to provide timely access to necessary accounts, assets, and information required for us to perform services. Delays in providing required materials may affect timelines and deliverables. You are responsible for the accuracy of information provided and for maintaining the security of your account credentials.' },
        { title: '7. Limitation of Liability', content: 'Our total liability for any claim arising from or related to our services shall not exceed the total fees paid by you in the twelve months preceding the claim. We are not liable for indirect, incidental, special, consequential, or punitive damages, including lost profits or revenue.' },
        { title: '8. Confidentiality', content: 'Both parties agree to keep confidential any proprietary or sensitive information shared during the engagement. This obligation survives termination of the service agreement for a period of two years.' },
        { title: '9. Governing Law', content: 'These Terms are governed by the laws of the State of Florida. Any disputes shall be resolved through binding arbitration in Palm Beach County, Florida.' },
        { title: '10. Contact', content: 'For questions about these Terms, contact us at hello@boostwithlaunchpad.com or through our contact page.' },
      ]}
    />
  )
}
