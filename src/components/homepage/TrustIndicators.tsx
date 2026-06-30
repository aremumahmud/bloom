'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, HeartHandshake, FileText, MessageCircle } from "lucide-react";

const indicators = [
  {
    icon: ShieldCheck,
    title: "Trustworthy & Compassionate Caregivers",
    description:
      "Every Bloom Home Care caregiver is thoroughly background-checked, reference-verified, and trained — selected as much for their character and compassion as their competence.",
  },
  {
    icon: FileText,
    title: "Customized Care Plans",
    description:
      "No two individuals are alike. We craft each care plan around your loved one's specific routines, preferences, and daily goals — then revisit it as needs evolve.",
  },
  {
    icon: HeartHandshake,
    title: "24/7 Availability for Emergencies",
    description:
      "We're here when you need us most. Our team is available around the clock for emergencies, giving families true peace of mind day and night.",
  },
  {
    icon: MessageCircle,
    title: "Dedicated to Katy, TX & Surrounding Areas",
    description:
      "We are deeply rooted in the Katy community, proudly serving local families with consistency, reliability, and genuine care for the people we serve.",
  },
];

export function TrustIndicators() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card" aria-labelledby="trust-heading">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 id="trust-heading" className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Why Families Trust Bloom Home Care
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
            Licensed &amp; insured. Serving Katy, TX and surrounding areas with care
            that is intentional, consistent, and built on trust and genuine commitment to well-being.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center p-6 rounded-xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sage-light mb-4">
                <item.icon size={22} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-base text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
