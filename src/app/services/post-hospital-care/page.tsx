import type { Metadata } from 'next'
import PostHospitalCare from '@/views/services/PostHospitalCare'

export const metadata: Metadata = {
  title: 'Post-Hospital & Recovery Care in Katy, TX | Bloom Home Care',
  description: 'Transitional care after hospital discharge for seniors and adults in Katy, TX and Greater Houston. Reduce readmission risk with in-home support. Call 281-975-6044.',
  keywords: ['post-hospital care Katy, TX', 'reduce hospital readmission'],
  alternates: { canonical: 'https://bloomhomecare.org/services/post-hospital-care' },
  openGraph: { title: 'Post-Hospital Recovery Care in Katy, TX | Bloom Home Care', description: 'Safe, supportive recovery care after hospital discharge for seniors across Katy, TX and Greater Houston.', url: 'https://bloomhomecare.org/services/post-hospital-care', type: 'website', siteName: 'Bloom Home Care' },
  twitter: { card: 'summary', title: 'Post-Hospital Care in Katy, TX | Bloom Home Care', description: 'Transitional recovery care after hospital discharge in Katy, TX and Greater Houston.' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Post-Hospital & Recovery Care',
  description: 'In-home transitional care after hospital discharge or surgery. Reduces readmission risk through meal support, mobility assistance, medication reminders, and companionship during recovery in Katy, TX.',
  url: 'https://bloomhomecare.org/services/post-hospital-care',
  provider: { '@id': 'https://bloomhomecare.org/#business' },
  areaServed: 'Katy, TX',
  serviceType: 'Post-Hospital Care',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://bloomhomecare.org/services' },
    { '@type': 'ListItem', position: 3, name: 'Post-Hospital Care', item: 'https://bloomhomecare.org/services/post-hospital-care' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PostHospitalCare />
    </>
  )
}
