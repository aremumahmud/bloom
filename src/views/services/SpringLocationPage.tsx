'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin, Phone, CheckCircle2, ArrowRight,
  Heart, Shield, Clock, Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ConsultationModal } from "@/components/homepage/ConsultationModal";
import { useIsMobile } from "@/hooks/use-mobile";
import { CTASection } from "@/components/homepage/CTASection";

// ─── Static content ────────────────────────────────────────────────────────────

const services = [
  {
    title: "Personal Care & ADL Assistance",
    desc: "Patient, respectful help with the daily basics: bathing, dressing, grooming, toileting, and moving safely from bed to chair to bathroom. The aim is to keep a person independent where they can be and supported where they need it.",
  },
  {
    title: "Companion Care",
    desc: "Someone to talk with, share a meal with, take a walk with, or work a crossword alongside. Companionship does quiet work that is easy to underestimate until you see how much steadier a week feels with it.",
  },
  {
    title: "Alzheimer's & Dementia Care",
    desc: "Caregivers who understand memory loss and know how to keep a day calm: familiar routines, gentle redirection rather than argument, and careful observation of changes that families should know about.",
  },
  {
    title: "24-Hour & Overnight Care",
    desc: "Continuous coverage for anyone who is not safe on their own, day or night, with awake overnight caregivers when there is a risk of falls, wandering, or sundowning after dark.",
  },
  {
    title: "Respite Care",
    desc: "A break for the family member who has been carrying it all. Whether you need a standing weekly afternoon or full coverage while you travel, we can plan it in advance or step in when something comes up suddenly.",
  },
  {
    title: "Post-Hospital Recovery",
    desc: "The days after a hospital discharge can be challenging, especially when routines, medications, and follow-up appointments all change at once. We bridge it: the ride home, then meals, medication reminders, and a hand keeping every follow-up appointment.",
  },
  {
    title: "Meal Preparation",
    desc: "Meals cooked at home to fit both the doctor's guidance and what the person actually likes to eat, because the healthiest diet in the world does no good if it sits untouched.",
  },
  {
    title: "Medication Reminders",
    desc: "Gentle prompts on schedule so medications are taken on time and as prescribed, and we notify the family or designated contact if we notice concerns or changes.",
  },
  {
    title: "Light Housekeeping",
    desc: "Laundry, dishes, clean sheets, and a generally tidy space, handled quietly so the home stays safe underfoot and nobody is stuck negotiating over chores.",
  },
  {
    title: "Transportation & Errands",
    desc: "A dependable ride and a steady arm for appointments, pharmacy runs, grocery trips, worship services, and the ordinary errands that keep life moving.",
  },
];

const whoBenefits = [
  "An older adult living on their own, where the family has started spotting warning signs: meals skipped, bills unopened, a stumble that only came up in passing.",
  "Someone just home from surgery or a hospital stay, holding discharge paperwork that is simple to read and genuinely hard to manage alone.",
  "A person with Alzheimer's, Parkinson's, or another progressive condition whose day-to-day needs keep expanding.",
  "A spouse who has become the full-time caregiver and cannot remember the last unbroken night's sleep or free afternoon they had.",
  "Grown children coordinating a parent's care from another city, who need trustworthy eyes and hands in the home between their own visits.",
  "An adult living with a disability who wants more independence, with the right support quietly in place.",
];

const whyUs = [
  {
    icon: Handshake,
    title: "The same caregiver, not a revolving door.",
    desc: "We pair each client with a caregiver chosen for their needs and their temperament, introduce the two before the first shift, and work to keep that pairing steady.",
  },
  {
    icon: Phone,
    title: "A local person picks up the phone.",
    desc: "Our care coordinators know the Spring and north Houston area and answer when a schedule shifts or something does not feel right, at any hour.",
  },
  {
    icon: Clock,
    title: "Nothing you are locked into.",
    desc: "Raise hours, lower them, pause, or stop as life changes, with no fixed-term commitment hanging over you.",
  },
  {
    icon: Heart,
    title: "An honest read.",
    desc: "If home care is not what you need, or you need less of it than you feared, we will tell you.",
  },
];

