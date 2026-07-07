import type { Metadata } from 'next'
import CompanionCare from '@/views/services/CompanionCare'

export const metadata: Metadata = {
  title: 'Companion Care Services in Katy, TX | Bloom Home Care',
  description: 'Professional companion care for seniors and adults in Prosper, Frisco, McKinney, Allen, and Katy, TX. Meaningful conversation, social engagement, and trusted presence. Call (469) 209-9995.',
  keywords: ['companion care Katy, TX', 'senior companion care Prosper TX', 'companion care Frisco TX', 'social engagement home care', 'loneliness prevention seniors', 'companionship care McKinney'],
  alternates: { canonical: 'https://bloomhomecare.org/services/companion-care' },
  openGraph: { title: 'Companion Care in Katy, TX | Bloom Home Care', description: 'Trusted companion care that combats isolation and brings meaningful engagement to seniors and adults across Katy, TX.', url: 'https://bloomhomecare.org/services/companion-care', type: 'website', siteName: 'Bloom Home Care' },
  twitter: { card: 'summary', title: 'Companion Care in Katy, TX | Bloom Home Care', description: 'Meaningful companionship for seniors in Prosper, Frisco, McKinney, Allen, and Katy, TX.' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Companion Care',
  description: 'Non-medical companion care providing meaningful conversation, social engagement, and trusted presence for seniors and adults in Katy, TX.',
  url: 'https://bloomhomecare.org/services/companion-care',
  provider: { '@id': 'https://bloomhomecare.org/#business' },
  areaServed: 'Katy, TX',
  serviceType: 'Companion Care',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://bloomhomecare.org/services' },
    { '@type': 'ListItem', position: 3, name: 'Companion Care', item: 'https://bloomhomecare.org/services/companion-care' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CompanionCare />
    </>
  )
}
