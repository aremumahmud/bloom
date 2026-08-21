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
import { TestimonialsSection } from "@/components/homepage/TestimonialsSection";
import { useIsMobile } from "@/hooks/use-mobile";

// ─── Static content ────────────────────────────────────────────────────────────

const services = [
  { title: "Personal Care & ADL Assistance", desc: "Careful, dignified assistance with the daily essentials, bathing, dressing, grooming, toileting, and safe transfers between bed, chair, and bath, from someone who understands that how this help is given matters as much as the help itself." },
  { title: "Companion Care", desc: "A friendly, familiar presence and a hand with the day: good conversation, a shared meal, a walk, a game of cards, or a ride to a standing engagement. It sounds simple, but for someone who spends most days alone, it changes the whole shape of a week." },
  { title: "Alzheimer's & Dementia Care", desc: "Caregivers trained for the realities of memory loss keep the day predictable, meet confusion with calm redirection instead of correction, and stay alert to the changes a doctor or family will want to know about." },
  { title: "24-Hour & Overnight Care", desc: "For anyone who can no longer be left on their own safely, we provide full day-and-night coverage through rotating caregivers, with awake overnight staff for clients at risk of falls, wandering, or after-dark agitation." },
  { title: "Respite Care", desc: "Relief for the family member doing the heavy lifting. Take a regular afternoon back for yourself or arrange full coverage for a trip, planned well ahead or set up quickly when something unexpected lands." },
  { title: "Post-Hospital Recovery", desc: "We help you through the weeks just after a hospital stay: the ride home from Houston Methodist Sugar Land, Memorial Hermann Sugar Land, or St. Luke's Health Sugar Land, then meals, medication schedules, safe movement, and every follow-up appointment." },
  { title: "Meal Preparation", desc: "Home-cooked meals built around both medical guidance and personal taste, since a heart-healthy or diabetic-friendly menu only does its job if the person genuinely looks forward to eating it." },
  { title: "Medication Reminders", desc: "On-time reminders that keep medications taken correctly and in the right sequence, with a prompt note to the family if a dose is skipped or anything seems amiss." },
  { title: "Light Housekeeping", desc: "Light housework that keeps the home comfortable and safe, washing up, laundry, fresh bedding, and a tidy kitchen and bathroom, plus clear, uncluttered floors, which quietly do a lot to prevent falls." },
  { title: "Transportation & Errands", desc: "Reliable transportation with a helping hand, to doctor's appointments, the pharmacy, the grocery store, worship, or a standing social outing, with a caregiver who assists to and from the car and stays alongside when needed." },
];

const whoBenefits = [
  "An older adult living alone whose family keeps spotting little warning signs: a thinning fridge, an unpaid stack of bills, a fall mentioned only in passing days later.",
  "Someone just home from surgery or the hospital, holding a sheaf of discharge instructions that are simple on paper and genuinely hard to follow solo.",
  "A person living with Alzheimer's, Parkinson's, or another progressive condition whose needs keep growing past what family can manage alone.",
  "A husband or wife who has quietly become the round-the-clock caregiver and is worn thin, low on rest and with no time of their own.",
  "Adult children managing a parent's care from Houston, out of the area, or out of state, who need reliable hands on site between visits.",
  "An adult with a disability seeking more independence, with support filling in where it is needed.",
];

const whyUs = [
  { icon: Handshake, title: "A caregiver who becomes a familiar face, not a rotation of strangers", desc: "We match each client to a caregiver by needs and personality, introduce them before the first day, and work hard to keep that pairing in place." },
  { icon: Phone, title: "A person you can actually reach", desc: "Our care coordinators know Sugar Land and Fort Bend, and they answer the phone when plans change or a worry comes up, mornings, nights, and weekends." },
  { icon: Clock, title: "Room to change course", desc: "Increase or cut back hours, pause, or stop as life shifts. Nothing is locked into a fixed term." },
  { icon: Heart, title: "Honesty about what you need", desc: "If the answer is less care than you feared, or a different kind of support, we will say so." },
];

