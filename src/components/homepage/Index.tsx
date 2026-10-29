'use client'

import { HeroSection } from "@/components/homepage/HeroSection";
import { AboutSection } from "@/components/homepage/AboutSection";
import { TrustIndicators } from "@/components/homepage/TrustIndicators";
import { FounderSection } from "@/components/homepage/FounderSection";
import { GoogleReviewsSection } from "@/components/homepage/GoogleReviewsSection";
import { KatyLocalProofSection } from "@/components/homepage/KatyLocalProofSection";
import { HomeCareResourcesSection } from "@/components/homepage/HomeCareResourcesSection";
import { HowItWorksSection } from "@/components/homepage/HowItWorksSection";
import { ServicesSection } from "@/components/homepage/ServicesSection";
import { ApproachSection } from "@/components/homepage/ApproachSection";
import { CareCollageSection } from "@/components/homepage/CareCollageSection";
import { WhoWeServeSection } from "@/components/homepage/WhoWeServeSection";
import { ServiceAreaSection } from "@/components/homepage/ServiceAreaSection";
import { LeadMagnetSection } from "@/components/homepage/LeadMagnetSection";
import { NewsletterSection } from "@/components/homepage/NewsletterSection";
import { HomeFAQSection } from "@/components/homepage/HomeFAQSection";
import { CTASection } from "@/components/homepage/CTASection";

const Index = () => {
  return (
    <main>
      {/* 1. Hero — immediate value prop + CTA */}
      <HeroSection />
      {/* 2. About — who we are + stats */}
      <AboutSection />
      {/* 3. Trust signals — why choose Bloom Home Care */}
      <TrustIndicators />
      {/* 4. Founder — personal story + credibility */}
      <FounderSection />
      {/* 5. Google Reviews — "Trusted by Katy Families" */}
      <GoogleReviewsSection />
      {/* 6. Katy local proof — address, map, local CTA */}
      <KatyLocalProofSection />
      {/* 7. Home care resources — blog article cards */}
      <HomeCareResourcesSection />
      {/* 8. How it works — process reassurance */}
      <HowItWorksSection />
      {/* 9. Services — what we offer */}
      <ServicesSection />
      {/* 10. Approach — philosophy + values */}
      <ApproachSection />
      {/* 11. Visual storytelling */}
      <CareCollageSection />
      {/* 12. Who we serve — audience targeting */}
      <WhoWeServeSection />
      {/* 13. Service areas — local SEO */}
      <ServiceAreaSection />
      {/* 14. Lead magnet — guide download */}
      <LeadMagnetSection />
      {/* 15. Newsletter */}
      <NewsletterSection />
      {/* 16. FAQ — rich snippet SEO */}
      <HomeFAQSection />
      {/* 17. Final CTA */}
      <CTASection
        heading="Ready to Talk About Home Care?"
        description="Tell us what your family needs, and our team will help you understand your options for personalized, non-medical home care in Katy, TX and Greater Houston."
        ctaLabel="Schedule a Free Consultation"
      />
    </main>
  );
};

export default Index;
