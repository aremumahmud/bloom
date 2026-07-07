import type { Metadata } from 'next'
import Contact from '@/views/Contact'

export const metadata: Metadata = {
  title: 'Contact Bloom Home Care | Free Home Care Consultation in Katy, TX',
  description: 'Ready to explore home care for a loved one? Schedule a free, no-pressure consultation with Bloom Home Care. Serving Prosper, Frisco, Allen, McKinney, Celina, and greater Katy, TX. Call (469) 209-9995.',
  keywords: [
    'contact home care agency Katy, TX',
    'free home care consultation Prosper TX',
    'schedule home care consultation Frisco TX',
    'home care inquiry McKinney TX',
    'Bloom Home Care contact',
    'home care phone number Katy, TX',
    'senior care consultation Allen TX',
  ],
  alternates: { canonical: 'https://bloomhomecare.org/contact' },
  openGraph: {
    title: 'Schedule a Free Consultation | Bloom Home Care',
    description: 'Reach out to Bloom Home Care for a free, no-obligation home care consultation. We serve Prosper, Frisco, Allen, McKinney, and greater Katy, TX. Call (469) 209-9995.',
    url: 'https://bloomhomecare.org/contact',
    type: 'website',
    siteName: 'Bloom Home Care',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Bloom Home Care | Free Home Care Consultation',
    description: 'Schedule a free home care consultation. Serving Prosper, Frisco, Allen, McKinney, and Katy, TX. Call (469) 209-9995.',
  },
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Bloom Home Care',
  description: 'Schedule a free home care consultation or get in touch with Bloom Home Care for any questions about our services in the Katy, TX area.',
  url: 'https://bloomhomecare.org/contact',
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': 'https://bloomhomecare.org/#business',
    name: 'Bloom Home Care',
    telephone: '+12819756044',
    email: 'hello@bloomhomecare.org',
    areaServed: 'Katy, TX',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://bloomhomecare.org/contact' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Contact />
    </>
  )
}
