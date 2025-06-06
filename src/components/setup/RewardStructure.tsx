import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Gift, Target } from 'lucide-react';
import Button from '../common/Button';

interface RewardOptionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

const RewardOption: React.FC<RewardOptionProps> = ({
  icon,
  title,
  description,
  isSelected,
  onClick,
}) => (
  <div
    className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
      isSelected ? 'border-[#1E2A78] bg-blue-50' : 'border-gray-200 hover:border-gray-300'
    }`}
    onClick={onClick}
  >
    <div className="flex items-start">
      <div className={`p-2 rounded-lg ${
        isSelected ? 'bg-[#1E2A78] text-white' : 'bg-gray-100 text-gray-500'
      }`}>
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="font-semibold text-lg text-[#1E2A78]">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
      <div className="ml-auto">
        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
          isSelected ? 'border-[#1E2A78] bg-[#1E2A78]' : 'border-gray-300'
        }`}>
          {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
        </div>
      </div>
    </div>
  </div>
);

const RewardStructure: React.FC = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = React.useState('spend');

  const options = [
    {
      id: 'spend',
      icon: <Star className="h-6 w-6" />,
      title: 'Spend-based points',
      description: 'Customers earn 1 point for every dirham spent'
    },
    {
      id: 'visit',
      icon: <Gift className="h-6 w-6" />,
      title: 'Visit-based rewards',
      description: 'Reward customers based on number of visits (e.g., every 5th visit)'
    },
    {
      id: 'custom',
      icon: <Target className="h-6 w-6" />,
      title: 'Custom logic',
      description: 'Create your own reward structure with our help'
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#1E2A78] mb-4">
        Let's start with your reward program
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        How would you like to reward your customers?
      </p>

      <div className="space-y-4 mb-8">
        {options.map((option) => (
          <RewardOption
            key={option.id}
            icon={option.icon}
            title={option.title}
            description={option.description}
            isSelected={selectedOption === option.id}
            onClick={() => setSelectedOption(option.id)}
          />
        ))}
      </div>

      <div className="flex justify-between">
        <Button secondary onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button onClick={() => navigate('/setup/first-reward')}>
          Continue →
        </Button>
      </div>
    </div>
  );
};

export default RewardStructure;