import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee, Calendar, Image as ImageIcon } from 'lucide-react';
import Button from '../common/Button';

const FirstReward: React.FC = () => {
  const navigate = useNavigate();
  const [rewardName, setRewardName] = React.useState('Free Cappuccino');
  const [points, setPoints] = React.useState('120');
  const [selectedDays, setSelectedDays] = React.useState(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']);
  const [category, setCategory] = React.useState('drink');

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const categories = [
    { id: 'drink', label: 'Drink' },
    { id: 'dessert', label: 'Dessert' },
    { id: 'main', label: 'Main Course' },
    { id: 'other', label: 'Other' }
  ];

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#1E2A78] mb-4">
        Create your first reward
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Set up a reward that customers can redeem with their points.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reward Name
            </label>
            <input
              type="text"
              value={rewardName}
              onChange={(e) => setRewardName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E2A78] focus:border-transparent"
              placeholder="e.g., Free Cappuccino"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Required Points
            </label>
            <input
              type="number"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E2A78] focus:border-transparent"
              placeholder="e.g., 120"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Valid Days
            </label>
            <div className="flex flex-wrap gap-2">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => toggleDay(day)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedDays.includes(day)
                      ? 'bg-[#1E2A78] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E2A78] focus:border-transparent"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reward Image (Optional)
            </label>
            <button className="w-full px-4 py-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#1E2A78] transition-colors flex flex-col items-center justify-center">
              <ImageIcon className="h-8 w-8 text-gray-400 mb-2" />
              <span className="text-sm text-gray-600">Click to upload image</span>
            </button>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="font-semibold text-lg text-[#1E2A78] mb-4">
            Preview
          </h3>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start">
              <div className="p-2 bg-[#1E2A78]/10 rounded-lg">
                <Coffee className="h-6 w-6 text-[#1E2A78]" />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-lg">{rewardName}</h4>
                <p className="text-gray-600">{points} points</p>
                <div className="flex items-center mt-2">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">
                    Valid: {selectedDays.join(', ')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button secondary onClick={() => navigate('/setup/rewards')}>
          Back
        </Button>
        <Button onClick={() => navigate('/setup/signup')}>
          Save and Continue →
        </Button>
      </div>
    </div>
  );
};

export default FirstReward;