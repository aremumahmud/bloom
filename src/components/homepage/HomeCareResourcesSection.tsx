'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const resources = [
  {
    title: "Home Care Cost in Katy, TX",
    href: "/blog/home-care-cost-in-katy-tx",
    image: "/blog/home-care-cost-in-katy-tx.jpg",
  },
  {
    title: "What to Expect During Your First Home Care Consultation",
    href: "/blog/what-to-expect-home-care-consultation",
    image: "/blog/what-to-expect-home-care-consultation.jpg",
  },
  {
    title: "What Should You Ask Before Hiring a Home Caregiver?",
    href: "/blog/questions-to-ask-before-hiring-a-caregiver",
    image: "/blog/questions-to-ask-before-hiring-a-caregiver.jpg",
  },
  {
    title: "Signs a Senior May Need Home Care",
    href: "/blog/signs-a-senior-needs-home-care",
    image: "/blog/signs-a-senior-needs-home-care.jpg",
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
                className="group flex flex-col h-full rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col gap-3 p-5 flex-1">
                  <p className="font-sans font-semibold text-foreground text-sm leading-snug flex-1">
                    {resource.title}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-sans text-xs font-medium">
                    Read More
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
