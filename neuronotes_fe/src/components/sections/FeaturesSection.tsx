import {
  SmartSummaryIcon,
  FlashcardsIcon,
  TranscriptsIcon,
  LearningPathsIcon,
  AnalyticsIcon,
  LibraryIcon
} from "@/components/ui/FeatureIcons";

const features = [
  {
    title: "Smart Summaries",
    description: "AI-powered summaries that capture key concepts",
    Icon: SmartSummaryIcon
  },
  {
    title: "Interactive Flashcards",
    description: "Automatically generated flashcards for effective revision",
    Icon: FlashcardsIcon
  },
  {
    title: "Video Transcripts",
    description: "Accurate transcriptions with timestamps and search",
    Icon: TranscriptsIcon
  },
  {
    title: "Learning Paths",
    description: "Personalized learning recommendations based on your content",
    Icon: LearningPathsIcon
  },
  {
    title: "Study Analytics",
    description: "Track your progress and identify knowledge gaps",
    Icon: AnalyticsIcon
  },
  {
    title: "Content Library",
    description: "Organize and access your study materials anywhere",
    Icon: LibraryIcon
  }
];

export default function FeaturesSection() {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
              Features that set us apart
            </h2>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <p className="text-xl text-slate-600 md:text-right">
              Everything you need to transform video content into effective study materials
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Icon Section (60% height) */}
              <div className="relative h-[240px] p-8 bg-gradient-to-br from-secondary/5 to-secondary/10 group-hover:from-secondary/10 group-hover:to-secondary/20 transition-colors duration-300">
                <feature.Icon />
              </div>
              
              {/* Content Section (40% height) */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 