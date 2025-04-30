import React from 'react';
import PricingCard from '../components/ui/PricingCard.jsx';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = React.useState(null);

  const handlePlanSelect = (planIndex) => {
    setSelectedPlan(planIndex === selectedPlan ? null : planIndex);
  };
  const pricingPlans = [
    {
      title: "Basic",
      price: "9.99",
      period: "month",
      features: [
        "Access to basic game library",
        "Single device streaming",
        "Standard quality (720p)",
        "Limited multiplayer access",
        "Basic customer support"
      ],
      isPopular: false
    },
    {
      title: "Pro",
      price: "19.99",
      period: "month",
      features: [
        "Access to 300+ premium games",
        "Multi-device streaming",
        "HD quality (1080p)",
        "Full multiplayer access",
        "Priority customer support",
        "Monthly gaming credits"
      ],
      isPopular: false
    },
    {
      title: "Ultimate",
      price: "29.99",
      period: "month",
      features: [
        "Access to entire game library",
        "Multi-device streaming",
        "4K Ultra HD quality",
        "Full multiplayer access",
        "24/7 premium support",
        "Monthly gaming credits",
        "Early access to new releases",
        "Exclusive in-game content"
      ],
      isPopular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-indigo-600 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Choose Your Gaming Journey</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Unlock premium gaming experiences with flexible plans designed for every type of gamer
          </p>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              isPopular={plan.isPopular}
              isSelected={selectedPlan === index}
              onClick={() => handlePlanSelect(index)}
            />
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Can I change plans later?</h3>
            <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be applied at the start of your next billing cycle.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">How does multiplayer access work?</h3>
            <p className="text-gray-600">Basic plans have limited access to multiplayer features, while Pro and Ultimate plans give you full access to all multiplayer modes and special events.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Are there any commitment periods?</h3>
            <p className="text-gray-600">No, all our plans are month-to-month with no long-term commitments. You can cancel anytime.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">What payment methods do you accept?</h3>
            <p className="text-gray-600">We accept all major credit cards, PayPal, and select cryptocurrency payments. Annual plans can also be purchased with bank transfers.</p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Gaming Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of gamers worldwide who have already discovered the GameVerse experience.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-xl transition duration-300">
              Start Free Trial
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-white font-semibold py-3 px-8 rounded-xl transition duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 GameVerse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;