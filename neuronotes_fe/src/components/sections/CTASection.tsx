import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="h-[50vh] bg-secondary flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Transform Your Learning?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
          Join thousands of students who are already using NeuroNotes to learn smarter, not harder.
        </p>
        <div className="flex justify-center gap-6">
          <Button 
            size="lg"
            className="bg-white text-[#A888B5] hover:bg-white/90 text-lg px-8 py-6 h-auto"
          >
            Get Started for Free
          </Button>
          <Button 
            size="lg"
            variant="outline" 
            className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
          >
            View Pricing
          </Button>
        </div>
      </div>
    </section>
  );
} 