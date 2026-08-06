import type { Metadata } from 'next'
import OurStory from '@/views/OurStory'

export const metadata: Metadata = {
  title: 'About Bloom Home Care | Our Story and Founder',
  description: 'Meet Jackie, the founder of Bloom Home Care, and see how our locally owned team provides non-medical home care across Katy and Greater Houston.',
  keywords: [
    'About Bloom Home Care',
    'Bloom Home Care founder',
    'nurse-owned home care agency in Katy, TX',
    'Bloom Home Care story',
    'home care founded Katy TX',
  ],
  alternates: { canonical: 'https://bloomhomecare.org/our-story' },
  openGraph: {
    title: 'About Bloom Home Care | Our Story and Founder',
    description: 'Meet Jackie, the founder of Bloom Home Care, and see how our locally owned team provides non-medical home care across Katy and Greater Houston.',
    url: 'https://bloomhomecare.org/our-story',
    type: 'website',
    siteName: 'Bloom Home Care',
  },
  twitter: {
    card: 'summary',
    title: 'About Bloom Home Care | Our Story and Founder',
    description: 'Meet Jackie, the founder of Bloom Home Care, and see how our locally owned team provides non-medical home care across Katy and Greater Houston.',
  },
}

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Bloom Home Care',
  description: 'Meet Jackie Herrera, the founder of Bloom Home Care, a locally owned non-medical home care agency in Katy, TX.',
  url: 'https://bloomhomecare.org/our-story',
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://bloomhomecare.org/#business',
    name: 'Bloom Home Care',
    url: 'https://bloomhomecare.org',
    telephone: '+12819756044',
    founder: {
      '@type': 'Person',
      name: 'Jackie Herrera',
      jobTitle: 'Founder and Director',
      description: 'Registered Nurse (BSN, RN, CMSRN) with more than 22 years of healthcare experience.',
    },
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Katy',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
    },
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Our Story', item: 'https://bloomhomecare.org/our-story' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <OurStory />
    </>
  )
}
