import type { Metadata } from 'next'
import ServiceAreas from '@/views/services/ServiceAreas'

export const metadata: Metadata = {
  title: 'Home Care Service Areas in Katy, TX | Bloom Home Care',
  description: 'Bloom Home Care provides in-home care across Katy, TX and surrounding areas in Harris County. Locally owned and operated. Call 281-975-6044.',
  keywords: [
    'home care service areas Katy TX',
    'home care Katy TX',
    'senior care Katy TX',
    'home care Harris County',
    'in-home care Katy TX',
  ],
  alternates: { canonical: 'https://bloomhomecare.org/locations' },
  openGraph: {
    title: 'Home Care Service Areas in Katy, TX | Bloom Home Care',
    description: 'In-home care for seniors and adults in Katy, TX and surrounding communities. Locally owned and operated.',
    url: 'https://bloomhomecare.org/locations',
    type: 'website',
    siteName: 'Bloom Home Care',
  },
  twitter: {
    card: 'summary',
    title: 'Home Care Service Areas in Katy, TX | Bloom Home Care',
    description: 'In-home care in Katy, TX and surrounding areas. Call 281-975-6044.',
  },
}

const serviceAreasSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Bloom Home Care Home Care Service Areas',
  description: 'Cities and communities served by Bloom Home Care in Katy, TX and surrounding areas.',
  url: 'https://bloomhomecare.org/locations',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Katy, TX', url: 'https://bloomhomecare.org/locations/katy-tx' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://bloomhomecare.org/locations' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreasSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceAreas />
    </>
  )
}
