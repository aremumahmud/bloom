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
    description: "Our home base. Serving families across Katy and the surrounding 77449, 77450, and 77494 zip codes with consistent, relationship-centered care.",
    isPrimary: true,
  },
  {
    name: "Cypress, TX",
    href: "/locations/cypress-tx",
    description: "Providing in-home care to families in Cypress, including the FM 1960 and Barker Cypress corridors.",
    isPrimary: false,
  },
  {
    name: "Spring, TX",
    href: "/locations/spring-tx",
    description: "Serving families in Spring, TX with the same care and reliability we bring to every community we work in.",
    isPrimary: false,
  },
  {
    name: "The Woodlands, TX",
    href: "/locations/the-woodlands-tx",
    description: "Home care support in The Woodlands — consistent, caregiver-matched, and tailored to your family's schedule.",
    isPrimary: false,
  },
  {
    name: "Sugar Land, TX",
    href: "/locations/sugar-land-tx",
    description: "Bringing our nurse-led home care approach to families across Fort Bend County, including Sugar Land and Missouri City.",
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
            Proudly Serving Katy, TX &amp; Surrounding Areas
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
            Bloom Home Care provides compassionate in-home care services throughout Katy, TX
            and nearby communities — bringing consistent, trusted support close to home
            where families need it most.
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
