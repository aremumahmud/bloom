import type { Metadata } from 'next'
import DementiaCare from '@/views/services/DementiaCare'

export const metadata: Metadata = {
  title: 'Dementia & Memory Care Support in Katy, TX | Bloom Home Care',
  description: 'Specialized dementia and memory care companion support for families in Prosper, Frisco, McKinney, Allen, and Katy, TX. Trained caregivers, consistent routines, safe home environment. Call (469) 209-9995.',
  keywords: ['dementia care Katy, TX', 'memory care companion Prosper TX', 'Alzheimer care home support', 'dementia caregiver Frisco TX', 'memory care McKinney', 'in-home dementia support'],
  alternates: { canonical: 'https://bloomhomecare.org/services/dementia-care' },
  openGraph: { title: 'Dementia Care Support in Katy, TX | Bloom Home Care', description: 'Trained, patient dementia companion care for families across Prosper, Frisco, McKinney, Allen, and Katy, TX.', url: 'https://bloomhomecare.org/services/dementia-care', type: 'website', siteName: 'Bloom Home Care' },
  twitter: { card: 'summary', title: 'Dementia Care Support in Katy, TX | Bloom Home Care', description: 'Specialized dementia companion support for families in Prosper, Frisco, McKinney, and Allen, TX.' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dementia & Memory Care Support',
  description: 'Specialized companion and personal care support for seniors living with dementia or Alzheimer\'s disease in Katy, TX. Consistent routines, safe environments, and patient presence.',
  url: 'https://bloomhomecare.org/services/dementia-care',
  provider: { '@id': 'https://bloomhomecare.org/#business' },
  areaServed: 'Katy, TX',
  serviceType: 'Dementia Care',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://bloomhomecare.org/services' },
    { '@type': 'ListItem', position: 3, name: 'Dementia Care', item: 'https://bloomhomecare.org/services/dementia-care' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <DementiaCare />
    </>
  )
}
