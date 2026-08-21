'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import founderPortrait from "@/assets/founder-portrait.jpg";

export function FounderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-10 items-center"
        >
          {/* Portrait */}
          <div className="flex justify-center md:justify-end">
            <div className="w-52 h-64 rounded-2xl overflow-hidden shadow-md">
              <img
                src={founderPortrait.src}
                alt="Jackeline Herrera, BSN, RN, CMSRN, Founder of Bloom Home Care"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-2 space-y-5">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">
              Meet the Founder Behind Bloom Home Care
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed text-sm md:text-base">
              <p>
                Bloom Home Care was founded by Jackeline "Jackie" Herrera, BSN, RN, CMSRN, a registered nurse
                with more than 22 years of experience across home health, hospital care, and healthcare
                leadership. Jackie earned her Bachelor of Science in Nursing from Prairie View A&amp;M University
                and holds the nationally recognized Certified Medical-Surgical Registered Nurse (CMSRN) credential.
              </p>
              <p>
                Over the years, she founded and operated two home health agencies and went on to lead a busy
                28-bed hospital unit as Nurse Manager, overseeing more than 60 caregivers along with daily
                operations, patient safety, and quality of care. That rare combination of business ownership,
                bedside nursing, and clinical leadership shapes the standard of care behind Bloom Home Care today.
              </p>
              <p>
                Through all of it, Jackie kept noticing the same gap. Many patients were well enough to leave
                the hospital but not quite ready to manage everyday life on their own, and families were doing
                their best to support aging parents while balancing careers, children, and sometimes hundreds
                of miles of distance. What these families needed was not more medical treatment. They needed a
                caregiver they could truly trust.
              </p>
              <p>
                That belief became Bloom Home Care, a home care agency in Katy, TX, that is proudly nurse-owned
                and nurse-led. For Jackie, the goal was never to open just another agency. It was to build the
                kind of agency she would confidently trust with her own family.
              </p>
            </div>
            <blockquote className="border-l-2 border-primary pl-4 italic text-foreground font-sans text-base leading-relaxed">
              "Before we make any decision, we ask ourselves one question: if these were my own parents, what
              would I want their care to look like? That question guides everything we do."
            </blockquote>
            <p className="text-foreground font-sans text-sm font-medium">
              Jackie Herrera, Founder and Director, Bloom Home Care
            </p>
            <div className="pt-2">
              <Button variant="subtle" size="lg" asChild>
                <Link href="/our-story">Learn More About Our Story</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
