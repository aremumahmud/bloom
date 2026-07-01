import type { Metadata } from 'next'
import Script from 'next/script'
import { Providers } from './providers'
import { Layout } from '@/layout/Layout'
import '@/index.css'

export const metadata: Metadata = {
  title: 'Bloom Home Care | Katy, TX',
  description: 'Trusted, compassionate in-home care for seniors in Katy, TX. Personal care, companion care, respite care, and specialized services. Call 281-975-6044.',
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RTFSM0FZ5H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RTFSM0FZ5H');
          `}
        </Script>
      </head>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
