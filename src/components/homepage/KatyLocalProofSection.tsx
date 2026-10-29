'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationModal } from "@/components/homepage/ConsultationModal";
import { useIsMobile } from "@/hooks/use-mobile";

const ADDRESS = "4338 San Pellegrino Pl, Katy, TX 77493, United States";
// TODO: swap for the exact embed URL from Bloom's official Google Business
// Profile listing once provided (see "Client Items Needed"). This embed is
// built from the verified street address and will show the correct pin,
// but a GBP-sourced embed link will tie directly to the live listing.
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export function KatyLocalProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();
  const [consultationOpen, setConsultationOpen] = useState(false);

  const handleCTAClick = () => {
    if (isMobile) {
      window.location.href = "tel:+12819756044";
    } else {
      setConsultationOpen(true);
    }
  };

  return (
    <>
      <section ref={ref} className="section-padding bg-card" aria-labelledby="katy-local-heading">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7 }}
            >
              <h2
                id="katy-local-heading"
                className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight"
              >
                Local Home Care Serving Katy, TX
              </h2>

              <div className="space-y-5 text-muted-foreground font-sans text-base md:text-lg leading-relaxed mb-8">
                <p>
                  Bloom Home Care is locally based in Katy and provides personalized, non-medical home care for
                  seniors and families throughout Katy and Greater Houston.
                </p>
                <p>
                  Our caregivers support everyday needs including personal care, companionship, dementia care,
                  respite care, meal preparation, mobility, transportation, medication reminders, and
                  post-hospital routines.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 font-sans text-foreground">
                  <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>{ADDRESS}</span>
                </div>
                <a
                  href="tel:+12819756044"
                  className="flex items-center gap-3 font-sans text-foreground hover:text-primary transition-colors"
                  aria-label="Call Bloom Home Care at 281-975-6044"
                >
                  <Phone size={18} className="text-primary flex-shrink-0" />
                  <span>281-975-6044</span>
                </a>
              </div>

              {/* Map — below address/phone on mobile, beside content on desktop */}
              <div className="lg:hidden rounded-2xl overflow-hidden border border-border shadow-sm mb-8 aspect-[4/3]">
                <iframe
                  src={MAP_EMBED_SRC}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bloom Home Care location in Katy, TX"
                />
              </div>

              <Button variant="premium" size="xl" onClick={handleCTAClick}>
                Schedule a Free Consultation
              </Button>
            </motion.div>

            {/* Map — desktop only, beside content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="hidden lg:block rounded-2xl overflow-hidden border border-border shadow-sm aspect-square"
            >
              <iframe
                src={MAP_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bloom Home Care location in Katy, TX"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <ConsultationModal open={consultationOpen} onOpenChange={setConsultationOpen} />
    </>
  );
}
