'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CTASection } from "@/components/homepage/CTASection";


const faqCategories = [
  {
    title: "About Our Services",
    questions: [
      {
        question: "What type of care does Bloom Home Care provide?",
        answer:
          "Bloom Home Care provides non-medical home care and companionship services for seniors and adults who need support with daily living. Our services include companion care, assistance with activities of daily living (ADLs), light housekeeping, meal preparation, medication reminders, and care coordination. We do not provide medical or skilled nursing services.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We serve Katy, TX and surrounding areas. If you're unsure whether we serve your location, please contact us and we'll be happy to discuss your needs.",
      },
      {
        question: "Do you provide 24-hour care?",
        answer:
          "Yes, we offer flexible care schedules including hourly care, overnight care, and around-the-clock 24/7 support. We work with you to create a care plan that fits your specific needs and preferences.",
      },
      {
        question: "Can you help after a hospital stay or surgery?",
        answer:
          "Absolutely. Our post-hospital support services help ensure a smooth transition home. We can assist with mobility, meal preparation, medication reminders, light housekeeping, and providing companionship during recovery — helping reduce the risk of readmission.",
      },
    ],
  },
  {
    title: "Getting Started",
    questions: [
      {
        question: "How do I know if home care is right for my loved one?",
        answer:
          "Home care may be a good fit if your loved one needs help with daily activities, would benefit from companionship, or if family caregivers need support. Signs might include difficulty with housekeeping, forgetting meals or medications, or feeling isolated. We offer free consultations to help you understand your options.",
      },
      {
        question: "What happens during the initial consultation?",
        answer:
          "During our consultation, we take time to listen and understand your unique situation. We'll discuss care needs, preferences, daily routines, and any concerns you may have. This conversation helps us create a personalized care plan that feels right for you and your family.",
      },
      {
        question: "How quickly can care begin?",
        answer:
          "We understand that care needs can arise unexpectedly. Once we've had our initial consultation and created a care plan, we can typically begin services within a few days. For urgent situations, we do our best to accommodate faster timelines.",
      },
      {
        question: "Can I meet the caregiver before care begins?",
        answer:
          "Yes, we encourage this. We carefully match caregivers with clients based on needs, personality, and preferences. We're happy to arrange an introduction so you can feel confident and comfortable before care begins.",
      },
    ],
  },
  {
    title: "Caregivers & Quality",
    questions: [
      {
        question: "How do you select your caregivers?",
        answer:
          "Every Bloom Home Care caregiver goes through a thorough screening process including background checks, reference verification, and in-person interviews. We look for individuals who embody our values: patience, attentiveness, reliability, and genuine compassion. We only hire caregivers we would trust with our own family.",
      },
      {
        question: "Are your caregivers trained?",
        answer:
          "Yes. All caregivers receive training in best practices for non-medical home care, safety protocols, and communication. We also provide ongoing education and support to ensure our team continues to grow and provide exceptional care.",
      },
      {
        question: "What if my caregiver isn't a good fit?",
        answer:
          "Your comfort and trust are paramount. If for any reason you feel the match isn't right, please let us know. We'll work with you to find a caregiver who better suits your needs and preferences — no questions asked.",
      },
    ],
  },
  {
    title: "Costs & Payment",
    questions: [
      {
        question: "How much does home care cost?",
        answer:
          "The cost of care varies based on the level of support needed, hours of care, and specific services required. We provide transparent pricing during our consultation and work with you to find a care plan that fits your budget. Please contact us for a personalized quote.",
      },
      {
        question: "Do you accept insurance or Medicare?",
        answer:
          "As a non-medical home care provider, our services are typically not covered by Medicare or traditional health insurance. However, long-term care insurance often covers non-medical home care. We recommend checking with your insurance provider. We can provide documentation to help with claims.",
      },
      {
        question: "Is there a minimum number of hours required?",
        answer:
          "We do have a minimum hour requirement per visit to ensure meaningful, consistent care. During your consultation, we'll discuss scheduling options that work best for your situation.",
      },
    ],
  },
  {
    title: "Payment Methods",
    questions: [
      {
        question: "What forms of payment do you accept?",
        answer:
          "We accept several forms of payment for your convenience, including private pay (credit or debit card, ACH bank transfer, electronic invoice payment, and check). We work with you to find a payment arrangement that fits your situation.",
      },
      {
        question: "Do you accept long-term care insurance?",
        answer:
          "Yes, clients may use active long-term care insurance benefits. The client or responsible party remains responsible for payment to the agency unless otherwise contractually arranged. We can provide required documentation to support your reimbursement claims.",
      },
      {
        question: "Are there other approved payment sources?",
        answer:
          "In some cases, veterans benefits or other approved third-party funding sources may be applicable, if authorized. Please contact us to discuss your specific situation and we'll help determine what options may be available to you.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/15 via-background to-accent/10">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-5 left-0 right-0 z-10">
          <div className="container-narrow">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>FAQ</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        <div className="relative section-padding py-20 md:py-28">
          <div className="container-narrow text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary font-sans text-sm tracking-widest uppercase mb-4"
            >
              Frequently Asked Questions
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl text-foreground mb-6"
            >
              Questions we're often asked
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto"
            >
              We understand that choosing care is a significant decision. Here are
              answers to some common questions — and we're always here to discuss
              your specific needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding pt-0">
        <div className="container-narrow">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-16 last:mb-0"
            >
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="border border-border rounded-lg px-6 bg-card"
                  >
                    <AccordionTrigger className="text-left font-sans text-foreground hover:no-underline py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-sans leading-relaxed pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-2xl md:text-3xl text-foreground mb-4"
          >
            Still have questions?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground font-sans mb-8 max-w-xl mx-auto"
          >
            We're here to help. Reach out to us directly and we'll be happy to
            answer any questions you may have about our care services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+12819756044"
              className="inline-flex items-center justify-center gap-2 text-primary font-sans hover:underline"
            >
              Call 281-975-6044
            </a>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <a
              href="mailto:info@bloomhomecare.org"
              className="inline-flex items-center justify-center gap-2 text-primary font-sans hover:underline"
            >
              Email info@bloomhomecare.org
            </a>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default FAQ;
