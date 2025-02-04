import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "0",
    features: [
      "5 video conversions/month",
      "Basic summaries",
      "Standard transcripts"
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const
  },
  {
    name: "Pro",
    price: "29.99",
    features: [
      "Unlimited conversions",
      "Advanced AI summaries",
      "Smart flash cards",
      "Priority support"
    ],
    buttonText: "Get Started",
    buttonVariant: "default" as const,
    popular: true
  },
  {
    name: "Enterprise",
    price: "49.99",
    features: [
      "Everything in Pro",
      "Custom integrations",
      "Advanced analytics",
      "Dedicated support"
    ],
    buttonText: "Contact Us",
    buttonVariant: "outline" as const
  }
];

const PricingSection = () => {
  return (
    <section className="bg-tertiary/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${
                plan.popular
                  ? "bg-black text-white transform scale-105 shadow-xl"
                  : "bg-white"
              } p-8 rounded-xl shadow-lg border border-gray-100 hover:border-tertiary/30 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-tertiary text-white px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  Popular
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-slate-800'}`}>
                {plan.name}
              </h3>
              <p className={`text-4xl font-bold mb-8 ${plan.popular ? 'text-white' : 'text-slate-800'}`}>
                ${plan.price}
                <span className={`text-lg font-normal ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>/month</span>
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className={`w-5 h-5 mr-2 ${
                        plan.popular ? "text-tertiary" : "text-tertiary"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={plan.popular ? 'text-gray-300' : 'text-slate-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.buttonVariant}
                className={`w-full ${
                  plan.popular 
                    ? "bg-white text-black hover:bg-gray-100" 
                    : "bg-tertiary text-white hover:bg-tertiary/90"
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 