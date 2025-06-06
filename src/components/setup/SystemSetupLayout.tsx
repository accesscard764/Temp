import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ChefHat, MessageCircle } from 'lucide-react';

const SystemSetupLayout: React.FC = () => {
  const location = useLocation();
  const steps = [
    { path: '/setup/rewards', label: 'Rewards' },
    { path: '/setup/first-reward', label: 'First Reward' },
    { path: '/setup/signup', label: 'Customer Signup' },
    { path: '/setup/tablet', label: 'Staff Tablet' },
    { path: '/setup/activation', label: 'Activation' }
  ];

  const currentStepIndex = steps.findIndex(step => step.path === location.pathname);

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <ChefHat className="h-8 w-8 text-[#1E2A78]" />
            <span className="ml-2 text-xl font-bold text-[#1E2A78]">TableLoyalty</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${index > 0 ? 'ml-8' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index <= currentStepIndex
                      ? 'bg-[#1E2A78] text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {index + 1}
                </div>
                <span className={`ml-2 ${
                  index <= currentStepIndex ? 'text-[#1E2A78]' : 'text-gray-500'
                }`}>
                  {step.label}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 ml-4 ${
                    index < currentStepIndex ? 'bg-[#1E2A78]' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <Outlet />
          </div>
        </div>
      </main>

      <button
        className="fixed bottom-4 right-4 bg-[#1E2A78] text-white rounded-full p-4 shadow-lg hover:bg-[#161F5C] transition-colors"
        onClick={() => alert('Help is coming soon!')}
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
};

export default SystemSetupLayout;