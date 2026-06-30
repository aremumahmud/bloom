'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Sun, Calendar, Heart, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ConsultationModal } from "@/components/homepage/ConsultationModal";
import { useIsMobile } from "@/hooks/use-mobile";
import peacefulPorchImage from "@/assets/peaceful-porch.jpg";
import caregiverSupportImage from "@/assets/caregiver-support.jpg";
import teaMomentImage from "@/assets/tea-moment.jpg";

const benefits = [
  {
    icon: Sun,
    title: "Planned Respite Breaks",
    description: "Scheduled time away — whether for a few hours each week or a longer getaway — knowing your loved one is in trusted, attentive hands.",
  },
  {
    icon: Heart,
    title: "Caregiver Burnout Prevention",
    description: "Ongoing respite support helps prevent exhaustion, resentment, and the health consequences that come with round-the-clock caregiving.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Half-day, full-day, or multi-day coverage that adapts to your calendar — planned in advance or arranged on shorter notice when possible.",
  },
  {
    icon: Users,
    title: "Consistent Caregiver Matching",
    description: "We match your loved one with a caregiver they'll look forward to seeing — building trust and continuity even during your time away.",
  },
];

const includedServices = [
  "All companion care activities during visits",
  "Personal care assistance as needed",
  "Meal preparation and light housekeeping",
  "Medication reminders",
  "Accompaniment to appointments",
  "Detailed notes and updates for family",
  "Flexible half-day or full-day coverage",
  "Emergency and short-notice availability",
];

const faqs = [
  {
    q: "How often should I use respite care?",
    a: "There's no minimum. Some families schedule weekly respite to maintain balance, while others use it occasionally for events, appointments, or vacations. Even a few hours a week can make a meaningful difference.",
  },
  {
    q: "Will my loved one be comfortable with a new caregiver?",
    a: "We prioritize caregiver consistency. Before your first respite break, we can arrange an introduction visit so your loved one meets their caregiver in a relaxed, low-pressure setting.",
  },
  {
    q: "Can respite care include overnight stays?",
    a: "Yes. We offer extended respite coverage including overnight and multi-day care for family vacations, hospital stays, or any time you need longer support.",
  },
  {
    q: "Is respite care covered by insurance?",
    a: "Many long-term care insurance policies cover respite care. Veterans benefits may also include respite provisions. We'll help with any documentation needed for claims.",
  },
];

const serviceAreas = ["Katy"];

const RespiteCare = () => {
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
          <img src={peacefulPorchImage.src} alt="Peaceful porch scene with comfortable seating" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
        </div>
        <div className="container-narrow relative z-10 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/services" className="text-primary font-sans text-sm tracking-widest uppercase mb-4 inline-flex items-center gap-2 hover:underline">← All Services</Link>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 mt-4">Respite Care</h1>
            <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl leading-relaxed mb-8">
              You can't pour from an empty cup. Respite care gives family caregivers 
              the time they need to rest, recharge, and return stronger — while your loved one 
              continues to receive attentive, compassionate care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="lg" onClick={handleCTA}>Schedule a Free Consultation</Button>
              <a href="tel:+12819756044" className="inline-flex items-center gap-2 text-primary font-sans hover:underline">
                <Phone size={18} />281-975-6044
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Taking care of the caregiver</h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">Respite isn't a luxury — it's essential. Here's how we support your family.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="flex gap-6 p-8 bg-card rounded-xl border border-border">
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

      {/* Image + Story */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={caregiverSupportImage.src} alt="Caregiver providing attentive support" className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover" loading="lazy" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-serif text-3xl text-foreground mb-6">You deserve rest, too</h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                Family caregivers give an average of 24 hours per week to care — and many give far more. 
                Over time, the physical and emotional toll can lead to burnout, health problems, and 
                strained relationships.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed">
                Respite care isn't about stepping away from your role — it's about sustaining it. 
                When you rest, you return with more patience, energy, and presence for the person you love.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">What's included during respite visits</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid sm:grid-cols-2 gap-4">
            {includedServices.map((service, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground font-sans text-sm">{service}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tea image + areas */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 md:order-1">
              <h2 className="font-serif text-3xl text-foreground mb-6">Respite care near you</h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                Whether you need a few hours to run errands or a full week to travel,
                Bloom Home Care provides reliable respite care throughout Katy, TX and surrounding areas.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {serviceAreas.map((city) => (
                  <span key={city} className="inline-flex items-center gap-1.5 px-4 py-2 bg-background rounded-full border border-border text-sm font-sans text-foreground">{city}, TX</span>
                ))}
              </div>
              <Button variant="premium" size="lg" onClick={handleCTA}>
                <Phone size={16} className="mr-2" />Request Respite Care
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 md:order-2">
              <img src={teaMomentImage.src} alt="Caregiver and client sharing a quiet tea moment" className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Common questions about respite care</h2>
          </motion.div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="p-6 bg-card rounded-xl border border-border">
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
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Ready to take a break?</h2>
            <p className="text-muted-foreground font-sans text-lg max-w-xl mx-auto mb-8">
              You don't have to do this alone. Let's talk about how respite care can support your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="lg" onClick={handleCTA}>Speak With a Care Coordinator</Button>
              <Link href="/services"><Button variant="outline" size="lg">View All Services<ArrowRight size={16} className="ml-2" /></Button></Link>
            </div>
            <p className="text-sm text-muted-foreground font-sans mt-6 tracking-wide">Licensed & Insured · Privately Owned & Operated</p>
          </motion.div>
        </div>
      </section>

      <ConsultationModal open={consultationOpen} onOpenChange={setConsultationOpen} />
    </>
  );
};

export default RespiteCare;
