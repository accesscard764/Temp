import React from 'react';
import { PackageOpen, Smartphone, Tablet, RefreshCw } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="rounded-full bg-[#1E2A78]/10 p-3 w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#1E2A78] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <PackageOpen className="h-6 w-6 text-[#1E2A78]" />,
      title: "No Setup Required",
      description: "Ships with everything pre-installed. Just power on and go."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-[#1E2A78]" />,
      title: "POS Integration (Optional)",
      description: "Automatically prints reward QR codes on receipts."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-[#1E2A78]" />,
      title: "Customer Wallet",
      description: "Let customers track and redeem points via mobile."
    },
    {
      icon: <Tablet className="h-6 w-6 text-[#1E2A78]" />,
      title: "Branded Tablet Included",
      description: "Sleek, intuitive UI that your staff will love."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A78] mb-4">
            Features That Drive Results
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to turn one-time diners into loyal customers, without the complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;