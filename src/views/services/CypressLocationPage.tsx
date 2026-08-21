'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin, Phone, CheckCircle2, ArrowRight,
  Heart, Shield, Clock, Users, ChevronDown, ChevronUp,
  Handshake, DollarSign, ShieldCheck, GraduationCap,
  Briefcase, ClipboardCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ConsultationModal } from "@/components/homepage/ConsultationModal";
import { useIsMobile } from "@/hooks/use-mobile";

// ─── Static content ────────────────────────────────────────────────────────────

const services = [
  { title: "Personal Care & ADL Assistance", desc: "Respectful, hands-on help with bathing, dressing, grooming, toileting, and safe transfers in and out of bed or a chair. Our caregivers protect dignity as carefully as they protect safety." },
  { title: "Companion Care", desc: "Conversation, card games, walks around the block, and a steady, friendly face on the calendar. For a lot of our clients, the caregiver's visit is the best part of the week." },
  { title: "Alzheimer's & Dementia Care", desc: "Caregivers experienced with memory loss keep daily routines steady, use redirection instead of confrontation, and notice the small changes families want to hear about." },
  { title: "24-Hour & Overnight Care", desc: "Around-the-clock coverage for people who shouldn't be alone, including awake overnight caregivers for fall risks and sundowning." },
  { title: "Respite Care", desc: "Short-term relief so family caregivers can rest, travel, or just catch their breath. An afternoon each week or full coverage while you're out of town, planned ahead or arranged on short notice." },
  { title: "Post-Hospital Recovery", desc: "A safe landing after surgery, illness, or a hospital stay. We handle the ride home, then the meals, medication reminders, and follow-up appointments that come after." },
  { title: "Meal Preparation", desc: "Home-cooked meals that match both doctor's orders and personal taste, because a low-sodium diet only works if someone actually eats it." },
  { title: "Medication Reminders", desc: "Prompts at the right times so prescriptions are taken correctly and consistently, with anything unusual reported back to the family." },
  { title: "Light Housekeeping", desc: "Dishes, laundry, fresh linens, and general tidying, so the house stays safe and livable without anyone having to fight about it." },
  { title: "Transportation & Errands", desc: "A reliable ride and a steady arm for doctor visits, the pharmacy, the grocery store, church, or a haircut." },
];

const whoBenefits = [
  "A senior living alone whose family has started noticing changes: missed meals, unopened mail, a fall that didn't get mentioned until later.",
  "Someone coming home after surgery, an illness, or a hospital stay, with discharge instructions that are easy to read and hard to follow alone.",
  "A person living with Alzheimer's, Parkinson's, or another progressive condition whose needs are growing month by month.",
  "A husband or wife providing full-time care who hasn't had a full night's sleep or an afternoon off in longer than they can remember.",
  "Adult children managing a parent's care from another city or state who need reliable eyes and hands in the house between visits.",
  "An adult with a disability who wants more independence, with support built in.",
];

const whyUs = [
  { icon: Handshake, title: "A consistent caregiver, not a rotating cast", desc: "We match caregivers to clients based on care needs and personality, then work to keep that match stable, and we introduce your caregiver before the first shift." },
  { icon: Phone, title: "A real, local person answers", desc: "Our care coordinators serve the Katy and Cypress area and pick up when schedules change or something feels off, 24 hours a day." },
  { icon: Clock, title: "No long-term contracts", desc: "Add hours, cut back, pause, or stop whenever your needs change, with no fixed-term commitment." },
  { icon: Heart, title: "Straight answers", desc: "If home care isn't the right fit, or you need less of it than you feared, we'll say so." },
];

const careStandards = [
  { icon: ClipboardCheck, title: "Screened before they're hired", desc: "Every applicant goes through interviews, a criminal-history check, the required employee-registry screening, reference verification, and orientation to their assigned tasks before ever meeting a client." },
  { icon: GraduationCap, title: "Trained and verified", desc: "Caregivers are oriented to the specific tasks each client needs, including the routines involved in dementia care, before their first shift." },
  { icon: Briefcase, title: "Employed and covered", desc: "Our caregivers are W-2 employees of Bloom Home Care, not independent contractors, so you are never the employer of record and never handle payroll, taxes, or scheduling paperwork yourself." },
  { icon: ShieldCheck, title: "Licensed and accountable", desc: "Bloom Home Care operates as a licensed Home and Community Support Services Agency through Texas Health and Human Services, License #024086." },
  { icon: Shield, title: "Supervised after care starts", desc: "Our nursing director or a qualified supervisor reviews the care plan at the start of care, during check-ins every 60 days, and any time the client's needs change, so quality never depends on who happens to be assigned that day." },
];

