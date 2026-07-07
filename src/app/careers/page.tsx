import type { Metadata } from 'next'
import Careers from '@/views/Careers'

export const metadata: Metadata = {
  title: 'Caregiver Jobs in Prosper, Frisco & Katy, TX | Bloom Home Care',
  description: "Join Bloom Home Care's care team. We're hiring compassionate, reliable home caregivers in Prosper, Frisco, Allen, McKinney, Celina, and Katy, TX. Flexible scheduling, team support, and meaningful work.",
  keywords: [
    'caregiver jobs Katy, TX TX',
    'home care jobs Prosper TX',
    'caregiver employment Frisco TX',
    'home health aide jobs McKinney TX',
    'senior care jobs Allen TX',
    'companion caregiver jobs',
    'non-medical caregiver positions',
    'Bloom Home Care careers',
    'caregiving jobs Collin County',
    'flexible caregiver schedule',
  ],
  alternates: { canonical: 'https://bloomhomecare.org/careers' },
  openGraph: {
    title: 'Caregiver Jobs in Katy, TX | Bloom Home Care',
    description: "Join our compassionate care team. We're hiring dedicated caregivers in Prosper, Frisco, McKinney, Allen, and greater Katy, TX. Make a meaningful difference every day.",
    url: 'https://bloomhomecare.org/careers',
    type: 'website',
    siteName: 'Bloom Home Care',
  },
  twitter: {
    card: 'summary',
    title: 'Caregiver Jobs in Katy, TX | Bloom Home Care',
    description: "Join Bloom Home Care's care team. Hiring compassionate caregivers in Prosper, Frisco, McKinney, Allen, and Katy, TX.",
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://bloomhomecare.org/#business',
  name: 'Bloom Home Care',
  url: 'https://bloomhomecare.org',
  telephone: '+12819756044',
  description: 'Compassionate non-medical home care agency serving Greater Houston, TX. Hiring caregivers across Katy, Sugar Land, The Woodlands, and surrounding areas.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Katy',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.instagram.com/bloomhomecare/',
    'https://www.facebook.com/bloomhomecare',
  ],
}

const jobPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Home Caregiver / Companion Care Aide',
  description: 'Join Bloom Home Care as a home caregiver providing non-medical in-home care and companionship for seniors and adults in Katy, TX. Duties include companion care, daily living assistance, meal preparation, light housekeeping, and medication reminders.',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'Bloom Home Care',
    sameAs: 'https://bloomhomecare.org',
    logo: 'https://bloomhomecare.org/bloom-logo.png',
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Katy',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
  },
  employmentType: ['FULL_TIME', 'PART_TIME'],
  directApply: true,
  url: 'https://bloomhomecare.org/careers',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Careers', item: 'https://bloomhomecare.org/careers' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Careers />
    </>
  )
}
