'use client'

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CareRequestModal } from "@/components/homepage/CareRequestModal";
import { ConsultationModal } from "@/components/homepage/ConsultationModal";
import { useIsMobile } from "@/hooks/use-mobile";
import { ShieldCheck, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import handsImage from "@/assets/hands-connection.jpg";
import gardenWalkImage from "@/assets/garden-walk.jpg";
import readingTogetherImage from "@/assets/reading-together.jpg";

const slides = [
  {
    image: handsImage,
    alt: "Bloom Home Care caregiver and senior client holding hands in a warm, trusting moment — home care in Katy, TX",
    badge: "Bloom Home Care · Katy, TX",
    headlineLine1: "Your Home. Your Health.",
    headlineLine2: "Our Commitment.",
    sub: "Trusted, personalized in-home support for seniors and adults — proudly serving Katy, TX and surrounding areas with compassion, skill, and heart.",
  },
  {
    image: gardenWalkImage,
    alt: "Bloom Home Care caregiver walking alongside a senior in a garden — companion care services in Katy, TX",
    badge: "Companion & Personal Care · Katy, TX",
    headlineLine1: "Trusted Support",
    headlineLine2: "Where You Feel Safest.",
    sub: "From help with daily routines and uplifting companionship to trusted respite care — our certified caregivers bring both skill and heart to every visit.",
  },
  {
    image: readingTogetherImage,
    alt: "Caregiver and senior reading together at home — personalized in-home care plans in Katy, TX",
    badge: "Personalized Care Plans · Katy, TX & Surrounding Areas",
    headlineLine1: "Every Plan Begins",
    headlineLine2: "With Listening.",
    sub: "We take the time to truly understand each person's routines, preferences, and needs — because everyone deserves to feel safe, cared for, and at home.",
  },
];

// Stagger container — re-mounts per slide to re-trigger children
const textContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const AUTOPLAY_MS = 5500;

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [careModalOpen, setCareModalOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const isMobile = useIsMobile();

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [next]);

  const handleConsultationClick = () => {
    if (isMobile) {
      window.location.href = "tel:+12819756044";
    } else {
      setConsultationOpen(true);
    }
  };

  const slide = slides[current];

  return (
    <section
      className="relative min-h-[92vh] flex items-center pt-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Background images — all mounted, crossfade with opacity only ── */}
      {slides.map((s, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 z-0"
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
        >
          <img
            src={s.image.src}
            alt={s.alt}
            className="w-full h-full object-cover"
            fetchPriority={i === 0 ? "high" : "auto"}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            style={{ display: "block" }}
          />
        </motion.div>
      ))}

      {/* ── Overlay — subtle left + bottom gradient, even elsewhere ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: `
            linear-gradient(to top,  hsl(var(--background) / 0.75) 0%, transparent 38%),
            linear-gradient(to right, hsl(var(--background) / 0.88) 0%, hsl(var(--background) / 0.72) 55%, hsl(var(--background) / 0.50) 100%)
          `,
        }}
      />

      {/* ── Content ── */}
      <div className="container-wide relative z-[10] py-14 md:py-0">
        <div className="max-w-2xl">

          {/* Text block — re-key forces re-animation on slide change */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              variants={textContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -12, transition: { duration: 0.3 } }}
            >
              {/* Badge */}
              <motion.p
                variants={fadeIn}
                className="text-primary font-sans text-xs md:text-sm tracking-widest uppercase mb-4"
              >
                {slide.badge}
              </motion.p>

              {/* Headline */}
              <motion.h1
                id="hero-heading"
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-5"
              >
                <motion.span variants={fadeUp} className="block">
                  {slide.headlineLine1}
                </motion.span>
                <motion.span variants={fadeUp} className="block text-primary">
                  {slide.headlineLine2}
                </motion.span>
              </motion.h1>

              {/* Sub */}
              <motion.p
                variants={fadeUp}
                className="text-base md:text-xl text-muted-foreground font-sans leading-relaxed mb-8 max-w-xl"
              >
                {slide.sub}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* CTAs — static, don't re-animate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="flex flex-col">
              <Button variant="premium" size="xl" onClick={handleConsultationClick}>
                Request a Free Consultation
              </Button>
              <span className="text-xs text-muted-foreground mt-2 font-sans">
                New to Bloom Home Care? Let's talk.
              </span>
            </div>
            <div className="flex flex-col">
              <Button variant="premium-outline" size="xl" onClick={() => setCareModalOpen(true)}>
                Current Client Support
              </Button>
              <span className="text-xs text-muted-foreground mt-2 font-sans">
                Already a client? We're here.
              </span>
            </div>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <div className="flex items-center gap-2 text-muted-foreground font-sans text-xs md:text-sm">
              <ShieldCheck size={15} className="text-primary flex-shrink-0" />
              <span>Licensed &amp; Insured</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground font-sans text-xs md:text-sm">
              <ShieldCheck size={15} className="text-primary flex-shrink-0" />
              <span>Background-Checked Caregivers</span>
            </div>
            <a
              href="tel:+12819756044"
              className="flex items-center gap-2 text-foreground font-sans text-xs md:text-sm font-medium hover:text-primary transition-colors"
              aria-label="Call Bloom Home Care at 281-975-6044"
            >
              <Phone size={15} className="text-primary flex-shrink-0" />
              <span>281-975-6044</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Carousel controls ── */}
      {/* Prev / Next arrows */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-[20] hidden md:flex flex-col gap-3">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm border border-border/60 flex items-center justify-center text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all duration-200"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm border border-border/60 flex items-center justify-center text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all duration-200"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Dot indicators */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[20] flex gap-2.5"
        role="tablist"
        aria-label="Slide indicators"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            style={{ width: i === current ? 28 : 8, background: "hsl(var(--border))" }}
          >
            {i === current && (
              <motion.span
                key={`dot-fill-${current}`}
                className="absolute inset-y-0 left-0 bg-primary rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>

      <CareRequestModal open={careModalOpen} onOpenChange={setCareModalOpen} />
      <ConsultationModal open={consultationOpen} onOpenChange={setConsultationOpen} />
    </section>
  );
}
