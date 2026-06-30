'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { HeartHandshake, Brain, Shield, Clock, Music, Puzzle, Phone, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ConsultationModal } from "@/components/homepage/ConsultationModal";
import { useIsMobile } from "@/hooks/use-mobile";
import dementiaCareHeroImage from "@/assets/dementia-care-hero.jpg";
import dementiaActivityImage from "@/assets/dementia-activity.jpg";

const benefits = [
  {
    icon: Brain,
    title: "Cognitive Stimulation",
    description: "Gentle memory exercises, familiar music, photo albums, and structured activities designed to maintain cognitive engagement without frustration.",
  },
  {
    icon: Shield,
    title: "Safety & Supervision",
    description: "Attentive, calm oversight to prevent wandering, falls, and unsafe situations — all while preserving dignity and independence.",
  },
  {
    icon: Clock,
    title: "Routine & Consistency",
    description: "Maintaining familiar daily rhythms reduces anxiety and confusion. Our caregivers follow personalized routines that bring comfort.",
  },
  {
    icon: HeartHandshake,
    title: "Emotional Reassurance",
    description: "Patient, compassionate redirection during moments of confusion, agitation, or sundowning. A steady presence that feels like home.",
  },
];

const includedServices = [
  "Personalized daily routine support",
  "Gentle medication reminders",
  "Meaningful conversation and active listening",
  "Memory-stimulating activities and games",
  "Meal preparation and nutrition monitoring",
  "Companionship during anxious moments",
  "Light housekeeping and safety monitoring",
  "Respite relief for family caregivers",
  "Accompaniment to appointments",
  "Sundowning and evening support",
];

const faqs = [
  {
    q: "What stage of dementia do you support?",
    a: "We provide non-medical companion and personal care for individuals in early to moderate stages of dementia. For advanced clinical needs, we can coordinate alongside hospice or skilled nursing providers.",
  },
  {
    q: "Are your caregivers trained in dementia care?",
    a: "Yes. All Bloom Home Care caregivers receive specialized training in dementia communication techniques, redirection strategies, and behavioral awareness — in addition to our standard caregiver training.",
  },
  {
    q: "How do you handle sundowning?",
    a: "We create calming evening routines with low lighting, soothing music, and gentle reassurance. Our caregivers are trained to recognize triggers and respond with patience and redirection rather than confrontation.",
  },
  {
    q: "Can you help if my loved one becomes agitated?",
    a: "Absolutely. Our approach centers on calm redirection, validation, and comfort. We never argue or correct — we meet your loved one where they are emotionally and guide them to a place of safety and peace.",
  },
];

const serviceAreas = [
  { name: "Katy", href: "/locations/katy-tx" },
];

const DementiaCare = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleCTA = () => {
    if (isMobile) {
      window.location.href = "tel:+12819756044";
    } else {
      setConsultationOpen(true);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={dementiaCareHeroImage.src}
            alt="Caregiver providing gentle dementia care support in a home setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
        </div>

        <div className="container-narrow relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/services" className="text-primary font-sans text-sm tracking-widest uppercase mb-4 inline-flex items-center gap-2 hover:underline">
              ← All Services
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 mt-4">
              Dementia Care in Katy, TX
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl leading-relaxed mb-4">
              Compassionate, patient care that holds — even when memory doesn't. Specialized companion care
              for individuals living with Alzheimer's and dementia in Katy, TX and surrounding areas.
            </p>
            <p className="text-sm text-muted-foreground font-sans mb-8">
              Serving Katy, TX and surrounding communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="lg" onClick={handleCTA}>
                Schedule a Free Consultation
              </Button>
              <a href="tel:+12819756044" className="inline-flex items-center gap-2 text-primary font-sans hover:underline">
                <Phone size={18} />
                281-975-6044
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Dementia Care Looks Like */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              What dementia care looks like with Bloom Home Care
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
              Every moment of care is shaped by patience, dignity, and understanding — 
              not checklists.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex gap-6 p-8 bg-card rounded-xl border border-border"
              >
                <div className="w-14 h-14 rounded-lg bg-sage-light flex items-center justify-center flex-shrink-0">
                  <benefit.icon size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={dementiaActivityImage.src}
                alt="Caregiver engaging a senior in a gentle cognitive activity"
                className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl text-foreground mb-6">
                Care that meets them where they are
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                Dementia changes how a person experiences the world — but it doesn't diminish who they are. 
                Our caregivers are trained to communicate through validation, gentle redirection, and sensory cues 
                that reduce anxiety and build trust.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed">
                Whether it's playing their favorite music, looking through family photos, or simply sitting together 
                in comfortable silence — we bring calm, intentional presence to every moment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              What's included in dementia care
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {includedServices.map((service, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground font-sans text-sm">{service}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <h2 className="font-serif text-3xl text-foreground mb-6">
                Dementia care across the Dallas area
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                Bloom Home Care provides specialized dementia companion care throughout the Katy, TX corridor 
                and the greater Dallas–Fort Worth metroplex. We're locally owned, licensed, and deeply connected 
                to the communities we serve.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {serviceAreas.map((city) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-background rounded-full border border-border text-sm font-sans text-foreground hover:border-primary/40 transition-colors"
                  >
                    <MapPin size={14} className="text-primary" />
                    {city.name}, TX
                  </Link>
                ))}
              </div>
              <Button variant="premium" size="lg" onClick={handleCTA}>
                <Phone size={16} className="mr-2" />
                Request Dementia Care
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <div className="bg-primary/5 rounded-xl p-8 border border-primary/10">
                <h3 className="font-serif text-2xl text-foreground mb-4">
                  Trusted care that holds — in Katy, TX
                </h3>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  When someone you love is living with dementia, you need more than a service — you need
                  a partner who understands. Bloom Home Care brings patience, training, and heart to every home we enter.
                </p>
                <p className="text-muted-foreground font-sans leading-relaxed text-sm">
                  Katy, TX · Harris County · and surrounding areas
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Common questions about dementia care
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 bg-card rounded-xl border border-border"
              >
                <h3 className="font-serif text-lg text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground font-sans leading-relaxed text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary/5">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Ready to explore dementia care?
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-xl mx-auto mb-8">
              Every care journey begins with a conversation. Tell us about your loved one, 
              and we'll help you find the right caregiver match.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="lg" onClick={handleCTA}>
                Speak With a Care Coordinator
              </Button>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  View All Services
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground font-sans mt-6 tracking-wide">
              Licensed & Insured · Privately Owned & Operated
            </p>
          </motion.div>
        </div>
      </section>

      <ConsultationModal open={consultationOpen} onOpenChange={setConsultationOpen} />
    </>
  );
};

export default DementiaCare;
