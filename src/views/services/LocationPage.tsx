'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin, Phone, CheckCircle2, ArrowRight,
  Heart, Shield, Clock, Users, ChevronDown, ChevronUp,
  Star, Home, Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ConsultationModal } from "@/components/homepage/ConsultationModal";
import { useIsMobile } from "@/hooks/use-mobile";
import { CTASection } from "@/components/homepage/CTASection";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FAQItem {
  question: string;
  answer: string;
}

interface NearbyArea {
  name: string;
  slug: string; // e.g. "frisco-tx"
}

interface LocationData {
  city: string;
  county: string;
  zipCodes: string;
  heroHeadline: string;
  heroSubheadline: string;
  aboutTitle: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  aboutParagraph3: string;
  faqs: FAQItem[];
  nearbyAreas: NearbyArea[];
}

// ─── Location data ─────────────────────────────────────────────────────────────

const locations: Record<string, LocationData> = {
  katy: {
    city: "Katy",
    county: "Harris County",
    zipCodes: "77449, 77450, 77494",
    heroHeadline: "Home Care Services in Katy, TX",
    heroSubheadline:
      "Compassionate, non-medical in-home care for seniors and adults in Katy, TX — locally owned and operated by people who care about this community.",
    aboutTitle: "Trusted Home Care in Katy, TX",
    aboutParagraph1:
      "Katy, TX is a vibrant community where families put down roots and seniors choose to age in place surrounded by the neighbors and the life they've built. Bloom Home Care was founded to serve exactly these families — providing trusted, personalized in-home care that meets you where you are.",
    aboutParagraph2:
      "Bloom Home Care is locally operated in Katy, TX, which means our caregivers are part of this community. We know these neighborhoods, from the established areas near downtown Katy to the growing developments throughout the corridor. That local knowledge shapes how we work: responsive, familiar, and genuinely invested in the families we serve.",
    aboutParagraph3:
      "Our non-medical home care services in Katy, TX are built around real life — not a generic checklist. Before care begins, we sit down with your family, listen carefully, and build a plan that reflects your loved one's routines, personality, and preferences. Whether they need daily companionship, personal care assistance, help during recovery, or simply someone reliable to check in, Bloom Home Care is here with calm, consistent support.",
    faqs: [
      {
        question: "What areas in Katy, TX do you serve?",
        answer:
          "We serve all of Katy, TX and surrounding communities in Harris County. If you're unsure whether your address falls within our service area, give us a call and we'll confirm right away.",
      },
      {
        question: "How quickly can home care begin in Katy, TX?",
        answer:
          "For most clients, we're able to begin care within 24 to 72 hours of your initial consultation. We understand that care needs don't always follow a convenient schedule, so we work quickly — especially in urgent or post-hospital situations.",
      },
      {
        question: "Can Bloom Home Care provide care for a parent in an assisted living community in Katy?",
        answer:
          "Yes. Bloom Home Care offers in-facility companion and personal care support for clients residing in senior living communities in and around Katy, TX. Our caregivers can supplement the facility's services, providing one-on-one attention and consistency.",
      },
      {
        question: "What makes Bloom Home Care different from other agencies in Katy?",
        answer:
          "We are locally owned and operated in Katy, TX. We prioritize building genuine relationships with the families we serve, not just filling a scheduling slot. Our care coordinators are accessible, our caregivers are carefully vetted, and our focus is always on your loved one as a whole person.",
      },
    ],
    nearbyAreas: [],
  },
  prosper: {
    city: "Prosper",
    county: "Collin & Denton County",
    zipCodes: "75078, 75034",
    heroHeadline: "Home Care Services in Prosper, TX",
    heroSubheadline:
      "Compassionate, non-medical in-home care for seniors and adults in Prosper — locally operated by people who live and work in this community.",
    aboutTitle: "Trusted Home Care, Right Here in Prosper",
    aboutParagraph1:
      "Prosper is one of the most intentionally chosen communities in North Texas — a place where families put down roots, build lasting friendships, and, increasingly, where seniors choose to age in place surrounded by the neighbors and the life they've built. As this once-quiet town has grown into a thriving city, so has the need for trusted, personalized in-home care that meets families where they are.",
    aboutParagraph2:
      "Bloom Home Care is locally operated in the Prosper area, which means our caregivers aren't strangers driving in from out of town — they're neighbors. We know this community, from the quiet streets of Windsong Ranch and the established homes near downtown Prosper to the newer developments along the 380 corridor. That local knowledge shapes how we work: responsive, familiar, and genuinely invested in the families we serve.",
    aboutParagraph3:
      "Our non-medical home care services in Prosper are built around real life — not a generic checklist. Before care begins, we sit down with your family, listen carefully, and build a plan that reflects your loved one's routines, personality, and preferences. Whether they need daily companionship, personal care assistance, help during recovery, or simply someone reliable to check in, Bloom Home Care is here with calm, consistent support.",
    faqs: [
      {
        question: "What neighborhoods and zip codes in Prosper do you serve?",
        answer:
          "We serve all of Prosper, including Windsong Ranch, Star Trail, Gentle Creek, and surrounding neighborhoods within the 75078 and 75034 zip codes. If you're unsure whether your address falls within our service area, give us a call and we'll confirm right away.",
      },
      {
        question: "How quickly can home care begin in Prosper?",
        answer:
          "For most clients, we're able to begin care within 24 to 72 hours of your initial consultation. We understand that care needs don't always follow a convenient schedule, so we work quickly — especially in urgent or post-hospital situations.",
      },
      {
        question: "Can Bloom Home Care provide care for a parent in an assisted living community in Prosper?",
        answer:
          "Yes. Bloom Home Care offers in-facility companion and personal care support for clients residing in senior living communities in and around Prosper. Our caregivers can supplement the facility's services, providing one-on-one attention and consistency.",
      },
      {
        question: "What makes Bloom Home Care different from other agencies near Prosper?",
        answer:
          "We're locally operated — not a franchise with a national call center. When you contact us, you reach our actual team. Our caregiver matching is thoughtful and personal, our communication is proactive, and our care plans are shaped around your loved one's actual life, not a standard package.",
      },
    ],
    nearbyAreas: [
      { name: "Celina", slug: "celina-tx" },
      { name: "Frisco", slug: "frisco-tx" },
      { name: "McKinney", slug: "mckinney-tx" },
      { name: "Aubrey", slug: "aubrey-tx" },
    ],
  },

  frisco: {
    city: "Frisco",
    county: "Collin & Denton County",
    zipCodes: "75033, 75034, 75035",
    heroHeadline: "Home Care Services in Frisco, TX",
    heroSubheadline:
      "Professional, relationship-centered in-home care for seniors and adults in Frisco — matched to your loved one's personality, routines, and needs.",
    aboutTitle: "Frisco Families Deserve Care That Matches Their Standards",
    aboutParagraph1:
      "Frisco has grown from a quiet suburb into one of the most dynamic, high-achieving cities in the country, and the families who live here hold high standards — for their schools, their neighborhoods, and the care they expect for their aging parents. At Bloom Home Care, we were built for exactly this kind of family. We bring the same professionalism and personal attention to home care that Frisco families expect across every area of their lives.",
    aboutParagraph2:
      "We serve Frisco communities from neighborhoods near the Star and the Dallas North Tollway to the established homes along Warren Parkway and beyond. Our caregivers are not simply assigned based on availability — they're personally matched to each client based on personality, experience, and care needs. We introduce the match, welcome your feedback, and adjust as needed until the fit feels right.",
    aboutParagraph3:
      "Our non-medical services in Frisco include companion care, personal care and ADL assistance, respite care for family caregivers, and post-hospital recovery support. Every care plan is built following a thorough, unhurried conversation with your family. We believe the best care begins with listening — and that's exactly where we start.",
    faqs: [
      {
        question: "Do you serve all areas of Frisco, TX?",
        answer:
          "Yes. We serve the full Frisco area, including communities near the Star, The Trails, Phillips Creek Ranch, Starwood, Richwoods, and other neighborhoods throughout the 75033, 75034, and 75035 zip codes.",
      },
      {
        question: "Can Bloom Home Care help after a surgery or hospital discharge in Frisco?",
        answer:
          "Absolutely. Post-hospital care is one of our most frequently requested services. We coordinate closely with families and hospital discharge planners to ensure your loved one has trusted support waiting for them at home — often within 24 hours of discharge.",
      },
      {
        question: "Do you offer flexible scheduling, or is a minimum commitment required?",
        answer:
          "We offer flexible scheduling from a few hours per day to extended daily coverage. We do have a minimum visit length of two hours to ensure quality, unhurried care — but there is no long-term contract required.",
      },
      {
        question: "How does your caregiver matching process work in Frisco?",
        answer:
          "After your initial consultation, we review our caregiver team and identify those whose experience, personality, and schedule best align with your loved one. We introduce the match before care begins, welcome your honest feedback, and will make adjustments until you're confident in the pairing.",
      },
    ],
    nearbyAreas: [
      { name: "Prosper", slug: "prosper-tx" },
      { name: "McKinney", slug: "mckinney-tx" },
      { name: "Allen", slug: "allen-tx" },
      { name: "Little Elm", slug: "little-elm-tx" },
    ],
  },

  mckinney: {
    city: "McKinney",
    county: "Collin County",
    zipCodes: "75069, 75070, 75071",
    heroHeadline: "Home Care Services in McKinney, TX",
    heroSubheadline:
      "Calm, consistent in-home care for McKinney seniors and adults — built on relationship, trust, and a genuine understanding of what families in this community need.",
    aboutTitle: "Home Care Rooted in McKinney's Community Spirit",
    aboutParagraph1:
      "McKinney has earned its reputation as one of the best places to live in America — and the reason isn't hard to find. It's in the way neighbors look out for each other, the way history and growth coexist with intention, and the genuine community pride that runs through every part of the city. That same spirit shapes how Bloom Home Care approaches home care in McKinney. We are not a franchise or a call center. We are a local team, and we care about this community the way McKinney residents care about each other.",
    aboutParagraph2:
      "The senior population in McKinney spans a wide range of needs. Some clients are active older adults who simply want companionship and light household support to maintain their routines. Others are navigating more significant care transitions — following a stroke, a fall, a surgery, or the early signs of cognitive change. Bloom Home Care serves the full spectrum, building flexible care plans that can grow and adjust as circumstances evolve. You'll never be told your loved one has aged out of our care.",
    aboutParagraph3:
      "Our caregivers serve McKinney neighborhoods from the beloved historic downtown corridor to the master-planned communities along Eldorado Parkway, Craig Ranch, and Stonebridge Ranch. Wherever you are in McKinney, Bloom Home Care brings dependable, relationship-centered care directly to your door — with the consistency of a familiar face, every visit.",
    faqs: [
      {
        question: "What parts of McKinney does Bloom Home Care serve?",
        answer:
          "We serve all of McKinney, including neighborhoods near historic downtown, Craig Ranch, Stonebridge Ranch, Tucker Hill, and throughout the 75069, 75070, and 75071 zip codes. If you have a question about a specific address, just call us.",
      },
      {
        question: "My parent was recently discharged from Medical City McKinney — can you help?",
        answer:
          "Yes. We regularly coordinate care for clients following a hospital stay at Medical City McKinney or other area facilities. Post-hospital care is one of our most time-sensitive services, and we work quickly to have support in place before or immediately after discharge.",
      },
      {
        question: "How often will the same caregiver visit my parent?",
        answer:
          "Consistency is foundational to how we work. We assign a primary caregiver to each client and maintain that assignment as consistently as possible so your loved one builds a genuine, trusting relationship with the person caring for them — not a different face every week.",
      },
      {
        question: "Does Bloom Home Care serve clients with early-stage dementia in McKinney?",
        answer:
          "Yes. We provide companion care and personal care for clients with early to moderate cognitive changes. Our caregivers bring patience, structure, and genuine warmth to these relationships, and we communicate closely with families to ensure care stays aligned with their loved one's changing needs.",
      },
    ],
    nearbyAreas: [
      { name: "Allen", slug: "allen-tx" },
      { name: "Frisco", slug: "frisco-tx" },
      { name: "Prosper", slug: "prosper-tx" },
      { name: "Celina", slug: "celina-tx" },
    ],
  },

  allen: {
    city: "Allen",
    county: "Collin County",
    zipCodes: "75002, 75013",
    heroHeadline: "Home Care Services in Allen, TX",
    heroSubheadline:
      "Dependable, personalized in-home care for seniors and adults in Allen — supporting independence, easing family worry, and showing up with consistency you can count on.",
    aboutTitle: "Care That Strengthens Allen Families",
    aboutParagraph1:
      "Allen is the kind of community where people choose to stay — where families establish roots, raise children, and watch their own parents age in the home they've loved for decades. Bloom Home Care serves Allen's senior residents with the personal, consistent care that makes aging in place not just possible, but genuinely comfortable. We are proud to be part of this community.",
    aboutParagraph2:
      "Many families in Allen are managing the dual demands of raising their own children while also supporting aging parents. It's a heavy weight, and it often means that quality family time gets replaced by caregiving tasks. Bloom Home Care steps in as a trusted partner — not to replace family, but to restore it. When we handle the day-to-day support, family visits become about connection again, not logistics.",
    aboutParagraph3:
      "We serve all areas of Allen, including established neighborhoods near US-75, the Exchange Parkway corridor, and communities throughout Allen ISD. Our services are non-medical, flexible, and built around each client's preferences, daily rhythms, and personal character. There is no standard package — only plans that fit the person.",
    faqs: [
      {
        question: "What zip codes does Bloom Home Care serve in Allen, TX?",
        answer:
          "We serve the full Allen area, including the 75002 and 75013 zip codes, as well as adjacent communities in Plano, McKinney, and Frisco. Contact us and we'll confirm your specific address.",
      },
      {
        question: "Can we start with just a few hours of care per week in Allen?",
        answer:
          "Yes. Many of our Allen clients start with a few hours of companion care per week and increase services as their needs evolve. We build flexible schedules and have no long-term contracts — you stay because you're happy, not because you're locked in.",
      },
      {
        question: "What's the difference between companion care and personal care?",
        answer:
          "Companion care focuses on social engagement, conversation, light household tasks, and keeping your loved one active and stimulated. Personal care includes hands-on assistance with daily activities such as bathing, dressing, grooming, and mobility support. Many clients receive both.",
      },
      {
        question: "Is Bloom Home Care licensed and insured in Texas?",
        answer:
          "Yes. Bloom Home Care is fully licensed and insured in the state of Texas and operates in compliance with all applicable regulations for non-medical home care agencies. All of our caregivers are background-checked, trained, and bonded.",
      },
    ],
    nearbyAreas: [
      { name: "McKinney", slug: "mckinney-tx" },
      { name: "Frisco", slug: "frisco-tx" },
      { name: "Prosper", slug: "prosper-tx" },
      { name: "The Colony", slug: "the-colony-tx" },
    ],
  },

  celina: {
    city: "Celina",
    county: "Collin & Denton County",
    zipCodes: "75009",
    heroHeadline: "Home Care Services in Celina, TX",
    heroSubheadline:
      "Non-medical in-home care for seniors and adults in Celina — flexible, compassionate, and designed around the real life of your family.",
    aboutTitle: "Supporting Celina's Growing Senior Community",
    aboutParagraph1:
      "Celina is growing faster than almost any other city in Texas, and with that growth comes a new wave of multigenerational families — young couples building homes alongside aging parents who've chosen to move nearby. Bloom Home Care serves the seniors in these families with thoughtful, consistent care that makes it possible for everyone to live closer together with real confidence and peace of mind.",
    aboutParagraph2:
      "We've watched Celina evolve, and we understand both its rural roots and its rapidly developing character. Whether your loved one lives in one of the city's newer planned communities or in a more established part of town, Bloom Home Care brings the same quality of care to every address. Our team is responsive, reliable, and personally invested in the families we work with.",
    aboutParagraph3:
      "Our services in Celina cover the full range of non-medical home care — daily companionship, personal care assistance, meal preparation, medication reminders, light housekeeping, and post-hospital recovery support. Every care plan is built following a thorough intake conversation, because no two clients have the same needs, and our care reflects that.",
    faqs: [
      {
        question: "Does Bloom Home Care serve rural addresses in the Celina, TX area?",
        answer:
          "Yes. We serve clients throughout Celina and the surrounding areas of Collin and Denton Counties, including more rural addresses. We'll confirm coverage for your specific location during your initial consultation.",
      },
      {
        question: "Is there a minimum number of hours required per care visit?",
        answer:
          "Our minimum visit length is typically two hours. This ensures that your loved one receives meaningful, quality care rather than a rushed interaction — and gives your caregiver time to genuinely engage.",
      },
      {
        question: "How do I get started with home care in Celina?",
        answer:
          "The easiest way is to call us at 281-975-6044 or request a free consultation through our website. We'll schedule a time to talk with your family, understand your situation, and put a care plan together from there. There's no pressure and no commitment required to have that first conversation.",
      },
      {
        question: "My parent just moved to Celina to be closer to family. Can care start quickly?",
        answer:
          "Yes. We understand that transitions often bring immediate care needs. For most clients in Celina, we can begin care within 24 to 72 hours of your initial consultation. We'll work with your timeline.",
      },
    ],
    nearbyAreas: [
      { name: "Prosper", slug: "prosper-tx" },
      { name: "Aubrey", slug: "aubrey-tx" },
      { name: "McKinney", slug: "mckinney-tx" },
      { name: "Frisco", slug: "frisco-tx" },
    ],
  },

  aubrey: {
    city: "Aubrey",
    county: "Denton County",
    zipCodes: "76227",
    heroHeadline: "Home Care Services in Aubrey, TX",
    heroSubheadline:
      "In-home care for seniors and adults in Aubrey — provided by a locally rooted team that knows this community and genuinely cares about the families it serves.",
    aboutTitle: "Bloom Home Care Calls Aubrey Home",
    aboutParagraph1:
      "Aubrey holds a special place for the Bloom Home Care team — it's where our operations are rooted, and where our understanding of what this community values was shaped. We know the pace of life here, the close-knit character of its neighborhoods, and the quiet pride that Aubrey residents carry. When we say we care about this community, we mean it in the most personal sense possible.",
    aboutParagraph2:
      "The Aubrey area is home to a rich mix of long-time residents, farming families, and newer arrivals drawn to the open spaces and rural character along the 380 corridor. Many of the seniors here have lived in this area for decades and value their independence deeply. Bloom Home Care helps them maintain exactly that — staying in their own homes, on their own terms, with calm, trusted support that doesn't disrupt the life they've built.",
    aboutParagraph3:
      "Our services in Aubrey include companion care, personal care assistance, meal preparation, light housekeeping, medication reminders, post-hospital recovery support, and respite care for family caregivers who are carrying a heavy load and need reliable relief. We'll talk through what your family needs, build a plan that fits, and introduce a caregiver who is a genuine match — not just whoever is available.",
    faqs: [
      {
        question: "Is Aubrey, TX within Bloom Home Care's service area?",
        answer:
          "Yes — Aubrey is home to our operations. We serve the full Aubrey area, including communities along FM 428, FM 2931, the 380 corridor, and surrounding rural routes in Denton County.",
      },
      {
        question: "Do you serve families on rural or farm properties in the Aubrey area?",
        answer:
          "Absolutely. We regularly serve clients in a wide variety of living situations, including rural properties, farm-style homes, and gated communities throughout the Aubrey area. Distance isn't a barrier for families we're committed to.",
      },
      {
        question: "Can care be arranged for a senior who lives alone in Aubrey?",
        answer:
          "Yes, and this is one of the most common situations we support. Many of our Aubrey clients are seniors living independently who use our services for companionship, safety oversight, and daily support. We provide consistent visits, check-ins, and regular communication with family members who may not be nearby.",
      },
      {
        question: "What happens if my regular caregiver is unavailable?",
        answer:
          "We take backup coverage seriously. If your regular caregiver is unavailable, we make every effort to send a familiar backup — someone your loved one has already met. We communicate proactively and never leave a client without coverage.",
      },
    ],
    nearbyAreas: [
      { name: "Prosper", slug: "prosper-tx" },
      { name: "Celina", slug: "celina-tx" },
      { name: "Little Elm", slug: "little-elm-tx" },
      { name: "McKinney", slug: "mckinney-tx" },
    ],
  },

  "little-elm": {
    city: "Little Elm",
    county: "Denton County",
    zipCodes: "75068",
    heroHeadline: "Home Care Services in Little Elm, TX",
    heroSubheadline:
      "Compassionate in-home care for seniors and adults in Little Elm — relationship-first care that supports independence and brings families peace of mind.",
    aboutTitle: "Aging in Place in Little Elm, With the Right Support",
    aboutParagraph1:
      "Little Elm's lakeside setting gives it a character unlike most of its North Texas neighbors — a blend of active outdoor lifestyle and genuine community warmth that residents are deeply attached to. For the seniors who call Little Elm home, aging in place means staying close to the water, the neighbors, and the life they've built here. Bloom Home Care makes that possible with dependable, personalized home care.",
    aboutParagraph2:
      "We serve non-medical home care throughout Little Elm, from neighborhoods near Lewisville Lake to communities farther inland along Eldorado Parkway. Our caregivers are selected not only for their professional qualifications but for their ability to genuinely connect — because the relationship between a caregiver and client matters as much as the tasks they perform. Consistency, warmth, and reliability are non-negotiables for us.",
    aboutParagraph3:
      "Whether your loved one needs daily companionship, assistance with personal care routines, help after a medical procedure, or simply a trusted presence in the home, Bloom Home Care builds care plans that fit into real life. We begin every client relationship with a thorough, unhurried intake — because who your loved one is as a person should shape how they're cared for, not the other way around.",
    faqs: [
      {
        question: "Do you serve all of Little Elm, TX?",
        answer:
          "Yes. We serve the full Little Elm area, including communities near Lewisville Lake, neighborhoods along Eldorado Parkway, and the 75068 zip code. We can also serve adjacent areas — contact us to confirm your specific location.",
      },
      {
        question: "Can Bloom Home Care help a senior recovering from a procedure near Little Elm?",
        answer:
          "Yes. Post-procedure and post-hospital care is one of our core services. We coordinate with families to have trusted support in place immediately after a discharge — often within 24 hours of your call.",
      },
      {
        question: "Do you offer evening or weekend coverage in Little Elm?",
        answer:
          "Yes. We offer flexible scheduling including evenings and weekends, based on your loved one's needs and caregiver availability. We'll build a schedule around what actually works for your family.",
      },
      {
        question: "How is Bloom Home Care different from hiring an independent caregiver?",
        answer:
          "With Bloom Home Care, your caregiver is background-checked, trained, insured, and supported by an agency team. You have accountability, backup coverage when needed, and a care coordinator you can reach directly. Independent arrangements lack all of that — and the risk falls entirely on your family.",
      },
    ],
    nearbyAreas: [
      { name: "Frisco", slug: "frisco-tx" },
      { name: "Prosper", slug: "prosper-tx" },
      { name: "Aubrey", slug: "aubrey-tx" },
      { name: "The Colony", slug: "the-colony-tx" },
    ],
  },

  "the-colony": {
    city: "The Colony",
    county: "Denton County",
    zipCodes: "75056",
    heroHeadline: "Home Care Services in The Colony, TX",
    heroSubheadline:
      "Trusted, non-medical in-home care for seniors and adults in The Colony — consistent, personally matched care that supports aging in place with dignity.",
    aboutTitle: "Helping The Colony Seniors Stay at Home, on Their Terms",
    aboutParagraph1:
      "The Colony is a city that takes quiet pride in its community — from its Lewisville Lake waterfront to the energy of Grandscape. Seniors who live here often have deep roots and a clear preference: they want to stay. The thought of leaving their home, their neighbors, their familiar surroundings isn't part of the plan. Bloom Home Care helps make aging in place in The Colony not just possible, but comfortable and genuinely dignified.",
    aboutParagraph2:
      "We serve The Colony with the same personal, relationship-first approach we bring to every community in North Dallas. Our caregivers are matched to each client thoughtfully — based on personality, care needs, and shared interests — not simply assigned based on who's free. The goal is for your loved one to feel at ease from the very first visit, and for that ease to deepen into genuine trust over time.",
    aboutParagraph3:
      "Our services in The Colony range from a few hours of weekly companionship to full daily personal care. We also provide respite care for family caregivers who are serving as primary support and need reliable, trusted relief. Whatever level of care your family needs right now, we'll build a plan that fits — and we'll stay flexible as that need evolves.",
    faqs: [
      {
        question: "What areas of The Colony does Bloom Home Care serve?",
        answer:
          "We serve all of The Colony, including neighborhoods near Lewisville Lake, the Grandscape area, and communities throughout the 75056 zip code. We can also serve adjacent areas in Denton County.",
      },
      {
        question: "My mother lives in The Colony and I live out of state — can Bloom Home Care keep me informed?",
        answer:
          "Yes. Clear, proactive communication with family — especially those who live at a distance — is a core part of our service. We provide regular updates, welcome check-in calls at any time, and will contact you immediately if anything requires your attention.",
      },
      {
        question: "Can Bloom Home Care assist someone with mobility limitations in The Colony?",
        answer:
          "Yes. Personal care, including safe assistance with transfers, mobility, walking, and daily routines, is one of our core service areas. Our caregivers are trained in safe handling techniques and bring patience and attentiveness to every interaction.",
      },
      {
        question: "Is a long-term contract required to use Bloom Home Care?",
        answer:
          "No. Bloom Home Care does not require long-term contracts. We believe care relationships should be built on satisfaction, not obligation. Families stay with us because they're genuinely happy with the care — and that's the only commitment we ask for.",
      },
    ],
    nearbyAreas: [
      { name: "Little Elm", slug: "little-elm-tx" },
      { name: "Frisco", slug: "frisco-tx" },
      { name: "Allen", slug: "allen-tx" },
      { name: "Prosper", slug: "prosper-tx" },
    ],
  },
};

