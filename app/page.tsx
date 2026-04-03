import HeroSection from "@/sections/HeroSection";
import IntroSection from "@/sections/IntroSection";
import ServicesPreview from "@/sections/ServicesPreview";
import ImpactStats from "@/sections/ImpactStats";
import Testimonials from "@/sections/Testimonials";
import SeoContentSection from "@/sections/SeoContentSection";
import HomeFaqSection from "@/sections/HomeFaqSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesPreview />
      <ImpactStats />
      <Testimonials />
      <SeoContentSection />
      <HomeFaqSection />
      <CTASection
        kicker="Get started"
        title="Ready To Explore A Sanitary Napkin Making Machine For You?"
        description="Share your context and goals — whether you are an educational institution, CSR initiative, government organisation, NGO, or social entrepreneur — and we'll customise a sustainable solution for you."
        primaryLink={{ href: "/contact", label: "Talk to Our Team" }}
        secondaryLink={{ href: "/products", label: "View Products" }}
      />
    </>
  );
}
