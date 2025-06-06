import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Receipt, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';

const StaffTablet: React.FC = () => {
  const navigate = useNavigate();
  const [wantInstructions, setWantInstructions] = React.useState(true);

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#1E2A78] mb-4">
        Tablet Mode for Your Staff
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Here's what your team will see when issuing points manually.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Customer Phone Number
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E2A78] focus:border-transparent"
                      disabled
                    />
                    <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg">
                      <Smartphone className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bill Amount
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="0.00"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E2A78] focus:border-transparent"
                      disabled
                    />
                    <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg">
                      <Receipt className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <button className="w-full py-2 bg-[#1E2A78] text-white rounded-lg font-medium">
                  Issue Points
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="p-1">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <p className="ml-3 text-gray-600">Only takes 10 seconds per customer</p>
            </div>
            <div className="flex items-start">
              <div className="p-1">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <p className="ml-3 text-gray-600">Works offline - points sync when back online</p>
            </div>
            <div className="flex items-start">
              <div className="p-1">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <p className="ml-3 text-gray-600">Simple training required - we provide guides</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-lg text-[#1E2A78] mb-4">
              Staff Instructions
            </h3>
            <div className="space-y-4">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={wantInstructions}
                  onChange={(e) => setWantInstructions(e.target.checked)}
                  className="mt-1"
                />
                <span className="ml-3 text-gray-600">
                  Send me a PDF with staff instructions and training materials
                </span>
              </label>
              <p className="text-sm text-gray-500">
                We'll email you a complete guide including:
              </p>
              <ul className="text-sm text-gray-500 list-disc list-inside space-y-1">
                <li>Step-by-step usage instructions</li>
                <li>Common customer questions</li>
                <li>Troubleshooting guide</li>
                <li>Best practices</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              Need help? Schedule a free 15-minute training call for your staff.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button secondary onClick={() => navigate('/setup/signup')}>
          Back
        </Button>
        <Button onClick={() => navigate('/setup/activation')}>
          Continue →
        </Button>
      </div>
    </div>
  );
};

export default StaffTablet;