// ─── Static content ────────────────────────────────────────────────────────────

const services = [
  { title: "Companion Care", desc: "Meaningful conversation, social engagement, and a consistent, friendly presence." },
  { title: "Personal Care & ADL Assistance", desc: "Dignified help with bathing, dressing, grooming, and daily routines." },
  { title: "Respite Care", desc: "Trusted relief for family caregivers — scheduled or on short notice." },
  { title: "Post-Hospital Recovery", desc: "Safe, supported recovery at home following surgery, illness, or a hospital stay." },
  { title: "Meal Preparation", desc: "Nutritious, home-cooked meals tailored to dietary preferences and restrictions." },
  { title: "Medication Reminders", desc: "Timely reminders to ensure medications are taken correctly and consistently." },
  { title: "Light Housekeeping", desc: "A clean, safe, organized home environment without the burden of managing it alone." },
  { title: "Transportation & Errands", desc: "Reliable accompaniment to appointments, errands, and outings." },
];

const whyUs = [
  { icon: Handshake, title: "Personally Matched Caregivers", desc: "We match on personality and values, not just availability. Your loved one meets their caregiver before care begins." },
  { icon: Shield, title: "Background-Checked & Insured", desc: "Every caregiver is thoroughly vetted, trained, and insured. You can trust the person in your loved one's home." },
  { icon: Clock, title: "Consistent, On-Time Care", desc: "We show up when we say we will. Consistency is the foundation of trust — and we don't take it lightly." },
  { icon: Heart, title: "Locally Owned & Operated", desc: "We're not a franchise. We're neighbors who care about this community and are personally accountable to every family we serve." },
];

