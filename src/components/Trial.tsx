import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './common/Button';
import { CheckCircle2 } from 'lucide-react';

const Trial: React.FC = () => {
  const navigate = useNavigate();

  const startTrial = () => {
    navigate('/get-started');
  };

  return (
    <section id="trial" className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-3/5 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-[#1E2A78] mb-4">
                Try it FREE for 14 days
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get started with no risk. No credit card needed. No commitment.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  "Full access to all features",
                  "Pre-configured tablet included",
                  "SMS system ready to use",
                  "Free installation support",
                  "Cancel anytime"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                onClick={startTrial}
              >
                Start Free Trial
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                After 14 days, plans start at $99/month if you decide to continue.
              </p>
            </div>
            
            <div className="md:w-2/5 bg-[#1E2A78] p-8 md:p-10 text-white flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-4">What happens after signup:</h3>
              <ol className="space-y-4">
                <li className="flex">
                  <span className="bg-white text-[#1E2A78] rounded-full h-6 w-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                  <p>We'll contact you within 1 business day to confirm your shipping address</p>
                </li>
                <li className="flex">
                  <span className="bg-white text-[#1E2A78] rounded-full h-6 w-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                  <p>Your pre-configured tablet ships with everything you need</p>
                </li>
                <li className="flex">
                  <span className="bg-white text-[#1E2A78] rounded-full h-6 w-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                  <p>Plug it in, connect to Wi-Fi, and start collecting customer data</p>
                </li>
                <li className="flex">
                  <span className="bg-white text-[#1E2A78] rounded-full h-6 w-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
                  <p>We'll check in to make sure everything is working perfectly</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trial;