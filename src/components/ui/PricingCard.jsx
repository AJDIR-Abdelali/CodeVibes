import React from 'react';

const PricingCard = ({ 
  title, 
  price, 
  period, 
  features, 
  isPopular, 
  buttonText = "Get Started" 
}) => {
  return (
    <div className={`rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
      isPopular ? 'border-4 border-indigo-500 relative bg-white' : 'border border-gray-200 bg-white'
    }`}>
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-lg">
            MOST POPULAR
          </div>
        </div>
      )}
      
      <div className="px-6 py-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <div className="flex items-baseline mb-8">
          <span className="text-5xl font-extrabold text-indigo-600">${price}</span>
          <span className="text-gray-500 ml-2">/{period}</span>
        </div>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg 
                className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button 
          className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors duration-300 
            ${isPopular 
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-indigo-600 border border-indigo-600'
            }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;