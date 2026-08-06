import type { Metadata } from 'next'
import CypressLocationPage from '@/views/services/CypressLocationPage'

export const metadata: Metadata = {
  title: 'Home Care Agency in Cypress, TX | Bloom Home Care',
  description: 'Bloom Home Care is a trusted home care agency in Cypress, TX. Screened caregivers, flexible schedules, free in-home assessments. Call 281-975-6044.',
  alternates: { canonical: 'https://bloomhomecare.org/locations/cypress-tx' },
  openGraph: { title: 'Home Care Agency in Cypress, TX | Bloom Home Care', url: 'https://bloomhomecare.org/locations/cypress-tx', type: 'website', siteName: 'Bloom Home Care' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://bloomhomecare.org/locations/cypress-tx#business',
  name: 'Bloom Home Care',
  description: 'Licensed home care agency (Texas HHS License #024086) providing personal care, companion care, dementia care, respite, and 24-hour home care in Cypress, TX and northwest Houston.',
  url: 'https://bloomhomecare.org/locations/cypress-tx',
  telephone: '+12819756044',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cypress',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Cypress', containedInPlace: { '@type': 'State', name: 'Texas' } },
    '77429',
    '77433',
  ],
  parentOrganization: { '@id': 'https://bloomhomecare.org/#business' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://bloomhomecare.org/locations' },
    { '@type': 'ListItem', position: 3, name: 'Home Care in Cypress, TX', item: 'https://bloomhomecare.org/locations/cypress-tx' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a home care agency in Cypress, TX actually do?',
      acceptedAnswer: { '@type': 'Answer', text: "A home care agency sends trained caregivers into your home so you or your loved one can keep living there safely. In Cypress, Bloom Home Care handles personal care like bathing and dressing, meal preparation, medication reminders, light housekeeping, transportation, and companionship. It's non-medical support, scheduled around your life rather than the other way around." },
    },
    {
      '@type': 'Question',
      name: 'How quickly can care start?',
      acceptedAnswer: { '@type': 'Answer', text: "We respond within one business day, and care can often begin within two to five business days of your free in-home assessment and completed service agreement, depending on your schedule, care needs, location, and caregiver availability. For urgent situations, like a hospital discharge from Houston Methodist Cypress or HCA North Cypress, call 281-975-6044 and we'll do our best to move faster." },
    },
    {
      '@type': 'Question',
      name: 'Are your caregivers background checked?',
      acceptedAnswer: { '@type': 'Answer', text: "Yes. Every Bloom caregiver clears a criminal-history check and the required employee-registry screening, plus reference verification, before working with any client. Texas also requires agencies like ours to hold a state license, which you're welcome to verify with Texas Health and Human Services (Bloom's license number is 024086)." },
    },
    {
      '@type': 'Question',
      name: 'Do you provide 24-hour home care in Cypress?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide overnight, extended-hour, and 24-hour home care throughout Cypress using rotating caregiver shifts, including awake overnight caregivers for clients at risk of falls or wandering. The shift structure and start date are confirmed after your assessment and depend on your needs and caregiver availability.' },
    },
    {
      '@type': 'Question',
      name: "What's the difference between home care and home health care?",
      acceptedAnswer: { '@type': 'Answer', text: 'Home care is non-medical support with daily living: bathing, meals, errands, companionship. Home health care is skilled nursing or therapy ordered by a doctor, usually short-term after an illness or surgery, and often covered by Medicare. Many Cypress families use both at once, and we coordinate schedules with home health providers so nothing overlaps or slips through.' },
    },
    {
      '@type': 'Question',
      name: 'Does Medicare or insurance pay for home care in Texas?',
      acceptedAnswer: { '@type': 'Answer', text: "Traditional Medicare generally does not cover non-medical home care. Bloom Home Care is a private-pay agency and does not accept Medicaid or STAR+PLUS, but many families use active long-term care insurance benefits toward the cost. We'll help you sort the options during your free assessment." },
    },
    {
      '@type': 'Question',
      name: 'Which Cypress neighborhoods do you serve?',
      acceptedAnswer: { '@type': 'Answer', text: 'All of them. Our caregivers work throughout 77429 and 77433, including Bridgeland, Towne Lake, Fairfield, Coles Crossing, Cypress Creek Lakes, Blackhorse Ranch, and Stone Gate, plus nearby communities along US 290 and the Grand Parkway.' },
    },
    {
      '@type': 'Question',
      name: 'Is there a minimum number of hours, and can I change the schedule?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most services have a four-hour minimum per visit, though shorter visits may be possible depending on your location, the services requested, and caregiver availability. You can add, reduce, or pause hours as needs change, and there is no fixed-term contract to sign.' },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CypressLocationPage />
    </>
  )
}
