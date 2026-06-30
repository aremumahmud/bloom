import type { Metadata } from 'next'
import LocationPage from '@/views/services/LocationPage'

export const metadata: Metadata = {
  title: 'Home Care in Prosper, TX | Bloom Home Care Services',
  description: 'Compassionate, non-medical home care for seniors and adults in Prosper, TX. Companion care, personal care, respite care, and post-hospital support. Locally owned and operated. Call 281-975-6044.',
  alternates: { canonical: 'https://bloomhomecare.org/locations/prosper-tx' },
  openGraph: {
    title: 'Home Care in Prosper, TX | Bloom Home Care',
    description: 'Relationship-first home care for Prosper families. Companion care, personal care, and support tailored to aging in place with dignity. Call 281-975-6044.',
    url: 'https://bloomhomecare.org/locations/prosper-tx',
    type: 'website',
    siteName: 'Bloom Home Care Home Care',
  },
  twitter: { card: 'summary', title: 'Home Care in Prosper, TX | Bloom Home Care', description: 'Relationship-first home care for Prosper families. Companion care, personal care, and support tailored to aging in place with dignity. Call 281-975-6044.' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://bloomhomecare.org/locations/prosper-tx#business',
  name: 'Bloom Home Care Home Care — Prosper, TX',
  description: 'Compassionate non-medical home care for seniors and adults in Prosper, TX.',
  url: 'https://bloomhomecare.org/locations/prosper-tx',
  telephone: '+12819756044',
  priceRange: '$$',
  address: { '@type': 'PostalAddress', addressLocality: 'Prosper', addressRegion: 'TX', addressCountry: 'US' },
  areaServed: { '@type': 'City', name: 'Prosper', containedInPlace: { '@type': 'State', name: 'Texas' } },
  parentOrganization: { '@id': 'https://bloomhomecare.org/#business' },
  serviceType: ['Companion Care', 'Personal Care', 'Respite Care', 'Post-Hospital Care', 'Dementia Care'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://bloomhomecare.org/locations' },
    { '@type': 'ListItem', position: 3, name: 'Prosper, TX', item: 'https://bloomhomecare.org/locations/prosper-tx' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LocationPage locationKey="prosper" />
    </>
  )
}
