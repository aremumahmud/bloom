'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";

const areas = [
  { name: "Katy", href: "/locations/katy-tx" },
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

        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          aria-label="Home care service areas"
          className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto"
        >
          {areas.map((area, index) => (
            <Link
              key={index}
              href={area.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-full font-sans text-sm text-foreground hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-200"
            >
              <MapPin size={13} className="text-primary flex-shrink-0" aria-hidden="true" />
              {area.name}, TX
            </Link>
          ))}
        </motion.nav>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-muted-foreground font-sans mt-8"
        >
          Don&apos;t see your city?{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Contact us
          </Link>{" "}
          — we may still be able to help.
        </motion.p>
      </div>
    </section>
  );
}
