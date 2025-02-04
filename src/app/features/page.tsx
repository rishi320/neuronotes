export default function FeaturesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Features</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">AI-Powered Summaries</h2>
            <p className="text-gray-600">
              Get instant, accurate summaries of your video content using advanced AI technology.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Smart Flash Notes</h2>
            <p className="text-gray-600">
              Automatically generated flash cards to help you retain information effectively.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Personalized Learning Path</h2>
            <p className="text-gray-600">
              Get recommendations for future studies based on your learning patterns.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Quick Transcripts</h2>
            <p className="text-gray-600">
              Access accurate transcripts of your video content for easy reference.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Progress Tracking</h2>
            <p className="text-gray-600">
              Monitor your learning progress and time saved with detailed analytics.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Multiple Format Support</h2>
            <p className="text-gray-600">
              Support for various video platforms including YouTube and Google Drive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 