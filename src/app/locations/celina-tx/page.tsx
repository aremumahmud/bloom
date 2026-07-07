import type { Metadata } from 'next'
import LocationPage from '@/views/services/LocationPage'

export const metadata: Metadata = {
  title: 'Home Care in Celina, TX | Bloom Home Care Services',
  description: 'Non-medical in-home care for seniors and adults in Celina, TX. Companion care, personal care, respite care, and post-hospital support. Flexible scheduling. Call 281-975-6044.',
  alternates: { canonical: 'https://bloomhomecare.org/locations/celina-tx' },
  openGraph: {
    title: 'Home Care in Celina, TX | Bloom Home Care',
    description: 'Flexible, compassionate home care for Celina families. Companion care, personal care, and support tailored to your loved one. Call 281-975-6044.',
    url: 'https://bloomhomecare.org/locations/celina-tx',
    type: 'website',
    siteName: 'Bloom Home Care',
  },
  twitter: { card: 'summary', title: 'Home Care in Celina, TX | Bloom Home Care', description: 'Flexible, compassionate home care for Celina families. Companion care, personal care, and support tailored to your loved one. Call 281-975-6044.' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://bloomhomecare.org/locations/celina-tx#business',
  name: 'Bloom Home Care — Celina, TX',
  description: 'Compassionate non-medical home care for seniors and adults in Celina, TX.',
  url: 'https://bloomhomecare.org/locations/celina-tx',
  telephone: '+12819756044',
  priceRange: '$$',
  address: { '@type': 'PostalAddress', addressLocality: 'Celina', addressRegion: 'TX', addressCountry: 'US' },
  areaServed: { '@type': 'City', name: 'Celina', containedInPlace: { '@type': 'State', name: 'Texas' } },
  parentOrganization: { '@id': 'https://bloomhomecare.org/#business' },
  serviceType: ['Companion Care', 'Personal Care', 'Respite Care', 'Post-Hospital Care', 'Dementia Care'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://bloomhomecare.org/locations' },
    { '@type': 'ListItem', position: 3, name: 'Celina, TX', item: 'https://bloomhomecare.org/locations/celina-tx' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LocationPage locationKey="celina" />
    </>
  )
}
