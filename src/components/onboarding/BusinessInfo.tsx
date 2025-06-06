import React, { useState } from 'react';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

const BusinessInfo: React.FC = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Welcome to TableLoyalty</h2>
        <p className="mt-2 text-gray-600">Let's get your loyalty program set up in just 5 minutes</p>
      </div>

      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-900">Ready to boost customer retention?</h3>
            <p className="mt-1 text-blue-700">
              Your custom loyalty system will be live and ready to use in just a few steps.
            </p>
          </div>
        </div>
      </div>

      <form className="space-y-6">
        <div className="space-y-4">
          <div className="group">
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <Building2 className="w-4 h-4 mr-2 text-blue-500" />
              Business Name
            </label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 group-hover:border-blue-300"
              required
            />
          </div>

          <div className="group">
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <Mail className="w-4 h-4 mr-2 text-blue-500" />
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 group-hover:border-blue-300"
              required
            />
          </div>

          <div className="group">
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <Phone className="w-4 h-4 mr-2 text-blue-500" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 group-hover:border-blue-300"
              required
            />
          </div>

          <div className="group">
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <MapPin className="w-4 h-4 mr-2 text-blue-500" />
              Business Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 group-hover:border-blue-300"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BusinessInfo;