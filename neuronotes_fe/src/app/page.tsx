import HeroSection from "@/components/sections/HeroSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import PricingSection from "@/components/sections/PricingSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does NeuroNotes work?",
    answer: "NeuroNotes uses advanced AI technology to analyze your video content and automatically generate comprehensive study materials."
  },
  {
    question: "What video formats are supported?",
    answer: "We currently support videos from YouTube and Google Drive. More platforms will be added in the future."
  },
  {
    question: "How accurate are the transcripts?",
    answer: "Our AI models achieve high accuracy rates, but we recommend reviewing the generated content for specific requirements."
  },
  {
    question: "What's included in the free plan?",
    answer: "The free plan includes 5 video conversions per month, basic summaries, and standard transcripts."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ComparisonSection />
      <WhyUsSection />
      <ReviewsSection />
      <PricingSection />

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">FAQ's</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-white px-6 rounded-xl shadow-lg border border-gray-100 hover:border-tertiary/30 transition-all duration-300 mb-4 data-[state=open]:border-tertiary/50"
                >
                  <AccordionTrigger className="text-xl font-semibold hover:no-underline text-slate-800 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
