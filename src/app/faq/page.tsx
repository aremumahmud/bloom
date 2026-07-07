import type { Metadata } from 'next'
import FAQ from '@/views/FAQ'

export const metadata: Metadata = {
  title: 'Home Care FAQs | Bloom Home Care — Answers for Katy, TX Families',
  description: "Answers to your questions about non-medical home care, caregiver selection, costs, insurance, and getting started with Bloom Home Care in Prosper, Frisco, McKinney, Allen, and Katy, TX.",
  keywords: [
    'home care FAQ',
    'senior home care questions',
    'non-medical home care cost',
    'how to hire a caregiver',
    'home care insurance coverage',
    'long term care insurance home care',
    'home care Prosper TX questions',
    'home care Frisco TX questions',
    'home care Katy, TX',
    'Bloom Home Care FAQ',
  ],
  alternates: { canonical: 'https://bloomhomecare.org/faq' },
  openGraph: {
    title: 'Home Care FAQs | Bloom Home Care',
    description: 'Common questions about non-medical home care, caregiver quality, costs, and getting started. Serving Prosper, Frisco, McKinney, Allen, and Katy, TX.',
    url: 'https://bloomhomecare.org/faq',
    type: 'website',
    siteName: 'Bloom Home Care',
  },
  twitter: {
    card: 'summary',
    title: 'Home Care FAQs | Bloom Home Care',
    description: 'Answers to common questions about home care services, caregiver selection, costs, and getting started in Katy, TX.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What type of care does Bloom Home Care provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bloom Home Care provides non-medical home care and companionship services for seniors and adults who need support with daily living. Our services include companion care, assistance with activities of daily living (ADLs), light housekeeping, meal preparation, medication reminders, and care coordination. We do not provide medical or skilled nursing services.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve Prosper, Frisco, Allen, McKinney, Celina, Aubrey, Little Elm, The Colony, and the greater Katy, TX area. If you\'re unsure whether we serve your location, please contact us and we\'ll be happy to discuss your needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide 24-hour care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer flexible care schedules including hourly care, overnight care, and around-the-clock 24/7 support. We work with you to create a care plan that fits your specific needs and preferences.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help after a hospital stay or surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Our post-hospital support services help ensure a smooth transition home. We can assist with mobility, meal preparation, medication reminders, light housekeeping, and providing companionship during recovery — helping reduce the risk of readmission.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if home care is right for my loved one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Home care may be a good fit if your loved one needs help with daily activities, would benefit from companionship, or if family caregivers need support. Signs might include difficulty with housekeeping, forgetting meals or medications, or feeling isolated. We offer free consultations to help you understand your options.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens during the initial consultation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'During our consultation, we take time to listen and understand your unique situation. We\'ll discuss care needs, preferences, daily routines, and any concerns you may have. This conversation helps us create a personalized care plan that feels right for you and your family.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can care begin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We understand that care needs can arise unexpectedly. Once we\'ve had our initial consultation and created a care plan, we can typically begin services within a few days. For urgent situations, we do our best to accommodate faster timelines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I meet the caregiver before care begins?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we encourage this. We carefully match caregivers with clients based on needs, personality, and preferences. We\'re happy to arrange an introduction so you can feel confident and comfortable before care begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you select your caregivers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every Bloom Home Care caregiver goes through a thorough screening process including background checks, reference verification, and in-person interviews. We look for individuals who embody our values: patience, attentiveness, reliability, and genuine compassion. We only hire caregivers we would trust with our own family.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are your caregivers trained?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All caregivers receive training in best practices for non-medical home care, safety protocols, and communication. We also provide ongoing education and support to ensure our team continues to grow and provide exceptional care.',
      },
    },
    {
      '@type': 'Question',
      name: "What if my caregiver isn't a good fit?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Your comfort and trust are paramount. If for any reason you feel the match isn't right, please let us know. We'll work with you to find a caregiver who better suits your needs and preferences — no questions asked.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does home care cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cost of care varies based on the level of support needed, hours of care, and specific services required. We provide transparent pricing during our consultation and work with you to find a care plan that fits your budget. Please contact us for a personalized quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you accept insurance or Medicare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As a non-medical home care provider, our services are typically not covered by Medicare or traditional health insurance. However, long-term care insurance often covers non-medical home care. We recommend checking with your insurance provider. We can provide documentation to help with claims.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a minimum number of hours required?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We do have a minimum hour requirement per visit to ensure meaningful, consistent care. During your consultation, we\'ll discuss scheduling options that work best for your situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What forms of payment do you accept?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We accept several forms of payment for your convenience, including private pay (credit or debit card, ACH bank transfer, electronic invoice payment, and check). We work with you to find a payment arrangement that fits your situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you accept long-term care insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, clients may use active long-term care insurance benefits. The client or responsible party remains responsible for payment to the agency unless otherwise contractually arranged. We can provide required documentation to support your reimbursement claims.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there other approved payment sources?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In some cases, veterans benefits or other approved third-party funding sources may be applicable, if authorized. Please contact us to discuss your specific situation and we\'ll help determine what options may be available to you.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://bloomhomecare.org/faq' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FAQ />
    </>
  )
}
