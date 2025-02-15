import HeroSection from "@/components/sections/HeroSection";
import TaglineSection from "@/components/sections/TaglineSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CTASection from "@/components/sections/CTASection";
import PricingSection from "@/components/sections/PricingSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TaglineSection />
      <FeaturesSection />
      <ReviewsSection />
      <CTASection />
    </div>
  );
}
