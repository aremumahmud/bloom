import type { Metadata } from 'next'
import RespiteCare from '@/views/services/RespiteCare'

export const metadata: Metadata = {
  title: 'Respite Care for Family Caregivers in Katy, TX, TX | Bloom Home Care',
  description: 'Respite care relief for family caregivers in Prosper, Frisco, McKinney, Allen, and Katy, TX. Scheduled and emergency respite so you can recharge. No long-term contracts. Call (469) 209-9995.',
  keywords: ['respite care Katy, TX', 'caregiver relief Prosper TX', 'family caregiver break Frisco', 'respite care Collin County', 'temporary home care McKinney', 'caregiver burnout relief Texas'],
  alternates: { canonical: 'https://bloomhomecare.org/services/respite-care' },
  openGraph: { title: 'Respite Care for Family Caregivers in Katy, TX | Bloom Home Care', description: 'Scheduled and emergency respite care so family caregivers can rest and recharge across Prosper, Frisco, McKinney, and Allen, TX.', url: 'https://bloomhomecare.org/services/respite-care', type: 'website', siteName: 'Bloom Home Care Home Care' },
  twitter: { card: 'summary', title: 'Respite Care in Katy, TX | Bloom Home Care', description: 'Relief for family caregivers in Prosper, Frisco, McKinney, Allen, and Katy, TX, TX.' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Respite Care',
  description: 'Scheduled and emergency respite care for family caregivers in Katy, TX, TX. Professional care coverage so primary caregivers can rest, travel, or attend to other responsibilities.',
  url: 'https://bloomhomecare.org/services/respite-care',
  provider: { '@id': 'https://bloomhomecare.org/#business' },
  areaServed: 'Katy, TX, TX',
  serviceType: 'Respite Care',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://bloomhomecare.org/services' },
    { '@type': 'ListItem', position: 3, name: 'Respite Care', item: 'https://bloomhomecare.org/services/respite-care' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <RespiteCare />
    </>
  )
}