const steps = [
  { number: "01", title: "Call 281-975-6044 or request a callback", desc: "We respond within one business day, then schedule a free in-home assessment around your calendar." },
  { number: "02", title: "We visit and build the plan", desc: "Our nursing director or a qualified supervisor meets you at home, walks the space, and writes a care plan around routines, preferences, and safety. The visit usually takes 45 to 60 minutes." },
  { number: "03", title: "Meet your caregiver and begin", desc: "We introduce your caregiver before the first shift, then check in regularly and adjust the plan as needs change." },
];

const faqs = [
  {
    question: "What does a home care agency in Cypress, TX actually do?",
    answer: "A home care agency sends trained caregivers into your home so you or your loved one can keep living there safely. In Cypress, Bloom Home Care handles personal care like bathing and dressing, meal preparation, medication reminders, light housekeeping, transportation, and companionship. It's non-medical support, scheduled around your life rather than the other way around.",
  },
  {
    question: "How quickly can care start?",
    answer: "We respond within one business day, and care can often begin within two to five business days of your free in-home assessment and completed service agreement, depending on your schedule, care needs, location, and caregiver availability. For urgent situations, like a hospital discharge from Houston Methodist Cypress or HCA North Cypress, call 281-975-6044 and we'll do our best to move faster.",
  },
  {
    question: "Are your caregivers background checked?",
    answer: "Yes. Every Bloom caregiver clears a criminal-history check and the required employee-registry screening, plus reference verification, before working with any client. Texas also requires agencies like ours to hold a state license, which you're welcome to verify with Texas Health and Human Services (Bloom's license number is 024086).",
  },
  {
    question: "Do you provide 24-hour home care in Cypress?",
    answer: "Yes. We provide overnight, extended-hour, and 24-hour home care throughout Cypress using rotating caregiver shifts, including awake overnight caregivers for clients at risk of falls or wandering. The shift structure and start date are confirmed after your assessment and depend on your needs and caregiver availability.",
  },
  {
    question: "What's the difference between home care and home health care?",
    answer: "Home care is non-medical support with daily living: bathing, meals, errands, companionship. Home health care is skilled nursing or therapy ordered by a doctor, usually short-term after an illness or surgery, and often covered by Medicare. Many Cypress families use both at once, and we coordinate schedules with home health providers so nothing overlaps or slips through.",
  },
  {
    question: "Does Medicare or insurance pay for home care in Texas?",
    answer: "Traditional Medicare generally does not cover non-medical home care. Bloom Home Care is a private-pay agency and does not accept Medicaid or STAR+PLUS, but many families use active long-term care insurance benefits toward the cost. We'll help you sort the options during your free assessment.",
  },
  {
    question: "Which Cypress neighborhoods do you serve?",
    answer: "All of them. Our caregivers work throughout 77429 and 77433, including Bridgeland, Towne Lake, Fairfield, Coles Crossing, Cypress Creek Lakes, Blackhorse Ranch, and Stone Gate, plus nearby communities along US 290 and the Grand Parkway.",
  },
  {
    question: "Is there a minimum number of hours, and can I change the schedule?",
    answer: "Most services have a four-hour minimum per visit, though shorter visits may be possible depending on your location, the services requested, and caregiver availability. You can add, reduce, or pause hours as needs change, and there is no fixed-term contract to sign.",
  },
];

