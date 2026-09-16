'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin, Phone, CheckCircle2, ArrowRight,
  Heart, Shield, Clock, Users, ChevronDown, ChevronUp,
  Handshake, DollarSign, ShieldCheck, GraduationCap,
  Briefcase, ClipboardCheck, MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ConsultationModal } from "@/components/homepage/ConsultationModal";
import { TestimonialsSection } from "@/components/homepage/TestimonialsSection";
import { useIsMobile } from "@/hooks/use-mobile";

// ─── Static content ────────────────────────────────────────────────────────────

const services = [
  { title: "Personal Care & ADL Assistance", desc: "Hands-on help with the private, everyday tasks that get harder with age: bathing, dressing, grooming, using the bathroom, and getting safely from bed to chair to shower. Delivered in a way that guards a person's dignity, not just their footing." },
  { title: "Companion Care", desc: "Regular company and a hand with the day: conversation over coffee, a walk on the pathways, a ride to a club or a church group, a partner for errands. Regular companionship helps reduce loneliness and supports emotional well-being." },
  { title: "Alzheimer's & Dementia Care", desc: "For a family navigating Alzheimer's disease, Parkinson's disease with cognitive decline, or another form of dementia, our caregivers hold the day together with familiar routine, calm redirection, and patience, and they flag the changes worth mentioning to a doctor. The Alzheimer's Association estimates that most dementia care in this country happens at home, and the right help is often what makes staying home possible." },
  { title: "24-Hour & Overnight Care", desc: "When leaving someone alone is no longer safe, we staff the whole day and night with rotating caregivers, including awake overnight shifts for anyone prone to falls, wandering, or the restlessness that dementia can bring on after dark." },
  { title: "Respite Care", desc: "Time off for the spouse or adult child who has quietly become the full-time caregiver. Book a recurring afternoon to yourself, or full coverage while you travel; we can arrange it in advance or cover a gap on short notice." },
  { title: "Post-Hospital Recovery", desc: "Those first weeks after a discharge are when setbacks and readmissions tend to happen. We cover the gap: the ride home from Memorial Hermann The Woodlands, Houston Methodist The Woodlands, or St. Luke's Health The Woodlands, then help with meals, medication timing, moving around safely, and getting to every follow-up." },
  { title: "Meal Preparation", desc: "Fresh meals made at home around any dietary restrictions and, just as importantly, around what the person will actually enjoy eating. Good nutrition only matters if meals are prepared in a way the person actually enjoys eating." },
  { title: "Medication Reminders", desc: "Timely reminders so medications are taken on schedule and in the right order, with the family kept in the loop if a dose gets missed or something looks off." },
  { title: "Light Housekeeping", desc: "Keeping the living space clean and clutter-free: laundry, dishes, changing the bed, wiping down the kitchen and bath. Clear floors and tidy walkways are also one of the simplest ways to prevent a fall." },
  { title: "Transportation & Errands", desc: "Door-through-door rides to medical appointments, the pharmacy, the grocery store, the salon, or standing social commitments, with a caregiver who helps in and out of the car and stays through the visit when that helps." },
];

const whoBenefits = [
  "An older adult still living independently, whose family has begun noticing the small red flags: less food in the fridge, a dinged fender, a story about a fall that only surfaces weeks later.",
  "Someone newly home from a hospital stay or surgery, facing a stack of discharge instructions that are far easier to read than to carry out alone.",
  "A person managing Alzheimer's, Parkinson's, or another progressive diagnosis whose needs keep outgrowing what the family can cover on its own.",
  "A husband or wife who slid into the role of full-time caregiver and is running on empty, short on sleep and short on time for themselves.",
  "Adult children overseeing a parent's care from Dallas, Austin, or out of state, who need dependable people on the ground between their visits.",
  "An adult with a disability who wants to live more independently, with support quietly filling the gaps.",
];

const whyUs = [
  { icon: Handshake, title: "One caregiver you get to know, not a different face each visit.", desc: "We match each client to a caregiver based on needs and personality, introduce them before day one, and protect that continuity." },
  { icon: Users, title: "No Stranger at the Door.", desc: "We introduce your caregiver before the first shift so your loved one knows who will be coming into their home. Familiar faces build trust and make the first visit much more comfortable." },
  { icon: Phone, title: "A real person on the line.", desc: "Our care coordinators know The Woodlands and answer the phone when a schedule changes or a concern comes up, days, nights, and weekends." },
  { icon: MessageCircle, title: "Families stay informed.", desc: "After visits, we can provide updates so loved ones know how things are going, even if they live across town or across the country." },
  { icon: Clock, title: "Freedom to adjust.", desc: "Scale hours up or down, pause, or stop as circumstances change. There is no fixed-term contract." },
  { icon: Heart, title: "A straight answer.", desc: "If you need less care than you feared, or a different kind of help altogether, we will say so." },
];

