import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Boost with Launchpad — Local SEO & Paid Ads + AI Automation & CRM',
  description: 'We grow your revenue with SEO & paid ads, then automate everything else with AI agents, CRM, and workflow automation.',
  keywords: ['SEO', 'paid ads', 'AI automation', 'CRM', 'lead generation', 'marketing agency'],
  openGraph: {
    title: 'Boost with Launchpad',
    description: 'We grow your revenue, then automate everything else.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

// Client wrapper for interactive components
import ClientLayout from '@/components/layout/ClientLayout'
