'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
                alt="Founder of Bloom Home Care"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-2 space-y-5">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">
              Nurse-Led Home Care in Katy, TX
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed text-sm md:text-base">
              <p>
                Jackie Herrera, BSN, RN, CMSRN, brings over 22 years of nursing experience to Bloom Home Care.
                A proud graduate of Prairie View A&amp;M University, Jackie has built a career defined by clinical
                excellence and a deep commitment to human dignity in care.
              </p>
              <p>
                Before founding Bloom Home Care, Jackie helped launch and grow two separate home care agencies,
                overseeing operations and clinical programs from the ground up. She also managed a 28-bed hospital
                unit — giving her firsthand understanding of the systems gaps that leave families without consistent
                support after discharge.
              </p>
              <p>
                Bloom Home Care is nurse-owned and nurse-led, meaning clinical judgment and compassionate standards
                are embedded in everything we do — from how we hire caregivers to how we build care plans.
              </p>
            </div>
            <blockquote className="border-l-2 border-primary pl-4 italic text-foreground font-sans text-base leading-relaxed">
              "I've spent over two decades at the bedside and behind the scenes of healthcare. I started Bloom
              because I knew there was a better way — one that actually centers the person, not just the task."
            </blockquote>
            <p className="text-foreground font-sans text-sm font-medium">
              — Jackie Herrera, BSN, RN, CMSRN, Founder
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