const careStandards = [
  {
    icon: Shield,
    title: "Vetted before they are hired.",
    desc: "Every applicant sits for interviews and clears a criminal-history check, the required employee-registry screening, and reference checks, then completes orientation to their assigned tasks before meeting a single client.",
  },
  {
    icon: CheckCircle2,
    title: "Prepared for the specific client.",
    desc: "Caregivers are walked through the exact tasks each client needs, dementia-care routines included, before they begin providing care.",
  },
  {
    icon: Handshake,
    title: "On our payroll, not yours.",
    desc: "Bloom's caregivers are W-2 employees of the agency rather than independent contractors, so you are never the employer of record and never touch payroll, taxes, or scheduling paperwork.",
  },
  {
    icon: Shield,
    title: "Licensed and accountable.",
    desc: (
      <>
        Bloom Home Care is a licensed Home and Community Support Services Agency under Texas Health and Human Services, License #024086. You can look up any Texas agency's license through{" "}
        <a href="https://www.hhs.texas.gov/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
          Texas Health and Human Services
        </a>
        .
      </>
    ),
  },
  {
    icon: Clock,
    title: "Overseen once care is underway.",
    desc: "Our Registered Nurse administrator or a qualified supervisor reviews the care plan at the start, at check-ins every 60 days, and any time a client's needs shift, so quality never rides on who happens to be on the schedule.",
  },
];

const steps = [
  {
    number: "01",
    title: "Call 281-975-6044 or ask for a callback.",
    desc: "We respond within one business day, then set up a free in-home assessment around your calendar.",
  },
  {
    number: "02",
    title: "We come out and build the plan.",
    desc: "Our nursing director or a qualified supervisor meets you at home, looks over the space, and writes a care plan around routines, preferences, and safety. Plan on 45 to 60 minutes.",
  },
  {
    number: "03",
    title: "Meet your caregiver and get going.",
    desc: "We introduce your caregiver before the first shift, then stay in touch and adjust the plan as things change.",
  },
];

const faqs = [
  {
    question: "What does a home care agency in Spring, TX actually do?",
    answer: "A home care agency places trained caregivers in the home so a person can go on living there safely. In Spring, Bloom Home Care covers personal care such as bathing and dressing, meal prep, medication reminders, light housekeeping, transportation, and companionship. It's non-medical help, arranged around the client's life instead of the reverse.",
  },
  {
    question: "How quickly can care start?",
    answer: "We reply within one business day, and care can often begin two to five business days after your free assessment and signed service agreement, depending on the schedule, the care needed, location, and caregiver availability. When it is urgent, say a discharge from HCA Houston Healthcare Northwest or St. Luke's Health Springwoods Village, call 281-975-6044 and we will push to move faster.",
  },
  {
    question: "Are your caregivers background checked?",
    answer: "They are. Before anyone is assigned to a client, Bloom runs a criminal-history check, the required employee-registry screening, and reference checks. Texas licenses agencies like ours on top of that, and you're welcome to confirm Bloom's license, number 024086, with Texas Health and Human Services.",
  },
  {
    question: "Do you provide 24-hour home care in Spring?",
    answer: "Yes. We provide overnight, extended-hour, and 24-hour home care throughout Spring using rotating caregiver shifts, including awake overnight caregivers for anyone at risk of falls or wandering. The shift structure and start date are settled after your assessment and depend on your needs and caregiver availability.",
  },
  {
    question: "What's the difference between home care and home health care?",
    answer: "Home care is non-medical help with everyday life: bathing, meals, errands, company. Home health care is skilled nursing or therapy that a doctor orders, usually for a short stretch after illness or surgery, and often billed to Medicare. Plenty of Spring families run both at the same time, and we coordinate our schedule with the home health team so nothing collides or falls through.",
  },
  {
    question: "Does Medicare or insurance pay for home care in Texas?",
    answer: "Usually not. Traditional Medicare does not pay for non-medical home care, and Bloom does not accept Medicaid or STAR+PLUS either. What many Spring families do use is an active long-term care insurance policy, which can offset a good part of the cost. We'll walk through what applies to your situation at the free assessment.",
  },
  {
    question: "Which Spring neighborhoods do you serve?",
    answer: "All of them. Our caregivers work across 77373, 77379, 77386, 77388, and 77389, including Gleannloch Farms, Augusta Pines, Klein, Windrose, Auburn Lakes, Spring Trails, Benders Landing, and Imperial Oaks, plus the areas around Old Town Spring and the I-45 and Grand Parkway corridors.",
  },
  {
    question: "Is there a minimum number of hours, and can I change the schedule?",
    answer: "Most services carry a four-hour minimum per visit, though shorter visits may be workable depending on your location, the services you want, and caregiver availability. You can add, trim, or pause hours as needs change, and there is no fixed-term contract to sign.",
  },
];

