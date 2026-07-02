'use client'

import { useState, useEffect, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, MapPin, Heart, Star, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { ConsultationModal } from "@/components/homepage/ConsultationModal";
import bloomLogo from "@/assets/bloom-logo.png";

const serviceLinks = [
  { href: "/services", label: "All Services" },
  { href: "/services/personal-care", label: "Personal Care" },
  { href: "/services/companion-care", label: "Companion Care" },
  { href: "/services/respite-care", label: "Respite Care" },
  { href: "/services/in-facility-care", label: "In-Facility Care" },
  { href: "/services/specialized-care", label: "Specialized Care" },
  { href: "/services/end-of-life-care", label: "End-of-Life Care" },
];

const locationGroups = [
  {
    region: "West Houston",
    cities: [
      { href: "/locations/katy-tx", label: "Katy" },
      { href: "/locations/sugar-land-tx", label: "Sugar Land" },
      { href: "/locations/richmond-tx", label: "Richmond" },
    ],
  },
  {
    region: "North Houston",
    cities: [
      { href: "/locations/the-woodlands-tx", label: "The Woodlands" },
      { href: "/locations/cypress-tx", label: "Cypress" },
      { href: "/locations/spring-tx", label: "Spring" },
    ],
  },
  {
    region: "South Houston",
    cities: [
      { href: "/locations/pearland-tx", label: "Pearland" },
      { href: "/locations/league-city-tx", label: "League City" },
      { href: "/locations/friendswood-tx", label: "Friendswood" },
    ],
  },
  {
    region: "East Houston",
    cities: [
      { href: "/locations/pasadena-tx", label: "Pasadena" },
      { href: "/locations/baytown-tx", label: "Baytown" },
      { href: "/locations/deer-park-tx", label: "Deer Park" },
    ],
  },
];

const aboutLinks = [
  { href: "/our-story", label: "Our Story", description: "How & why Bloom Home Care was founded", icon: BookOpen },
  { href: "/approach", label: "Our Approach", description: "Our care philosophy & values", icon: Heart },
  { href: "/faq", label: "Client Experience", description: "What families can expect", icon: Star },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileAboutOpen(false);
  };

  useEffect(() => {
    closeMenu();
    setServicesOpen(false);
    setAboutOpen(false);
  }, [pathname]);

  const isAboutActive = ["/our-story", "/approach", "/faq"].includes(pathname);

  const handleCTAClick = () => {
    if (isMobile) {
      window.location.href = "tel:+12819756044";
    } else {
      setConsultationOpen(true);
    }
  };

  const handleMobileMenuCapture = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest("a")) {
      closeMenu();
    }
  };

  const isServicesActive = pathname.startsWith("/services");

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container-wide">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center mr-8">
              <img
                src={bloomLogo.src}
                alt="Bloom Home Care Services"
                width={160}
                height={160}
                className="h-20 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className={`text-sm font-sans transition-colors duration-200 ${
                  pathname === "/"
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Home
              </Link>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button
                  type="button"
                  className={`text-sm font-sans transition-colors duration-200 inline-flex items-center gap-1 ${
                    isAboutActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  About
                  <ChevronDown size={14} className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[300px]"
                    >
                      <div className="bg-background rounded-xl border border-border shadow-xl p-4">
                        <div className="space-y-1">
                          {aboutLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                              <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-start gap-3 px-3 py-2.5 rounded-lg text-sm font-sans transition-colors ${
                                  pathname === link.href
                                    ? "text-primary bg-primary/5"
                                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                                }`}
                              >
                                <Icon size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                  <span className="font-medium block">{link.label}</span>
                                  <span className="text-xs text-muted-foreground">{link.description}</span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className={`text-sm font-sans transition-colors duration-200 inline-flex items-center gap-1 ${
                    isServicesActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Services
                  <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </Link>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[640px]"
                    >
                      <div className="bg-background rounded-xl border border-border shadow-xl p-6">
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <p className="text-xs font-sans font-semibold text-muted-foreground uppercase tracking-widest mb-3">Care Services</p>
                            <div className="space-y-1">
                              {serviceLinks.map((link) => (
                                <Link key={link.href} href={link.href} className={`block px-3 py-2 rounded-lg text-sm font-sans transition-colors ${pathname === link.href ? "text-primary bg-primary/5" : "text-foreground hover:bg-accent hover:text-accent-foreground"}`}>
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-xs font-sans font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                              <MapPin size={12} className="inline mr-1" />Greater Houston Areas
                            </p>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-0">
                              {locationGroups.map((group) => (
                                <div key={group.region} className="mb-3">
                                  <p className="text-[10px] font-sans font-semibold text-muted-foreground/70 uppercase tracking-widest mb-1 px-3">{group.region}</p>
                                  {group.cities.map((link) => (
                                    <Link key={link.href} href={link.href} className={`block px-3 py-1 rounded-lg text-sm font-sans transition-colors ${pathname === link.href ? "text-primary bg-primary/5" : "text-foreground hover:bg-accent hover:text-accent-foreground"}`}>
                                      {link.label}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                            <Link href="/locations" className="block px-3 py-2 rounded-lg text-sm font-sans text-primary hover:bg-primary/5 transition-colors font-medium mt-1">
                              View all 30 service areas →
                            </Link>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-border">
                          <p className="text-xs text-muted-foreground font-sans text-center italic">Serving Greater Houston, TX — compassionate in-home care for seniors</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/blog" className={`text-sm font-sans transition-colors duration-200 ${pathname.startsWith("/blog") ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                Blog
              </Link>

              <Link href="/careers" className={`text-sm font-sans transition-colors duration-200 ${pathname === "/careers" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                Careers
              </Link>

              <Link href="/contact" className={`text-sm font-sans transition-colors duration-200 ${pathname === "/contact" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                Contact
              </Link>
              <a
                href="tel:+12819756044"
                className="flex items-center gap-2 text-sm font-sans text-primary hover:text-primary/80 transition-colors"
              >
                <Phone size={16} />
                281-975-6044
              </a>
              <Button variant="premium" size="lg" onClick={handleCTAClick}>
                Schedule Free Assessment
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-background border-b border-border overflow-hidden max-h-[80vh] overflow-y-auto"
              onClickCapture={handleMobileMenuCapture}
            >
              <div className="container-wide py-6 flex flex-col gap-4">
                <Link href="/" onClick={closeMenu} className={`text-lg font-sans py-2 transition-colors ${pathname === "/" ? "text-primary" : "text-muted-foreground"}`}>
                  Home
                </Link>

                {/* Mobile About Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className={`flex items-center justify-between w-full text-lg font-sans py-2 transition-colors ${isAboutActive ? "text-primary" : "text-muted-foreground"}`}
                  >
                    About
                    <ChevronDown size={18} className={`transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileAboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pt-2 space-y-1">
                          {aboutLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={closeMenu}
                              className={`block py-2 text-base font-sans ${pathname === link.href ? "text-primary" : "text-muted-foreground"}`}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`flex items-center justify-between w-full text-lg font-sans py-2 transition-colors ${isServicesActive ? "text-primary" : "text-muted-foreground"}`}
                  >
                    Services
                    <ChevronDown size={18} className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pt-2 space-y-1">
                          <p className="text-xs font-sans font-semibold text-muted-foreground uppercase tracking-widest mb-2 mt-1">Care Services</p>
                          {serviceLinks.map((link) => (
                            <Link key={link.href} href={link.href} onClick={closeMenu} className={`block py-2 text-base font-sans ${pathname === link.href ? "text-primary" : "text-muted-foreground"}`}>
                              {link.label}
                            </Link>
                          ))}
                          <p className="text-xs font-sans font-semibold text-muted-foreground uppercase tracking-widest mb-2 mt-4">Service Areas</p>
                          {locationGroups.flatMap((g) => g.cities).map((link) => (
                            <Link key={link.href} href={link.href} onClick={closeMenu} className={`block py-1.5 text-sm font-sans ${pathname === link.href ? "text-primary" : "text-muted-foreground"}`}>
                              {link.label}, TX
                            </Link>
                          ))}
                          <Link href="/locations" onClick={closeMenu} className="block py-1.5 text-sm font-sans text-primary font-medium">
                            View all service areas →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/blog" onClick={closeMenu} className={`text-lg font-sans py-2 transition-colors ${pathname.startsWith("/blog") ? "text-primary" : "text-muted-foreground"}`}>
                  Blog
                </Link>

                <Link href="/careers" onClick={closeMenu} className={`text-lg font-sans py-2 transition-colors ${pathname === "/careers" ? "text-primary" : "text-muted-foreground"}`}>
                  Careers
                </Link>

                <Link href="/contact" onClick={closeMenu} className={`text-lg font-sans py-2 transition-colors ${pathname === "/contact" ? "text-primary" : "text-muted-foreground"}`}>
                  Contact
                </Link>

                <a href="tel:+12819756044" className="flex items-center gap-2 text-lg font-sans py-2 text-primary" onClick={closeMenu}>
                  <Phone size={18} />
                  281-975-6044
                </a>
                <Button variant="premium" size="lg" className="mt-4" onClick={() => { closeMenu(); handleCTAClick(); }}>
                  Schedule Free Assessment
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <ConsultationModal open={consultationOpen} onOpenChange={setConsultationOpen} />
    </>
  );
}
