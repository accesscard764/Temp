import React, { useState } from 'react';
import { 
  CreditCard, 
  CheckCircle2, 
  Calendar, 
  X, 
  Crown, 
  Shield, 
  Zap, 
  Star,
  Lock,
  ArrowRight,
  Download,
  Receipt,
  AlertCircle,
  Gift,
  TrendingUp,
  Users,
  BarChart3,
  Sparkles
} from 'lucide-react';

interface PlanOption {
  id: string;
  name: string;
  price: { monthly: number; annual: number };
  features: string[];
  popular?: boolean;
  current?: boolean;
}

interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal';
  last4?: string;
  brand?: string;
  expiryMonth?: number;
  expiryYear?: number;
  isDefault: boolean;
}

const BillingPage: React.FC = () => {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanOption | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentPlan, setCurrentPlan] = useState('trial');
  const [showAddPayment, setShowAddPayment] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');

  const plans: PlanOption[] = [
    {
      id: 'pro',
      name: 'Pro',
      price: { monthly: 99, annual: 79 },
      features: [
        'Up to 5,000 customers',
        'Advanced analytics dashboard',
        'Custom branding & themes',
        'Email & SMS notifications',
        'Priority support',
        'API access',
        'Export customer data'
      ],
      popular: true
    },
    {
      id: 'business',
      name: 'Business',
      price: { monthly: 199, annual: 159 },
      features: [
        'Unlimited customers',
        'Multi-location support',
        'Advanced segmentation',
        'A/B testing for rewards',
        'Team management',
        'Custom integrations',
        'Dedicated account manager',
        'White-label solution'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: { monthly: 499, annual: 399 },
      features: [
        'Everything in Business',
        'Custom development',
        'On-premise deployment',
        'Advanced security features',
        'SLA guarantee',
        '24/7 phone support',
        'Training & onboarding',
        'Custom reporting'
      ]
    }
  ];

  const paymentMethods: PaymentMethod[] = [
    {
      id: '1',
      type: 'card',
      last4: '4242',
      brand: 'Visa',
      expiryMonth: 12,
      expiryYear: 2027,
      isDefault: true
    }
  ];

  const invoices = [
    {
      id: 'INV-001',
      date: '2024-01-15',
      amount: 99,
      status: 'paid',
      plan: 'Pro Monthly'
    },
    {
      id: 'INV-002',
      date: '2023-12-15',
      amount: 99,
      status: 'paid',
      plan: 'Pro Monthly'
    }
  ];

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    if (formatted.length <= 19) {
      setCardNumber(formatted);
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    if (formatted.length <= 5) {
      setExpiryDate(formatted);
    }
  };

  const handleUpgrade = async () => {
    if (!selectedPlan) return;
    
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsProcessing(false);
    setShowSuccess(true);
    setCurrentPlan(selectedPlan.id);
    
    setTimeout(() => {
      setShowUpgradeModal(false);
      setShowSuccess(false);
      setSelectedPlan(null);
    }, 3000);
  };

  const getCardBrandIcon = (brand: string) => {
    switch (brand.toLowerCase()) {
      case 'visa':
        return '💳';
      case 'mastercard':
        return '💳';
      case 'amex':
        return '💳';
      default:
        return '💳';
    }
  };

  const isFormValid = cardNumber.length >= 19 && expiryDate.length === 5 && cvv.length >= 3 && cardholderName.length > 0;

  return (
    <div className="animate-fade-in space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Billing & Subscription</h1>
          <p className="text-gray-600 mt-2">Manage your subscription and billing details</p>
        </div>
        {currentPlan !== 'trial' && (
          <div className="flex items-center gap-2 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl px-4 py-2">
            <Crown className="h-5 w-5 text-amber-600" />
            <span className="text-amber-700 font-medium capitalize">{currentPlan} Member</span>
          </div>
        )}
      </div>

      {/* Current Plan Status */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
              {currentPlan === 'trial' ? (
                <Calendar className="h-8 w-8 text-white" />
              ) : (
                <Crown className="h-8 w-8 text-white" />
              )}
            </div>
            <div>
              <h2 className="text-xl font-bold text-blue-900 mb-1">
                {currentPlan === 'trial' ? 'Free Trial' : `${currentPlan.charAt(0).toUpperCase() + currentPlan.slice(1)} Plan`}
              </h2>
              <p className="text-blue-700 mb-3">
                {currentPlan === 'trial' 
                  ? 'Your trial ends in 10 days. Upgrade to continue using all features.'
                  : 'Your subscription is active and all features are available.'
                }
              </p>
              <div className="flex items-center gap-4">
                {currentPlan === 'trial' ? (
                  <button
                    onClick={() => setShowUpgradeModal(true)}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Upgrade Now
                  </button>
                ) : (
                  <div className="flex items-center gap-3">
                    <span className="text-blue-700 font-medium">Next billing: Jan 15, 2024</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Manage Plan
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {currentPlan !== 'trial' && (
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-900">
                ${plans.find(p => p.id === currentPlan)?.price.monthly || 0}
              </div>
              <div className="text-blue-600 text-sm">per month</div>
            </div>
          )}
        </div>
      </div>

      {/* Payment Methods */}
      {currentPlan !== 'trial' && (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">Payment Methods</h3>
              <button
                onClick={() => setShowAddPayment(true)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-medium"
              >
                Add Payment Method
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                      {getCardBrandIcon(method.brand || '')}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {method.brand} ending in {method.last4}
                      </div>
                      <div className="text-sm text-gray-600">
                        Expires {method.expiryMonth}/{method.expiryYear}
                        {method.isDefault && (
                          <span className="ml-2 bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
                            Default
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Billing History */}
      {currentPlan !== 'trial' && (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900">Billing History</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invoice
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{invoice.id}</div>
                      <div className="text-sm text-gray-600">{invoice.plan}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                      {new Date(invoice.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                      ${invoice.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Paid
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Choose Your Plan</h2>
                <p className="text-gray-600 mt-1">Unlock the full potential of your loyalty program</p>
              </div>
              <button
                onClick={() => setShowUpgradeModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6">
              {/* Billing Toggle */}
              <div className="flex justify-center items-center gap-4 mb-8">
                <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly')}
                  className={`relative w-16 h-8 transition-colors duration-200 ease-in-out rounded-full ${
                    billingCycle === 'annual' ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-gray-200'
                  }`}
                >
                  <div
                    className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform duration-200 ease-in-out shadow-lg ${
                      billingCycle === 'annual' ? 'transform translate-x-8' : ''
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-gray-900' : 'text-gray-500'}`}>
                  Annual
                </span>
                {billingCycle === 'annual' && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Save 20%
                  </span>
                )}
              </div>

              {/* Plans */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`relative border-2 rounded-2xl p-6 cursor-pointer transition-all duration-200 hover:shadow-xl ${
                      selectedPlan?.id === plan.id
                        ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => setSelectedPlan(plan)}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-gray-900">
                          ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual}
                        </span>
                        <span className="text-gray-500">/month</span>
                        {billingCycle === 'annual' && (
                          <div className="text-sm text-green-600 font-medium">
                            Save ${(plan.price.monthly - plan.price.annual) * 12}/year
                          </div>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <div className={`w-6 h-6 rounded-full border-2 mx-auto transition-all duration-200 ${
                        selectedPlan?.id === plan.id
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedPlan?.id === plan.id && (
                          <CheckCircle2 className="h-4 w-4 text-white m-0.5" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {selectedPlan && !showSuccess && (
                <div className="border-t border-gray-200 pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Details</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Cardholder Name
                          </label>
                          <input
                            type="text"
                            value={cardholderName}
                            onChange={(e) => setCardholderName(e.target.value)}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Card Number
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              value={cardNumber}
                              onChange={handleCardNumberChange}
                              placeholder="1234 5678 9012 3456"
                              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                            <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              value={expiryDate}
                              onChange={handleExpiryChange}
                              placeholder="MM/YY"
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              CVC
                            </label>
                            <input
                              type="text"
                              value={cvv}
                              onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                              placeholder="123"
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
                      <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">{selectedPlan.name} Plan</span>
                          <span className="font-medium">
                            ${billingCycle === 'monthly' ? selectedPlan.price.monthly : selectedPlan.price.annual}/month
                          </span>
                        </div>
                        {billingCycle === 'annual' && (
                          <div className="flex justify-between text-green-600">
                            <span>Annual Discount (20%)</span>
                            <span>-${(selectedPlan.price.monthly - selectedPlan.price.annual) * 12}/year</span>
                          </div>
                        )}
                        <div className="border-t border-gray-200 pt-4">
                          <div className="flex justify-between text-lg font-semibold">
                            <span>Total</span>
                            <span>
                              ${billingCycle === 'monthly' ? selectedPlan.price.monthly : selectedPlan.price.annual}/month
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">
                            {billingCycle === 'annual' ? 'Billed annually' : 'Billed monthly'}
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-4">
                          <Shield className="h-4 w-4" />
                          <span>Secured by 256-bit SSL encryption</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {showSuccess ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
                  <p className="text-gray-600 mb-4">Welcome to {selectedPlan?.name}! Your account has been upgraded.</p>
                  <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl px-4 py-2 inline-flex">
                    <Crown className="h-5 w-5 text-amber-600" />
                    <span className="text-amber-700 font-medium">Premium Member</span>
                  </div>
                </div>
              ) : (
                selectedPlan && (
                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={handleUpgrade}
                      disabled={!isFormValid || isProcessing}
                      className={`px-8 py-3 rounded-xl text-white font-medium transition-all duration-200 flex items-center gap-2 ${
                        isFormValid && !isProcessing
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                          : 'bg-gray-300 cursor-not-allowed'
                      }`}
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Lock className="h-5 w-5" />
                          Upgrade to {selectedPlan.name}
                        </>
                      )}
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* Add Payment Method Modal */}
      {showAddPayment && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">Add Payment Method</h3>
              <button
                onClick={() => setShowAddPayment(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all font-medium">
                  Add Payment Method
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillingPage;