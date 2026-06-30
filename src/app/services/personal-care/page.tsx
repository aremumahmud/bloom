import type { Metadata } from 'next'
import PersonalCare from '@/views/services/PersonalCare'

export const metadata: Metadata = {
  title: 'Personal Care Services in Katy, TX, TX | Bloom Home Care',
  description: 'Dignified personal care and ADL assistance for seniors and adults in Prosper, Frisco, McKinney, Allen, and Katy, TX. Bathing, dressing, grooming, and mobility support. Call (469) 209-9995.',
  keywords: ['personal care Katy, TX', 'ADL assistance seniors', 'bathing dressing grooming care', 'personal care aide Prosper TX', 'activities of daily living Frisco', 'in-home personal care McKinney'],
  alternates: { canonical: 'https://bloomhomecare.org/services/personal-care' },
  openGraph: { title: 'Personal Care Services in Katy, TX | Bloom Home Care', description: 'Dignified personal care and daily living assistance for seniors across Prosper, Frisco, McKinney, Allen, and Katy, TX, TX.', url: 'https://bloomhomecare.org/services/personal-care', type: 'website', siteName: 'Bloom Home Care Home Care' },
  twitter: { card: 'summary', title: 'Personal Care in Katy, TX | Bloom Home Care', description: 'Dignified personal care and ADL assistance for seniors in Prosper, Frisco, McKinney, and Allen, TX.' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Personal Care',
  description: 'Dignified personal care assistance with bathing, dressing, grooming, mobility, and activities of daily living for seniors and adults in Katy, TX, TX.',
  url: 'https://bloomhomecare.org/services/personal-care',
  provider: { '@id': 'https://bloomhomecare.org/#business' },
  areaServed: 'Katy, TX, TX',
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
