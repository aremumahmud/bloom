import type { Metadata } from 'next'
import PersonalCare from '@/views/services/PersonalCare'

export const metadata: Metadata = {
  title: 'Personal Care Services in Katy, TX | Bloom Home Care',
  description: 'Dignified personal care and ADL assistance for seniors and adults in Katy, TX and Greater Houston. Bathing, dressing, grooming, and mobility support. Call 281-975-6044.',
  keywords: ['personal care Katy, TX', 'ADL assistance seniors', 'bathing dressing grooming care'],
  alternates: { canonical: 'https://bloomhomecare.org/services/personal-care' },
  openGraph: { title: 'Personal Care Services in Katy, TX | Bloom Home Care', description: 'Dignified personal care and daily living assistance for seniors across Katy, TX and Greater Houston.', url: 'https://bloomhomecare.org/services/personal-care', type: 'website', siteName: 'Bloom Home Care' },
  twitter: { card: 'summary', title: 'Personal Care in Katy, TX | Bloom Home Care', description: 'Dignified personal care and ADL assistance for seniors in Katy, TX and Greater Houston.' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Personal Care',
  description: 'Dignified personal care assistance with bathing, dressing, grooming, mobility, and activities of daily living for seniors and adults in Katy, TX.',
  url: 'https://bloomhomecare.org/services/personal-care',
  provider: { '@id': 'https://bloomhomecare.org/#business' },
  areaServed: 'Katy, TX',
  serviceType: 'Personal Care',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://bloomhomecare.org/services' },
    { '@type': 'ListItem', position: 3, name: 'Personal Care', item: 'https://bloomhomecare.org/services/personal-care' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PersonalCare />
    </>
  )
}
