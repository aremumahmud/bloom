'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas does Bloom Home Care serve?",
    answer:
      "We provide non-medical home care services throughout Katy, TX and surrounding areas in Harris County. If you don't see your city listed, please reach out — we may still be able to help.",
  },
  {
    question: "What types of home care services does Bloom Home Care offer?",
    answer:
      "Bloom Home Care provides a full range of non-medical home care services, including companion care, personal care and ADL assistance, meal preparation, light housekeeping, medication reminders, post-hospital transitional care, in-facility support, specialized care for conditions like Alzheimer's and dementia, end-of-life comfort care, and respite care for family caregivers. All care is non-medical — we do not provide skilled nursing or medical services.",
  },
  {
    question: "How does payment work with Bloom Home Care?",
    answer:
      "We keep billing straightforward. We accept credit and debit cards, ACH bank transfers, and personal checks. We can also assist families in preparing documentation to support long-term care insurance reimbursement claims. We do not currently accept Medicare or Medicaid.",
  },
  {
    question: "How do I get started with home care?",
    answer:
      "Getting started is simple and pressure-free. Call us at 281-975-6044 or submit a consultation request online. We'll schedule a time to listen, learn about your situation, and explore what care might look like — with no obligation. From there, we'll build a personalized care plan and match your loved one with the right caregiver.",
  },
  {
    question: "Do you provide 24/7 home care support?",
    answer:
      "Yes. We offer flexible scheduling to fit your family's needs — whether that's a few hours a week for companion care, daily visits, or full-time 24/7 care. We work around your schedule and adapt as needs change over time.",
  },
  {
    question: "How are your caregivers selected and trained?",
    answer:
      "Every Bloom Home Care caregiver undergoes a thorough background check, reference verification, and skills evaluation before joining our team. We select caregivers as much for their character, compassion, and reliability as for their professional experience. Ongoing training and close supervision ensure consistent, high-quality care.",
  },
  {
    question: "Can Bloom Home Care help someone living in an assisted living facility?",
    answer:
      "Absolutely. We provide supplemental in-facility care for clients who are already living in assisted living communities, memory care facilities, or nursing homes in the Katy, TX area. Our caregivers can provide additional one-on-one companionship, personal care, and support beyond what facility staff are able to offer.",
  },
  {
    question: "Is Bloom Home Care licensed and insured?",
    answer:
      "Yes. Bloom Home Care Home Care is fully licensed and insured to operate as a home care agency in Texas. We are privately owned and operated, and we carry liability insurance to protect both our clients and our caregivers.",
  },
];

// FAQ Schema markup for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function HomeFAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 id="faq-heading" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Frequently Asked Questions About Home Care in Katy, TX
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
            Common questions about our senior home care services in Katy, TX and surrounding communities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left font-serif text-lg text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-sans leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
