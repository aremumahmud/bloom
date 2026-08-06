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
    question: "What is a home care agency?",
    answer:
      "A home care agency provides non-medical personal care and companionship services in a person's home. Unlike hiring an independent caregiver on your own, a licensed home care agency handles background checks, scheduling, insurance, and supervision. At Bloom Home Care, we are licensed in Texas and carry full liability coverage — so your family is protected at every step.",
  },
  {
    question: "What does a home care agency in Katy, TX actually do?",
    answer:
      "In practical terms, we send trained, background-checked caregivers to help your loved one with daily life at home — things like bathing, dressing, medication reminders, meal preparation, light housekeeping, and companionship. We also support family caregivers with respite care and work with clients coming home after a hospital stay.",
  },
  {
    question: "How is Bloom Home Care different from a staffing agency?",
    answer:
      "A staffing agency places workers and steps back. Bloom Home Care is an ongoing partner in your loved one's care. We supervise our caregivers, create and adjust care plans, conduct regular check-ins with families, and remain involved as needs evolve. As a nurse-founded agency, clinical judgment and compassionate standards are built into everything we do.",
  },
  {
    question: "What types of care does Bloom Home Care offer?",
    answer:
      "We offer personal care (bathing, dressing, grooming, toileting), companion care, respite care for family caregivers, dementia and memory care, end-of-life comfort care, and in-facility companion support for those in assisted living or nursing communities. All care is non-medical — we do not provide skilled nursing or medical services.",
  },
  {
    question: "How do I know if home care is right for my loved one?",
    answer:
      "If your loved one struggles with daily tasks, lives alone and feels isolated, has recently been discharged from the hospital, or if you as a family caregiver are feeling burned out — home care may be exactly the right fit. The best way to find out is to talk with our team. We'll help you think through the situation honestly and without pressure.",
  },
  {
    question: "How much does home care cost in Katy, TX?",
    answer:
      "Home care costs vary based on the level of care, number of hours, and schedule. We encourage families to contact us for a free consultation so we can give you accurate information based on your specific situation. We do not currently accept Medicare or Medicaid, though we can provide documentation to support long-term care insurance reimbursement claims.",
  },
  {
    question: "How do I start home care services with Bloom Home Care?",
    answer:
      "Simply reach out — by phone, online form, or email. Our team will schedule a no-obligation consultation, listen to your loved one's needs, and walk you through what care would look like. If it's a good fit, we'll build a personalized care plan, match a caregiver, and set a start date. From first call to first visit, we aim to make the process as smooth as possible.",
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
