import type { Metadata } from 'next'
import EndOfLifeCare from '@/views/services/EndOfLifeCare'

export const metadata: Metadata = {
  title: 'End-of-Life Companion Care in Katy, TX, TX | Bloom Home Care',
  description: 'Compassionate end-of-life companion care for families in Prosper, Frisco, McKinney, Allen, and Katy, TX. Dignified presence, family support, and peaceful comfort during life\'s final chapter. Call (469) 209-9995.',
  keywords: ['end of life care Katy, TX', 'palliative companion care Texas', 'comfort care home Prosper TX', 'end of life support Frisco', 'hospice companion care McKinney', 'dignified end of life care'],
  alternates: { canonical: 'https://bloomhomecare.org/services/end-of-life-care' },
  openGraph: { title: 'End-of-Life Companion Care in Katy, TX | Bloom Home Care', description: 'Compassionate, dignified companion care during life\'s final chapter for families across Prosper, Frisco, McKinney, Allen, and Katy, TX.', url: 'https://bloomhomecare.org/services/end-of-life-care', type: 'website', siteName: 'Bloom Home Care Home Care' },
  twitter: { card: 'summary', title: 'End-of-Life Care in Katy, TX | Bloom Home Care', description: 'Compassionate companion care during life\'s final chapter in Prosper, Frisco, McKinney, and Allen, TX.' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'End-of-Life Companion Care',
  description: 'Compassionate non-medical companion care during life\'s final chapter. Dignified presence, emotional support, and family assistance for seniors and adults in Katy, TX, TX.',
  url: 'https://bloomhomecare.org/services/end-of-life-care',
  provider: { '@id': 'https://bloomhomecare.org/#business' },
  areaServed: 'Katy, TX, TX',
  serviceType: 'End-of-Life Care',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://bloomhomecare.org/services' },
    { '@type': 'ListItem', position: 3, name: 'End-of-Life Care', item: 'https://bloomhomecare.org/services/end-of-life-care' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <EndOfLifeCare />
    </>
  )
}
