import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingTransition: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="w-full max-w-md px-8 text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <Loader2 className="h-12 w-12 text-blue-500 animate-spin" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Setting up your system
          </h2>
          <p className="text-gray-600">This will only take a moment</p>
        </div>
        
        <div className="space-y-4">
          <div className="relative">
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 animate-loading w-full transform -translate-x-full animate-[loading_2s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingTransition;