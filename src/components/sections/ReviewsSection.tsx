const reviews = [
  {
    name: "Sarah Johnson",
    role: "Student",
    content: "NeuroNotes has completely transformed how I study. The AI summaries are incredibly accurate and save me hours of work."
  },
  {
    name: "Michael Chen",
    role: "Educator",
    content: "As a teacher, I recommend NeuroNotes to all my students. It helps them grasp complex topics more effectively."
  },
  {
    name: "Emily Brown",
    role: "Professional",
    content: "Perfect for continuous learning. The personalized recommendations keep me on track with my study goals."
  }
];

const ReviewsSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Reviews Section</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center text-white font-semibold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection; 