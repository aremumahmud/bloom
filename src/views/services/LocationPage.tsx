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

  // ── West Houston ─────────────────────────────────────────────────────────────

  fulshear: {
    city: "Fulshear",
    county: "Fort Bend County",
    zipCodes: "77441, 77494",
    heroHeadline: "Home Care Services in Fulshear, TX",
    heroSubheadline: "Compassionate, non-medical in-home care for seniors and adults in Fulshear — relationship-first care from a team that knows this community.",
    aboutTitle: "Trusted Home Care in Fulshear, TX",
    aboutParagraph1: "Fulshear has grown into one of Fort Bend County's most sought-after communities — a place where families plant roots and seniors choose to spend their later years surrounded by the people and places they love. As the community has grown, so has the need for trusted, personalized in-home care that meets families here, not somewhere else.",
    aboutParagraph2: "Bloom Home Care serves Fulshear with the same relationship-centered approach we bring to every Houston-area community. Our caregivers are matched personally to each client — not assigned by availability — and we take the time to understand your loved one's routines, personality, and preferences before care ever begins.",
    aboutParagraph3: "Whether your loved one needs daily companion care, help with personal hygiene and daily routines, support after a hospital stay, or simply a consistent and trusted presence, Bloom Home Care is here. We offer flexible scheduling without long-term contracts — because care should adapt to life, not the other way around.",
    faqs: [
      { question: "Do you serve all of Fulshear, TX?", answer: "Yes. We serve all of Fulshear including communities within the 77441 and 77494 zip codes. If you're unsure whether you're in our coverage area, just call and we'll confirm." },
      { question: "How quickly can care begin in Fulshear?", answer: "For most clients, care can begin within 24 to 72 hours of your initial consultation. We move quickly — especially for families dealing with post-hospital discharge or urgent care needs." },
      { question: "Can you provide care in a senior living community in Fulshear?", answer: "Yes. We offer in-facility companion and personal care for clients in assisted living or memory care communities in the Fulshear area. Our caregivers provide one-on-one attention to supplement what the facility provides." },
      { question: "What makes Bloom Home Care different in Fulshear?", answer: "We're locally owned and personally accountable. When you call us, you reach our team — not a national call center. Our caregiver matching is thoughtful, our communication is proactive, and your loved one is always treated as a person, not a schedule." },
    ],
    nearbyAreas: [
      { name: "Katy", slug: "katy-tx" },
      { name: "Richmond", slug: "richmond-tx" },
      { name: "Brookshire", slug: "brookshire-tx" },
      { name: "Cinco Ranch", slug: "cinco-ranch-tx" },
    ],
  },

  richmond: {
    city: "Richmond",
    county: "Fort Bend County",
    zipCodes: "77406, 77469",
    heroHeadline: "Home Care Services in Richmond, TX",
    heroSubheadline: "Personalized, non-medical in-home care for seniors in Richmond, TX — delivered with consistency, dignity, and genuine human connection.",
    aboutTitle: "Caring for Richmond Families at Home",
    aboutParagraph1: "Richmond is one of Texas's oldest cities — a community with deep roots, tight-knit neighborhoods, and generations of families who take pride in where they live. Seniors here often have a clear desire: to stay home. To age in their own space, on their own terms. Bloom Home Care exists to make that possible.",
    aboutParagraph2: "We serve Richmond and the surrounding Fort Bend County area with non-medical home care that's built around real relationships. Before care begins, we sit down with your family, learn about your loved one's life and preferences, and build a care plan around them — not around a package.",
    aboutParagraph3: "Our Richmond caregivers provide companion care, personal care, respite for family caregivers, post-hospital recovery support, meal preparation, light housekeeping, and more. All services are flexible — and all care is delivered by a caregiver personally selected for your loved one.",
    faqs: [
      { question: "What areas of Richmond, TX does Bloom Home Care serve?", answer: "We serve all of Richmond including zip codes 77406 and 77469, as well as nearby communities in Fort Bend County. Call us if you'd like to confirm your address is in our service area." },
      { question: "Can care begin quickly in Richmond?", answer: "Yes. For most families, we're able to begin care within 24 to 72 hours of your first conversation with us. In urgent situations, we do everything we can to move faster." },
      { question: "Do you serve seniors in Richmond assisted living communities?", answer: "Absolutely. We provide in-facility care in senior communities throughout the Richmond area, offering dedicated one-on-one attention that supplements facility staff." },
      { question: "Is there a minimum commitment required?", answer: "No long-term contracts are required. We have a minimum visit length of two hours to ensure quality, unhurried care, but scheduling is flexible and can be adjusted as your needs evolve." },
    ],
    nearbyAreas: [
      { name: "Rosenberg", slug: "rosenberg-tx" },
      { name: "Fulshear", slug: "fulshear-tx" },
      { name: "Katy", slug: "katy-tx" },
      { name: "Sugar Land", slug: "sugar-land-tx" },
    ],
  },

  rosenberg: {
    city: "Rosenberg",
    county: "Fort Bend County",
    zipCodes: "77471",
    heroHeadline: "Home Care Services in Rosenberg, TX",
    heroSubheadline: "Compassionate, non-medical in-home care for seniors and adults in Rosenberg — consistent support that allows your loved one to thrive at home.",
    aboutTitle: "Home Care You Can Rely On in Rosenberg, TX",
    aboutParagraph1: "Rosenberg is a city where community still means something — where neighbors know each other and families look out for one another. For seniors in Rosenberg, staying home isn't just a preference. It's part of who they are. Bloom Home Care is honored to support that choice with trusted, relationship-centered in-home care.",
    aboutParagraph2: "We serve Rosenberg families with care that's built from the ground up around each individual. We listen first — to your loved one's preferences, daily habits, personality, and needs — and then we build a plan that fits their actual life. Our caregivers are personally matched, not simply assigned.",
    aboutParagraph3: "Services in Rosenberg include companion care, personal hygiene assistance, respite for family caregivers, post-hospital recovery support, meal preparation, and light housekeeping. We're flexible, communicative, and always focused on the whole person — not just the tasks.",
    faqs: [
      { question: "Do you serve all of Rosenberg, TX?", answer: "Yes. We serve all of Rosenberg within the 77471 zip code, as well as nearby areas in Fort Bend County. Contact us to confirm your address is within our coverage area." },
      { question: "How quickly can home care start in Rosenberg?", answer: "Most clients are able to begin care within 24 to 72 hours of their initial consultation. For urgent needs or post-hospital situations, we work as quickly as possible." },
      { question: "Can Bloom Home Care provide care for my parent in a Rosenberg senior facility?", answer: "Yes. We provide in-facility personal and companion care for clients in assisted living or senior communities in and around Rosenberg." },
      { question: "What sets Bloom Home Care apart in Rosenberg?", answer: "We're a locally owned, personally accountable team. We take the time to match caregivers thoughtfully, communicate proactively, and build genuine relationships with every family we serve." },
    ],
    nearbyAreas: [
      { name: "Richmond", slug: "richmond-tx" },
      { name: "Sugar Land", slug: "sugar-land-tx" },
      { name: "Missouri City", slug: "missouri-city-tx" },
      { name: "Fulshear", slug: "fulshear-tx" },
    ],
  },

  "cinco-ranch": {
    city: "Cinco Ranch",
    county: "Harris County",
    zipCodes: "77450, 77494",
    heroHeadline: "Home Care Services in Cinco Ranch, TX",
    heroSubheadline: "Premium, relationship-centered in-home care for seniors in Cinco Ranch — because the people who love this community deserve care that meets their standard.",
    aboutTitle: "Exceptional Home Care for Cinco Ranch Families",
    aboutParagraph1: "Cinco Ranch is one of the most desirable master-planned communities in the Greater Houston area — and the families who live here hold high standards. At Bloom Home Care, we match that standard. We provide thoughtful, high-quality in-home care that reflects the values Cinco Ranch families bring to every area of their lives.",
    aboutParagraph2: "Seniors in Cinco Ranch often have rich, active lives — and a strong preference to remain at home. Our job is to make that possible by providing the right level of support at the right time. We listen carefully, match caregivers personally, and build care plans around your loved one's specific routines, preferences, and personality.",
    aboutParagraph3: "Bloom Home Care serves all of Cinco Ranch with companion care, personal care, respite care, post-hospital recovery support, and more. We offer flexible scheduling with no long-term contracts — and we're always just a call away when your needs change.",
    faqs: [
      { question: "Do you serve all of Cinco Ranch?", answer: "Yes. We serve all of Cinco Ranch and surrounding Katy-area communities within the 77450 and 77494 zip codes." },
      { question: "How is Bloom Home Care matched to my loved one in Cinco Ranch?", answer: "We conduct an in-depth intake conversation to understand your loved one's personality, routines, and care needs. Then we personally select a caregiver match — and welcome your feedback before and after care begins." },
      { question: "Can you begin care quickly if my family needs it urgently?", answer: "Yes. For most families, care begins within 24 to 72 hours. In urgent situations — particularly after a hospital discharge — we move as fast as we possibly can." },
      { question: "What's included in your home care services in Cinco Ranch?", answer: "We offer companion care, personal hygiene assistance, medication reminders, meal preparation, light housekeeping, transportation accompaniment, and respite care. All care is non-medical and tailored to each client." },
    ],
    nearbyAreas: [
      { name: "Katy", slug: "katy-tx" },
      { name: "Fulshear", slug: "fulshear-tx" },
      { name: "Richmond", slug: "richmond-tx" },
      { name: "Sugar Land", slug: "sugar-land-tx" },
    ],
  },

  brookshire: {
    city: "Brookshire",
    county: "Waller County",
    zipCodes: "77423",
    heroHeadline: "Home Care Services in Brookshire, TX",
    heroSubheadline: "Compassionate, non-medical in-home care for seniors in Brookshire — trusted support that makes aging at home safe, dignified, and sustainable.",
    aboutTitle: "Bringing Quality Home Care to Brookshire, TX",
    aboutParagraph1: "Brookshire may be a small city, but the families here are no strangers to caring for one another. When a loved one needs more consistent support than family can provide alone, Bloom Home Care steps in — providing trusted, personalized in-home care that allows seniors to stay exactly where they want to be.",
    aboutParagraph2: "We serve Brookshire and Waller County with a care model built on genuine relationships. We take the time to understand your loved one before we ever send a caregiver — and we choose that caregiver based on personality, experience, and mutual fit, not just who's available.",
    aboutParagraph3: "Whether your family needs a few hours of companion care each week or consistent daily personal care, Bloom Home Care is here. We're flexible, responsive, and deeply committed to the dignity of every person we serve.",
    faqs: [
      { question: "Does Bloom Home Care serve Brookshire, TX?", answer: "Yes. We serve Brookshire and the surrounding Waller County area. Call us to confirm your address falls within our current service zone." },
      { question: "How quickly can care begin for a loved one in Brookshire?", answer: "For most families, we're able to start care within 24 to 72 hours of your initial call. Urgent situations are prioritized." },
      { question: "What services are available in Brookshire?", answer: "We offer companion care, personal care and ADL assistance, respite care for family caregivers, post-hospital recovery support, meal preparation, medication reminders, and light housekeeping." },
      { question: "Do you require a long-term contract?", answer: "No. We don't require long-term contracts. Care is scheduled as needed, adjusted as your situation changes, with a minimum two-hour visit to ensure quality, unhurried support." },
    ],
    nearbyAreas: [
      { name: "Katy", slug: "katy-tx" },
      { name: "Fulshear", slug: "fulshear-tx" },
      { name: "Richmond", slug: "richmond-tx" },
    ],
  },

  // ── North Houston ─────────────────────────────────────────────────────────────

  spring: {
    city: "Spring",
    county: "Harris County",
    zipCodes: "77373, 77379, 77380, 77381, 77386, 77388",
    heroHeadline: "Home Care Services in Spring, TX",
    heroSubheadline: "Trusted, non-medical in-home care for seniors and adults in Spring, TX — consistent, relationship-centered support so your loved one can thrive at home.",
    aboutTitle: "Home Care Built Around Spring, TX Families",
    aboutParagraph1: "Spring is a vibrant community on the north side of Houston — a place where families of all stages of life have made their home. For the seniors who live here, staying home is about more than convenience. It's about identity, dignity, and being part of the community they've built their lives in. Bloom Home Care is here to support that.",
    aboutParagraph2: "We serve Spring with personalized, non-medical in-home care that starts with listening. Before any caregiver arrives, we meet with your family, learn about your loved one's routines and personality, and thoughtfully match them with a caregiver who is the right fit — not just the nearest available.",
    aboutParagraph3: "Our Spring services include companion care, personal care, respite for family caregivers, post-hospital recovery support, meal preparation, medication reminders, light housekeeping, and transportation assistance. Flexible scheduling, no long-term contracts, and a care team that genuinely cares.",
    faqs: [
      { question: "What areas of Spring, TX does Bloom Home Care serve?", answer: "We serve all of Spring, including communities in the 77373, 77379, 77380, 77381, 77386, and 77388 zip codes. Call us to confirm your specific address is within our coverage area." },
      { question: "How quickly can home care begin in Spring?", answer: "For most clients, we're able to begin care within 24 to 72 hours of your first consultation. We prioritize urgency for families navigating post-hospital discharge or sudden care needs." },
      { question: "Can you provide care for a parent in a senior living facility in Spring?", answer: "Yes. Bloom Home Care provides in-facility companion and personal care in senior living communities throughout the Spring area, offering dedicated one-on-one support beyond what facility staff provides." },
      { question: "What makes Bloom Home Care the right choice in Spring?", answer: "We are locally operated — not a franchise with a national call center. We personally match caregivers to clients, maintain proactive communication with families, and treat every person we serve with genuine dignity and respect." },
    ],
    nearbyAreas: [
      { name: "The Woodlands", slug: "the-woodlands-tx" },
      { name: "Tomball", slug: "tomball-tx" },
      { name: "Humble", slug: "humble-tx" },
      { name: "Cypress", slug: "cypress-tx" },
    ],
  },

  "the-woodlands": {
    city: "The Woodlands",
    county: "Montgomery County",
    zipCodes: "77380, 77381, 77382, 77384, 77385, 77386, 77389, 77393",
    heroHeadline: "Home Care Services in The Woodlands, TX",
    heroSubheadline: "Premium, relationship-centered in-home care for seniors in The Woodlands — compassionate support that honors the quality of life this community is known for.",
    aboutTitle: "Exceptional Home Care for The Woodlands Families",
    aboutParagraph1: "The Woodlands is one of the most carefully designed and highly regarded planned communities in the country — a place where residents expect excellence in every aspect of life. At Bloom Home Care, we bring that same commitment to excellence to in-home senior care. Families in The Woodlands deserve nothing less.",
    aboutParagraph2: "We serve The Woodlands with a deeply personal care model. We take time with every family — learning about your loved one's lifestyle, preferences, values, and care needs — before we ever make a caregiver match. Our matching process is thoughtful and intentional, and we welcome ongoing feedback to ensure the fit stays right over time.",
    aboutParagraph3: "From companion care and personal hygiene assistance to respite support for family caregivers and post-hospital recovery, Bloom Home Care offers a full range of non-medical in-home services across The Woodlands and surrounding Montgomery County communities.",
    faqs: [
      { question: "Do you serve all of The Woodlands, TX?", answer: "Yes. We serve all of The Woodlands, including Hughes Landing, Town Center, Creekside Park, Cochran's Crossing, Panther Creek, Indian Springs, Alden Bridge, and other villages throughout the 77380–77393 zip codes." },
      { question: "How does Bloom Home Care match caregivers for clients in The Woodlands?", answer: "After a thorough intake conversation, we personally select caregivers based on experience, personality, and care compatibility — not just availability. We introduce the match before care begins and welcome your honest feedback." },
      { question: "Can care begin quickly in The Woodlands?", answer: "Yes. For most clients, care starts within 24 to 72 hours of your initial consultation. Post-hospital situations are given priority." },
      { question: "Do you serve residents of senior communities in The Woodlands?", answer: "Absolutely. We provide in-facility companion and personal care for clients in The Woodlands-area senior living communities, offering focused one-on-one attention that supplements facility care." },
    ],
    nearbyAreas: [
      { name: "Spring", slug: "spring-tx" },
      { name: "Conroe", slug: "conroe-tx" },
      { name: "Tomball", slug: "tomball-tx" },
      { name: "Kingwood", slug: "kingwood-tx" },
    ],
  },

  conroe: {
    city: "Conroe",
    county: "Montgomery County",
    zipCodes: "77301, 77302, 77303, 77304, 77305, 77306",
    heroHeadline: "Home Care Services in Conroe, TX",
    heroSubheadline: "Compassionate, non-medical in-home care for seniors in Conroe — personalized support so your loved one can age safely and with dignity in the home they love.",
    aboutTitle: "Serving Conroe Families with Care That Feels Like Family",
    aboutParagraph1: "Conroe is a growing community with a strong sense of identity — a city where people are proud to live and seniors are proud to call home. At Bloom Home Care, we serve Conroe families with the belief that the best place to age is at home, surrounded by familiar faces and the comfort of your own space.",
    aboutParagraph2: "Our approach to care in Conroe starts with a conversation. We sit down with your family, listen carefully to your loved one's needs and preferences, and build a care plan that reflects their real life — not a generic template. Caregivers are matched personally, not assigned at random.",
    aboutParagraph3: "Services available in Conroe include companion care, personal care and ADL assistance, respite care, post-hospital recovery support, meal preparation, medication reminders, and light housekeeping. We're flexible, accessible, and committed to the families we serve.",
    faqs: [
      { question: "What parts of Conroe, TX does Bloom Home Care serve?", answer: "We serve all of Conroe, including communities throughout the 77301–77306 zip codes. Call us to confirm your address falls within our service zone." },
      { question: "How soon can home care begin in Conroe?", answer: "For most families, care can begin within 24 to 72 hours of your initial conversation with us. We prioritize families with urgent or post-discharge needs." },
      { question: "Can Bloom Home Care provide care inside a senior living facility in Conroe?", answer: "Yes. We offer in-facility companion and personal care for clients in senior communities throughout Conroe and Montgomery County." },
      { question: "Is there a minimum number of hours required?", answer: "We have a minimum visit length of two hours to ensure quality, unhurried care. There are no long-term contracts — scheduling is flexible and adjustable as your needs change." },
    ],
    nearbyAreas: [
      { name: "The Woodlands", slug: "the-woodlands-tx" },
      { name: "Spring", slug: "spring-tx" },
      { name: "Tomball", slug: "tomball-tx" },
      { name: "Humble", slug: "humble-tx" },
    ],
  },

  tomball: {
    city: "Tomball",
    county: "Harris County",
    zipCodes: "77375, 77377",
    heroHeadline: "Home Care Services in Tomball, TX",
    heroSubheadline: "Trusted, personalized in-home care for seniors in Tomball — a locally operated team that knows this community and genuinely cares about the families in it.",
    aboutTitle: "Home Care Rooted in the Tomball Community",
    aboutParagraph1: "Tomball has a character that's hard to find in bigger cities — a genuine small-town warmth that its residents take real pride in. The seniors who live here chose Tomball for a reason, and they want to stay. Bloom Home Care is here to make aging in place in Tomball not just possible, but sustainable and dignified.",
    aboutParagraph2: "We serve Tomball and surrounding Harris County communities with non-medical in-home care that's built on genuine relationships. Our caregiver matching process is thoughtful and personal — we take time to understand who your loved one is before we introduce anyone into their home.",
    aboutParagraph3: "Whether your loved one needs a few hours of companion care each week, daily personal care assistance, help after a hospital stay, or simply a consistent and trustworthy presence, Bloom Home Care brings calm and compassionate support right to their door.",
    faqs: [
      { question: "Does Bloom Home Care serve Tomball, TX?", answer: "Yes. We serve all of Tomball, including the 77375 and 77377 zip codes and surrounding areas. Call us to confirm coverage for your specific address." },
      { question: "How quickly can care start in Tomball?", answer: "For most families, care begins within 24 to 72 hours of your initial consultation. Urgent situations, including post-hospital discharge, are given priority." },
      { question: "What services are available in Tomball?", answer: "We offer companion care, personal care, respite care, post-hospital recovery support, meal preparation, medication reminders, light housekeeping, and transportation accompaniment." },
      { question: "Are your Tomball caregivers background-checked?", answer: "Yes. Every Bloom Home Care caregiver undergoes thorough background screening, is fully insured, and receives training before being placed with any client." },
    ],
    nearbyAreas: [
      { name: "Spring", slug: "spring-tx" },
      { name: "The Woodlands", slug: "the-woodlands-tx" },
      { name: "Cypress", slug: "cypress-tx" },
      { name: "Humble", slug: "humble-tx" },
    ],
  },

  cypress: {
    city: "Cypress",
    county: "Harris County",
    zipCodes: "77429, 77433",
    heroHeadline: "Home Care Services in Cypress, TX",
    heroSubheadline: "Professional, relationship-first in-home care for seniors in Cypress, TX — thoughtfully matched caregivers and flexible scheduling for families who need trusted support.",
    aboutTitle: "Caring for Cypress Seniors at Home",
    aboutParagraph1: "Cypress is one of Northwest Houston's most established and family-oriented communities — a place where people build their lives and plan to stay. For the seniors in Cypress who want to age in place, Bloom Home Care provides the in-home support that makes it not just possible, but comfortable and safe.",
    aboutParagraph2: "Our care model in Cypress is built on relationship, not just routine. We take the time to understand your loved one before a caregiver ever arrives. Then we make a thoughtful, personal match based on personality, care needs, and compatibility — and we check in regularly to make sure everything continues to feel right.",
    aboutParagraph3: "Bloom Home Care's services in Cypress include companion care, personal care and ADL assistance, respite care for family caregivers, post-hospital recovery, meal preparation, medication reminders, and light housekeeping — all scheduled flexibly around your family's needs.",
    faqs: [
      { question: "What parts of Cypress, TX does Bloom Home Care serve?", answer: "We serve all of Cypress, including communities in the 77429 and 77433 zip codes. Call us to verify your address is within our service area." },
      { question: "How does caregiver matching work in Cypress?", answer: "After your initial consultation, we review our caregiver team and select the best match for your loved one based on experience, schedule, and personality. We make a formal introduction before care begins and adjust if needed." },
      { question: "Can care start quickly in Cypress?", answer: "Yes. Most clients begin receiving care within 24 to 72 hours of their first consultation. Urgent situations are given priority." },
      { question: "Can you provide care for a parent in a Cypress senior living facility?", answer: "Absolutely. We provide in-facility care in senior communities throughout Cypress, offering personalized attention beyond what facility staff can provide alone." },
    ],
    nearbyAreas: [
      { name: "Tomball", slug: "tomball-tx" },
      { name: "Spring", slug: "spring-tx" },
      { name: "Katy", slug: "katy-tx" },
      { name: "The Woodlands", slug: "the-woodlands-tx" },
    ],
  },

  humble: {
    city: "Humble",
    county: "Harris County",
    zipCodes: "77338, 77346, 77347",
    heroHeadline: "Home Care Services in Humble, TX",
    heroSubheadline: "Compassionate, non-medical in-home care for seniors in Humble — trusted support from a team that takes the time to truly understand your family's needs.",
    aboutTitle: "Dependable Home Care for Humble, TX Families",
    aboutParagraph1: "Humble is a community where residents take pride in looking out for each other. When a senior family member needs more consistent support than family alone can provide, Bloom Home Care steps in with trusted, personalized in-home care that keeps your loved one safe, comfortable, and connected at home.",
    aboutParagraph2: "We serve Humble and surrounding Harris County communities with care that starts with listening. Every client receives an individualized care plan built around their routines, preferences, and personality — and a caregiver matched to fit, not just whoever is available.",
    aboutParagraph3: "Our Humble services include companion care, personal care and hygiene assistance, respite care, post-hospital recovery support, meal preparation, medication reminders, light housekeeping, and transportation. We're available when you need us and responsive when circumstances change.",
    faqs: [
      { question: "Does Bloom Home Care serve Humble, TX?", answer: "Yes. We serve Humble and surrounding areas in the 77338, 77346, and 77347 zip codes, including Atascocita and surrounding neighborhoods. Call us to confirm your address." },
      { question: "How quickly can care begin in Humble?", answer: "For most clients, care can begin within 24 to 72 hours of your initial consultation. We prioritize families navigating hospital discharge or urgent care transitions." },
      { question: "What types of care does Bloom Home Care provide in Humble?", answer: "We offer a full range of non-medical in-home care, including companion care, personal care, respite care, post-hospital support, meal prep, and medication reminders." },
      { question: "Are contracts required for home care in Humble?", answer: "No long-term contracts are required. We're flexible and adjust scheduling as your loved one's needs change, with a minimum two-hour visit per session." },
    ],
    nearbyAreas: [
      { name: "Kingwood", slug: "kingwood-tx" },
      { name: "Spring", slug: "spring-tx" },
      { name: "Conroe", slug: "conroe-tx" },
      { name: "The Woodlands", slug: "the-woodlands-tx" },
    ],
  },

  kingwood: {
    city: "Kingwood",
    county: "Harris County",
    zipCodes: "77339, 77345, 77346, 77365",
    heroHeadline: "Home Care Services in Kingwood, TX",
    heroSubheadline: "Trusted, personalized in-home care for seniors in Kingwood — consistent, relationship-centered support in one of Houston's most beloved communities.",
    aboutTitle: "Quality Home Care in Kingwood's 'Livable Forest'",
    aboutParagraph1: "Kingwood — known as the \"Livable Forest\" — has long been one of Houston's most treasured communities. Its tree-lined streets, quiet neighborhoods, and strong sense of community make it a place where seniors have every reason to want to stay. Bloom Home Care helps make aging in place in Kingwood not just a goal, but a comfortable reality.",
    aboutParagraph2: "Our care in Kingwood is built on real relationships. We get to know each client as a person before we introduce a caregiver. We match thoughtfully — based on personality, experience, and compatibility — and we maintain ongoing communication with families to ensure everything continues to feel right.",
    aboutParagraph3: "Bloom Home Care provides companion care, personal care, respite care, post-hospital recovery support, meal preparation, medication reminders, and light housekeeping throughout Kingwood. Flexible scheduling, no long-term contracts, and a team that picks up when you call.",
    faqs: [
      { question: "Do you serve all of Kingwood?", answer: "Yes. We serve all of Kingwood, including Kings Forest, Hunters Ridge, Forest Cove, Trailwood Village, and other neighborhoods throughout the 77339, 77345, 77346, and 77365 zip codes." },
      { question: "How soon can care begin in Kingwood?", answer: "For most families, care begins within 24 to 72 hours of your initial consultation. We're responsive to urgent needs, including post-hospital discharge situations." },
      { question: "Can Bloom Home Care provide care inside a Kingwood senior living community?", answer: "Yes. We provide in-facility care for clients in senior living communities throughout Kingwood, delivering personalized one-on-one support alongside what the facility provides." },
      { question: "What's different about Bloom Home Care in Kingwood?", answer: "We're a locally owned, personally run team. You'll reach real people when you call. Our caregiver matching is intentional, our care plans are individualized, and our commitment doesn't stop after the first visit." },
    ],
    nearbyAreas: [
      { name: "Humble", slug: "humble-tx" },
      { name: "Spring", slug: "spring-tx" },
      { name: "The Woodlands", slug: "the-woodlands-tx" },
      { name: "Baytown", slug: "baytown-tx" },
    ],
  },

  // ── East Houston ─────────────────────────────────────────────────────────────

  pasadena: {
    city: "Pasadena",
    county: "Harris County",
    zipCodes: "77501, 77502, 77503, 77504, 77505, 77506, 77507, 77508",
    heroHeadline: "Home Care Services in Pasadena, TX",
    heroSubheadline: "Compassionate, non-medical in-home care for seniors in Pasadena — trusted support that allows your loved one to remain safe and comfortable at home.",
    aboutTitle: "In-Home Care for Pasadena, TX Seniors",
    aboutParagraph1: "Pasadena is a hardworking, close-knit city on the east side of Houston — a community where family runs deep and people take care of their own. When a loved one needs more consistent support, Bloom Home Care brings trusted, personalized in-home care that respects the values Pasadena families hold dear.",
    aboutParagraph2: "We serve Pasadena with a care model built on listening first. Before a caregiver ever arrives, we take the time to understand your loved one — their schedule, preferences, personality, and needs. Then we match them with a caregiver selected specifically for them.",
    aboutParagraph3: "Our Pasadena services include companion care, personal care and ADL assistance, respite for family caregivers, post-hospital recovery support, meal preparation, medication reminders, and light housekeeping. Flexible scheduling, no long-term contracts, and a team that communicates with your family every step of the way.",
    faqs: [
      { question: "Does Bloom Home Care serve Pasadena, TX?", answer: "Yes. We serve all of Pasadena across multiple zip codes including 77501–77508. Call us to confirm your address is within our service area." },
      { question: "How quickly can care begin in Pasadena?", answer: "For most families, care begins within 24 to 72 hours of your initial consultation. Urgent and post-hospital situations are prioritized." },
      { question: "Can you provide care inside a Pasadena senior living facility?", answer: "Yes. We provide in-facility companion and personal care for clients in senior communities throughout the Pasadena area." },
      { question: "Do you require a minimum commitment for home care in Pasadena?", answer: "No long-term contracts are required. We do ask for a minimum two-hour visit per session to ensure quality, unhurried care. Scheduling is flexible beyond that." },
    ],
    nearbyAreas: [
      { name: "Baytown", slug: "baytown-tx" },
      { name: "Deer Park", slug: "deer-park-tx" },
      { name: "La Porte", slug: "la-porte-tx" },
      { name: "Channelview", slug: "channelview-tx" },
    ],
  },

  baytown: {
    city: "Baytown",
    county: "Harris County",
    zipCodes: "77520, 77521, 77522, 77523",
    heroHeadline: "Home Care Services in Baytown, TX",
    heroSubheadline: "Trusted, personalized in-home care for seniors in Baytown — consistent, relationship-centered support from a team that takes care seriously.",
    aboutTitle: "Dependable Home Care for Baytown, TX Families",
    aboutParagraph1: "Baytown is a city with character — a working waterfront community where families have lived for generations and seniors have deep roots. For the older adults who call Baytown home, staying there matters. Bloom Home Care provides the in-home support that makes aging in place in Baytown safe and sustainable.",
    aboutParagraph2: "We serve Baytown families with personalized, non-medical in-home care. Our process starts with understanding — we learn who your loved one is as a person before we match them with a caregiver. That matching is intentional and personal, not random.",
    aboutParagraph3: "Bloom Home Care's services in Baytown include companion care, personal care, respite for family caregivers, post-hospital recovery support, meal preparation, medication reminders, light housekeeping, and transportation assistance. Available when you need us, responsive when things change.",
    faqs: [
      { question: "Does Bloom Home Care serve Baytown, TX?", answer: "Yes. We serve all of Baytown within the 77520, 77521, 77522, and 77523 zip codes. Call us to confirm coverage for your specific address." },
      { question: "How soon can home care begin in Baytown?", answer: "Most families begin receiving care within 24 to 72 hours of their initial consultation. Urgent situations, particularly post-hospital, are prioritized." },
      { question: "Do you provide in-facility care in Baytown senior communities?", answer: "Yes. We provide companion and personal care for clients in senior living communities in and around Baytown." },
      { question: "What makes Bloom Home Care different in Baytown?", answer: "We're not a franchise. We're a locally operated, personally accountable team that matches caregivers thoughtfully and communicates proactively with every family we serve." },
    ],
    nearbyAreas: [
      { name: "Pasadena", slug: "pasadena-tx" },
      { name: "La Porte", slug: "la-porte-tx" },
      { name: "Deer Park", slug: "deer-park-tx" },
      { name: "Channelview", slug: "channelview-tx" },
    ],
  },

  channelview: {
    city: "Channelview",
    county: "Harris County",
    zipCodes: "77530",
    heroHeadline: "Home Care Services in Channelview, TX",
    heroSubheadline: "Compassionate, non-medical in-home care for seniors in Channelview — trusted support delivered by caregivers who understand this community.",
    aboutTitle: "Home Care That Comes to You in Channelview, TX",
    aboutParagraph1: "Channelview is a tight-knit community in East Harris County where families look after one another. When a senior loved one needs more consistent support, Bloom Home Care provides trusted in-home care that keeps them safe, comfortable, and cared for — right where they belong.",
    aboutParagraph2: "We serve Channelview with personalized care built around each individual. We listen before we act — learning about your loved one's daily routine, preferences, and personality — and we match them with a caregiver chosen specifically for their needs and character.",
    aboutParagraph3: "Services in Channelview include companion care, personal care and hygiene assistance, respite care, post-hospital recovery support, meal preparation, medication reminders, and light housekeeping. No long-term contracts. Flexible scheduling. A team that picks up when you call.",
    faqs: [
      { question: "Does Bloom Home Care serve Channelview, TX?", answer: "Yes. We serve Channelview and surrounding East Houston communities within the 77530 zip code and surrounding areas." },
      { question: "How quickly can care begin in Channelview?", answer: "For most families, care begins within 24 to 72 hours of your initial consultation. We prioritize urgent and post-hospital situations." },
      { question: "What services are available in Channelview?", answer: "We offer companion care, personal care, respite care, post-hospital support, meal preparation, medication reminders, and light housekeeping — all non-medical and tailored to each client." },
      { question: "Are your caregivers vetted and insured?", answer: "Yes. Every Bloom Home Care caregiver is thoroughly background-checked, trained, and fully insured before being placed with any client." },
    ],
    nearbyAreas: [
      { name: "Pasadena", slug: "pasadena-tx" },
      { name: "Baytown", slug: "baytown-tx" },
      { name: "Deer Park", slug: "deer-park-tx" },
      { name: "Humble", slug: "humble-tx" },
    ],
  },

  "deer-park": {
    city: "Deer Park",
    county: "Harris County",
    zipCodes: "77536",
    heroHeadline: "Home Care Services in Deer Park, TX",
    heroSubheadline: "Personalized, non-medical in-home care for seniors in Deer Park — a locally operated team delivering compassionate support with consistency and heart.",
    aboutTitle: "Trusted Home Care for Deer Park, TX Seniors",
    aboutParagraph1: "Deer Park is a community where people know their neighbors and take pride in their city. For the seniors who live here, home is more than a house — it's decades of memory, comfort, and connection. Bloom Home Care provides the in-home support that helps them stay there, on their own terms.",
    aboutParagraph2: "We serve Deer Park with non-medical, relationship-centered in-home care. Our process starts with listening — genuinely listening — to understand your loved one before we introduce any caregiver. Matching is personal, intentional, and designed to build trust from day one.",
    aboutParagraph3: "Our services in Deer Park include companion care, personal care, respite for family caregivers, post-hospital recovery support, meal preparation, medication reminders, light housekeeping, and transportation accompaniment. Flexible, compassionate, and always focused on dignity.",
    faqs: [
      { question: "Does Bloom Home Care serve Deer Park, TX?", answer: "Yes. We serve all of Deer Park within the 77536 zip code and surrounding East Houston communities." },
      { question: "How quickly can home care begin in Deer Park?", answer: "Most families begin care within 24 to 72 hours of their first call. Urgent situations, including hospital discharge, are prioritized." },
      { question: "Can you provide care for a loved one in a Deer Park senior facility?", answer: "Yes. We provide in-facility companion and personal care for clients in senior communities in and around Deer Park." },
      { question: "What does the care process look like when starting with Bloom Home Care?", answer: "It begins with a free consultation where we learn about your loved one's needs, personality, and daily life. Then we personally match a caregiver, make a formal introduction, and begin care — remaining in close contact with your family throughout." },
    ],
    nearbyAreas: [
      { name: "Pasadena", slug: "pasadena-tx" },
      { name: "Baytown", slug: "baytown-tx" },
      { name: "La Porte", slug: "la-porte-tx" },
      { name: "Channelview", slug: "channelview-tx" },
    ],
  },

  "la-porte": {
    city: "La Porte",
    county: "Harris County",
    zipCodes: "77571, 77572",
    heroHeadline: "Home Care Services in La Porte, TX",
    heroSubheadline: "Compassionate, non-medical in-home care for seniors in La Porte — trusted support so your loved one can age comfortably in the home they love.",
    aboutTitle: "Home Care Built for La Porte Families",
    aboutParagraph1: "La Porte is a bayfront community with a strong sense of history and an even stronger sense of belonging. Seniors here have often lived in their homes for decades, and the idea of leaving isn't part of the plan. Bloom Home Care makes staying home possible — providing the support your loved one needs to remain safe, comfortable, and engaged.",
    aboutParagraph2: "We serve La Porte with personalized, non-medical in-home care centered on genuine relationships. We take the time to understand who your loved one is — their habits, preferences, personality — and match them with a caregiver who is chosen for them specifically.",
    aboutParagraph3: "From companionship and personal care to post-hospital recovery support and respite for family caregivers, Bloom Home Care provides a full range of services in La Porte. Flexible scheduling, no long-term contracts, and a care coordinator you can actually reach.",
    faqs: [
      { question: "Does Bloom Home Care serve La Porte, TX?", answer: "Yes. We serve all of La Porte within the 77571 and 77572 zip codes, as well as nearby East Houston communities." },
      { question: "How soon can care begin in La Porte?", answer: "For most clients, care begins within 24 to 72 hours of your initial consultation. Post-hospital and urgent situations are given priority." },
      { question: "What services are available in La Porte?", answer: "We offer companion care, personal care and ADL assistance, respite care, post-hospital recovery support, meal preparation, medication reminders, and light housekeeping." },
      { question: "Do you serve clients in La Porte senior living facilities?", answer: "Yes. We provide in-facility companion and personal care for clients in senior communities throughout the La Porte area." },
    ],
    nearbyAreas: [
      { name: "Pasadena", slug: "pasadena-tx" },
      { name: "Deer Park", slug: "deer-park-tx" },
      { name: "Baytown", slug: "baytown-tx" },
      { name: "League City", slug: "league-city-tx" },
    ],
  },

  // ── South Houston ─────────────────────────────────────────────────────────────

  pearland: {
    city: "Pearland",
    county: "Brazoria County",
    zipCodes: "77581, 77584, 77588",
    heroHeadline: "Home Care Services in Pearland, TX",
    heroSubheadline: "Trusted, relationship-centered in-home care for seniors in Pearland — compassionate support from a team that takes the time to truly know your loved one.",
    aboutTitle: "Exceptional Home Care for Pearland, TX Families",
    aboutParagraph1: "Pearland has grown into one of the most vibrant communities in the Greater Houston area — a city where diverse families have put down roots and seniors choose to stay. Bloom Home Care serves Pearland with the belief that aging at home should feel like living, not just being cared for.",
    aboutParagraph2: "Our care in Pearland is personal from the start. We take time with every family — listening carefully to your loved one's needs, preferences, and personality — before we ever make a caregiver match. The result is care that feels natural, consistent, and genuinely supportive.",
    aboutParagraph3: "Bloom Home Care's Pearland services include companion care, personal care, respite for family caregivers, post-hospital recovery support, meal preparation, medication reminders, light housekeeping, and transportation assistance. All non-medical, all flexible, and all focused on your loved one.",
    faqs: [
      { question: "What parts of Pearland, TX does Bloom Home Care serve?", answer: "We serve all of Pearland, including communities in the 77581, 77584, and 77588 zip codes. Call us to confirm coverage for your specific address." },
      { question: "How quickly can care begin in Pearland?", answer: "For most families, care begins within 24 to 72 hours of your initial consultation. We prioritize urgent situations and post-hospital transitions." },
      { question: "Can you provide care in a Pearland senior living community?", answer: "Yes. We provide in-facility companion and personal care in senior communities throughout Pearland, offering dedicated one-on-one attention alongside facility staff." },
      { question: "Why choose Bloom Home Care in Pearland?", answer: "We're locally operated and personally accountable. Our caregiver matching is thoughtful, our communication is proactive, and our focus is always on your loved one as a whole person — not just a care schedule." },
    ],
    nearbyAreas: [
      { name: "Missouri City", slug: "missouri-city-tx" },
      { name: "Friendswood", slug: "friendswood-tx" },
      { name: "Manvel", slug: "manvel-tx" },
      { name: "Alvin", slug: "alvin-tx" },
    ],
  },

  "missouri-city": {
    city: "Missouri City",
    county: "Fort Bend / Harris County",
    zipCodes: "77459, 77489",
    heroHeadline: "Home Care Services in Missouri City, TX",
    heroSubheadline: "Compassionate, non-medical in-home care for seniors in Missouri City — trusted support that allows your loved one to age safely and independently at home.",
    aboutTitle: "In-Home Care for Missouri City, TX Families",
    aboutParagraph1: "Missouri City is a diverse, thriving community that spans Fort Bend and Harris Counties — a city where families of all backgrounds have built lasting lives. For the seniors who call Missouri City home, Bloom Home Care provides the kind of in-home support that makes staying home not just possible, but genuinely comfortable.",
    aboutParagraph2: "We serve Missouri City with personalized, non-medical in-home care built on real relationships. We listen first — to who your loved one is, how they live, what matters to them — and then we build a care plan around that. Our caregiver matching is intentional and personal.",
    aboutParagraph3: "Our Missouri City services include companion care, personal care and ADL assistance, respite care, post-hospital recovery support, meal preparation, medication reminders, light housekeeping, and transportation assistance. Flexible, compassionate, and always accessible.",
    faqs: [
      { question: "Does Bloom Home Care serve Missouri City, TX?", answer: "Yes. We serve Missouri City, including the 77459 and 77489 zip codes and surrounding areas in Fort Bend and Harris Counties." },
      { question: "How quickly can care begin in Missouri City?", answer: "For most clients, care begins within 24 to 72 hours of your initial conversation. We prioritize urgent and post-hospital situations." },
      { question: "What services does Bloom Home Care offer in Missouri City?", answer: "We offer companion care, personal care, respite care, post-hospital recovery, meal preparation, medication reminders, light housekeeping, and transportation — all non-medical and tailored to each client." },
      { question: "Do you require long-term contracts in Missouri City?", answer: "No. We operate without long-term contracts. Care schedules are flexible and adjusted as your loved one's needs evolve." },
    ],
    nearbyAreas: [
      { name: "Sugar Land", slug: "sugar-land-tx" },
      { name: "Pearland", slug: "pearland-tx" },
      { name: "Rosenberg", slug: "rosenberg-tx" },
      { name: "Friendswood", slug: "friendswood-tx" },
    ],
  },

  "sugar-land": {
    city: "Sugar Land",
    county: "Fort Bend County",
    zipCodes: "77478, 77479, 77496, 77498",
    heroHeadline: "Home Care Services in Sugar Land, TX",
    heroSubheadline: "Premium, relationship-first in-home care for seniors in Sugar Land — personalized support that reflects the standards families in this community expect.",
    aboutTitle: "Quality In-Home Care for Sugar Land Families",
    aboutParagraph1: "Sugar Land is one of the most highly regarded cities in Texas — a beautifully planned community where families set high expectations for every aspect of life. Bloom Home Care was built for families like yours. We bring the same care, attention to detail, and genuine commitment to excellence that Sugar Land families deserve.",
    aboutParagraph2: "Our care model in Sugar Land begins with a thorough, unhurried conversation. We get to know your loved one — their personality, preferences, routines, and care needs — and then we personally match them with a caregiver selected specifically for them. That match is reviewed and refined until the fit feels exactly right.",
    aboutParagraph3: "From companion care and personal hygiene assistance to respite care, post-hospital recovery, and dementia support, Bloom Home Care provides a full range of non-medical services throughout Sugar Land and Fort Bend County. Flexible scheduling, no contracts, and a care team that is always responsive.",
    faqs: [
      { question: "Do you serve all of Sugar Land, TX?", answer: "Yes. We serve all of Sugar Land, including First Colony, New Territory, Telfair, Riverstone, and communities throughout the 77478, 77479, 77496, and 77498 zip codes." },
      { question: "How is caregiver matching handled for Sugar Land clients?", answer: "After your intake consultation, we personally review our caregiver team and select the best match for your loved one based on personality, experience, and care compatibility. We introduce the match before care begins and welcome your feedback." },
      { question: "How quickly can care begin in Sugar Land?", answer: "For most clients, care starts within 24 to 72 hours. Post-hospital transitions are given priority." },
      { question: "Do you provide in-facility care in Sugar Land senior communities?", answer: "Yes. We provide in-facility companion and personal care in senior living communities throughout Sugar Land and Fort Bend County." },
    ],
    nearbyAreas: [
      { name: "Missouri City", slug: "missouri-city-tx" },
      { name: "Richmond", slug: "richmond-tx" },
      { name: "Pearland", slug: "pearland-tx" },
      { name: "Katy", slug: "katy-tx" },
    ],
  },

  "league-city": {
    city: "League City",
    county: "Galveston County",
    zipCodes: "77573, 77574",
    heroHeadline: "Home Care Services in League City, TX",
    heroSubheadline: "Trusted, compassionate in-home care for seniors in League City — personalized support that allows aging in place with comfort and dignity.",
    aboutTitle: "Home Care for League City Families",
    aboutParagraph1: "League City is one of the fastest-growing and most family-friendly cities on the Gulf Coast — a community where people build their lives and seniors choose to stay. Bloom Home Care serves League City families with personalized in-home care that makes aging at home not just manageable, but genuinely good.",
    aboutParagraph2: "We serve League City with non-medical in-home care built around real relationships. We take the time to understand each client as a person — their habits, preferences, and what makes their day feel good — and then we match them with a caregiver selected to fit, not just to fill the schedule.",
    aboutParagraph3: "Our League City services include companion care, personal care, respite for family caregivers, post-hospital recovery support, meal preparation, medication reminders, light housekeeping, and transportation. Flexible scheduling, caring staff, and a team that's easy to reach.",
    faqs: [
      { question: "Does Bloom Home Care serve League City, TX?", answer: "Yes. We serve all of League City within the 77573 and 77574 zip codes and surrounding Galveston County communities." },
      { question: "How quickly can care begin in League City?", answer: "For most families, care begins within 24 to 72 hours of your initial consultation. Urgent and post-hospital situations are prioritized." },
      { question: "What services are available in League City?", answer: "We offer companion care, personal care, respite care, post-hospital recovery, meal preparation, medication reminders, and light housekeeping — all non-medical and tailored to each client." },
      { question: "Can you provide care in League City senior living facilities?", answer: "Yes. We provide in-facility companion and personal care for clients in senior communities throughout the League City and Clear Lake area." },
    ],
    nearbyAreas: [
      { name: "Friendswood", slug: "friendswood-tx" },
      { name: "Clear Lake", slug: "clear-lake-tx" },
      { name: "Webster", slug: "webster-tx" },
      { name: "Pearland", slug: "pearland-tx" },
    ],
  },

  friendswood: {
    city: "Friendswood",
    county: "Galveston / Harris County",
    zipCodes: "77546",
    heroHeadline: "Home Care Services in Friendswood, TX",
    heroSubheadline: "Compassionate, non-medical in-home care for seniors in Friendswood — consistent, relationship-centered support from a team that values this community.",
    aboutTitle: "Home Care Rooted in Friendswood, TX",
    aboutParagraph1: "Friendswood is a city that truly lives up to its name — a warm, welcoming community where neighbors look out for one another and families put genuine care into how they live. For seniors in Friendswood, that community spirit extends into their care. Bloom Home Care is honored to serve families here.",
    aboutParagraph2: "Our approach in Friendswood is personal from the first conversation. We listen to understand who your loved one is — not just what they need — and we match them with a caregiver who suits their personality and routine. That relationship is the foundation of everything we do.",
    aboutParagraph3: "Bloom Home Care's Friendswood services include companion care, personal care and ADL assistance, respite care, post-hospital recovery support, meal preparation, medication reminders, and light housekeeping. No long-term contracts, flexible scheduling, and a team that stays in communication.",
    faqs: [
      { question: "Does Bloom Home Care serve Friendswood, TX?", answer: "Yes. We serve all of Friendswood within the 77546 zip code and neighboring communities in Galveston and Harris Counties." },
      { question: "How quickly can care begin in Friendswood?", answer: "For most clients, care begins within 24 to 72 hours of your initial call. We prioritize urgent situations including post-hospital discharge." },
      { question: "What home care services are available in Friendswood?", answer: "We offer companion care, personal care, respite care, post-hospital support, meal preparation, medication reminders, and light housekeeping." },
      { question: "Are your caregivers in Friendswood fully vetted?", answer: "Yes. All Bloom Home Care caregivers undergo thorough background checks, are fully insured, and receive training before placement with any client." },
    ],
    nearbyAreas: [
      { name: "Pearland", slug: "pearland-tx" },
      { name: "League City", slug: "league-city-tx" },
      { name: "Webster", slug: "webster-tx" },
      { name: "Clear Lake", slug: "clear-lake-tx" },
    ],
  },

  alvin: {
    city: "Alvin",
    county: "Brazoria County",
    zipCodes: "77511",
    heroHeadline: "Home Care Services in Alvin, TX",
    heroSubheadline: "Trusted, personalized in-home care for seniors in Alvin — compassionate support that keeps your loved one comfortable and safe at home.",
    aboutTitle: "Bringing Quality Home Care to Alvin, TX",
    aboutParagraph1: "Alvin is a small city with a big heart — a community in Brazoria County where families take care of each other and seniors have deep ties to the places they've lived. When extra support is needed, Bloom Home Care provides trusted in-home care that helps your loved one stay where they belong.",
    aboutParagraph2: "We serve Alvin and surrounding Brazoria County with non-medical in-home care built on genuine relationships. Our caregivers are chosen specifically for each client — based on personality, care needs, and compatibility — not just assigned because they're available.",
    aboutParagraph3: "Services in Alvin include companion care, personal care, respite for family caregivers, post-hospital recovery support, meal preparation, medication reminders, and light housekeeping. Flexible scheduling with no long-term contracts and a team that communicates clearly.",
    faqs: [
      { question: "Does Bloom Home Care serve Alvin, TX?", answer: "Yes. We serve Alvin and the surrounding Brazoria County area within the 77511 zip code. Call us to confirm your address is within our coverage area." },
      { question: "How quickly can care begin in Alvin?", answer: "For most families, care begins within 24 to 72 hours of your first consultation. Urgent situations are always prioritized." },
      { question: "What services are available in Alvin?", answer: "We provide companion care, personal care, respite care, post-hospital recovery, meal preparation, medication reminders, and light housekeeping — all non-medical and personalized." },
      { question: "Are there long-term contract requirements in Alvin?", answer: "No long-term contracts are required. We're flexible and responsive to changing needs, with a minimum two-hour visit per session." },
    ],
    nearbyAreas: [
      { name: "Pearland", slug: "pearland-tx" },
      { name: "Manvel", slug: "manvel-tx" },
      { name: "Friendswood", slug: "friendswood-tx" },
      { name: "League City", slug: "league-city-tx" },
    ],
  },

  manvel: {
    city: "Manvel",
    county: "Brazoria County",
    zipCodes: "77578",
    heroHeadline: "Home Care Services in Manvel, TX",
    heroSubheadline: "Compassionate, non-medical in-home care for seniors in Manvel — trusted, personalized support from a locally operated team.",
    aboutTitle: "Home Care for Growing Manvel, TX Families",
    aboutParagraph1: "Manvel is one of Brazoria County's fastest-growing communities — a city attracting young families and multigenerational households alike. As the community grows, so does the need for trusted in-home care for the seniors who live here. Bloom Home Care is ready to serve.",
    aboutParagraph2: "We bring our relationship-centered care model to Manvel — taking the time to understand your loved one before matching them with a caregiver, building an individualized care plan, and maintaining ongoing communication with your family throughout the process.",
    aboutParagraph3: "Our Manvel services include companion care, personal care, respite for family caregivers, post-hospital recovery support, meal preparation, medication reminders, and light housekeeping. Flexible, compassionate, and built around real lives.",
    faqs: [
      { question: "Does Bloom Home Care serve Manvel, TX?", answer: "Yes. We serve Manvel and surrounding Brazoria County communities within and around the 77578 zip code." },
      { question: "How quickly can care start in Manvel?", answer: "For most clients, care begins within 24 to 72 hours of your initial consultation. Urgent and post-hospital needs are prioritized." },
      { question: "What types of care are available in Manvel?", answer: "We offer companion care, personal care, respite care, post-hospital recovery, meal preparation, medication reminders, and light housekeeping — all non-medical and flexible." },
      { question: "Do you require a contract for home care in Manvel?", answer: "No long-term contracts. We're flexible and adjust to your loved one's evolving needs with a minimum two-hour visit per session." },
    ],
    nearbyAreas: [
      { name: "Pearland", slug: "pearland-tx" },
      { name: "Alvin", slug: "alvin-tx" },
      { name: "Missouri City", slug: "missouri-city-tx" },
      { name: "Friendswood", slug: "friendswood-tx" },
    ],
  },

  webster: {
    city: "Webster",
    county: "Harris County",
    zipCodes: "77598",
    heroHeadline: "Home Care Services in Webster, TX",
    heroSubheadline: "Trusted, non-medical in-home care for seniors in Webster — compassionate support that helps your loved one remain safely at home.",
    aboutTitle: "Dependable Home Care in Webster, TX",
    aboutParagraph1: "Webster is a convenient and connected community in the Clear Lake area — a city that sits at the heart of South Houston's growth. For seniors in Webster, home is the center of life. Bloom Home Care supports that preference with trusted, personalized in-home care that keeps things running smoothly.",
    aboutParagraph2: "We serve Webster with non-medical care built around genuine relationships. We listen before we act — learning who your loved one is and what their life looks like — and then match them with a caregiver who fits both their needs and their personality.",
    aboutParagraph3: "Our Webster services include companion care, personal care, respite for family caregivers, post-hospital recovery support, meal preparation, medication reminders, and light housekeeping. Flexible scheduling, no contracts, and a team you can reach when you need them.",
    faqs: [
      { question: "Does Bloom Home Care serve Webster, TX?", answer: "Yes. We serve Webster and surrounding Clear Lake area communities within the 77598 zip code and adjacent areas." },
      { question: "How quickly can home care begin in Webster?", answer: "For most families, care begins within 24 to 72 hours of your initial call. Post-hospital and urgent situations are given priority." },
      { question: "What services are available in Webster?", answer: "We offer companion care, personal care, respite care, post-hospital support, meal preparation, medication reminders, and light housekeeping." },
      { question: "Can you provide in-facility care in Webster area senior communities?", answer: "Yes. We provide companion and personal care in senior living facilities throughout the Webster and Clear Lake area." },
    ],
    nearbyAreas: [
      { name: "Clear Lake", slug: "clear-lake-tx" },
      { name: "League City", slug: "league-city-tx" },
      { name: "Friendswood", slug: "friendswood-tx" },
      { name: "Pasadena", slug: "pasadena-tx" },
    ],
  },

  "clear-lake": {
    city: "Clear Lake",
    county: "Harris County",
    zipCodes: "77058, 77059, 77062",
    heroHeadline: "Home Care Services in Clear Lake, TX",
    heroSubheadline: "Professional, relationship-centered in-home care for seniors in Clear Lake — trusted support for families in one of Houston's most established lakeside communities.",
    aboutTitle: "Home Care for Clear Lake's Established Families",
    aboutParagraph1: "Clear Lake is one of Houston's most distinctive communities — a waterfront area with a history deeply tied to NASA and a character all its own. Seniors here have often lived in their homes for decades, and staying there is not just a preference — it's a priority. Bloom Home Care provides the in-home support that makes it possible.",
    aboutParagraph2: "We serve Clear Lake with personalized, non-medical in-home care that starts with a genuine conversation. We learn who your loved one is — their routine, personality, and care needs — and match them with a caregiver selected specifically for them. Relationship and consistency are at the center of everything we do.",
    aboutParagraph3: "Our Clear Lake services include companion care, personal care, respite for family caregivers, post-hospital recovery support, meal preparation, medication reminders, light housekeeping, and transportation assistance. Flexible, consistent, and always accessible.",
    faqs: [
      { question: "Does Bloom Home Care serve the Clear Lake area?", answer: "Yes. We serve Clear Lake City and surrounding communities in the 77058, 77059, and 77062 zip codes, including NASA area neighborhoods and nearby communities." },
      { question: "How quickly can care begin in Clear Lake?", answer: "For most families, care starts within 24 to 72 hours of your initial consultation. Post-hospital discharge situations are given priority." },
      { question: "What care services are available in Clear Lake?", answer: "We offer companion care, personal care and ADL assistance, respite care, post-hospital support, meal preparation, medication reminders, light housekeeping, and transportation accompaniment." },
      { question: "Can you provide care in Clear Lake senior communities?", answer: "Yes. We provide in-facility companion and personal care for clients in senior living communities throughout the Clear Lake and Webster areas." },
    ],
    nearbyAreas: [
      { name: "Webster", slug: "webster-tx" },
      { name: "League City", slug: "league-city-tx" },
      { name: "Friendswood", slug: "friendswood-tx" },
      { name: "Pearland", slug: "pearland-tx" },
    ],
  },

  galveston: {
    city: "Galveston",
    county: "Galveston County",
    zipCodes: "77550, 77551, 77553, 77554",
    heroHeadline: "Home Care Services in Galveston, TX",
    heroSubheadline: "Compassionate, non-medical in-home care for seniors in Galveston Island — trusted support so your loved one can continue to enjoy island life at home.",
    aboutTitle: "Island Home Care for Galveston Families",
    aboutParagraph1: "Galveston Island has a spirit unlike anywhere else in Texas — a historic, vibrant, and deeply individual community where seniors often have roots going back generations. For those who call Galveston home, staying there isn't negotiable. Bloom Home Care provides the in-home support that makes that possible.",
    aboutParagraph2: "We serve Galveston families with personalized, non-medical care built on genuine relationships. We take the time to understand your loved one's life — their routines, their personality, their preferences — before we match them with a caregiver. The result is care that feels natural from day one.",
    aboutParagraph3: "Our Galveston services include companion care, personal care, respite for family caregivers, post-hospital recovery support, meal preparation, medication reminders, and light housekeeping. Flexible, compassionate, and built around your loved one's actual life.",
    faqs: [
      { question: "Does Bloom Home Care serve Galveston Island?", answer: "Yes. We serve Galveston within the 77550, 77551, 77553, and 77554 zip codes. Call us to confirm your specific address is within our service area." },
      { question: "How quickly can home care begin in Galveston?", answer: "For most families, care begins within 24 to 72 hours of your initial consultation. Urgent situations are always prioritized." },
      { question: "What services are available in Galveston?", answer: "We offer companion care, personal care and ADL assistance, respite care, post-hospital recovery, meal preparation, medication reminders, and light housekeeping." },
      { question: "Do you provide care in Galveston senior living communities?", answer: "Yes. We provide in-facility companion and personal care for clients in senior communities on Galveston Island and nearby areas." },
    ],
    nearbyAreas: [
      { name: "League City", slug: "league-city-tx" },
      { name: "Clear Lake", slug: "clear-lake-tx" },
      { name: "Friendswood", slug: "friendswood-tx" },
      { name: "Webster", slug: "webster-tx" },
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