// ─── FAQ accordion item (content stays in the page source; only visibility toggles) ──

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-background hover:bg-accent/40 transition-colors gap-4"
        aria-expanded={open}
      >
        <h3 className="font-sans font-medium text-foreground text-sm md:text-base m-0">{question}</h3>
        {open ? <ChevronUp size={18} className="text-primary flex-shrink-0" /> : <ChevronDown size={18} className="text-muted-foreground flex-shrink-0" />}
      </button>
      <div className={`px-6 py-5 border-t border-border bg-card ${open ? "block" : "hidden"}`}>
        <p className="text-muted-foreground font-sans text-sm md:text-base leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function CypressLocationPage() {
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
              <li className="text-foreground font-medium">Home Care in Cypress, TX</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-flex items-center gap-2 text-primary font-sans text-xs tracking-widest uppercase mb-5">
              <MapPin size={14} aria-hidden="true" />
              <span>Harris County · 77429 &amp; 77433</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Home Care Agency in Cypress, TX
            </h1>

            <div className="space-y-5 text-lg md:text-xl text-muted-foreground font-sans max-w-2xl leading-relaxed mb-10">
              <p>
                Bloom Home Care is a licensed home care agency serving Cypress, TX and the surrounding northwest Houston area. Our screened, trained caregivers help seniors and adults with disabilities stay safe and independent at home, on schedules that run from a few hours a week to full 24-hour care. Call 281-975-6044 to set up a free in-home assessment.
              </p>
              <p className="text-base md:text-lg">
                Families usually reach out to us at one of two moments. Sometimes things have changed slowly. Mom is skipping meals, the mail is piling up, the house isn't as tidy as it used to be. Other times it happens all at once: a fall, a new diagnosis, or a hospital discharge with instructions nobody has time to manage. Wherever you're starting from, we'll help you figure out what kind of help actually fits, with no pressure and no long-term contract.
              </p>
            </div>

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
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-primary" /> Licensed HCSSA — TX HHS #024086</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-primary" /> Background-Checked Caregivers</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-primary" /> No Long-Term Contracts</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-card" aria-labelledby="services-cypress">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <h2 id="services-cypress" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Home Care Services We Provide in Cypress
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl">
              Every care plan starts with a conversation and an in-home visit, because the right schedule for a retired teacher in Fairfield recovering from hip surgery looks nothing like the right plan for a couple in Towne Lake managing early-stage dementia. Here's the full range of what our caregivers handle:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex items-start gap-4 p-5 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-sans font-semibold text-foreground text-sm block mb-1">{service.title}</h3>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band 1 ───────────────────────────────────────────────────── */}
      <section className="section-padding" aria-label="Call to action">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-sage-light/60 border border-sage/20 p-8 md:p-10 text-center"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">Not sure what level of help you need?</h3>
            <p className="text-muted-foreground font-sans text-base md:text-lg max-w-xl mx-auto mb-6">
              That's normal. Most families aren't. Call 281-975-6044 and describe a typical week. We'll tell you plainly what would help, even if the answer is less care than you expected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12819756044">
                <Button variant="premium" size="lg">Call 281-975-6044</Button>
              </a>
              <Link href="/contact">
                <Button variant="premium-outline" size="lg">Request a Free Assessment</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Who Can Benefit ──────────────────────────────────────────────── */}
      <section className="section-padding bg-sage-light/40" aria-labelledby="who-cypress">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <h2 id="who-cypress" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Who Can Benefit From Home Care in Cypress?
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl">
              Home care fits anyone who wants to keep living at home but needs a hand doing it safely. In Cypress, the families who call us usually sound like one of these:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {whoBenefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 p-5 bg-background rounded-xl border border-border"
              >
                <Users size={18} className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-muted-foreground font-sans text-base max-w-2xl">
            If one of those sounds like your kitchen-table conversation lately, it's worth a phone call. Worst case, you'll walk away with better information than you started with.
          </p>
        </div>
      </section>

      {/* ── Why Cypress families choose us ──────────────────────────────── */}
      <section className="section-padding" aria-labelledby="why-cypress">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <h2 id="why-cypress" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Why Cypress Families Choose Bloom Home Care
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-xl">
              There are plenty of home care agencies near Cypress. Here's what tends to tip families our way:
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
                  className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card"
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

      {/* ── Caregivers and care standards ───────────────────────────────── */}
      <section className="section-padding bg-card" aria-labelledby="standards-cypress">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <h2 id="standards-cypress" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Our Caregivers and Care Standards
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl">
              The caregiver is the service. Everything else an agency does is scaffolding around that one relationship, so this is where we're pickiest:
            </p>
          </motion.div>

          <div className="space-y-4 mb-8">
            {careStandards.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {item.title === "Licensed and accountable" ? (
                        <>
                          Bloom Home Care operates as a licensed Home and Community Support Services Agency through Texas Health and Human Services, License #024086. You can verify any Texas agency's license through{" "}
                          <a href="https://www.hhs.texas.gov/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                            Texas Health and Human Services
                          </a>.
                        </>
                      ) : (
                        item.desc
                      )}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="text-muted-foreground font-sans text-base max-w-2xl">
            If you're comparing agencies, ask every one of them about these same five things. The answers separate licensed agencies from caregiver registries fast.
          </p>
        </div>
      </section>

      {/* ── Service area ─────────────────────────────────────────────────── */}
      <section className="section-padding" aria-labelledby="area-cypress">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 id="area-cypress" className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Where We Provide Home Care in Cypress
            </h2>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-4">
              Our caregivers cover all of Cypress in northwest Harris County, including the 77429 and 77433 zip codes and the neighborhoods along US 290 and the Grand Parkway. That includes Bridgeland, Towne Lake, Fairfield, Coles Crossing, Cypress Creek Lakes, Blackhorse Ranch, Stone Gate, and Longwood, along with the older streets near Cypress Top Historic Park. Just outside these areas? Call anyway. We can usually make it work.
            </p>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-6">
              Bloom also serves families across northwest and west Houston. See our other service areas:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/">
                <Button variant="outline" size="sm" className="gap-1.5">Home care in Katy, TX <ArrowRight size={13} /></Button>
              </Link>
              <Link href="/locations/spring-tx">
                <Button variant="outline" size="sm" className="gap-1.5">Home care in Spring, TX <ArrowRight size={13} /></Button>
              </Link>
              <Link href="/locations/the-woodlands-tx">
                <Button variant="outline" size="sm" className="gap-1.5">Home care in The Woodlands, TX <ArrowRight size={13} /></Button>
              </Link>
              <Link href="/locations/sugar-land-tx">
                <Button variant="outline" size="sm" className="gap-1.5">Home care in Sugar Land, TX <ArrowRight size={13} /></Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Cost ─────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-sage-light/40" aria-labelledby="cost-cypress">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <DollarSign size={22} className="text-primary" aria-hidden="true" />
            </div>
            <h2 id="cost-cypress" className="font-serif text-3xl md:text-4xl text-foreground mb-5">
              How Much Does Home Care Cost in Cypress, TX?
            </h2>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-4">
              Bloom Home Care's private-pay home care starts at $35 per hour, and your exact rate depends on the level of care, the total weekly hours, and whether you need overnight or 24-hour coverage.{" "}
              <a href="https://www.genworth.com/aging-and-you/finances/cost-of-care" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                Genworth's Cost of Care Survey
              </a>{" "}
              is a useful benchmark for how home care is priced across the Houston area. We give you a personalized rate after your free in-home assessment, so the number you get reflects your actual plan rather than a guess.
            </p>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-3">
              Most Cypress families cover the cost one of two ways:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3 font-sans text-muted-foreground text-base">
                <CheckCircle2 size={17} className="text-primary mt-1 flex-shrink-0" />
                Private pay, the most common route for non-medical home care
              </li>
              <li className="flex items-start gap-3 font-sans text-muted-foreground text-base">
                <CheckCircle2 size={17} className="text-primary mt-1 flex-shrink-0" />
                Active long-term care insurance benefits
              </li>
            </ul>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl">
              Medicare generally does not pay for this kind of care, though it may cover short-term home health services ordered by a physician. During your free assessment we'll walk through what applies to you, and if a different type of care would serve you better, we'll say so.
            </p>
          </motion.div>

          {/* CTA band 2 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-background border border-border p-8 md:p-10 text-center"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">Want a real number instead of a range?</h3>
            <p className="text-muted-foreground font-sans text-base md:text-lg max-w-xl mx-auto mb-6">
              The free in-home assessment takes about 45 to 60 minutes and ends with a proposed care plan, a schedule, and written rate information for your exact situation. No obligation, and no pressure afterward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="premium" size="lg">Schedule My Free Assessment</Button>
              </Link>
              <a href="tel:+12819756044">
                <Button variant="premium-outline" size="lg">Call 281-975-6044</Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Getting started ──────────────────────────────────────────────── */}
      <section className="section-padding" aria-labelledby="steps-cypress">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <h2 id="steps-cypress" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
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
      <section className="section-padding bg-card" aria-labelledby="faq-cypress">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <h2 id="faq-cypress" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Frequently Asked Questions About Home Care in Cypress
            </h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={faq.question} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="section-padding bg-sage-light" aria-labelledby="final-cta-cypress">
        <div className="container-narrow text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 id="final-cta-cypress" className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Talk to a Cypress Care Coordinator Today
            </h2>
            <p className="text-lg text-muted-foreground font-sans mb-10 max-w-2xl mx-auto">
              You don't have to figure this out alone, and you don't have to commit to anything to get real answers. Call Bloom Home Care at 281-975-6044 or send us a message, and we'll help you work out what kind of support makes sense, what it costs, and how soon it can start. Proudly serving Cypress, Katy, and northwest Houston families.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button variant="premium" size="xl" onClick={handleCTA} className="group">
                Request a Free Assessment
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
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

      <ConsultationModal open={consultationOpen} onOpenChange={setConsultationOpen} />
    </>
  );
}
