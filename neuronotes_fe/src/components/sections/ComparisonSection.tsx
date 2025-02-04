const ComparisonSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">Traditional Way of learning VS our way</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Learning */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-tertiary/30 transition-all duration-300">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Traditional Learning</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Manual note-taking
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Time-consuming process
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Limited revision capabilities
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                No personalized recommendations
              </li>
            </ul>
          </div>

          {/* Our Way */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-tertiary/30 transition-all duration-300">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Our Way</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                AI-powered summaries
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Instant study materials
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Smart revision system
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Personalized learning paths
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection; 