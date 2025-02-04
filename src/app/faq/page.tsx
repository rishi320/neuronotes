import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does NeuroNotes work?",
    answer: "NeuroNotes uses advanced AI technology to analyze your video content and automatically generate comprehensive study materials, including summaries, transcripts, and flash cards."
  },
  {
    question: "What video formats are supported?",
    answer: "We currently support videos from YouTube and Google Drive. More platforms will be added in the future based on user demand."
  },
  {
    question: "How accurate are the transcripts and summaries?",
    answer: "Our AI models are trained on vast amounts of educational content and achieve high accuracy rates. However, we recommend reviewing the generated content for any specific requirements."
  },
  {
    question: "Can I edit the generated content?",
    answer: "Yes, all generated content can be edited and customized to better suit your learning needs."
  },
  {
    question: "What's included in the free plan?",
    answer: "The free plan includes 5 video conversions per month, basic summaries, and standard transcripts. Check our pricing page for more details on premium features."
  },
  {
    question: "How do I get started?",
    answer: "Simply sign up for a free account, paste your video URL, and let our AI do the rest. You'll have your study materials ready in minutes."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h1>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-lg shadow mb-4">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
} 