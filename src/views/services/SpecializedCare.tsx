'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Activity, Heart, Shield, Phone, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ConsultationModal } from "@/components/homepage/ConsultationModal";
import { useIsMobile } from "@/hooks/use-mobile";
import specializedCareHeroImage from "@/assets/specialized-care-hero.jpg";

const benefits = [
  {
    icon: Brain,
    title: "Cognitive Condition Support",
    description: "Specialized companion care for individuals living with Alzheimer's, dementia, and other cognitive conditions. Patient, gentle, and deeply attuned to their needs.",
  },
  {
    icon: Activity,
    title: "Parkinson's Disease Care",
    description: "Support tailored to the unique challenges of Parkinson's, including mobility assistance, fall prevention, and help with daily tasks affected by tremors and stiffness.",
  },
  {
    icon: Heart,
    title: "Post-Surgery Recovery",
    description: "Dedicated recovery support following surgical procedures. Assistance with mobility, medication reminders, meal preparation, and ensuring a safe healing environment.",
  },
  {
    icon: Shield,
    title: "Chronic Condition Management",
    description: "Ongoing non-medical support for individuals managing chronic conditions. Consistent routines, nutrition support, and attentive daily care.",
  },
];

const includedServices = [
  "Condition-specific daily routine support",
  "Mobility and transfer assistance",
  "Fall prevention and safety monitoring",
  "Cognitive stimulation and memory activities",
  "Medication reminders and schedule management",
  "Nutritious meal preparation for dietary needs",
  "Companionship and emotional reassurance",
  "Post-surgical wound site monitoring (non-medical)",
  "Transportation to follow-up appointments",
  "Regular family updates and communication logs",
  "Gentle exercise and movement assistance",
  "Behavioral pattern recognition and redirection",
];

const faqs = [
  {
    q: "What conditions do you specialize in?",
    a: "We provide non-medical companion and personal care support for individuals living with Alzheimer's disease, dementia, Parkinson's disease, post-surgical recovery needs, and other chronic conditions. Our caregivers receive specialized training for each condition.",
  },
  {
    q: "How is specialized care different from standard home care?",
    a: "Specialized care involves caregivers who are trained in condition-specific techniques, such as cognitive stimulation for dementia, fall prevention for Parkinson's, or recovery protocols for post-surgical patients. The care plan is tailored to the unique challenges of each condition.",
  },
  {
    q: "Do you provide medical care?",
    a: "No. Bloom Home Care provides non-medical companion and personal care services. We do not administer medications, perform medical procedures, or provide skilled nursing. We work alongside your medical team to provide daily support and comfort.",
  },
  {
    q: "Can care plans change as the condition progresses?",
    a: "Absolutely. We regularly review and adjust care plans based on changing needs. Our supervisors conduct periodic assessments and work with your family to ensure the level of support always matches your loved one's current situation.",
  },
];

const serviceAreas = [
  { name: "Katy", href: "/locations/katy-tx" },
];

const SpecializedCare = () => {
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
          <img src={specializedCareHeroImage.src} alt="Caregiver providing specialized care support for chronic conditions" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
        </div>
        <div className="container-narrow relative z-10 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/services" className="text-primary font-sans text-sm tracking-widest uppercase mb-4 inline-flex items-center gap-2 hover:underline">← All Services</Link>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 mt-4">Specialized Care</h1>
            <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl leading-relaxed mb-4">
              Expert support for chronic and cognitive conditions, including Alzheimer's, dementia,
              Parkinson's disease, and post-surgery recovery care.
            </p>
            <p className="text-sm text-muted-foreground font-sans mb-8">Serving Katy, TX and surrounding communities.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="lg" onClick={handleCTA}>Schedule a Free Consultation</Button>
              <a href="tel:+12819756044" className="inline-flex items-center gap-2 text-primary font-sans hover:underline"><Phone size={18} />281-975-6044</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Condition-specific care, delivered with heart</h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">Every condition is different. Our caregivers are trained to provide the right kind of support for each one.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="flex gap-6 p-8 bg-card rounded-xl border border-border">
                <div className="w-14 h-14 rounded-lg bg-sage-light flex items-center justify-center flex-shrink-0"><benefit.icon size={28} className="text-primary" /></div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">What's included in specialized care</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid sm:grid-cols-2 gap-4">
            {includedServices.map((service, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground font-sans text-sm">{service}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-serif text-3xl text-foreground mb-6">Specialized care across Katy, TX</h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                Bloom Home Care provides specialized companion care for chronic and cognitive conditions throughout
                the Katy, TX corridor and the greater Dallas–Fort Worth metroplex.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {serviceAreas.map((city) => (
                  <Link key={city.name} href={city.href} className="inline-flex items-center gap-1.5 px-4 py-2 bg-card rounded-full border border-border text-sm font-sans text-foreground hover:border-primary/40 transition-colors">
                    <MapPin size={14} className="text-primary" />{city.name}, TX
                  </Link>
                ))}
              </div>
              <Button variant="premium" size="lg" onClick={handleCTA}><Phone size={16} className="mr-2" />Request Specialized Care</Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-primary/5 rounded-xl p-8 border border-primary/10">
                <h3 className="font-serif text-2xl text-foreground mb-4">Care that understands the condition</h3>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  Living with a chronic or cognitive condition changes everything. Our caregivers are trained
                  to understand the unique challenges your loved one faces and provide support that truly helps.
                </p>
                <p className="text-muted-foreground font-sans leading-relaxed text-sm">Katy, TX · Harris County · and surrounding areas</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Common questions about specialized care</h2>
          </motion.div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="p-6 bg-background rounded-xl border border-border">
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
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Ready to explore specialized care?</h2>
            <p className="text-muted-foreground font-sans text-lg max-w-xl mx-auto mb-8">
              Every condition deserves a personalized approach. Tell us about your loved one,
              and we'll match them with a caregiver trained for their specific needs.
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

export default SpecializedCare;
