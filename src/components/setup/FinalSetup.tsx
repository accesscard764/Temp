import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Package, 
  Users, 
  Mail, 
  ArrowRight, 
  Clock, 
  Star, 
  Shield, 
  Zap,
  Target,
  TrendingUp,
  Settings,
  Play,
  ChevronRight,
  Sparkles
} from 'lucide-react';

const FinalSetup: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [completedChecks, setCompletedChecks] = useState(0);
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateProgress(true), 500);
    const progressTimer = setTimeout(() => setCompletedChecks(5), 1000);
    return () => {
      clearTimeout(timer);
      clearTimeout(progressTimer);
    };
  }, []);

  const handleScheduleCall = () => {
    alert('Setup call scheduling coming soon! We\'ll email you a calendar link within 24 hours.');
  };

  const handleContinueToActivation = () => {
    // In real app, this would navigate to activation page
    console.log('Navigate to activation page');
  };

  const setupSteps = [
    { 
      icon: Package, 
      title: 'Hardware Configuration',
      subtitle: 'Your tablet will be configured and shipped',
      detail: 'Estimated delivery: 3-5 business days',
      status: 'ready',
      color: 'emerald'
    },
    { 
      icon: Users, 
      title: 'Staff Training Program',
      subtitle: 'Comprehensive training materials prepared',
      detail: 'Video tutorials, guides, and best practices',
      status: 'ready',
      color: 'blue'
    },
    { 
      icon: Mail, 
      title: 'Marketing Materials',
      subtitle: 'Customer sign-up materials created',
      detail: 'QR codes, flyers, and digital assets',
      status: 'ready',
      color: 'purple'
    },
    { 
      icon: Star, 
      title: 'Program Activation',
      subtitle: 'Your loyalty program goes live',
      detail: 'Ready to start earning customer loyalty',
      status: 'pending',
      color: 'amber'
    }
  ];

  const systemChecks = [
    { item: 'Reward Structure', status: 'Points system configured', icon: Target },
    { item: 'Security Protocol', status: 'Enterprise-grade encryption', icon: Shield },
    { item: 'Customer Onboarding', status: 'Signup methods optimized', icon: Users },
    { item: 'Staff Dashboard', status: 'Management tools ready', icon: Settings },
    { item: 'Analytics Engine', status: 'Reporting system active', icon: TrendingUp }
  ];

  const features = [
    {
      title: 'Real-time Analytics',
      description: 'Track customer engagement and program performance instantly',
      icon: TrendingUp,
      highlight: true
    },
    {
      title: 'Automated Rewards',
      description: 'Smart reward distribution based on customer behavior',
      icon: Zap,
      highlight: false
    },
    {
      title: 'Multi-channel Integration',
      description: 'Seamless experience across all customer touchpoints',
      icon: Star,
      highlight: false
    }
  ];

  return (
    <div className="animate-fade-in max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-3xl transform -skew-y-1"></div>
        <div className="relative py-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl mb-6 shadow-xl">
            <Sparkles className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
            Your Loyalty Program is Ready
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything is configured and optimized. Let's review your setup and prepare for launch.
          </p>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Setup Progress</h3>
          <span className="text-sm font-medium text-emerald-600">
            {completedChecks}/5 Complete
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3 mb-4">
          <div 
            className={`h-3 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-1000 ease-out ${
              animateProgress ? 'w-full' : 'w-0'
            }`}
          ></div>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {systemChecks.map((check, index) => {
            const IconComponent = check.icon;
            return (
              <div 
                key={index} 
                className={`text-center transition-all duration-500 delay-${index * 100}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`w-8 h-8 rounded-lg mx-auto mb-2 flex items-center justify-center transition-all duration-500 ${
                  completedChecks > index 
                    ? 'bg-emerald-100 scale-100' 
                    : 'bg-gray-100 scale-90'
                }`}>
                  <IconComponent className={`h-4 w-4 transition-colors duration-500 ${
                    completedChecks > index ? 'text-emerald-600' : 'text-gray-400'
                  }`} />
                </div>
                <p className="text-xs text-gray-600 font-medium">{check.item}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* System Overview */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-gray-50">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">System Overview</h3>
              <div className="flex items-center text-emerald-600">
                <CheckCircle2 className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">All Systems Ready</span>
              </div>
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            {systemChecks.map((check, index) => {
              const IconComponent = check.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="font-semibold text-gray-900">{check.item}</h4>
                    <p className="text-sm text-gray-600">{check.status}</p>
                  </div>
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Next Steps</h3>
          <div className="space-y-4">
            {setupSteps.map((step, index) => {
              const IconComponent = step.icon;
              const colorClasses = {
                emerald: 'bg-emerald-100 text-emerald-600',
                blue: 'bg-blue-100 text-blue-600',
                purple: 'bg-purple-100 text-purple-600',
                amber: 'bg-amber-100 text-amber-600'
              };
              
              return (
                <div key={index} className="flex items-center p-3 bg-white/70 rounded-xl backdrop-blur-sm">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClasses[step.color as keyof typeof colorClasses]}`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="font-medium text-gray-900 text-sm">{step.subtitle}</p>
                    <p className="text-xs text-gray-600">{step.detail}</p>
                  </div>
                  {step.status === 'ready' && (
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Showcase */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 mb-8 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative">
          <h3 className="text-2xl font-bold mb-6 text-center">Powerful Features Ready to Launch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index} 
                  className={`p-6 rounded-2xl backdrop-blur-sm transition-all hover:scale-105 ${
                    feature.highlight 
                      ? 'bg-white/20 border border-white/30' 
                      : 'bg-white/10 border border-white/20'
                  }`}
                >
                  <IconComponent className="h-8 w-8 mb-4 text-blue-200" />
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-blue-100">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Setup Call CTA */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-8 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mr-6">
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Schedule Your Success Call
              </h4>
              <p className="text-gray-600">
                Get personalized guidance from our loyalty experts to maximize your program's impact.
              </p>
            </div>
          </div>
          <button
            onClick={handleScheduleCall}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Schedule Now
          </button>
        </div>
      </div>

      {/* Action Button */}
      <div className="text-center">
        <button
          onClick={handleContinueToActivation}
          className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-emerald-600 via-blue-600 to-indigo-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 hover:from-emerald-700 hover:via-blue-700 hover:to-indigo-700"
        >
          <Play className="h-6 w-6 mr-3" />
          Continue to Activation
          <ChevronRight className="h-6 w-6 ml-3" />
        </button>
        <p className="text-sm text-gray-500 mt-4">
          Ready to make your loyalty program live for customers
        </p>
      </div>
    </div>
  );
};

export default FinalSetup;