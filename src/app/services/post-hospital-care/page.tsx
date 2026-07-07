import type { Metadata } from 'next'
import PostHospitalCare from '@/views/services/PostHospitalCare'

export const metadata: Metadata = {
  title: 'Post-Hospital & Recovery Care in Katy, TX | Bloom Home Care',
  description: 'Transitional care after hospital discharge for seniors and adults in Prosper, Frisco, McKinney, Allen, and Katy, TX. Reduce readmission risk with in-home support. Call (469) 209-9995.',
  keywords: ['post-hospital care Katy, TX', 'recovery care at home Prosper TX', 'hospital discharge support Frisco', 'transitional care McKinney TX', 'reduce hospital readmission', 'surgery recovery home care Allen'],
  alternates: { canonical: 'https://bloomhomecare.org/services/post-hospital-care' },
  openGraph: { title: 'Post-Hospital Recovery Care in Katy, TX | Bloom Home Care', description: 'Safe, supportive recovery care after hospital discharge for seniors across Prosper, Frisco, McKinney, Allen, and Katy, TX.', url: 'https://bloomhomecare.org/services/post-hospital-care', type: 'website', siteName: 'Bloom Home Care' },
  twitter: { card: 'summary', title: 'Post-Hospital Care in Katy, TX | Bloom Home Care', description: 'Transitional recovery care after hospital discharge in Prosper, Frisco, McKinney, and Allen, TX.' },
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
