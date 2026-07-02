import type { Metadata } from 'next'
import LocationPage from '@/views/services/LocationPage'

export const metadata: Metadata = {
  title: 'Home Care in La Porte, TX | Bloom Home Care',
  description: 'Compassionate non-medical in-home care for seniors in La Porte, TX. Companion care, personal care, respite care, and post-hospital support. Call 281-975-6044.',
  alternates: { canonical: 'https://bloomhomecare.org/locations/la-porte-tx' },
  openGraph: { title: 'Home Care in La Porte, TX | Bloom Home Care', url: 'https://bloomhomecare.org/locations/la-porte-tx', type: 'website', siteName: 'Bloom Home Care' },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'HomeAndConstructionBusiness',
  name: 'Bloom Home Care — La Porte, TX', url: 'https://bloomhomecare.org/locations/la-porte-tx',
  telephone: '+12819756044', address: { '@type': 'PostalAddress', addressLocality: 'La Porte', addressRegion: 'TX', addressCountry: 'US' },
  areaServed: { '@type': 'City', name: 'La Porte', containedInPlace: { '@type': 'State', name: 'Texas' } },
  parentOrganization: { '@id': 'https://bloomhomecare.org/#business' },
}
const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://bloomhomecare.org/locations' },
    { '@type': 'ListItem', position: 3, name: 'La Porte, TX', item: 'https://bloomhomecare.org/locations/la-porte-tx' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <LocationPage locationKey="la-porte" />
    </>
  )
}
