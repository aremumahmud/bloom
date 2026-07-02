import type { Metadata } from 'next'
import LocationPage from '@/views/services/LocationPage'

export const metadata: Metadata = {
  title: 'Home Care in Fulshear, TX | Bloom Home Care',
  description: 'Compassionate non-medical in-home care for seniors in Fulshear, TX. Companion care, personal care, respite care, and post-hospital support. Locally owned. Call 281-975-6044.',
  alternates: { canonical: 'https://bloomhomecare.org/locations/fulshear-tx' },
  openGraph: { title: 'Home Care in Fulshear, TX | Bloom Home Care', url: 'https://bloomhomecare.org/locations/fulshear-tx', type: 'website', siteName: 'Bloom Home Care' },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'HomeAndConstructionBusiness',
  name: 'Bloom Home Care — Fulshear, TX', url: 'https://bloomhomecare.org/locations/fulshear-tx',
  telephone: '+12819756044', address: { '@type': 'PostalAddress', addressLocality: 'Fulshear', addressRegion: 'TX', addressCountry: 'US' },
  areaServed: { '@type': 'City', name: 'Fulshear', containedInPlace: { '@type': 'State', name: 'Texas' } },
  parentOrganization: { '@id': 'https://bloomhomecare.org/#business' },
}
const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://bloomhomecare.org/locations' },
    { '@type': 'ListItem', position: 3, name: 'Fulshear, TX', item: 'https://bloomhomecare.org/locations/fulshear-tx' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <LocationPage locationKey="fulshear" />
    </>
  )
}
