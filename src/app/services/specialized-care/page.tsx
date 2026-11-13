import type { Metadata } from 'next'
import SpecializedCare from '@/views/services/SpecializedCare'

export const metadata: Metadata = {
  title: 'Specialized Home Care Services in Katy, TX | Bloom Home Care',
  description: 'Specialized non-medical home care for adults with Parkinson\'s, stroke recovery, chronic illness, and complex daily living needs in Katy, TX and Greater Houston. Call 281-975-6044.',
  keywords: ['specialized home care Katy, TX', 'Parkinson care companion Texas'],
  alternates: { canonical: 'https://bloomhomecare.org/services/specialized-care' },
  openGraph: { title: 'Specialized Home Care in Katy, TX | Bloom Home Care', description: 'Tailored non-medical care for seniors with Parkinson\'s, stroke recovery, and complex needs across Katy, TX and Greater Houston.', url: 'https://bloomhomecare.org/services/specialized-care', type: 'website', siteName: 'Bloom Home Care' },
  twitter: { card: 'summary', title: 'Specialized Home Care in Katy, TX | Bloom Home Care', description: 'Specialized non-medical care for seniors with complex needs in Katy, TX and Greater Houston.' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Specialized Care',
  description: 'Tailored non-medical home care for adults with Parkinson\'s disease, stroke recovery, chronic illness, and other conditions requiring specialized daily living support in Katy, TX.',
  url: 'https://bloomhomecare.org/services/specialized-care',
  provider: { '@id': 'https://bloomhomecare.org/#business' },
  areaServed: 'Katy, TX',
  serviceType: 'Specialized Care',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://bloomhomecare.org/services' },
    { '@type': 'ListItem', position: 3, name: 'Specialized Care', item: 'https://bloomhomecare.org/services/specialized-care' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SpecializedCare />
    </>
  )
}
