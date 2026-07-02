'use client'

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Instagram, Facebook } from "lucide-react";
import bloomLogo from "@/assets/bloom-logo.png";

const areaGroups = [
  {
    region: "West Houston",
    cities: [
      { name: "Katy", slug: "katy-tx" },
      { name: "Fulshear", slug: "fulshear-tx" },
      { name: "Richmond", slug: "richmond-tx" },
      { name: "Rosenberg", slug: "rosenberg-tx" },
      { name: "Cinco Ranch", slug: "cinco-ranch-tx" },
      { name: "Brookshire", slug: "brookshire-tx" },
    ],
  },
  {
    region: "North Houston",
    cities: [
      { name: "Spring", slug: "spring-tx" },
      { name: "The Woodlands", slug: "the-woodlands-tx" },
      { name: "Conroe", slug: "conroe-tx" },
      { name: "Tomball", slug: "tomball-tx" },
      { name: "Cypress", slug: "cypress-tx" },
      { name: "Humble", slug: "humble-tx" },
      { name: "Kingwood", slug: "kingwood-tx" },
    ],
  },
  {
    region: "East Houston",
    cities: [
      { name: "Pasadena", slug: "pasadena-tx" },
      { name: "Baytown", slug: "baytown-tx" },
      { name: "Channelview", slug: "channelview-tx" },
      { name: "Deer Park", slug: "deer-park-tx" },
      { name: "La Porte", slug: "la-porte-tx" },
    ],
  },
  {
    region: "South Houston",
    cities: [
      { name: "Pearland", slug: "pearland-tx" },
      { name: "Missouri City", slug: "missouri-city-tx" },
      { name: "Sugar Land", slug: "sugar-land-tx" },
      { name: "League City", slug: "league-city-tx" },
      { name: "Friendswood", slug: "friendswood-tx" },
      { name: "Alvin", slug: "alvin-tx" },
      { name: "Manvel", slug: "manvel-tx" },
      { name: "Webster", slug: "webster-tx" },
      { name: "Clear Lake", slug: "clear-lake-tx" },
      { name: "Galveston", slug: "galveston-tx" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-wide section-padding">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img
                src={bloomLogo.src}
                alt="Bloom Home Care Services"
                width={160}
                height={107}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-md">
              Your Home. Your Health. Our Commitment. Bloom Home Care delivers thoughtful,
              personalized in-home support designed around each person's individual needs —
              serving the Greater Houston area with dignity, empathy, and heart.
            </p>
            <p className="text-muted-foreground font-sans text-xs mt-3 leading-relaxed max-w-md">
              Locally owned and operated. Specializing in compassionate in-home senior care — personal care, companion care, respite care, and specialized memory care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">Home</Link>
              <Link href="/our-story" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">Our Story</Link>
              <Link href="/approach" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">Our Approach</Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">Services</Link>
              <Link href="/locations" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">Service Areas</Link>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">FAQ</Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">Blog</Link>
              <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">Careers</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">Contact</Link>
            </nav>
          </div>

          {/* Service Areas — 2 cols inside */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg text-foreground mb-6">Service Areas</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              {areaGroups.map((group) => (
                <div key={group.region}>
                  <p className="text-xs font-sans font-semibold text-primary uppercase tracking-widest mb-3">{group.region}</p>
                  <ul className="flex flex-col gap-2">
                    {group.cities.map((city) => (
                      <li key={city.slug}>
                        <Link
                          href={`/locations/${city.slug}`}
                          className="text-xs text-muted-foreground hover:text-foreground transition-colors font-sans"
                        >
                          {city.name}, TX
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-12 pt-8 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-3">
            <Phone size={16} className="text-primary flex-shrink-0" />
            <a href="tel:+12819756044" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">281-975-6044</a>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-primary flex-shrink-0" />
            <a href="mailto:info@bloomhomecare.org" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">info@bloomhomecare.org</a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-primary flex-shrink-0" />
            <span className="text-sm text-muted-foreground font-sans">Greater Houston, TX</span>
          </div>
        </div>

        {/* Social + Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-sans">
            © {new Date().getFullYear()} Bloom Home Care. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/bloomhomecare/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/bloomhomecare" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </div>
          <p className="text-xs text-muted-foreground font-sans">
            Licensed & Insured · Privately Owned & Operated
          </p>
        </div>
      </div>
    </footer>
  );
}