const careStandards = [
  { icon: ClipboardCheck, title: "Vetted before hiring", desc: "Each applicant goes through an interview, a criminal-history check, the state-required employee-registry screening, and reference verification, and is oriented to the specific tasks the client needs before ever being placed." },
  { icon: GraduationCap, title: "Prepared for the individual client", desc: "Ahead of the first shift, every caregiver is briefed on that client's specific needs, including any dementia-care routines." },
  { icon: Briefcase, title: "Employed by Bloom, not subcontracted", desc: "Our caregivers are W-2 employees of the agency rather than independent contractors, so you are never the employer of record and never handle payroll, taxes, or scheduling paperwork." },
  { icon: ShieldCheck, title: "Licensed and answerable", desc: "Bloom Home Care carries a Texas Health and Human Services license as a Home and Community Support Services Agency, License #024086." },
  { icon: Shield, title: "Supervised on an ongoing basis", desc: "A nursing director or qualified supervisor reviews the care plan at the start, at check-ins every 60 days, and whenever a client's needs change, so good care never rests on a single shift." },
];

const steps = [
  { number: "01", title: "Call 281-975-6044, or ask us to call you", desc: "We respond within one business day and set up a free in-home assessment whenever it suits you." },
  { number: "02", title: "We come out and build your individualized service plan", desc: "A qualified PAS supervisor visits the home, discusses the client's needs, routine, safety concerns, and preferences, and develops the individualized service plan with the client or family. It typically runs 45 to 60 minutes." },
  { number: "03", title: "Meet your caregiver and start", desc: "We introduce your caregiver before the first shift, then stay in touch and adjust the plan as needs evolve." },
];

