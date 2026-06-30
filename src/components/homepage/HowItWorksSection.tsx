'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import caregiverElderlyImage from "@/assets/caregiver-elderly-moment.jpg";

const steps = [
  {
    number: "1",
    title: "Reach Out",
    description:
      "Call us or fill out a quick form. Someone from our Katy, TX team responds within one business day — no automated systems, no runaround.",
  },
  {
    number: "2",
    title: "We Get to Know You",
    description:
      "We listen carefully to understand your loved one's needs, daily routines, and preferences. Care is personal — it should feel that way from the very start.",
  },
  {
    number: "3",
    title: "Care Begins",
    description:
      "Your matched caregiver arrives. From day one, you'll feel the difference of consistent, relationship-centered support in the comfort of home.",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — steps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-sans text-sm tracking-widest uppercase text-primary mb-4">
              It's as Easy as 1-2-3
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-12 leading-tight">
              We Make Getting <br />
              Care <em className="not-italic font-serif italic text-primary">Simple</em>
            </h2>

            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-5 top-6 bottom-6 w-px bg-border" aria-hidden="true" />

              <div className="space-y-10">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                    className="flex gap-6 items-start relative"
                  >
                    {/* Step circle */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-sans font-bold text-sm z-10">
                      {step.number}
                    </div>
                    <div className="pt-1.5">
                      <p className="font-sans text-xs tracking-widest uppercase text-primary mb-1">
                        Step {step.number}
                      </p>
                      <h3 className="font-serif text-xl text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-sm">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <img
              src={caregiverElderlyImage.src}
              alt="Bloom Home Care caregiver sharing a warm moment with elderly client in Katy, TX"
              className="rounded-2xl shadow-lg w-full aspect-[4/5] object-cover object-top"
              loading="lazy"
            />
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-primary/10 -z-10" aria-hidden="true" />
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-bloom-gold/20 -z-10" aria-hidden="true" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
