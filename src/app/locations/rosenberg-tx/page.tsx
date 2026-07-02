import type { Metadata } from 'next'
import LocationPage from '@/views/services/LocationPage'

export const metadata: Metadata = {
  title: 'Home Care in Rosenberg, TX | Bloom Home Care',
  description: 'Compassionate non-medical in-home care for seniors in Rosenberg, TX. Companion care, personal care, respite care, and recovery support. Call 281-975-6044.',
  alternates: { canonical: 'https://bloomhomecare.org/locations/rosenberg-tx' },
  openGraph: { title: 'Home Care in Rosenberg, TX | Bloom Home Care', url: 'https://bloomhomecare.org/locations/rosenberg-tx', type: 'website', siteName: 'Bloom Home Care' },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'HomeAndConstructionBusiness',
  name: 'Bloom Home Care — Rosenberg, TX', url: 'https://bloomhomecare.org/locations/rosenberg-tx',
  telephone: '+12819756044', address: { '@type': 'PostalAddress', addressLocality: 'Rosenberg', addressRegion: 'TX', addressCountry: 'US' },
  areaServed: { '@type': 'City', name: 'Rosenberg', containedInPlace: { '@type': 'State', name: 'Texas' } },
  parentOrganization: { '@id': 'https://bloomhomecare.org/#business' },
}
const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://bloomhomecare.org/locations' },
    { '@type': 'ListItem', position: 3, name: 'Rosenberg, TX', item: 'https://bloomhomecare.org/locations/rosenberg-tx' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <LocationPage locationKey="rosenberg" />
    </>
  )
}