const faqs = [
  {
    question: "What does a home care agency in Sugar Land, TX actually do?",
    answer: "A home care agency places trained caregivers in the home so a person can keep living there safely. In Sugar Land, Bloom Home Care provides personal care such as bathing and dressing, meal prep, medication reminders, light housekeeping, transportation, and companionship. It's non-medical help, arranged around the client's life rather than the other way around.",
  },
  {
    question: "How soon can care begin?",
    answer: "We respond within one business day, and care can often begin two to five business days after the free assessment and signed service agreement, depending on the schedule, level of care, location, and caregiver availability. When it is urgent, such as a discharge from Houston Methodist Sugar Land or Memorial Hermann Sugar Land, call 281-975-6044 and we will do our best to move quickly.",
  },
  {
    question: "Do you screen your caregivers?",
    answer: "Yes. Before any caregiver is placed with a client, they clear a criminal-history check, the required employee-registry screening, and reference checks. Beyond that, Texas licenses agencies like Bloom, and you can confirm Bloom's license, number 024086, with Texas Health and Human Services.",
  },
  {
    question: "Do you offer 24-hour home care in Sugar Land?",
    answer: "Yes. Bloom provides overnight, extended-hour, and full 24-hour care across Sugar Land using rotating caregiver shifts, with awake overnight caregivers for anyone at risk of falls or wandering. The precise shift pattern and start date are settled after your assessment and depend on your needs and caregiver availability.",
  },
  {
    question: "What separates home care from home health care?",
    answer: "The difference is medical versus non-medical. Bloom provides home care, the non-medical kind: bathing, meals, errands, companionship. Home health care means skilled nursing or therapy on a doctor's order, typically for a short spell after surgery or illness and often paid by Medicare. A lot of Sugar Land families use the two side by side, and we build our schedule around the home health team so nothing clashes or slips through.",
  },
  {
    question: "Will Medicare or insurance pay for home care in Texas?",
    answer: "Generally, no. Traditional Medicare does not pay for non-medical home care, and Bloom does not accept Medicaid or STAR+PLUS. Many Sugar Land families do put an active long-term care insurance policy toward the bill, which can cover a solid portion. We'll go through exactly what applies at your free assessment.",
  },
  {
    question: "Which Sugar Land neighborhoods do you serve?",
    answer: "All of them. Our caregivers work across 77478, 77479, and 77498, including First Colony, Telfair, Riverstone, Greatwood, New Territory, Sugar Creek, Avalon, and Commonwealth, plus the Sugar Land Town Square area and the US-59, Highway 6, and Grand Parkway corridors.",
  },
  {
    question: "Is there a minimum number of hours, and can I change the schedule?",
    answer: "Most visits have a four-hour minimum, though a shorter visit may be possible depending on your location, the services you need, and who is available. You can increase, reduce, or pause hours as your situation changes, and you are not tied to any fixed-term contract.",
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

export default function SugarLandLocationPage() {
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
              <li className="text-foreground font-medium">Home Care in Sugar Land, TX</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-flex items-center gap-2 text-primary font-sans text-xs tracking-widest uppercase mb-5">
              <MapPin size={14} aria-hidden="true" />
              <span>Fort Bend County · 77478, 77479 &amp; 77498</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Home Care Agency in Sugar Land, TX
            </h1>

            <div className="space-y-5 text-lg md:text-xl text-muted-foreground font-sans max-w-2xl leading-relaxed mb-10">
              <p>
                Bloom Home Care is a licensed home care agency serving Sugar Land, TX and the surrounding Fort Bend County communities. Our screened, trained caregivers help older adults and adults with disabilities stay safe and independent at home, on schedules ranging from a few hours a week to around-the-clock care. Call 281-975-6044 to book a free in-home assessment.
              </p>
              <p className="text-base md:text-lg">
                Families tend to reach us at one of those moments when it becomes clear a loved one needs more help than the household can manage. Maybe it crept up gradually, meals skipped, the mail piling up, a parent steadier with a hand on the wall, or maybe it landed suddenly with a fall or a hospital stay. Either way, we will help you sort through the options calmly, with no pressure and no long-term strings.
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
      <section className="section-padding bg-card" aria-labelledby="services-sugar-land">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <h2 id="services-sugar-land" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Home Care Services We Provide in Sugar Land
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl">
              Every plan starts with a home visit and an honest conversation, because the right care for a retiree in Telfair recovering from surgery is nothing like what a couple in Greatwood needs as one of them faces early dementia. Here is the full scope of what our caregivers provide:
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
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">Not sure how much care you actually need?</h3>
            <p className="text-muted-foreground font-sans text-base md:text-lg max-w-xl mx-auto mb-6">
              Hardly anyone is when they first pick up the phone. Call 281-975-6044 and walk us through a typical week. We will give you an honest read on what would genuinely help, even if that is less than you feared.
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
      <section className="section-padding bg-sage-light/40" aria-labelledby="who-sugar-land">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <h2 id="who-sugar-land" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Who Can Benefit From Home Care in Sugar Land?
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl">
              Home care fits anyone who wants to remain in their own home but needs the right support to stay safe there. In Sugar Land, the families who call us usually see themselves in one of these situations:
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
            If your family sees itself anywhere in that list, a short conversation is worth it. There is no obligation, and you will finish it with a clearer picture of your options than you had before.
          </p>
        </div>
      </section>

      {/* ── Why Sugar Land families choose us ───────────────────────────── */}
      <section className="section-padding" aria-labelledby="why-sugar-land">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <h2 id="why-sugar-land" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Why Sugar Land Families Choose Bloom Home Care
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-xl">
              Sugar Land families have plenty of home care agencies to choose from, national brands among them. Here is what tends to bring them to Bloom:
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
      <section className="section-padding bg-card" aria-labelledby="standards-sugar-land">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <h2 id="standards-sugar-land" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Our Caregivers and Care Standards
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl">
              It all comes down to the individual who shows up at the door. That one relationship is the service; everything else exists to support it. So this is the part we take most seriously:
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
                      {item.title === "Licensed and answerable" ? (
                        <>
                          Bloom Home Care carries a Texas Health and Human Services license as a Home and Community Support Services Agency, License #024086. You can verify any Texas agency's license through{" "}
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
            Shopping around? Put these same five questions to every agency you call. The answers draw a fast line between a licensed agency and a caregiver referral service.
          </p>
        </div>
      </section>

      {/* ── Service area ─────────────────────────────────────────────────── */}
      <section className="section-padding" aria-labelledby="area-sugar-land">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 id="area-sugar-land" className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Where We Provide Home Care in Sugar Land
            </h2>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-4">
              Our caregivers cover all of Sugar Land and the surrounding Fort Bend County communities, across the 77478, 77479, and 77498 zip codes. That includes First Colony, Telfair, Riverstone, Greatwood, New Territory, Sugar Creek, Avalon, and Commonwealth, along with the areas around Sugar Land Town Square and the US-59, Highway 6, and Grand Parkway corridors, and neighboring Stafford, Missouri City, and Richmond. Just beyond those boundaries? Call anyway. We can usually work it out.
            </p>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-6">
              Bloom also serves communities on the north and northwest sides of Houston. See our other service areas:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/">
                <Button variant="outline" size="sm" className="gap-1.5">Home care in Katy, TX <ArrowRight size={13} /></Button>
              </Link>
              <Link href="/locations/cypress-tx">
                <Button variant="outline" size="sm" className="gap-1.5">Home care in Cypress, TX <ArrowRight size={13} /></Button>
              </Link>
              <Link href="/locations/spring-tx">
                <Button variant="outline" size="sm" className="gap-1.5">Home care in Spring, TX <ArrowRight size={13} /></Button>
              </Link>
              <Link href="/locations/the-woodlands-tx">
                <Button variant="outline" size="sm" className="gap-1.5">Home care in The Woodlands, TX <ArrowRight size={13} /></Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Cost ─────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-sage-light/40" aria-labelledby="cost-sugar-land">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <DollarSign size={22} className="text-primary" aria-hidden="true" />
            </div>
            <h2 id="cost-sugar-land" className="font-serif text-3xl md:text-4xl text-foreground mb-5">
              How Much Does Home Care Cost in Sugar Land, TX?
            </h2>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-4">
              Bloom's private-pay home care begins at $35 an hour. What you actually pay depends on how hands-on the care is, how many hours a week you need, and whether overnight or 24-hour coverage is involved.{" "}
              <a href="https://www.genworth.com/aging-and-you/finances/cost-of-care" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                Genworth's Cost of Care Survey
              </a>{" "}
              gives a helpful benchmark for home care pricing across the Houston area. Your rate is set after the free in-home assessment, so it reflects your actual plan rather than a number pulled over the phone.
            </p>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-3">
              Sugar Land families generally cover the cost in one of two ways:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3 font-sans text-muted-foreground text-base">
                <CheckCircle2 size={17} className="text-primary mt-1 flex-shrink-0" />
                Out-of-pocket private pay, the standard way non-medical home care is funded
              </li>
              <li className="flex items-start gap-3 font-sans text-muted-foreground text-base">
                <CheckCircle2 size={17} className="text-primary mt-1 flex-shrink-0" />
                Benefits from an active long-term care insurance policy
              </li>
            </ul>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl">
              As a rule, Medicare does not fund non-medical home care, although it may pay for a brief, physician-ordered course of home health. At the assessment we will lay out what fits your circumstances, and if a different kind of care makes more sense, we will point you there.
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
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">Want a real figure for your situation, not a guess?</h3>
            <p className="text-muted-foreground font-sans text-base md:text-lg max-w-xl mx-auto mb-6">
              The free in-home assessment runs about 45 to 60 minutes and ends with a proposed care plan, a schedule, and written rate information tailored to your needs. No obligation, and no pressure once it wraps up.
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
      <section className="section-padding" aria-labelledby="steps-sugar-land">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <h2 id="steps-sugar-land" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
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

      {/* ── Reviews ──────────────────────────────────────────────────────── */}
      <TestimonialsSection />

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-card" aria-labelledby="faq-sugar-land">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <h2 id="faq-sugar-land" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Frequently Asked Questions About Home Care in Sugar Land
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
      <section className="section-padding bg-sage-light" aria-labelledby="final-cta-sugar-land">
        <div className="container-narrow text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 id="final-cta-sugar-land" className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Talk With a Sugar Land Care Coordinator
            </h2>
            <p className="text-lg text-muted-foreground font-sans mb-10 max-w-2xl mx-auto">
              You should not have to navigate this alone, and you do not need to commit to anything to get real answers. Call Bloom Home Care at 281-975-6044 or send a message, and we will help you figure out what kind of support fits, what it costs, and how soon it can start. Proudly serving Sugar Land, Stafford, Missouri City, and the wider Fort Bend County community.
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