const otherAreas = [
  { label: "Home care in Katy, TX", href: "/" },
  { label: "Home care in Cypress, TX", href: "/locations/cypress-tx" },
  { label: "Home care in The Woodlands, TX", href: "/locations/the-woodlands-tx" },
  { label: "Home care in Sugar Land, TX", href: "/locations/sugar-land-tx" },
];

export default function SpringLocationPage() {
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
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-sage-light/30 pt-28 pb-20 md:pb-28">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "32px 32px" }}
          aria-hidden="true"
        />
        <div className="relative container-narrow">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs font-sans text-muted-foreground flex-wrap">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li><Link href="/locations" className="hover:text-primary transition-colors">Service Areas</Link></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li className="text-foreground font-medium">Home Care in Spring, TX</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-flex items-center gap-2 text-primary font-sans text-xs tracking-widest uppercase mb-5">
              <MapPin size={14} aria-hidden="true" />
              <span>Harris &amp; Montgomery County · 77373, 77379, 77386, 77388, 77389</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Home Care Agency in Spring, TX
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl leading-relaxed mb-5">
              Bloom Home Care is a licensed home care agency serving Spring, TX and the communities across north Houston. Our screened, trained caregivers help older adults and people living with disabilities stay safe and independent in their own homes, with care ranging from just a few hours a week to 24 hour support. Call 281-975-6044 to arrange a free in-home assessment.
            </p>

            <p className="text-base md:text-lg text-muted-foreground font-sans max-w-2xl leading-relaxed mb-10">
              Most families find us at a turning point. For some it has been building quietly for months: a parent eating less, leaning on the furniture to get around, letting the mail stack up. For others it arrives overnight with a fall, a diagnosis, or a discharge that sends everyone home with a folder of instructions and no time to follow them. Wherever you are on that line, we will help you sort out what would actually help, with no pressure and nothing you are locked into.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button variant="premium" size="xl" onClick={handleCTA}>
                Request a Free Assessment
              </Button>
              <a
                href="tel:+12819756044"
                className="inline-flex items-center gap-2 text-foreground font-sans font-medium hover:text-primary transition-colors text-base"
                aria-label="Call Bloom Home Care at 281-975-6044"
              >
                <Phone size={18} className="text-primary" />
                281-975-6044
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground font-sans">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-primary" /> Licensed &amp; Insured</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-primary" /> Background-Checked Caregivers</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-primary" /> No Long-Term Contracts</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-primary" /> Locally Owned &amp; Operated</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="section-padding" aria-labelledby="services-spring">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <h2 id="services-spring" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Home Care Services We Provide in Spring
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl leading-relaxed">
              Care always begins with a visit and a conversation, because no two situations match. What a widower in Gleannloch Farms needs after heart surgery is a world apart from what a couple in Augusta Pines needs as one of them moves into the early stages of dementia. Here is the full range our caregivers cover:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="p-5 bg-card rounded-xl border border-border"
              >
                <h3 className="font-sans font-semibold text-foreground text-base mb-1.5">{service.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {service.title === "Alzheimer's & Dementia Care" ? (
                    <>
                      {service.desc}{" "}
                      <a href="https://www.alz.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                        The Alzheimer's Association
                      </a>{" "}
                      notes that most people living with dementia are cared for at home, and the right support helps keep it that way longer.
                    </>
                  ) : service.title === "Post-Hospital Recovery" ? (
                    <>
                      The days after a hospital discharge can be challenging, especially when routines, medications, and follow-up appointments all change at once. We bridge it: the ride home from HCA Houston Healthcare Northwest, St. Luke's Health Springwoods Village, or Houston Methodist The Woodlands, then meals, medication reminders, and a hand keeping every follow-up appointment.
                    </>
                  ) : (
                    service.desc
                  )}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band 1 ───────────────────────────────────────────────────── */}
      <section className="bg-sage-light/60 border-y border-border" aria-label="Call to action">
        <div className="container-narrow py-12 md:py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
              Not sure how much help is the right amount?
            </h2>
            <p className="text-muted-foreground font-sans text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Almost nobody is at first. Call 281-975-6044 and walk us through an ordinary week. We will give you a straight read on what would help, even if that turns out to be less than you expected.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+12819756044"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-primary-foreground font-sans font-medium text-base hover:bg-sage-dark shadow-sm hover:shadow-md transition-all"
              >
                <Phone size={18} />
                Call 281-975-6044
              </a>
              <Button variant="premium-outline" size="xl" onClick={handleCTA}>
                Request a Free Assessment
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Who Can Benefit ──────────────────────────────────────────────── */}
      <section className="section-padding" aria-labelledby="who-benefits-spring">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <h2 id="who-benefits-spring" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Who Can Benefit From Home Care in Spring?
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl leading-relaxed">
              Home care suits just about anyone who wants to stay in their own home but needs a little help doing it safely. In Spring, the calls we get tend to come from families in one of these situations:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {whoBenefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border"
              >
                <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="font-sans text-sm text-muted-foreground leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-muted-foreground font-sans text-base leading-relaxed max-w-2xl">
            If any of that mirrors the conversations happening around your kitchen table, a phone call is worth your time. At the very least you will hang up knowing more than you did.
          </p>
        </div>
      </section>

      {/* ── Why Spring Families Choose Us ────────────────────────────────── */}
      <section className="section-padding bg-card" aria-labelledby="why-spring">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <h2 id="why-spring" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Why Spring Families Choose Bloom Home Care
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl leading-relaxed">
              There is no shortage of home care agencies near Spring. Here is what tends to tip families our way:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-background"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Caregivers & Care Standards ──────────────────────────────────── */}
      <section className="section-padding" aria-labelledby="standards-spring">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <h2 id="standards-spring" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Our Caregivers and Care Standards
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl leading-relaxed">
              The caregiver is the whole service. Every other thing an agency does is built around that single relationship, which is why this is where we hold the line hardest:
            </p>
          </motion.div>

          <div className="space-y-4 mb-8">
            {careStandards.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border"
                >
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="text-muted-foreground font-sans text-base leading-relaxed max-w-2xl">
            If you are weighing one agency against another, put these same five questions to each of them. The answers pull licensed agencies apart from caregiver registries in a hurry.
          </p>
        </div>
      </section>

      {/* ── Where We Provide Home Care ───────────────────────────────────── */}
      <section className="section-padding bg-sage-light/40" aria-labelledby="areas-spring">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 id="areas-spring" className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Where We Provide Home Care in Spring
            </h2>
            <p className="text-muted-foreground font-sans text-base md:text-lg leading-relaxed max-w-3xl mb-4">
              Our caregivers cover all of Spring across northern Harris County and into Montgomery County, including the 77373, 77379, 77386, 77388, and 77389 zip codes and the neighborhoods along I-45, the Grand Parkway, and FM 2920. That takes in Gleannloch Farms, Augusta Pines, Klein, Windrose, Auburn Lakes, Spring Trails, Benders Landing, Imperial Oaks, Legends Ranch, and Harmony, along with the shops and older streets around Old Town Spring. Live a little outside those lines? Call anyway. We can usually make it work. We regularly assist families throughout Spring as well as neighborhood communities in north Harris County and southern Montgomery County.
            </p>
            <p className="text-muted-foreground font-sans text-base leading-relaxed max-w-3xl mb-6">
              Bloom serves families across north and west Houston, too. See our other service areas:
            </p>
            <div className="flex flex-wrap gap-3">
              {otherAreas.map((area) => (
                <Link key={area.href} href={area.href}>
                  <Button variant="outline" size="sm" className="gap-1.5">
                    {area.label} <ArrowRight size={13} />
                  </Button>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Cost ──────────────────────────────────────────────────────────── */}
      <section className="section-padding" aria-labelledby="cost-spring">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 id="cost-spring" className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              How Much Does Home Care Cost in Spring, TX?
            </h2>
            <p className="text-muted-foreground font-sans text-base md:text-lg leading-relaxed max-w-2xl mb-4">
              Private pay home care with Bloom Home Care starts at $35 an hour, and where your rate lands depends on the level of care, how many hours a week you need, and whether overnight or 24-hour coverage is part of the picture.{" "}
              <a href="https://www.genworth.com/aging-and-you/finances/cost-of-care" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                Genworth's Cost of Care Survey
              </a>{" "}
              is a helpful reference point for how home care is priced across the greater Houston area. You get a rate tailored to your plan after the free in-home assessment, so the figure reflects your real situation instead of a rough guess.
            </p>

            <p className="text-muted-foreground font-sans text-base leading-relaxed max-w-2xl mb-3">
              Most Spring families handle the cost one of two ways:
            </p>
            <ul className="space-y-2 mb-4 max-w-2xl">
              <li className="flex items-start gap-3 font-sans text-sm text-muted-foreground">
                <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                Private pay, which is how most non-medical home care is funded
              </li>
              <li className="flex items-start gap-3 font-sans text-sm text-muted-foreground">
                <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                Active long-term care insurance benefits
              </li>
            </ul>

            <p className="text-muted-foreground font-sans text-base leading-relaxed max-w-2xl">
              Medicare will not usually pay for personal care services, though it may cover short-term, physician-ordered home health. We will walk through what applies to you at the assessment, and if some other kind of care would serve you better, we will say so plainly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Band 2 ───────────────────────────────────────────────────── */}
      <section className="bg-sage-light/60 border-y border-border" aria-label="Call to action">
        <div className="container-narrow py-12 md:py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
              Want a real quote, not a ballpark?
            </h2>
            <p className="text-muted-foreground font-sans text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              The free in-home assessment runs about 45 to 60 minutes and finishes with a proposed care plan, a schedule, and written rate information built around your situation. No obligation, and no pressure once it is done.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="premium" size="xl" onClick={handleCTA}>
                Schedule My Free Assessment
              </Button>
              <a
                href="tel:+12819756044"
                className="inline-flex items-center gap-2 text-foreground font-sans font-medium hover:text-primary transition-colors text-base"
                aria-label="Call Bloom Home Care at 281-975-6044"
              >
                <Phone size={18} className="text-primary" />
                Call 281-975-6044
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Getting Started ──────────────────────────────────────────────── */}
      <section className="section-padding" aria-labelledby="steps-spring">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <h2 id="steps-spring" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Getting Started Takes Three Steps
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <span className="font-serif text-5xl font-bold text-primary/15 block mb-4 leading-none">{step.number}</span>
                <h3 className="font-sans font-semibold text-foreground mb-2 text-lg">{step.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-card" aria-labelledby="faq-spring">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <h2 id="faq-spring" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Frequently Asked Questions About Home Care in Spring
            </h2>
          </motion.div>
          {/* Native <details>/<summary> keeps every answer in the page source at load,
              not just when a user clicks — required for FAQ crawlability. */}
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border border-border rounded-xl overflow-hidden bg-background">
                <summary className="w-full flex items-center justify-between px-6 py-5 cursor-pointer list-none font-sans font-medium text-foreground text-sm md:text-base">
                  {faq.question}
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform ml-4 flex-shrink-0">▾</span>
                </summary>
                <div className="px-6 py-5 border-t border-border">
                  <p className="text-muted-foreground font-sans text-sm md:text-base leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="section-padding" aria-labelledby="talk-spring">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 id="talk-spring" className="font-serif text-3xl md:text-4xl text-foreground mb-5">
              Talk to a Spring Care Coordinator Today
            </h2>
            <p className="text-muted-foreground font-sans text-base md:text-lg leading-relaxed max-w-2xl mb-8">
              You do not have to sort this out by yourself, and you do not have to commit to anything to get real answers. Call Bloom Home Care at 281-975-6044 or send a message, and we will help you figure out what support fits, what it runs, and how soon it can begin. Proudly serving Spring, Klein, and the north Houston communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="premium" size="xl" onClick={handleCTA}>
                Send a Message
              </Button>
              <a
                href="tel:+12819756044"
                className="inline-flex items-center gap-2 text-foreground font-sans font-medium hover:text-primary transition-colors text-base"
                aria-label="Call Bloom Home Care at 281-975-6044"
              >
                <Phone size={18} className="text-primary" />
                281-975-6044
              </a>
            </div>
            <p className="text-xs text-muted-foreground font-sans">
              Reviewed by Jackeline Herrera, RN, Director, Bloom Home Care. Last updated July 2026.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <ConsultationModal open={consultationOpen} onOpenChange={setConsultationOpen} />
    </>
  );
}
