import React, { useState, useEffect } from 'react';
import { Smartphone, QrCode, MessageSquare, Clock, Shield, BadgeCheck } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  index: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, isActive, index }) => {
  return (
    <div 
      className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 p-5 rounded-xl transition-all duration-300 ${
        isActive ? 'bg-white shadow-md scale-[1.02]' : 'bg-transparent'
      }`}
    >
      <div 
        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
          isActive ? 'bg-[#1E2A78] text-white' : 'bg-[#1E2A78]/10 text-[#1E2A78]'
        }`}
      >
        {index}
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <div className={`${isActive ? 'text-[#1E2A78]' : 'text-gray-500'}`}>
            {icon}
          </div>
          <h3 className={`font-bold text-lg ${isActive ? 'text-[#1E2A78]' : 'text-gray-700'}`}>{title}</h3>
        </div>
        <p className={`${isActive ? 'text-gray-700' : 'text-gray-500'}`}>{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Customer is asked to earn points",
      description: "Staff introduces the loyalty program during payment or table service."
    },
    {
      icon: <QrCode className="h-5 w-5" />,
      title: "Gives phone / scans QR to sign up",
      description: "Customer provides their phone number or scans the QR code on the tablet."
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Gets SMS & signs up once",
      description: "Customer receives a welcome SMS with a link to view their points balance."
    },
    {
      icon: <BadgeCheck className="h-5 w-5" />,
      title: "Staff scans QR or POS prints receipt QR",
      description: "Points are awarded automatically through POS integration or manual entry."
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Points issued & updated automatically",
      description: "Customer's loyalty account is instantly updated with new points."
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Customer views wallet anytime",
      description: "Customers can check their points balance and available rewards via SMS link."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#F8F9FA] px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A78] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A simple, seamless experience for both your staff and customers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <Step
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isActive={activeStep === index}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;