const careStandards = [
  { icon: ClipboardCheck, title: "Screened before hiring.", desc: "Every applicant is interviewed and cleared through a criminal-history check, the required employee-registry screening, and reference checks, then oriented to their assigned tasks before they ever meet a client." },
  { icon: GraduationCap, title: "Ready for the specific client.", desc: "Before the first shift, each caregiver is briefed on exactly what their client needs, dementia-care routines included." },
  { icon: Briefcase, title: "Our employees, not contractors.", desc: "Bloom's caregivers are W-2 employees of the agency, not independent contractors, which means you are never the employer of record and never deal with payroll, taxes, or scheduling paperwork." },
  { icon: ShieldCheck, title: "Licensed and accountable.", desc: "Bloom Home Care holds a Texas Health and Human Services license as a Home and Community Support Services Agency, License #024086." },
  { icon: Shield, title: "Supervised throughout.", desc: "A qualified supervisor reviews the care plan at the start of care, during regular supervisory visits, and whenever a client's needs change, so the quality of care does not hinge on any one shift." },
];

const steps = [
  { number: "01", title: "Call 281-975-6044, or request a callback.", desc: "We get back to you within one business day and schedule a free in-home assessment at a time that suits you." },
  { number: "02", title: "We visit and build the plan.", desc: "A qualified supervisor comes to the home, looks at the layout and the daily routine, and puts together a care plan around safety and preferences. It usually takes 45 to 60 minutes." },
  { number: "03", title: "Meet your caregiver and begin.", desc: "We introduce your caregiver before the first shift, then keep in touch and fine-tune the plan as needs shift." },
];

