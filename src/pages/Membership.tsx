import React from 'react';
import { Check, Star, Crown, Sparkles } from 'lucide-react';

const Membership = () => {
  const tiers = [
    {
      name: "Basic",
      price: "$9.99",
      period: "monthly",
      icon: <Star className="w-6 h-6" />,
      features: [
        "Access to virtual tours",
        "Basic audio guides",
        "Monthly newsletter",
        "Community forum access"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "$19.99",
      period: "monthly",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "All Basic features",
        "Exclusive curator talks",
        "AR/VR experiences",
        "Priority customer support",
        "Offline downloads"
      ],
      popular: true
    },
    {
      name: "Family",
      price: "$29.99",
      period: "monthly",
      icon: <Sparkles className="w-6 h-6" />,
      features: [
        "All Premium features",
        "Up to 5 family members",
        "Family activities & guides",
        "Educational resources",
        "Early access to exhibits"
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Membership</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get unlimited access to virtual tours, exclusive content, and unique experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-xl shadow-sm overflow-hidden ${
                tier.popular ? 'ring-2 ring-[#C2AD8A]' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-[#C2AD8A] text-white px-4 py-1 text-sm">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <div className="text-[#C2AD8A] mb-4">{tier.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-600">/{tier.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#C2AD8A]" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg ${
                  tier.popular
                    ? 'bg-[#C2AD8A] text-white hover:bg-[#9A8B70]'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Choose {tier.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Can I cancel my subscription?</h3>
              <p className="text-gray-600">Yes, you can cancel your subscription at any time. No long-term commitments required.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How do family memberships work?</h3>
              <p className="text-gray-600">Family memberships allow up to 5 family members to access all premium features under one subscription.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Are there student discounts?</h3>
              <p className="text-gray-600">Yes, students can get 20% off any membership tier with valid student ID.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and Apple Pay.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Membership;