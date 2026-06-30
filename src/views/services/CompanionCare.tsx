'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { HeartHandshake, Coffee, BookOpen, Music, MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ConsultationModal } from "@/components/homepage/ConsultationModal";
import { useIsMobile } from "@/hooks/use-mobile";
import familyConnectionImage from "@/assets/family-connection.jpg";
import readingTogetherImage from "@/assets/reading-together.jpg";
import gardenStrollImage from "@/assets/garden-stroll.jpg";

const benefits = [
  {
    icon: Coffee,
    title: "Meaningful Conversation",
    description: "Engaging, genuine conversation — not just someone sitting in the room. Our caregivers listen, share, and connect.",
  },
  {
    icon: BookOpen,
    title: "Cognitive Engagement",
    description: "Puzzles, reading aloud, card games, and reminiscing — activities that keep the mind active and spirits lifted.",
  },
  {
    icon: Music,
    title: "Social & Recreational Outings",
    description: "Accompaniment to coffee dates, museum visits, community events, and places of worship.",
  },
  {
    icon: HeartHandshake,
    title: "Emotional Reassurance",
    description: "A calm, steady presence during anxious moments, lonely evenings, or times of transition and grief.",
  },
];

const includedServices = [
  "Friendly conversation and active listening",
  "Accompaniment to appointments and errands",
  "Light meal preparation during visits",
  "Medication reminders (non-medical)",
  "Help with phone calls, letters, and emails",
  "Walking and light outdoor activities",
  "Games, puzzles, and shared hobbies",
  "Comfort during hospital or rehab visits",
];

const faqs = [
  {
    q: "How is companion care different from personal care?",
    a: "Companion care focuses on social, emotional, and recreational support — conversation, outings, and engagement. Personal care includes hands-on assistance with bathing, dressing, and mobility. Many families combine both.",
  },
  {
    q: "What are the minimum hours for companion care?",
    a: "We typically schedule visits in 4-hour minimums, but we work with each family to find a schedule that fits. Some clients start with a few visits per week and adjust from there.",
  },
  {
    q: "Can a companion caregiver drive my loved one?",
    a: "Our caregivers can accompany your loved one to appointments, errands, and outings. Transportation arrangements depend on the care plan — we'll discuss options during your consultation.",
  },
  {
    q: "Is companion care covered by insurance?",
    a: "Long-term care insurance often covers companion care services. We provide documentation to support reimbursement claims. Veterans benefits may also apply.",
  },
];

const serviceAreas = ["Katy"];

const CompanionCare = () => {
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
            src={familyConnectionImage.src}
            alt="Caregiver and senior sharing a warm moment of connection"
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
              Companion Care
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl leading-relaxed mb-8">
              More than presence — genuine connection. Our companion caregivers bring warmth, 
              conversation, and purpose to every visit, helping your loved one feel seen and valued.
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

      {/* What Companion Care Looks Like */}
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
              What companion care looks like
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
              Every visit is shaped around your loved one's interests, routines, and emotional needs.
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
                src={readingTogetherImage.src}
                alt="Caregiver reading together with a senior client"
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
                Not just care — a real relationship
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                Loneliness affects over 40% of older adults and is linked to serious health risks. 
                Our companion caregivers are carefully matched to your loved one based on personality, 
                interests, and communication style — because the right connection makes all the difference.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed">
                Whether it's a quiet afternoon playing cards, a walk through the garden, or simply 
                someone to talk to over morning coffee — we bring calm, intentional presence to every visit.
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
              What's included
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

      {/* Garden Image + Service Areas */}
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
                Companion care near you
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                Bloom Home Care provides companion care services throughout Katy, TX and surrounding areas.
                We're locally operated and deeply connected to the communities we serve.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {serviceAreas.map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-background rounded-full border border-border text-sm font-sans text-foreground"
                  >
                    <MapPin size={14} className="text-primary" />
                    {city}, TX
                  </span>
                ))}
              </div>
              <Button variant="premium" size="lg" onClick={handleCTA}>
                <Phone size={16} className="mr-2" />
                Request Companion Care
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <img
                src={gardenStrollImage.src}
                alt="Caregiver and client enjoying a garden walk together"
                className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
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
              Common questions about companion care
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
              Ready to get started?
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-xl mx-auto mb-8">
              Every care journey begins with a conversation. Tell us about your loved one, 
              and we'll help you find the right companion match.
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

export default CompanionCare;
