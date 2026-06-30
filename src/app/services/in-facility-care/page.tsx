import type { Metadata } from 'next'
import InFacilityCare from '@/views/services/InFacilityCare'

export const metadata: Metadata = {
  title: 'In-Facility Care & Hospital Companion Support in Katy, TX, TX | Bloom Home Care',
  description: 'In-facility companion care and support for seniors in hospitals, rehab centers, and assisted living in Prosper, Frisco, McKinney, Allen, and Katy, TX. Familiar face, consistent presence. Call (469) 209-9995.',
  keywords: ['in-facility care Katy, TX', 'hospital companion care Texas', 'assisted living companion Prosper TX', 'rehab facility support Frisco', 'nursing home companion McKinney', 'in-facility caregiver Allen TX'],
  alternates: { canonical: 'https://bloomhomecare.org/services/in-facility-care' },
  openGraph: { title: 'In-Facility Companion Care in Katy, TX | Bloom Home Care', description: 'Familiar, consistent companion care for seniors in hospitals, rehab, and assisted living facilities across Katy, TX, TX.', url: 'https://bloomhomecare.org/services/in-facility-care', type: 'website', siteName: 'Bloom Home Care Home Care' },
  twitter: { card: 'summary', title: 'In-Facility Care in Katy, TX | Bloom Home Care', description: 'Companion care support for seniors in hospitals and facilities across Prosper, Frisco, McKinney, and Allen, TX.' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'In-Facility Companion Care',
  description: 'Companion care and personal support for seniors residing in hospitals, rehabilitation centers, assisted living facilities, or nursing homes in Katy, TX, TX.',
  url: 'https://bloomhomecare.org/services/in-facility-care',
  provider: { '@id': 'https://bloomhomecare.org/#business' },
  areaServed: 'Katy, TX, TX',
  serviceType: 'In-Facility Care',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://bloomhomecare.org/services' },
    { '@type': 'ListItem', position: 3, name: 'In-Facility Care', item: 'https://bloomhomecare.org/services/in-facility-care' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <InFacilityCare />
    </>
  )
}
