import type { Metadata } from 'next'
import LocationPage from '@/views/services/LocationPage'

export const metadata: Metadata = {
  title: 'Home Care in Aubrey, TX | Bloom Home Care Home Care Services',
  description: 'In-home care for seniors and adults in Aubrey, TX. Companion care, personal care, respite care, and post-hospital support from a locally rooted team. Call 281-975-6044.',
  alternates: { canonical: 'https://bloomhomecare.org/locations/aubrey-tx' },
  openGraph: {
    title: 'Home Care in Aubrey, TX | Bloom Home Care',
    description: 'Locally rooted home care for Aubrey families. Companion care, personal care, and support from a team that calls this community home. Call 281-975-6044.',
    url: 'https://bloomhomecare.org/locations/aubrey-tx',
    type: 'website',
    siteName: 'Bloom Home Care Home Care',
  },
  twitter: { card: 'summary', title: 'Home Care in Aubrey, TX | Bloom Home Care', description: 'Locally rooted home care for Aubrey families. Companion care, personal care, and support from a team that calls this community home. Call 281-975-6044.' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://bloomhomecare.org/locations/aubrey-tx#business',
  name: 'Bloom Home Care Home Care — Aubrey, TX',
  description: 'Compassionate non-medical home care for seniors and adults in Aubrey, TX.',
  url: 'https://bloomhomecare.org/locations/aubrey-tx',
  telephone: '+12819756044',
  priceRange: '$$',
  address: { '@type': 'PostalAddress', addressLocality: 'Aubrey', addressRegion: 'TX', addressCountry: 'US' },
  areaServed: { '@type': 'City', name: 'Aubrey', containedInPlace: { '@type': 'State', name: 'Texas' } },
  parentOrganization: { '@id': 'https://bloomhomecare.org/#business' },
  serviceType: ['Companion Care', 'Personal Care', 'Respite Care', 'Post-Hospital Care', 'Dementia Care'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://bloomhomecare.org/locations' },
    { '@type': 'ListItem', position: 3, name: 'Aubrey, TX', item: 'https://bloomhomecare.org/locations/aubrey-tx' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LocationPage locationKey="aubrey" />
    </>
  )
}
