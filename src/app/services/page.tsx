import type { Metadata } from 'next'
import Services from '@/views/Services'

export const metadata: Metadata = {
  title: 'Home Care Services in Katy, TX | Bloom Home Care',
  description: 'Non-medical home care services in Prosper, Frisco, Allen, McKinney, and Katy, TX. Companion care, personal care, dementia support, respite care, post-hospital recovery, and more.',
  keywords: ['home care services Katy, TX', 'non-medical home care', 'companion care Texas', 'personal care assistance Katy, TX', 'respite care Collin County', 'senior care services Prosper TX'],
  alternates: { canonical: 'https://bloomhomecare.org/services' },
  openGraph: {
    title: 'Home Care Services in Katy, TX | Bloom Home Care',
    description: 'Companion care, personal care, dementia support, respite care, and more — delivered with dignity across Prosper, Frisco, Allen, McKinney, and Katy, TX.',
    url: 'https://bloomhomecare.org/services',
    type: 'website',
    siteName: 'Bloom Home Care Home Care',
  },
  twitter: { card: 'summary', title: 'Home Care Services in Katy, TX | Bloom Home Care', description: 'Non-medical home care services delivered with dignity across Katy, TX.' },
}

const servicesPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Home Care Services — Bloom Home Care',
  url: 'https://bloomhomecare.org/services',
  provider: { '@id': 'https://bloomhomecare.org/#business' },
  hasPart: [
    { '@type': 'Service', name: 'Companion Care', url: 'https://bloomhomecare.org/services/companion-care' },
    { '@type': 'Service', name: 'Personal Care', url: 'https://bloomhomecare.org/services/personal-care' },
    { '@type': 'Service', name: 'Dementia Care', url: 'https://bloomhomecare.org/services/dementia-care' },
    { '@type': 'Service', name: 'Respite Care', url: 'https://bloomhomecare.org/services/respite-care' },
    { '@type': 'Service', name: 'Post-Hospital Care', url: 'https://bloomhomecare.org/services/post-hospital-care' },
    { '@type': 'Service', name: 'End-of-Life Care', url: 'https://bloomhomecare.org/services/end-of-life-care' },
    { '@type': 'Service', name: 'In-Facility Care', url: 'https://bloomhomecare.org/services/in-facility-care' },
    { '@type': 'Service', name: 'Specialized Care', url: 'https://bloomhomecare.org/services/specialized-care' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://bloomhomecare.org/services' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Services />
    </>
  )
}
