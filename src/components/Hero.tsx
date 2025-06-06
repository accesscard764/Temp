import React from 'react';
import Button from './common/Button';
import { ChevronRight, Smartphone, Tablet } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1E2A78] mb-6">
              Turn First-Time Diners into Repeat Customers.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              A seamless loyalty system that works with or without your POS. Start earning repeat business in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => document.getElementById('trial')?.scrollIntoView({ behavior: 'smooth' })}>
                Start Free Trial
              </Button>
              <Button size="lg" secondary onClick={() => alert('Demo coming soon!')}>
                View Demo
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <Tablet className="w-10 h-10 text-[#1E2A78]" />
                  <div className="ml-3">
                    <h3 className="font-bold text-[#1E2A78]">Loyalty Tablet</h3>
                    <p className="text-sm text-gray-600">Ready for customers</p>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">Active</div>
              </div>
              
              <div className="space-y-6 mb-6">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="rounded-full bg-[#1E2A78] p-3 mr-4">
                    <span className="text-white font-medium">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Customer signs up</h4>
                    <p className="text-sm text-gray-600">Scan QR or enter phone number</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="rounded-full bg-[#1E2A78] p-3 mr-4">
                    <span className="text-white font-medium">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Points are awarded</h4>
                    <p className="text-sm text-gray-600">Based on visit or purchase amount</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="rounded-full bg-[#1E2A78] p-3 mr-4">
                    <span className="text-white font-medium">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Rewards are unlocked</h4>
                    <p className="text-sm text-gray-600">Customer gets SMS notification</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#F8F9FA] p-4 rounded-lg border border-gray-200 flex items-center">
                <Smartphone className="w-6 h-6 text-[#1E2A78] mr-3" />
                <div className="flex-1">
                  <p className="text-sm font-medium">SMS notifications ready</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                    <div className="bg-[#1E2A78] h-2.5 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <span className="text-sm text-gray-500">90%</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#FFD93D] rounded-full opacity-20 z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#1E2A78] rounded-full opacity-10 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;