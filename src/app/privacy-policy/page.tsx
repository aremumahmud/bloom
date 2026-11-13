import type { Metadata } from 'next'
import PrivacyPolicy from '@/views/PrivacyPolicy'

export const metadata: Metadata = {
  title: 'Privacy Policy | Bloom Home Care',
  description: 'Learn how Bloom Home Care collects, uses, and protects your personal information when you visit our website or use our non-medical home care services.',
  alternates: { canonical: 'https://bloomhomecare.org/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | Bloom Home Care',
    description: 'How Bloom Home Care collects, uses, and protects your personal information.',
    url: 'https://bloomhomecare.org/privacy-policy',
    type: 'website',
    siteName: 'Bloom Home Care',
  },
}

export default function Page() {
  return <PrivacyPolicy />
}
