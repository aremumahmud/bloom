import type { Metadata } from 'next'
import WoodlandsLocationPage from '@/views/services/WoodlandsLocationPage'

export const metadata: Metadata = {
  title: 'Home Care Agency in The Woodlands, TX | Bloom Home Care',
  description: 'Bloom Home Care is a home care agency in The Woodlands, TX. Screened caregivers, flexible schedules, and free in-home assessments. Call 281-975-6044.',
  alternates: { canonical: 'https://bloomhomecare.org/locations/the-woodlands-tx' },
  openGraph: { title: 'Home Care Agency in The Woodlands, TX | Bloom Home Care', url: 'https://bloomhomecare.org/locations/the-woodlands-tx', type: 'website', siteName: 'Bloom Home Care' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://bloomhomecare.org/locations/the-woodlands-tx#business',
  name: 'Bloom Home Care',
  description: 'Licensed home care agency (Texas HHS License #024086) providing personal care, companion care, dementia care, respite, and 24-hour home care in The Woodlands, TX and south Montgomery County.',
  url: 'https://bloomhomecare.org/locations/the-woodlands-tx',
  telephone: '+12819756044',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Katy',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'The Woodlands', containedInPlace: { '@type': 'State', name: 'Texas' } },
    '77380',
    '77381',
    '77382',
    '77384',
    '77385',
  ],
  parentOrganization: { '@id': 'https://bloomhomecare.org/#business' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://bloomhomecare.org/locations' },
    { '@type': 'ListItem', position: 3, name: 'Home Care in The Woodlands, TX', item: 'https://bloomhomecare.org/locations/the-woodlands-tx' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a home care agency in The Woodlands, TX actually do?',
      acceptedAnswer: { '@type': 'Answer', text: "A home care agency sends trained caregivers into the home so someone can keep living there safely. In The Woodlands, Bloom Home Care handles personal care like bathing and dressing, meal preparation, medication reminders, light housekeeping, transportation, and companionship. It is non-medical support, shaped around the client's routine instead of the other way around." },
    },
    {
      '@type': 'Question',
      name: 'How soon can home care start in The Woodlands?',
      acceptedAnswer: { '@type': 'Answer', text: 'Bloom Home Care responds within one business day, and care can often start two to five business days after the free in-home assessment and completed service agreement, depending on the schedule, level of care, location, and caregiver availability. For urgent situations like a discharge from Memorial Hermann The Woodlands or Houston Methodist The Woodlands, call and we will do our best to move quickly.' },
    },
    {
      '@type': 'Question',
      name: 'Do you run background checks on caregivers?',
      acceptedAnswer: { '@type': 'Answer', text: "Yes. Every caregiver clears a criminal-history check, the required employee-registry screening, and reference checks before being placed with a client. Texas also licenses agencies like Bloom, and Bloom's license number 024086 can be verified through Texas Health and Human Services." },
    },
    {
      '@type': 'Question',
      name: 'Are your caregivers employees or independent contractors?',
      acceptedAnswer: { '@type': 'Answer', text: 'All caregivers are W-2 employees, not independent contractors. Bloom handles payroll, taxes, scheduling, supervision, and ongoing support, so families never have to act as the employer.' },
    },
    {
      '@type': 'Question',
      name: 'Is 24-hour home care available in The Woodlands?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Bloom provides overnight, extended-hour, and full 24-hour care throughout The Woodlands using rotating caregiver shifts, with awake overnight caregivers for anyone at risk of falls or wandering. The exact shift pattern and start date are worked out after the assessment.' },
    },
    {
      '@type': 'Question',
      name: 'How is home care different from home health care?',
      acceptedAnswer: { '@type': 'Answer', text: 'Home care is non-medical: help with bathing, meals, errands, and companionship. Home health care is skilled, doctor-ordered nursing or therapy, usually short-term after an illness or surgery and often billed to Medicare. Many families in The Woodlands use both together, and Bloom coordinates its schedule around the home health team.' },
    },
    {
      '@type': 'Question',
      name: 'Will Medicare or insurance cover home care in Texas?',
      acceptedAnswer: { '@type': 'Answer', text: "In most cases, no. Traditional Medicare does not pay for non-medical home care, and Bloom does not bill Medicaid or STAR+PLUS. The route that works for many families is an active long-term care insurance policy, which can cover a meaningful share of the cost. Bloom's team walks through the specifics at the free assessment." },
    },
    {
      '@type': 'Question',
      name: 'Which parts of The Woodlands does Bloom Home Care serve?',
      acceptedAnswer: { '@type': 'Answer', text: 'All of them. Caregivers work across the 77380, 77381, 77382, 77384, and 77385 zip codes, including Grogan’s Mill, Alden Bridge, Sterling Ridge, Creekside Park, Cochran’s Crossing, Panther Creek, College Park, and Indian Springs, plus Town Center, Hughes Landing, and the Woodlands Parkway and I-45 corridors.' },
    },
    {
      '@type': 'Question',
      name: 'Is there a minimum number of hours, and can the schedule change?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most visits carry a four-hour minimum, though something shorter may work depending on location, the services requested, and caregiver availability. Hours can go up or down or pause entirely as needs change, and there is no fixed-term contract to sign.' },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <WoodlandsLocationPage />
    </>
  )
}