const whoWeServe = [
  { icon: Home, title: "Seniors Aging in Place", desc: "Older adults who want to remain at home safely and comfortably, with the right support to make it sustainable." },
  { icon: Users, title: "Family Caregivers", desc: "Sons, daughters, and spouses carrying the weight of daily caregiving who need trusted, reliable respite." },
  { icon: Star, title: "Adults in Recovery", desc: "Individuals returning home after a hospital stay, surgery, or health event who need structured, compassionate support." },
];

const steps = [
  { number: "01", title: "Start with a Conversation", desc: "Call us or submit a request. We'll schedule a free consultation at a time that works for your family — no pressure, no rush." },
  { number: "02", title: "Build Your Care Plan", desc: "We listen carefully to your loved one's needs, routines, and preferences, then create a personalized care plan together." },
  { number: "03", title: "Meet Your Caregiver", desc: "We introduce your matched caregiver before care begins. You have the final say — and we adjust until the fit is right." },
];

// ─── FAQ accordion item ────────────────────────────────────────────────────────

function FAQItem({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-background hover:bg-accent/40 transition-colors gap-4"
        aria-expanded={open}
      >
        <span className="font-sans font-medium text-foreground text-sm md:text-base">{question}</span>
        {open ? <ChevronUp size={18} className="text-primary flex-shrink-0" /> : <ChevronDown size={18} className="text-muted-foreground flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 py-5 border-t border-border bg-card">
          <p className="text-muted-foreground font-sans text-sm md:text-base leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function LocationPage({ locationKey }: { locationKey: string }) {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = locations[locationKey];

  if (!location) return null;

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
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs font-sans text-muted-foreground flex-wrap">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li><Link href="/locations" className="hover:text-primary transition-colors">Service Areas</Link></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li className="text-foreground font-medium">{location.city}, TX</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-flex items-center gap-2 text-primary font-sans text-xs tracking-widest uppercase mb-5">
              <MapPin size={14} aria-hidden="true" />
              <span>{location.county} · {location.zipCodes}</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              {location.heroHeadline}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl leading-relaxed mb-10">
              {location.heroSubheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button variant="premium" size="xl" onClick={handleCTA}>
                Request a Free Consultation
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

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground font-sans">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-primary" /> Licensed &amp; Insured</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-primary" /> Background-Checked Caregivers</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-primary" /> No Long-Term Contracts</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-primary" /> Locally Owned &amp; Operated</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── About this city ──────────────────────────────────────────────── */}
      <section className="section-padding" aria-labelledby={`about-${locationKey}`}>
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 id={`about-${locationKey}`} className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              {location.aboutTitle}
            </h2>
            <div className="space-y-5 text-muted-foreground font-sans text-lg leading-relaxed">
              <p>{location.aboutParagraph1}</p>
              <p>{location.aboutParagraph2}</p>
              <p>{location.aboutParagraph3}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-card" aria-labelledby={`services-${locationKey}`}>
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <h2 id={`services-${locationKey}`} className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Services Available in {location.city}
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-xl">
              Every service is non-medical, flexible, and delivered by a caregiver personally matched to your loved one.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-4 p-5 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <span className="font-sans font-semibold text-foreground text-sm block mb-1">{service.title}</span>
                  <span className="font-sans text-xs text-muted-foreground">{service.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "Companion Care", href: "/services/companion-care" },
              { label: "Personal Care", href: "/services/personal-care" },
              { label: "Respite Care", href: "/services/respite-care" },
              { label: "Post-Hospital Care", href: "/services/post-hospital-care" },
              { label: "Dementia Care", href: "/services/dementia-care" },
            ].map((s) => (
              <Link key={s.href} href={s.href}>
                <Button variant="outline" size="sm" className="gap-1.5">
                  {s.label} <ArrowRight size={13} />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Bloom Home Care ────────────────────────────────────────────────── */}
      <section className="section-padding" aria-labelledby={`why-${locationKey}`}>
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <h2 id={`why-${locationKey}`} className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Why {location.city} Families Choose Bloom Home Care
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-xl">
              We're not the biggest agency — we're the most intentional. Here's what that means in practice.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
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

      {/* ── Who We Serve ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-sage-light/40" aria-labelledby={`who-${locationKey}`}>
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <h2 id={`who-${locationKey}`} className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Who We Serve in {location.city}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {whoWeServe.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 bg-background rounded-2xl border border-border text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-sans font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────── */}
      <section className="section-padding" aria-labelledby={`how-${locationKey}`}>
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <h2 id={`how-${locationKey}`} className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              How to Get Started in {location.city}
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-xl">
              Starting care is simpler than you think. Here's what the process looks like.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <span className="font-serif text-5xl font-bold text-primary/15 block mb-4 leading-none">{step.number}</span>
                <h3 className="font-sans font-semibold text-foreground mb-2 text-lg">{step.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <Button variant="premium" size="xl" onClick={handleCTA}>
              Schedule a Free Consultation
            </Button>
            <a href="tel:+12819756044" className="inline-flex items-center gap-2 text-foreground font-sans font-medium hover:text-primary transition-colors text-base" aria-label="Call Bloom Home Care at 281-975-6044">
              <Phone size={18} className="text-primary" />
              281-975-6044
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-card" aria-labelledby={`faq-${locationKey}`}>
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <h2 id={`faq-${locationKey}`} className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Common Questions About Home Care in {location.city}
            </h2>
          </motion.div>
          <div className="space-y-3">
            {location.faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nearby areas ─────────────────────────────────────────────────── */}
      <section className="section-padding" aria-label="Nearby service areas">
        <div className="container-narrow text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
              We Also Serve Nearby Communities
            </h2>
            <p className="text-muted-foreground font-sans text-sm mb-8">
              Bloom Home Care provides home care throughout North Dallas and surrounding areas.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {location.nearbyAreas.map((area) => (
                <Link key={area.slug} href={`/locations/${area.slug}`}>
                  <Button variant="outline" size="sm" className="gap-2">
                    <MapPin size={13} aria-hidden="true" />
                    {area.name}, TX
                  </Button>
                </Link>
              ))}
              <Link href="/locations">
                <Button variant="outline" size="sm" className="gap-2 text-primary border-primary/40 hover:bg-primary/5">
                  View All Service Areas <ArrowRight size={13} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <ConsultationModal open={consultationOpen} onOpenChange={setConsultationOpen} />
    </>
  );
}
