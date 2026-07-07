import type { Metadata } from 'next'
import LocationPage from '@/views/services/LocationPage'

export const metadata: Metadata = {
  title: 'Home Care in The Colony, TX | Bloom Home Care Services',
  description: 'Trusted in-home care for seniors and adults in The Colony, TX. Companion care, personal care, respite care, and post-hospital support. No long-term contracts. Call 281-975-6044.',
  alternates: { canonical: 'https://bloomhomecare.org/locations/the-colony-tx' },
  openGraph: {
    title: 'Home Care in The Colony, TX | Bloom Home Care',
    description: 'Consistent, personally matched home care for The Colony families. Companion care, personal care, and dignified support for aging in place. Call 281-975-6044.',
    url: 'https://bloomhomecare.org/locations/the-colony-tx',
    type: 'website',
    siteName: 'Bloom Home Care',
  },
  twitter: { card: 'summary', title: 'Home Care in The Colony, TX | Bloom Home Care', description: 'Consistent, personally matched home care for The Colony families. Companion care, personal care, and dignified support for aging in place. Call 281-975-6044.' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://bloomhomecare.org/locations/the-colony-tx#business',
  name: 'Bloom Home Care — The Colony, TX',
  description: 'Compassionate non-medical home care for seniors and adults in The Colony, TX.',
  url: 'https://bloomhomecare.org/locations/the-colony-tx',
  telephone: '+12819756044',
  priceRange: '$$',
  address: { '@type': 'PostalAddress', addressLocality: 'The Colony', addressRegion: 'TX', addressCountry: 'US' },
  areaServed: { '@type': 'City', name: 'The Colony', containedInPlace: { '@type': 'State', name: 'Texas' } },
  parentOrganization: { '@id': 'https://bloomhomecare.org/#business' },
  serviceType: ['Companion Care', 'Personal Care', 'Respite Care', 'Post-Hospital Care', 'Dementia Care'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://bloomhomecare.org/locations' },
    { '@type': 'ListItem', position: 3, name: 'The Colony, TX', item: 'https://bloomhomecare.org/locations/the-colony-tx' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LocationPage locationKey="the-colony" />
    </>
  )
}
