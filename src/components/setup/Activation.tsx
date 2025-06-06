import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { 
  CheckCircle2, 
  Package, 
  Calendar, 
  ArrowRight, 
  Clock, 
  Zap,
  Rocket,
  Sparkles,
  Shield,
  Users,
  TrendingUp,
  Star,
  Mail,
  Tablet,
  ChevronRight,
  Download,
  Play
} from 'lucide-react';




const Activation: React.FC = () => {
  const navigate = useNavigate();
  const [isActivating, setIsActivating] = useState(false);
  const [activationStep, setActivationStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [progress, setProgress] = useState(0);

  const activationSteps = [
    { title: 'Initializing system components', duration: 800 },
    { title: 'Configuring reward algorithms', duration: 1000 },
    { title: 'Setting up customer database', duration: 600 },
    { title: 'Activating analytics engine', duration: 900 },
    { title: 'Finalizing security protocols', duration: 700 }
  ];

  const handleActivation = async () => {
    setIsActivating(true);
    setProgress(0);

    for (let i = 0; i < activationSteps.length; i++) {
      setActivationStep(i);
      setProgress((i / activationSteps.length) * 100);
      await new Promise(resolve => setTimeout(resolve, activationSteps[i].duration));
    }

    setProgress(100);
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsActivating(false);
    setShowSuccess(true);
  };

  const handleGoToDashboard = () => {
    // In real app, navigate to dashboard
    //console.log('Navigate to dashboard');
    navigate('/dashboard');
  };

  const systemChecks = [
    { item: 'Reward Structure', status: 'Points system configured', icon: Star, ready: true },
    { item: 'First Reward', status: 'Ready to be claimed', icon: Package, ready: true },
    { item: 'Customer Signup', status: 'Methods selected', icon: Users, ready: true },
    { item: 'Staff Access', status: 'Ready for training', icon: Shield, ready: true },
    { item: 'Analytics Dashboard', status: 'Real-time tracking enabled', icon: TrendingUp, ready: true }
  ];

  const nextSteps = [
    {
      title: 'Tablet Preparation',
      subtitle: 'Your hardware is being configured',
      detail: 'Estimated delivery: 3-5 business days',
      icon: Tablet,
      color: 'blue',
      timeline: 'Next 24h'
    },
    {
      title: 'Staff Training Materials',
      subtitle: 'Comprehensive training package',
      detail: 'Video tutorials and documentation',
      icon: Mail,
      color: 'emerald',
      timeline: 'Within 24h'
    },
    {
      title: 'Go-Live Support',
      subtitle: 'Dedicated launch assistance',
      detail: 'Technical support during launch week',
      icon: Users,
      color: 'purple',
      timeline: 'Launch day'
    }
  ];

  if (showSuccess) {
    return (
      <div className="animate-fade-in max-w-4xl mx-auto text-center py-16">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full blur-3xl opacity-20 scale-150"></div>
          <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full shadow-2xl">
            <Rocket className="h-12 w-12 text-white" />
          </div>
        </div>
        
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            🎉 You're Live!
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Your loyalty program is now active and ready for customers
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl border border-emerald-200">
            <Sparkles className="h-5 w-5 text-emerald-600 mr-2" />
            <span className="text-emerald-700 font-medium">Welcome to the future of customer loyalty</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Users className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Ready for Customers</h3>
            <p className="text-sm text-gray-600">Start building loyalty from day one</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
            <p className="text-sm text-gray-600">Track performance instantly</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Enterprise Security</h3>
            <p className="text-sm text-gray-600">Your data is protected</p>
          </div>
        </div>

        <button
          onClick={handleGoToDashboard}
          className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
        >
          <Play className="h-6 w-6 mr-3" />
          Go to Dashboard
          <ArrowRight className="h-6 w-6 ml-3" />
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 rounded-3xl transform -skew-y-1"></div>
        <div className="relative py-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-2xl mb-6 shadow-xl">
            <Rocket className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-emerald-900 to-blue-900 bg-clip-text text-transparent mb-4">
            Ready for Activation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your loyalty program is fully configured and ready to go live. Let's make it happen.
          </p>
        </div>
      </div>

      {/* Activation Progress */}
      {isActivating && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 border border-blue-100">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-4">
              <Zap className="h-8 w-8 text-white animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Activating Your System</h3>
            <p className="text-gray-600">Please wait while we make everything live...</p>
          </div>
          
          <div className="w-full bg-white rounded-full h-4 mb-6 shadow-inner">
            <div 
              className="h-4 bg-gradient-to-r from-emerald-400 via-blue-500 to-indigo-600 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="font-medium text-gray-900 mb-2">
              {activationSteps[activationStep]?.title}
            </p>
            <p className="text-sm text-gray-600">
              Step {activationStep + 1} of {activationSteps.length}
            </p>
          </div>
        </div>
      )}

      {/* System Status & Next Steps Grid */}
      {!isActivating && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* System Status */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 border-b border-gray-100">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-emerald-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">System Status</h3>
                <div className="ml-auto flex items-center text-emerald-600">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium">All Systems Go</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              {systemChecks.map((check, index) => {
                const IconComponent = check.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-all group"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <IconComponent className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-semibold text-gray-900">{check.item}</h4>
                      <p className="text-sm text-gray-600">{check.status}</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Calendar className="h-6 w-6 text-blue-600 mr-3" />
              What Happens Next
            </h3>
            
            <div className="space-y-4">
              {nextSteps.map((step, index) => {
                const IconComponent = step.icon;
                const colorClasses = {
                  blue: 'bg-blue-100 text-blue-600',
                  emerald: 'bg-emerald-100 text-emerald-600',
                  purple: 'bg-purple-100 text-purple-600'
                };
                
                return (
                  <div key={index} className="bg-white/80 rounded-xl p-4 backdrop-blur-sm hover:bg-white/90 transition-all">
                    <div className="flex items-start">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${colorClasses[step.color as keyof typeof colorClasses]}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-gray-900">{step.title}</h4>
                          <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                            {step.timeline}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 mb-1">{step.subtitle}</p>
                        <p className="text-xs text-gray-600">{step.detail}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-4 bg-white/80 rounded-xl backdrop-blur-sm">
              <button
                onClick={() => alert('Scheduling coming soon!')}
                className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-medium"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Staff Training Call
                <ChevronRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Launch Timeline */}
      {!isActivating && (
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 mb-8 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative">
            <h3 className="text-2xl font-bold text-center mb-8">Your Launch Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: 'Today', title: 'System Activation', description: 'Go live with your loyalty program', icon: Rocket, active: true },
                { step: 'Day 1-2', title: 'Training Materials', description: 'Staff resources delivered', icon: Mail, active: false },
                { step: 'Day 3-5', title: 'Hardware Delivery', description: 'Tablet arrives at your location', icon: Tablet, active: false },
                { step: 'Week 1', title: 'Launch Support', description: 'Dedicated assistance available', icon: Users, active: false }
              ].map((phase, index) => {
                const IconComponent = phase.icon;
                return (
                  <div key={index} className="text-center relative">
                    <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-all ${
                      phase.active 
                        ? 'bg-white/20 border-2 border-white/40 scale-110' 
                        : 'bg-white/10 border border-white/20'
                    }`}>
                      <IconComponent className={`h-8 w-8 ${phase.active ? 'text-white' : 'text-blue-200'}`} />
                    </div>
                    <h4 className="font-semibold mb-2">{phase.step}</h4>
                    <p className="font-medium text-blue-100 mb-1">{phase.title}</p>
                    <p className="text-sm text-blue-200">{phase.description}</p>
                    {index < 3 && (
                       <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-white/20 transform -translate-y-1/2"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Activation Button */}
      {!isActivating && !showSuccess && (
        <div className="text-center">
          <button
            onClick={handleActivation}
            className="inline-flex items-center px-12 py-5 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
          >
            <Rocket className="h-7 w-7 mr-4 group-hover:animate-bounce" />
            Activate Your Loyalty Program
            <Sparkles className="h-7 w-7 ml-4 group-hover:animate-spin" />
          </button>
          <p className="mt-4 text-gray-600">
            Click to make your loyalty program live for customers
          </p>
        </div>
      )}
    </div>
  );
};

export default Activation;