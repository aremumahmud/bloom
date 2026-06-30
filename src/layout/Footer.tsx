'use client'

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Instagram, Facebook } from "lucide-react";
import bloomLogo from "@/assets/bloom-logo.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
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
              serving Katy, TX and surrounding areas with dignity, empathy, and heart.
            </p>
            <p className="text-muted-foreground font-sans text-xs mt-3 leading-relaxed max-w-md">
              Serving Katy, TX. Specializing in compassionate in-home senior care, including personal care, companion care, respite care, and specialized memory care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
                Home
              </Link>
              <Link href="/approach" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
                Our Approach
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
                Services
              </Link>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
                FAQ
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
                Blog
              </Link>
              <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
                Careers
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-6">Contact</h4>
            <div className="flex flex-col gap-4">
              <a 
                href="tel:+12819756044"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans"
              >
                <Phone size={16} className="text-primary" />
                281-975-6044
              </a>
              <a
                href="mailto:info@bloomhomecare.org"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans"
              >
                <Mail size={16} className="text-primary" />
                info@bloomhomecare.org
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground font-sans">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Katy, TX and surrounding areas</span>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/bloomhomecare/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/bloomhomecare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-sans">
            © {new Date().getFullYear()} Bloom Home Care. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-sans">
            Licensed & Insured · Privately Owned & Operated
          </p>
        </div>
      </div>
    </footer>
  );
}
