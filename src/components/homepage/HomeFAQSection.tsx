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
    question: "What services does a home care agency in Katy, TX, provide?",
    answer:
      "A home care agency Katy, TX, families choose should provide support with daily living, companionship, personal care, respite care, dementia care, and flexible care plans based on each person's needs. Bloom Home Care helps seniors and adults stay safe, comfortable, and supported at home.",
  },
  {
    question: "How much does home care cost in Katy, TX, and does Medicare pay for it?",
    answer:
      "The cost of home care depends on the type of care, number of hours, schedule, and level of support needed. Medicare may cover some doctor-ordered home health services, but it usually does not cover non-medical personal care, homemaker services, or 24-hour care when those are the only services needed.",
  },
  {
    question: "How quickly can home care services begin?",
    answer:
      "Care can often begin after a consultation, care assessment, and caregiver match. The exact timeline depends on your loved one's needs, schedule, and caregiver availability. Bloom Home Care works with families to begin support as quickly and carefully as possible.",
  },
  {
    question: "Does Bloom Home Care provide 24/7 or overnight home care support?",
    answer:
      "Yes, Bloom Home Care can discuss overnight or 24/7 home care support based on your loved one's needs and caregiver availability. This may help seniors who need supervision, mobility support, personal care, reassurance, or a steady presence during the day and night.",
  },
  {
    question: "Are caregivers screened, trained, and matched to each client?",
    answer:
      "Yes. Every caregiver clears a criminal-history check and the required employee-registry screening, plus reference verification, before working with any client. Bloom Home Care understands that trust matters when inviting someone into your home, so caregiver matching is based on care needs, personality, schedule, and family preferences.",
  },
  {
    question: "Does Bloom Home Care provide Alzheimer's and dementia care?",
    answer:
      "Yes, Bloom Home Care provides support for individuals living with Alzheimer's, dementia, and memory-related changes. Care focuses on familiar routines, safety, patience, calm communication, and compassionate support for both the client and the family.",
  },
  {
    question: "Does Bloom Home Care provide home care outside Katy?",
    answer:
      "Yes. Katy is the main service area, but Bloom Home Care also supports nearby communities where care is available. Families often search for care in Cypress, Spring, The Woodlands, Sugar Land, Cinco Ranch, Fulshear, Richmond, Brookshire, West Houston, and surrounding areas.",
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
