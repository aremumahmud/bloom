'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ShieldCheck, Heart, Clock, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ConsultationModal } from "@/components/homepage/ConsultationModal";
import { useIsMobile } from "@/hooks/use-mobile";
import walkerAssistImage from "@/assets/walker-assist.jpg";
import gentleHandsImage from "@/assets/gentle-hands.jpg";
import wheelchairCareImage from "@/assets/wheelchair-care.jpg";

const benefits = [
  {
    icon: Home,
    title: "Bathing & Hygiene Assistance",
    description: "Gentle, dignified support with bathing, oral care, and personal hygiene — always at your loved one's pace and comfort level.",
  },
  {
    icon: ShieldCheck,
    title: "Dressing & Grooming",
    description: "Help with clothing selection, dressing, grooming, and maintaining the personal appearance that makes your loved one feel like themselves.",
  },
  {
    icon: Heart,
    title: "Mobility & Transfer Support",
    description: "Safe assistance moving around the home, getting in and out of bed, and navigating stairs — reducing fall risk while preserving independence.",
  },
  {
    icon: Clock,
    title: "Toileting & Incontinence Care",
    description: "Discreet, compassionate support with toileting needs and incontinence management, handled with complete respect and sensitivity.",
  },
];

const includedServices = [
  "Bathing and shower assistance",
  "Dressing and undressing support",
  "Hair care and grooming",
  "Oral hygiene and denture care",
  "Mobility assistance and fall prevention",
  "Bed-to-chair transfers",
  "Toileting and incontinence support",
  "Skin care and lotion application",
];

const faqs = [
  {
    q: "How do you ensure dignity during personal care?",
    a: "Every caregiver is trained in dignity-preserving techniques. We follow your loved one's preferences, communicate each step clearly, and always prioritize their comfort and modesty.",
  },
  {
    q: "Are your caregivers trained for personal care tasks?",
    a: "Yes. All caregivers complete hands-on training in ADL (Activities of Daily Living) assistance, body mechanics, and safe transfer techniques before being placed with clients.",
  },
  {
    q: "Can personal care be combined with companion care?",
    a: "Absolutely. Most families combine personal care with companionship. Your care plan is customized to include exactly the support your loved one needs.",
  },
  {
    q: "What if my loved one resists help with personal care?",
    a: "Resistance is common and completely understandable. Our caregivers are experienced in building trust gradually, letting your loved one set the pace, and using gentle, patient approaches.",
  },
];

const serviceAreas = ["Katy"];

const PersonalCare = () => {
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
          <img src={walkerAssistImage.src} alt="Caregiver assisting elderly woman with walker" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
        </div>
        <div className="container-narrow relative z-10 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/services" className="text-primary font-sans text-sm tracking-widest uppercase mb-4 inline-flex items-center gap-2 hover:underline">← All Services</Link>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 mt-4">Personal Care</h1>
            <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl leading-relaxed mb-8">
              Gentle, dignified assistance with daily living activities — helping your loved one 
              maintain independence, comfort, and self-respect in the place they call home.
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
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">How we support daily living</h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">Every task is handled with patience, respect, and attention to your loved one's preferences.</p>
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
              <img src={gentleHandsImage.src} alt="Gentle hands providing comfort and care" className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover" loading="lazy" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-serif text-3xl text-foreground mb-6">Care that preserves dignity</h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                Needing help with personal care can feel vulnerable. That's why our caregivers are trained 
                not just in technique, but in the art of respectful, unhurried support. We follow your loved 
                one's lead — honoring their routines, their preferences, and their pace.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed">
                Whether it's assistance after surgery, ongoing support for mobility challenges, or daily 
                help that makes aging in place possible — we're here with steady, caring hands.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">What's included</h2>
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

      {/* Wheelchair image + areas */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 md:order-1">
              <h2 className="font-serif text-3xl text-foreground mb-6">Personal care near you</h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                Bloom Home Care provides personal care services throughout Katy, TX and surrounding areas.
                Our caregivers are local, certified, and ready to support your family.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {serviceAreas.map((city) => (
                  <span key={city} className="inline-flex items-center gap-1.5 px-4 py-2 bg-background rounded-full border border-border text-sm font-sans text-foreground">
                    {city}, TX
                  </span>
                ))}
              </div>
              <Button variant="premium" size="lg" onClick={handleCTA}>
                <Phone size={16} className="mr-2" />Request Personal Care
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 md:order-2">
              <img src={wheelchairCareImage.src} alt="Caregiver assisting client in wheelchair outdoors" className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Common questions about personal care</h2>
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
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground font-sans text-lg max-w-xl mx-auto mb-8">
              Let us help your loved one maintain their independence with respectful, professional personal care.
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

export default PersonalCare;
