const WhyUsSection = () => {
  const features = [
    {
      title: "Smart AI Analysis",
      description: "Our advanced AI technology breaks down complex content into easily digestible formats."
    },
    {
      title: "Time Efficiency",
      description: "Save hours of manual note-taking with instant, automated study materials."
    },
    {
      title: "Personalized Learning",
      description: "Get customized study recommendations based on your learning patterns."
    }
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why they should consider us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection; 