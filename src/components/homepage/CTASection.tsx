'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Facebook, Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ConsultationModal } from "@/components/homepage/ConsultationModal";

export function CTASection() {
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
      <section ref={ref} className="section-padding bg-sage-light">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Schedule Your Free Home Care Consultation Today
            </h2>

            <p className="text-lg text-muted-foreground font-sans mb-4 max-w-xl mx-auto">
              If your loved one needs support staying at home safely and independently, we're here to help.
              A consultation is free with no obligation. We'll listen to your situation, answer your questions,
              and create a personalized plan if Bloom Home Care is a good fit for your family.
            </p>

            <p className="text-lg text-muted-foreground font-sans mb-10 max-w-xl mx-auto">
              If you are looking for a home care agency Katy, TX, that families can trust, Bloom Home Care is
              here to listen, guide, and help you take the next step with confidence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Button variant="premium" size="xl" onClick={handleCTAClick} className="group">
                Request a Free Consultation
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
              <a
                href="tel:+12819756044"
                className="inline-flex items-center gap-2 text-foreground font-sans font-medium hover:text-primary transition-colors text-base"
                aria-label="Call Bloom Home Care at 281-975-6044"
              >
                <Phone size={18} className="text-primary" />
                281-975-6044
              </a>
            </div>

            <div className="flex items-center justify-center gap-4 mt-2">
              <a
                href="https://www.instagram.com/bloomhomecare/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/bloomhomecare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>

            <p className="text-sm text-muted-foreground font-sans mt-4 tracking-wide">
              Licensed &amp; Insured · info@bloomhomecare.org
            </p>
          </motion.div>
        </div>
      </section>

      <ConsultationModal open={consultationOpen} onOpenChange={setConsultationOpen} />
    </>
  );
}