const faqs = [
  {
    question: "What does a home care agency in The Woodlands, TX actually do?",
    answer: "A home care agency sends trained caregivers into the home so someone can keep living there safely. In The Woodlands, Bloom Home Care handles personal care like bathing and dressing, meal prep, medication reminders, light housekeeping, transportation, and companionship. It's non-medical support, shaped around the client's routine instead of the other way around.",
  },
  {
    question: "How soon can care start?",
    answer: "We respond within one business day, and care can often start two to five business days after your free assessment and signed service agreement, depending on the schedule, the level of care, location, and caregiver availability. If it is urgent, like a discharge from Memorial Hermann The Woodlands or Houston Methodist The Woodlands, call 281-975-6044 and we will do our best to move quickly.",
  },
  {
    question: "Do you run background checks on caregivers?",
    answer: "Yes. Every caregiver clears a criminal-history check, the required employee-registry screening, and reference checks before they are placed with a client. On top of that, Texas licenses agencies like Bloom, and you can verify Bloom's license, number 024086, through Texas Health and Human Services.",
  },
  {
    question: "Are your caregivers employees or independent contractors?",
    answer: "All caregivers are W-2 employees, not independent contractors. We handle payroll, taxes, scheduling, supervision, and ongoing support, so families never have to act as the employer.",
  },
  {
    question: "Is 24-hour home care available in The Woodlands?",
    answer: "Yes. Bloom provides overnight, extended-hour, and full 24-hour care throughout The Woodlands using rotating caregiver shifts, with awake overnight caregivers for anyone at risk of falls or wandering. The exact shift pattern and start date are worked out after your assessment and depend on your needs and caregiver availability.",
  },
  {
    question: "How is home care different from home health care?",
    answer: "Home care is non-medical: help with bathing, meals, errands, and companionship. Home health care is skilled, doctor-ordered nursing or therapy, usually short-term after an illness or surgery and often billed to Medicare. Many families in The Woodlands use both at once, and we coordinate our schedule around the home health team so nothing overlaps or slips.",
  },
  {
    question: "Will Medicare or insurance cover home care in Texas?",
    answer: "In most cases, no. Traditional Medicare does not pay for non-medical home care, and Bloom does not bill Medicaid or STAR+PLUS. The route that works for many families here is an active long-term care insurance policy, which can cover a meaningful share of the cost. We'll walk through the specifics with you at the assessment.",
  },
  {
    question: "Which parts of The Woodlands do you serve?",
    answer: "All of them. Our caregivers work across 77380, 77381, 77382, 77384, and 77385, including Grogan's Mill, Alden Bridge, Sterling Ridge, Creekside Park, Cochran's Crossing, Panther Creek, College Park, and Indian Springs, plus Town Center, Hughes Landing, and the Woodlands Parkway and I-45 corridors.",
  },
  {
    question: "Is there a minimum number of hours, and can I change the schedule?",
    answer: "Most visits carry a four-hour minimum, though something shorter may work depending on where you are, what you need, and who is available. Hours can go up or down or pause entirely as things change, and nothing ties you to a fixed term.",
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

export default function WoodlandsLocationPage() {
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
              <li className="text-foreground font-medium">Home Care in The Woodlands, TX</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-flex items-center gap-2 text-primary font-sans text-xs tracking-widest uppercase mb-5">
              <MapPin size={14} aria-hidden="true" />
              <span>Montgomery County · 77380, 77381, 77382, 77384 &amp; 77385</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Home Care Agency in The Woodlands, TX
            </h1>

            <div className="space-y-5 text-lg md:text-xl text-muted-foreground font-sans max-w-2xl leading-relaxed mb-10">
              <p>
                Bloom Home Care is a licensed home care agency providing compassionate home care and senior care services that help older adults age safely in place throughout The Woodlands and surrounding communities in Montgomery County. Our screened, trained caregivers help older adults and people with disabilities live safely and comfortably in their own homes, on schedules that run from a few hours a week to full 24-hour care. Call 281-975-6044 to set up a free in-home assessment.
              </p>
              <p className="text-base md:text-lg">
                Almost no one plans for this. It tends to arrive either as a slow accumulation of small worries, a parent who has stopped cooking real meals, who moves through the house more carefully than last year, who has seemed lonelier since a spouse passed, or all at once, in a phone call from a hospital. Whichever way you got here, we can help you think it through and figure out what genuinely helps, with no pressure and nothing that locks you in.
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
      <section className="section-padding bg-card" aria-labelledby="services-woodlands">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <h2 id="services-woodlands" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Home Care Services We Provide in The Woodlands
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl">
              We begin every care plan with an in-home visit and a real conversation, because the right support for a retired couple in Sterling Ridge easing into dementia looks nothing like what a widow in Grogan's Mill needs while she recovers from a fall. Here is everything our caregivers do:
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
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                    {service.title === "Alzheimer's & Dementia Care" ? (
                      <>
                        For a family navigating Alzheimer's disease, Parkinson's disease with cognitive decline, or another form of dementia, our caregivers hold the day together with familiar routine, calm redirection, and patience, and they flag the changes worth mentioning to a doctor. The{" "}
                        <a href="https://www.alz.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                          Alzheimer's Association
                        </a>{" "}
                        estimates that most dementia care in this country happens at home, and the right help is often what makes staying home possible.
                      </>
                    ) : (
                      service.desc
                    )}
                  </p>
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
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">Not sure where your family falls on this?</h3>
            <p className="text-muted-foreground font-sans text-base md:text-lg max-w-xl mx-auto mb-6">
              Most people aren't when they first call. Call 281-975-6044 and describe a normal week. We will give you an honest sense of what would actually help, even if that turns out to be less than you expected.
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
      <section className="section-padding bg-sage-light/40" aria-labelledby="who-woodlands">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <h2 id="who-woodlands" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Who Can Benefit From Home Care in The Woodlands?
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl">
              Home care is for anyone who wants to stay in their own home and needs the right support to do it safely. In The Woodlands, the people who reach out to us usually fit one of these pictures:
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
            If you recognize your own family in any of that, it is worth a conversation. You are under no obligation, and you will come away understanding your options better than before.
          </p>
        </div>
      </section>

      {/* ── Why The Woodlands families choose us ────────────────────────── */}
      <section className="section-padding" aria-labelledby="why-woodlands">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <h2 id="why-woodlands" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Why The Woodlands Families Choose Bloom Home Care
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-xl">
              The Woodlands has no shortage of home care options, including several national franchises. Here is what tends to bring families to Bloom instead:
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
      <section className="section-padding bg-card" aria-labelledby="standards-woodlands">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <h2 id="standards-woodlands" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Our Caregivers and Care Standards
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl">
              Everything comes down to the person who actually walks through the door. That single relationship is the service; the rest is support around it. So this is where we are most careful:
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
                      {item.title === "Licensed and accountable." ? (
                        <>
                          Bloom Home Care holds a Texas Health and Human Services license as a Home and Community Support Services Agency, License #024086. Any Texas agency's license can be checked through{" "}
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
            Comparing agencies? Ask each one these same five questions. The answers separate a licensed agency from a caregiver referral service quickly.
          </p>
        </div>
      </section>

      {/* ── Service area ─────────────────────────────────────────────────── */}
      <section className="section-padding" aria-labelledby="area-woodlands">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 id="area-woodlands" className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Where We Provide Home Care in The Woodlands
            </h2>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-4">
              Our caregivers serve every village in The Woodlands and the communities around it in south Montgomery County, covering the 77380, 77381, 77382, 77384, and 77385 zip codes. That includes Grogan's Mill, Panther Creek, Cochran's Crossing, Indian Springs, Alden Bridge, College Park, Sterling Ridge, and Creekside Park, along with Town Center, Hughes Landing, and neighboring Shenandoah, plus the areas along Woodlands Parkway, Research Forest Drive, and the I-45 corridor. Just outside these lines? Call anyway. We can usually accommodate.
            </p>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-6">
              Bloom cares for families throughout the north Houston area as well. See our other service areas:
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
              <Link href="/locations/sugar-land-tx">
                <Button variant="outline" size="sm" className="gap-1.5">Home care in Sugar Land, TX <ArrowRight size={13} /></Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Cost ─────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-sage-light/40" aria-labelledby="cost-woodlands">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <DollarSign size={22} className="text-primary" aria-hidden="true" />
            </div>
            <h2 id="cost-woodlands" className="font-serif text-3xl md:text-4xl text-foreground mb-5">
              How Much Does Home Care Cost in The Woodlands, TX?
            </h2>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-4">
              Private-pay home care with Bloom generally starts at $35 per hour. Your actual rate depends on how involved the care is, how many hours a week you want, and whether overnight or around-the-clock coverage is part of the plan. For a sense of how home care is priced across the greater Houston area,{" "}
              <a href="https://www.genworth.com/aging-and-you/finances/cost-of-care" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                Genworth's Cost of Care Survey
              </a>{" "}
              keeps a useful annual survey. The figure you get from us is set after the free in-home assessment, so it reflects your real plan rather than a guess over the phone.
            </p>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-3">
              Families in The Woodlands typically cover it one of two ways:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3 font-sans text-muted-foreground text-base">
                <CheckCircle2 size={17} className="text-primary mt-1 flex-shrink-0" />
                Private pay, which covers the large majority of non-medical home care
              </li>
              <li className="flex items-start gap-3 font-sans text-muted-foreground text-base">
                <CheckCircle2 size={17} className="text-primary mt-1 flex-shrink-0" />
                Active long-term care insurance benefits
              </li>
            </ul>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl">
              Standard Medicare does not usually pay for non-medical home care, though it may cover a short course of doctor-ordered home health. We will go over what applies to your situation at the assessment, and if a different kind of care would serve you better, we will tell you.
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
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">Want an actual number for your situation?</h3>
            <p className="text-muted-foreground font-sans text-base md:text-lg max-w-xl mx-auto mb-6">
              The free in-home assessment takes roughly 45 to 60 minutes and ends with a proposed care plan, a schedule, and written rate information built around your needs. No obligation, and no pressure afterward.
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
      <section className="section-padding" aria-labelledby="steps-woodlands">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <h2 id="steps-woodlands" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
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
      <section className="section-padding bg-card" aria-labelledby="faq-woodlands">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <h2 id="faq-woodlands" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Frequently Asked Questions About Home Care in The Woodlands
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
      <section className="section-padding bg-sage-light" aria-labelledby="final-cta-woodlands">
        <div className="container-narrow text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 id="final-cta-woodlands" className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Talk With a Care Coordinator in The Woodlands
            </h2>
            <p className="text-lg text-muted-foreground font-sans mb-10 max-w-2xl mx-auto">
              You should not have to work this out alone, and you do not have to commit to anything to get real answers. Call Bloom Home Care at 281-975-6044 or send a message, and we will help you understand what kind of support fits, what it costs, and how soon it can begin. Proudly serving The Woodlands, Shenandoah, and south Montgomery County.
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
