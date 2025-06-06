import React from 'react';
import { TrendingUp, Repeat, Clock, ChefHat, Cloud, Heart } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6 text-[#1E2A78]" />,
      title: "Increase customer retention by 2x",
      description: "On average, restaurants using our system see twice the return rate for first-time customers."
    },
    {
      icon: <Repeat className="h-6 w-6 text-[#1E2A78]" />,
      title: "No app download needed",
      description: "Customers use their phone number and SMS — no apps to download, no barriers to entry."
    },
    {
      icon: <ChefHat className="h-6 w-6 text-[#1E2A78]" />,
      title: "Staff-friendly interface",
      description: "The tablet interface is designed for busy restaurant environments with minimal training required."
    },
    {
      icon: <Clock className="h-6 w-6 text-[#1E2A78]" />,
      title: "Ready in minutes, not days",
      description: "No complicated setup or IT knowledge required. Start collecting customer data on day one."
    },
    {
      icon: <Cloud className="h-6 w-6 text-[#1E2A78]" />,
      title: "Fully remote delivery",
      description: "We ship everything preconfigured. Just connect to Wi-Fi and you're ready to go."
    },
    {
      icon: <Heart className="h-6 w-6 text-[#1E2A78]" />,
      title: "Customers love it",
      description: "98% positive feedback from diners who appreciate the simplicity and instant rewards."
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A78] mb-4">
            Why Restaurants Love TableLoyalty
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join hundreds of restaurants already growing their repeat business with our system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex">
              <div className="mr-4 mt-1">
                <div className="p-2 bg-[#1E2A78]/10 rounded-lg">
                  {benefit.icon}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1E2A78] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-100 rounded-xl p-8 text-center">
          <p className="text-xl font-medium text-gray-700 mb-4">Trusted by restaurants across the country</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Fine Dining Co', 'Urban Bites', 'Fresh Fusion', 'Harbor Grill', 'Spice Market'].map((name, index) => (
              <div key={index} className="text-[#1E2A78] font-bold text-xl opacity-70">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;