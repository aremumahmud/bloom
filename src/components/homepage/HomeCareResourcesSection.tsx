'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

const resources = [
  {
    title: "Home Care Cost in Katy, TX",
    href: "/blog/home-care-cost-in-katy-tx",
  },
  {
    title: "What to Expect During Your First Home Care Consultation",
    href: "/blog/what-to-expect-home-care-consultation",
  },
  {
    title: "What Should You Ask Before Hiring a Home Caregiver?",
    href: "/blog/questions-to-ask-before-hiring-a-caregiver",
  },
  {
    title: "Signs a Senior May Need Home Care",
    href: "/blog/signs-a-senior-needs-home-care",
  },
];

export function HomeCareResourcesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding" aria-labelledby="resources-heading">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2
            id="resources-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4"
          >
            Home Care Resources for Katy Families
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-xl mx-auto">
            Helpful guides to make home care decisions easier for your family.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {resources.map((resource, i) => (
            <motion.div
              key={resource.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={resource.href}
                className="group flex flex-col gap-3 p-6 h-full rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <BookOpen size={20} className="text-primary flex-shrink-0" aria-hidden="true" />
                <p className="font-sans font-semibold text-foreground text-sm leading-snug flex-1">
                  {resource.title}
                </p>
                <span className="inline-flex items-center gap-1 text-primary font-sans text-xs font-medium">
                  Read More
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
