import type { Metadata } from 'next'
import LocationPage from '@/views/services/LocationPage'

export const metadata: Metadata = {
  title: 'Home Care in Cinco Ranch, TX | Bloom Home Care',
  description: 'Premium non-medical in-home care for seniors in Cinco Ranch, TX. Companion care, personal care, respite care, and post-hospital support. Call 281-975-6044.',
  alternates: { canonical: 'https://bloomhomecare.org/locations/cinco-ranch-tx' },
  openGraph: { title: 'Home Care in Cinco Ranch, TX | Bloom Home Care', url: 'https://bloomhomecare.org/locations/cinco-ranch-tx', type: 'website', siteName: 'Bloom Home Care' },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'HomeAndConstructionBusiness',
  name: 'Bloom Home Care — Cinco Ranch, TX', url: 'https://bloomhomecare.org/locations/cinco-ranch-tx',
  telephone: '+12819756044', address: { '@type': 'PostalAddress', addressLocality: 'Cinco Ranch', addressRegion: 'TX', addressCountry: 'US' },
  areaServed: { '@type': 'City', name: 'Cinco Ranch', containedInPlace: { '@type': 'State', name: 'Texas' } },
  parentOrganization: { '@id': 'https://bloomhomecare.org/#business' },
}
const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://bloomhomecare.org/locations' },
    { '@type': 'ListItem', position: 3, name: 'Cinco Ranch, TX', item: 'https://bloomhomecare.org/locations/cinco-ranch-tx' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <LocationPage locationKey="cinco-ranch" />
    </>
  )
}
