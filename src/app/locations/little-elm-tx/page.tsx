import type { Metadata } from 'next'
import LocationPage from '@/views/services/LocationPage'

export const metadata: Metadata = {
  title: 'Home Care in Little Elm, TX | Bloom Home Care Home Care Services',
  description: 'Compassionate in-home care for seniors and adults in Little Elm, TX. Companion care, personal care, respite care, and post-hospital support. Call 281-975-6044.',
  alternates: { canonical: 'https://bloomhomecare.org/locations/little-elm-tx' },
  openGraph: {
    title: 'Home Care in Little Elm, TX | Bloom Home Care',
    description: 'Relationship-first home care for Little Elm families. Companion care, personal care, and support that helps seniors age in place with dignity. Call 281-975-6044.',
    url: 'https://bloomhomecare.org/locations/little-elm-tx',
    type: 'website',
    siteName: 'Bloom Home Care Home Care',
  },
  twitter: { card: 'summary', title: 'Home Care in Little Elm, TX | Bloom Home Care', description: 'Relationship-first home care for Little Elm families. Companion care, personal care, and support that helps seniors age in place with dignity. Call 281-975-6044.' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://bloomhomecare.org/locations/little-elm-tx#business',
  name: 'Bloom Home Care Home Care — Little Elm, TX',
  description: 'Compassionate non-medical home care for seniors and adults in Little Elm, TX.',
  url: 'https://bloomhomecare.org/locations/little-elm-tx',
  telephone: '+12819756044',
  priceRange: '$$',
  address: { '@type': 'PostalAddress', addressLocality: 'Little Elm', addressRegion: 'TX', addressCountry: 'US' },
  areaServed: { '@type': 'City', name: 'Little Elm', containedInPlace: { '@type': 'State', name: 'Texas' } },
  parentOrganization: { '@id': 'https://bloomhomecare.org/#business' },
  serviceType: ['Companion Care', 'Personal Care', 'Respite Care', 'Post-Hospital Care', 'Dementia Care'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://bloomhomecare.org/locations' },
    { '@type': 'ListItem', position: 3, name: 'Little Elm, TX', item: 'https://bloomhomecare.org/locations/little-elm-tx' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LocationPage locationKey="little-elm" />
    </>
  )
}
