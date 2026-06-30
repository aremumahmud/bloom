'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { Activity, Shield, ClipboardList, Stethoscope, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ConsultationModal } from "@/components/homepage/ConsultationModal";
import { useIsMobile } from "@/hooks/use-mobile";
import caregiverElderlyImage from "@/assets/caregiver-elderly-moment.jpg";
import handsConnectionImage from "@/assets/hands-connection.jpg";
import morningTeaImage from "@/assets/morning-tea.jpg";

const benefits = [
  {
    icon: Activity,
    title: "Recovery Monitoring",
    description: "Attentive observation during the critical days and weeks after discharge — ensuring your loved one is resting, eating, and recovering safely.",
  },
  {
    icon: Shield,
    title: "Fall Prevention & Safety",
    description: "Assistance with mobility, transfers, and navigating the home during periods of reduced strength or balance following surgery or illness.",
  },
  {
    icon: ClipboardList,
    title: "Discharge Plan Support",
    description: "Help following hospital discharge instructions — medication reminders, appointment scheduling, and communication with family and medical teams.",
  },
  {
    icon: Stethoscope,
    title: "Coordination with Medical Team",
    description: "Clear communication with nurses, doctors, and therapists to ensure continuity between clinical care and at-home recovery support.",
  },
];

const includedServices = [
  "Assistance with mobility during recovery",
  "Medication reminders per discharge plan",
  "Meal preparation for recovery nutrition",
  "Light housekeeping to maintain a safe environment",
  "Transportation to follow-up appointments",
  "Communication with family about progress",
  "Personal care support as needed",
  "Emotional support during recovery",
];

const faqs = [
  {
    q: "How soon after discharge can care begin?",
    a: "We can often arrange care within 24–48 hours of discharge. For planned surgeries, we recommend scheduling in advance so your caregiver is ready on the day you come home.",
  },
  {
    q: "Is post-hospital care short-term or ongoing?",
    a: "It depends on your needs. Some families use post-hospital care for 2–4 weeks during recovery, while others transition into ongoing companion or personal care. We adjust as your needs change.",
  },
  {
    q: "Do your caregivers provide medical care?",
    a: "No — Bloom Home Care provides non-medical support only. We do not administer medications, change wound dressings, or provide skilled nursing. We complement medical care by handling daily living support.",
  },
  {
    q: "Can you start care before a planned surgery?",
    a: "Absolutely. Pre-surgery preparation — stocking the fridge, organizing the home, setting up a safe recovery area — helps ensure a smooth transition when your loved one returns home.",
  },
];

const serviceAreas = ["Katy"];

const PostHospitalCare = () => {
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
          <img src={caregiverElderlyImage.src} alt="Caregiver sharing a warm moment with elderly client" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
        </div>
        <div className="container-narrow relative z-10 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/services" className="text-primary font-sans text-sm tracking-widest uppercase mb-4 inline-flex items-center gap-2 hover:underline">← All Services</Link>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 mt-4">Post-Hospital Care</h1>
            <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl leading-relaxed mb-8">
              The first days home are the most critical. Our transitional care support helps your 
              loved one recover safely, comfortably, and with fewer risks of readmission.
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
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Supporting a safe recovery</h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">From discharge day through full recovery, we're there with steady, attentive care.</p>
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
              <img src={handsConnectionImage.src} alt="Hands held together in a moment of care and connection" className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover" loading="lazy" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-serif text-3xl text-foreground mb-6">Reducing readmission risk</h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                Nearly 1 in 5 Medicare patients is readmitted within 30 days of discharge. 
                Many readmissions are preventable with proper at-home support — medication adherence, 
                fall prevention, nutrition, and rest.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed">
                Our caregivers provide the consistent, watchful presence that bridges the gap between 
                hospital and full recovery — so your loved one heals at home, not back in a hospital bed.
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

      {/* Morning tea image + areas */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 md:order-1">
              <h2 className="font-serif text-3xl text-foreground mb-6">Recovery care near you</h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                Planning a surgery or preparing for a hospital discharge? Bloom Home Care provides 
                transitional care support throughout the Katy, TX area.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {serviceAreas.map((city) => (
                  <span key={city} className="inline-flex items-center gap-1.5 px-4 py-2 bg-background rounded-full border border-border text-sm font-sans text-foreground">{city}, TX</span>
                ))}
              </div>
              <Button variant="premium" size="lg" onClick={handleCTA}>
                <Phone size={16} className="mr-2" />Request Recovery Care
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 md:order-2">
              <img src={morningTeaImage.src} alt="Quiet morning moment with tea" className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Common questions about post-hospital care</h2>
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
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Planning ahead?</h2>
            <p className="text-muted-foreground font-sans text-lg max-w-xl mx-auto mb-8">
              Whether discharge is days away or weeks out, we'll help you prepare a recovery care plan that brings your loved one home safely.
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

export default PostHospitalCare;
