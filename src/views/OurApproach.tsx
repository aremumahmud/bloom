'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { CTASection } from "@/components/homepage/CTASection";
import { Clock, Ear, Target, RefreshCw, Heart } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import quietMomentImage from "@/assets/quiet-moment.jpg";
import gentleHandsImage from "@/assets/gentle-hands.jpg";
import puzzleImage from "@/assets/puzzle-together.jpg";

const coreValues = [
  {
    icon: Clock,
    title: "We slow down when it matters",
    description: "Care shouldn't feel rushed. We take the time needed to truly understand and respond to each moment with presence and patience.",
  },
  {
    icon: Ear,
    title: "We listen closely",
    description: "Active, attentive listening is the foundation of meaningful care. We hear what's said — and what isn't.",
  },
  {
    icon: Target,
    title: "We act with intention",
    description: "Every action we take is purposeful. We don't just go through the motions; we engage thoughtfully with each task and interaction.",
  },
  {
    icon: RefreshCw,
    title: "We show up consistently",
    description: "Reliability builds trust. We're committed to being present when we say we will, creating a steady rhythm of care.",
  },
  {
    icon: Heart,
    title: "We treat people as people — not tasks",
    description: "You are not a checklist. We see the whole person and honor your unique story, preferences, and dignity.",
  },
];

const OurApproach = () => {
  return (
    <>
      {/* Hero - Clean, editorial with single image */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero-scene-3.mp4" type="video/mp4" />
            <img
              src={quietMomentImage.src}
              alt="Serene moment of calm — reflecting Bloom Home Care's intentional, unhurried approach to senior home care in Katy, TX"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        <div className="absolute top-5 left-0 right-0 z-20">
          <div className="container-narrow">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Our Approach</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        <div className="container-narrow text-center relative z-10 py-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-sans text-sm tracking-widest uppercase mb-4"
          >
            Our Approach
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Care with intention in Katy, TX
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto"
          >
            At Bloom Home Care, our approach is built on a simple belief: care should feel
            steady, thoughtful, and human — especially during moments of vulnerability.
            Proudly serving families across Katy, TX and surrounding areas.
          </motion.p>
        </div>
      </section>

      {/* Core Values - Clean list, no images */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl text-foreground text-center mb-16"
          >
            Our Core Values
          </motion.h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-start gap-6 p-8 bg-card rounded-xl border border-border"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-sage-light flex items-center justify-center">
                  <value.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto"
          >
            <div className="rounded-xl overflow-hidden shadow-lg aspect-square">
              <img
                src={gentleHandsImage.src}
                alt="Bloom Home Care caregiver gently holding a client's hands — compassionate presence in Katy, TX home care"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-square">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/hero-scene-2c.mp4" type="video/mp4" />
                <img
                  src={puzzleImage.src}
                  alt="Bloom Home Care caregiver and senior client enjoying a puzzle activity together — meaningful engagement and companionship in Katy, TX"
                  className="w-full h-full object-cover"
                />
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed italic"
          >
            "Care that understands the difference between doing for someone 
            and being with someone."
          </motion.blockquote>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-sans text-sm tracking-widest uppercase mb-3">
              Behind the Mission
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Meet the Founder
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto mb-6 leading-relaxed">
              Bloom Home Care was born from a deeply personal journey. Learn how our founders'
              experience caring for their own loved ones shaped everything we do for families across Katy, TX.
            </p>
            <Link
              href="/our-story"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 transition-colors"
            >
              Read Our Story →
            </Link>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default OurApproach;
