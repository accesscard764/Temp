import React from 'react';
import { Tablet, QrCode, Layers } from 'lucide-react';

const SetupPreference: React.FC = () => {
  const [selectedOption, setSelectedOption] = React.useState('tablet');
  const [selectedPOS, setSelectedPOS] = React.useState('');

  const setupOptions = [
    {
      id: 'tablet',
      icon: <Tablet className="h-6 w-6" />,
      title: 'Tablet-Based (Manual)',
      description: 'Customer scans QR on table or gives phone number. Staff uses our tablet to issue points manually.',
      recommended: true
    },
    {
      id: 'pos',
      icon: <QrCode className="h-6 w-6" />,
      title: 'POS Integration',
      description: 'Your POS prints QR codes automatically. Fully automated.',
      posRequired: true
    },
    {
      id: 'hybrid',
      icon: <Layers className="h-6 w-6" />,
      title: 'Hybrid',
      description: 'Use both manual and auto issue methods.',
      posRequired: true
    }
  ];

  const posSystems = [
    'Toast',
    'Square',
    'Clover',
    'Lightspeed',
    'Aloha',
    'Other'
  ];

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-[#1E2A78] mb-6">
        How would you like to use the system?
      </h1>

      <div className="space-y-4 mb-8">
        {setupOptions.map((option) => (
          <div
            key={option.id}
            className={`border rounded-xl p-6 cursor-pointer transition-all duration-200 transform hover:scale-[1.01] ${
              selectedOption === option.id
                ? 'border-[#1E2A78] bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setSelectedOption(option.id)}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className={`p-2 rounded-lg ${
                  selectedOption === option.id
                    ? 'bg-[#1E2A78] text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {option.icon}
                </div>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-[#1E2A78]">
                    {option.title}
                  </h3>
                  {option.recommended && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mt-1">{option.description}</p>
              </div>
              <div className="ml-4 flex items-center">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                  selectedOption === option.id
                    ? 'border-[#1E2A78] bg-[#1E2A78]'
                    : 'border-gray-300'
                }`}>
                  {selectedOption === option.id && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {(selectedOption === 'pos' || selectedOption === 'hybrid') && (
        <div className="mb-8 animate-fade-in">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Which POS system do you use?
          </label>
          <select
            value={selectedPOS}
            onChange={(e) => setSelectedPOS(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E2A78] focus:border-transparent transition-all duration-200"
          >
            <option value="">Select your POS system</option>
            {posSystems.map((pos) => (
              <option key={pos} value={pos}>{pos}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default SetupPreference;