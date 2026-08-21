'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const areas = [
  {
    name: "Katy, TX",
    href: "/locations/katy-tx",
    description: "Our primary service area where we've built deep community roots and local expertise. We're proud to serve families throughout Katy with personalized, compassionate care.",
    isPrimary: true,
  },
  {
    name: "Cypress, TX",
    href: "/locations/cypress-tx",
    description: "Serving families in Cypress with the same commitment to quality, relationship-centered care we provide in Katy. Personalized support for your loved one's unique needs.",
    isPrimary: false,
  },
  {
    name: "Spring, TX",
    href: "/locations/spring-tx",
    description: "Providing flexible, compassionate in-home care for seniors and adults in Spring. We customize our services to fit your family's specific situation and preferences.",
    isPrimary: false,
  },
  {
    name: "The Woodlands, TX",
    href: "/locations/the-woodlands-tx",
    description: "Delivering personalized care in The Woodlands with the same dedication to dignity, independence, and comfort you'll find throughout our service areas.",
    isPrimary: false,
  },
  {
    name: "Sugar Land, TX",
    href: "/locations/sugar-land-tx",
    description: "Serving families in Sugar Land with experienced caregivers trained to provide compassionate, flexible support tailored to each person's unique needs.",
    isPrimary: false,
  },
];

export function ServiceAreaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section-padding"
      aria-labelledby="service-area-heading"
    >
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <MapPin size={18} aria-hidden="true" />
            <span className="font-sans text-xs tracking-widest uppercase">Service Areas</span>
          </div>
          <h2
            id="service-area-heading"
            className="font-serif text-3xl md:text-4xl text-foreground mb-4"
          >
            Proudly Serving Katy and Surrounding Communities
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
            Bloom Home Care proudly serves families across the greater Houston area. Katy is our home base,
            and we're committed to providing the same quality, compassionate care to nearby communities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
        >
          {areas.map((area, index) => (
            <Link
              key={index}
              href={area.href}
              className={`group flex flex-col gap-3 p-6 rounded-xl border transition-all duration-300 hover:shadow-md ${
                area.isPrimary
                  ? "bg-primary/5 border-primary/30 hover:border-primary/50 lg:col-span-1"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-primary flex-shrink-0" aria-hidden="true" />
                <h3 className={`font-sans font-semibold text-sm ${area.isPrimary ? "text-primary" : "text-foreground"}`}>
                  {area.name}
                  {area.isPrimary && <span className="ml-2 text-xs font-normal text-muted-foreground">(Primary)</span>}
                </h3>
              </div>
              <p className="text-muted-foreground font-sans text-xs leading-relaxed">
                {area.description}
              </p>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Button variant="premium-outline" size="lg" asChild>
            <Link href="/contact">Contact Us About Service in Your Area</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
