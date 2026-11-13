'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const sections = [
  {
    title: "Information We Collect",
    body: [
      "We collect information you provide directly to us, such as when you request a free consultation, submit a contact or care request form, sign up for our newsletter, or call our office. This may include your name, phone number, email address, mailing address, and details about the care needs of you or your loved one.",
      "We also automatically collect certain technical information when you visit our website, such as your IP address, browser type, device information, pages visited, and referring website, through cookies and similar tracking technologies, including Google Analytics and Google Ads conversion tracking.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use the information we collect to respond to your inquiries, schedule and conduct in-home assessments, provide the non-medical home care services you request, communicate with you about your care plan or our services, send newsletters or educational content you have opted into, and improve our website and services.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    title: "Cookies and Analytics",
    body: [
      "Our website uses cookies and similar technologies, including Google Analytics and Google Ads, to understand how visitors use our site and to measure the effectiveness of our advertising. These tools may collect information such as pages viewed, time spent on the site, and whether a visit resulted in a call or form submission. You can disable cookies through your browser settings, though some site features may not function properly without them.",
    ],
  },
  {
    title: "How We Share Information",
    body: [
      "We may share your information with caregivers and staff directly involved in providing your care, service providers who help us operate our business (such as scheduling, payment processing, or communication tools), and as required by law or to protect the rights, property, or safety of Bloom Home Care, our clients, or the public.",
      "We do not share your information with third parties for their own marketing purposes.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We take reasonable administrative, technical, and physical measures designed to protect your personal information from unauthorized access, use, or disclosure. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You may opt out of marketing emails at any time by using the unsubscribe link included in those emails. You may also contact us directly to ask what information we hold about you, to request a correction, or to request that we delete information that is not required for an active care record or legal purposes.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "Our website and services are intended for adults seeking home care information or services for themselves or a family member. We do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. The \"Last updated\" date below reflects the most recent revision.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "If you have questions about this Privacy Policy or how we handle your information, please contact us at info@bloomhomecare.org or call 281-975-6044.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/15 via-background to-accent/10">
        <div className="absolute top-5 left-0 right-0 z-10">
          <div className="container-narrow">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        <div className="relative section-padding py-20 md:py-24">
          <div className="container-narrow text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl text-foreground mb-4"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground font-sans text-sm"
            >
              Last updated November 2026
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow max-w-3xl mx-auto">
          <p className="text-muted-foreground font-sans leading-relaxed mb-10">
            Bloom Home Care ("Bloom," "we," "us," or "our") respects your privacy. This Privacy Policy explains
            what information we collect through bloomhomecare.org and our care services, how we use it, and the
            choices you have. By using our website or services, you agree to the practices described here.
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground font-sans text-sm md:text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
