import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QrCode, Tablet, Receipt } from 'lucide-react';
import Button from '../common/Button';

interface SignupMethodProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

const SignupMethod: React.FC<SignupMethodProps> = ({
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

const CustomerSignup: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMethods, setSelectedMethods] = React.useState(['qr']);

  const methods = [
    {
      id: 'qr',
      icon: <QrCode className="h-6 w-6" />,
      title: 'QR Code at Table',
      description: 'Customers scan QR code to sign up automatically. Fastest method.'
    },
    {
      id: 'manual',
      icon: <Tablet className="h-6 w-6" />,
      title: 'Staff Enters Mobile Manually',
      description: 'Staff uses tablet to register customers during service.'
    },
    {
      id: 'pos',
      icon: <Receipt className="h-6 w-6" />,
      title: 'POS Integration',
      description: 'QR codes are automatically printed on bills for signup.'
    }
  ];

  const toggleMethod = (methodId: string) => {
    if (selectedMethods.includes(methodId)) {
      setSelectedMethods(selectedMethods.filter(m => m !== methodId));
    } else {
      setSelectedMethods([...selectedMethods, methodId]);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#1E2A78] mb-4">
        How will your customers join?
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Choose one or more ways for customers to sign up for your loyalty program.
      </p>

      <div className="space-y-4 mb-8">
        {methods.map((method) => (
          <SignupMethod
            key={method.id}
            icon={method.icon}
            title={method.title}
            description={method.description}
            isSelected={selectedMethods.includes(method.id)}
            onClick={() => toggleMethod(method.id)}
          />
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-blue-800">
          Tip: You can enable multiple signup methods and change them anytime.
        </p>
      </div>

      <div className="flex justify-between">
        <Button secondary onClick={() => navigate('/setup/first-reward')}>
          Back
        </Button>
        <Button onClick={() => navigate('/setup/tablet')}>
          Continue →
        </Button>
      </div>
    </div>
  );
};

export default CustomerSignup;