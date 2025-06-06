import React, { useState, useEffect } from 'react';
import { 
  Users, TrendingUp, Gift, DollarSign, ArrowUpRight, ArrowDownRight,
  LayoutDashboard, QrCode, UserCog, LineChart, CreditCard, Settings,
  ChevronRight, Bell, Search, Menu, X, ChefHat, Crown, Filter,
  Download, RefreshCw, Eye, Calendar, MoreVertical, Star
} from 'lucide-react';
import { 
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Line
} from 'recharts';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [timeRange, setTimeRange] = useState('7d');
  const [refreshing, setRefreshing] = useState(false);

  const stats = [
    {
      name: 'Total Customers',
      value: '2,847',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      description: 'Active loyalty members'
    },
    {
      name: 'Points Issued',
      value: '156.2K',
      change: '+23.1%',
      trend: 'up',
      icon: TrendingUp,
      description: 'This month'
    },
    {
      name: 'Rewards Claimed',
      value: '384',
      change: '+8.2%',
      trend: 'up',
      icon: Gift,
      description: 'This week'
    },
    {
      name: 'Revenue Impact',
      value: '$12,847',
      change: '-2.4%',
      trend: 'down',
      icon: DollarSign,
      description: 'Monthly increase'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      customer: 'Sarah Johnson',
      action: 'Redeemed reward',
      reward: 'Free Dessert',
      time: '2 minutes ago',
      points: 150,
      tier: 'Gold',
      avatar: 'SJ'
    },
    {
      id: 2,
      customer: 'Mike Chen',
      action: 'Earned points',
      reward: null,
      time: '15 minutes ago',
      points: 75,
      tier: 'Silver',
      avatar: 'MC'
    },
    {
      id: 3,
      customer: 'Emily Davis',
      action: 'Signed up',
      reward: null,
      time: '1 hour ago',
      points: 0,
      tier: 'Bronze',
      avatar: 'ED'
    },
    {
      id: 4,
      customer: 'James Wilson',
      action: 'Redeemed reward',
      reward: '10% Discount',
      time: '2 hours ago',
      points: 200,
      tier: 'Gold',
      avatar: 'JW'
    },
    {
      id: 5,
      customer: 'Lisa Park',
      action: 'Earned points',
      reward: null,
      time: '3 hours ago',
      points: 45,
      tier: 'Bronze',
      avatar: 'LP'
    }
  ];

  const customerData = [
    { date: 'Jan', customers: 1200, returning: 800 },
    { date: 'Feb', customers: 1600, returning: 1100 },
    { date: 'Mar', customers: 2100, returning: 1500 },
    { date: 'Apr', customers: 2847, returning: 2100 },
    { date: 'May', customers: 3200, returning: 2400 }
  ];

  const rewardDistribution = [
    { name: 'Free Dessert', value: 45, color: '#1E2A78' },
    { name: 'Discount', value: 30, color: '#3B82F6' },
    { name: 'Free Drink', value: 15, color: '#8B5CF6' },
    { name: 'Other', value: 10, color: '#06B6D4' }
  ];

  const weeklyActivity = [
    { day: 'Mon', signups: 24, rewards: 12, revenue: 890 },
    { day: 'Tue', signups: 18, rewards: 15, revenue: 1200 },
    { day: 'Wed', signups: 32, rewards: 20, revenue: 1450 },
    { day: 'Thu', signups: 28, rewards: 18, revenue: 1100 },
    { day: 'Fri', signups: 35, rewards: 25, revenue: 1800 },
    { day: 'Sat', signups: 42, rewards: 30, revenue: 2100 },
    { day: 'Sun', signups: 38, rewards: 22, revenue: 1650 }
  ];

  const notifications = [
    { id: 1, title: 'New Gold tier customer', message: 'Sarah J. just reached Gold status', time: '2m ago', type: 'success' },
    { id: 2, title: 'High redemption alert', message: 'Free dessert rewards 80% claimed', time: '15m ago', type: 'warning' },
    { id: 3, title: 'Daily summary ready', message: 'Yesterday\'s performance report available', time: '1h ago', type: 'info' }
  ];

  const navigation = [
    { name: 'Dashboard', href: 'dashboard', icon: LayoutDashboard },
    { name: 'Customers', href: 'customers', icon: Users },
    { name: 'Rewards', href: 'rewards', icon: Gift },
    { name: 'QR Codes', href: 'qr', icon: QrCode },
    { name: 'Staff', href: 'staff', icon: UserCog },
    { name: 'Analytics', href: 'analytics', icon: LineChart },
    { name: 'Billing', href: 'billing', icon: CreditCard },
    { name: 'Settings', href: 'settings', icon: Settings },
  ];

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  const renderCustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 backdrop-blur-sm bg-white/95">
        <div className="flex h-16 items-center justify-between px-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-200 active:scale-95"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-lg bg-gradient-to-br from-[#1E2A78] to-[#3B4B9A]">
              <ChefHat className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#1E2A78] to-[#3B4B9A] bg-clip-text text-transparent">
              TableLoyalty
            </span>
          </div>
          <button 
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg relative transition-all duration-200 active:scale-95"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
              {notifications.length}
            </span>
          </button>
        </div>
      </div>

      {/* Enhanced Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white transform transition-all duration-300 ease-in-out lg:translate-x-0 border-r border-gray-200 shadow-xl lg:shadow-none ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center gap-2 px-6 border-b border-gray-200 bg-gradient-to-r from-[#1E2A78] to-[#3B4B9A]">
          <div className="p-1 rounded-lg bg-white/20">
            <ChefHat className="h-8 w-8 text-white" />
          </div>
          <span className="text-xl font-bold text-white">TableLoyalty</span>
          <div className="ml-auto">
            <Crown className="h-5 w-5 text-yellow-300" />
          </div>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.href;
            return (
              <button
                key={item.name}
                onClick={() => {
                  setActiveTab(item.href);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-left w-full ${
                  isActive
                    ? 'bg-gradient-to-r from-[#1E2A78] to-[#3B4B9A] text-white shadow-lg transform scale-[1.02]'
                    : 'text-gray-700 hover:bg-gray-50 hover:scale-[1.01]'
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-[#1E2A78]'}`} />
                <span className="font-medium">{item.name}</span>
                <ChevronRight className={`ml-auto h-4 w-4 transition-all duration-200 ${
                  isActive ? 'text-white opacity-100 transform rotate-90' : 'text-gray-400 opacity-0 group-hover:opacity-100'
                }`} />
              </button>
            );
          })}
        </nav>

        {/* Sidebar footer */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Pro Plan</span>
            </div>
            <p className="text-xs text-gray-600 mb-3">Unlock advanced analytics and unlimited customers</p>
            <button className="w-full bg-gradient-to-r from-[#1E2A78] to-[#3B4B9A] text-white text-xs font-medium py-2 rounded-lg hover:shadow-lg transition-all duration-200">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden backdrop-blur-sm" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main content */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : ''}`}>
        {/* Enhanced Desktop header */}
        <header className="hidden lg:block fixed top-0 right-0 left-64 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-200">
          <div className="flex h-16 items-center gap-4 px-6">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200 active:scale-95"
            >
              <Menu className="h-6 w-6" />
            </button>

            <div className="flex-1 flex items-center gap-4">
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search customers, rewards, or analytics..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E2A78] focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>

              <div className="flex items-center gap-2">
                <select 
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#1E2A78] focus:border-transparent"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                </select>

                <button 
                  onClick={handleRefresh}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200 active:scale-95"
                  disabled={refreshing}
                >
                  <RefreshCw className={`h-5 w-5 ${refreshing ? 'animate-spin' : ''}`} />
                </button>

                <div className="relative">
                  <button 
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg relative transition-all duration-200 active:scale-95"
                    onClick={() => setShowNotifications(!showNotifications)}
                  >
                    <Bell className="h-6 w-6" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                      {notifications.length}
                    </span>
                  </button>

                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <h3 className="font-semibold text-gray-900">Notifications</h3>
                      </div>
                      {notifications.map((notification) => (
                        <div key={notification.id} className="px-4 py-3 hover:bg-gray-50 transition-colors border-l-4 border-transparent hover:border-[#1E2A78]">
                          <div className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                              notification.type === 'success' ? 'bg-green-500' :
                              notification.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                            }`} />
                            <div className="flex-1">
                              <p className="font-medium text-gray-900 text-sm">{notification.title}</p>
                              <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                              <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">John Doe</p>
                    <p className="text-xs text-gray-500">Restaurant Manager</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#1E2A78] to-[#3B4B9A] text-white flex items-center justify-center shadow-lg">
                    <span className="font-medium text-sm">JD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="pt-16 lg:pt-16 min-h-screen">
          <div className="p-4 lg:p-6 space-y-6">
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.name}
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#1E2A78] transition-all duration-300 group transform hover:scale-[1.02] hover:shadow-xl"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-[#1E2A78]/10 to-[#3B4B9A]/10 text-[#1E2A78] group-hover:from-[#1E2A78] group-hover:to-[#3B4B9A] group-hover:text-white transition-all duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        stat.trend === 'up' 
                          ? 'text-green-700 bg-green-100' 
                          : 'text-red-700 bg-red-100'
                      }`}>
                        <span>{stat.change}</span>
                        {stat.trend === 'up' ? (
                          <ArrowUpRight className="h-3 w-3 ml-1" />
                        ) : (
                          <ArrowDownRight className="h-3 w-3 ml-1" />
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">{stat.name}</h3>
                      <p className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                      <p className="text-xs text-gray-500">{stat.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Charts Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Customer Growth Chart */}
              <div className="xl:col-span-2 bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Customer Growth</h2>
                    <p className="text-sm text-gray-500">New vs returning customers</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                      <Filter className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={customerData}>
                      <defs>
                        <linearGradient id="customers" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#1E2A78" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#1E2A78" stopOpacity={0.05}/>
                        </linearGradient>
                        <linearGradient id="returning" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.05}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="date" 
                        axisLine={false}
                        tickLine={false}
                        className="text-sm text-gray-500"
                      />
                      <YAxis 
                        axisLine={false}
                        tickLine={false}
                        className="text-sm text-gray-500"
                      />
                      <Tooltip content={renderCustomTooltip} />
                      <Area
                        type="monotone"
                        dataKey="customers"
                        stroke="#1E2A78"
                        strokeWidth={3}
                        fill="url(#customers)"
                        name="Total Customers"
                      />
                      <Area
                        type="monotone"
                        dataKey="returning"
                        stroke="#3B82F6"
                        strokeWidth={2}
                        fill="url(#returning)"
                        name="Returning Customers"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                  </div>
              </div>

              {/* Reward Distribution */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Popular Rewards</h2>
                    <p className="text-sm text-gray-500">Distribution by type</p>
                  </div>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={rewardDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {rewardDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={renderCustomTooltip} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {rewardDistribution.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-xs text-gray-600">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Weekly Activity Chart */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Weekly Performance</h2>
                  <p className="text-sm text-gray-500">Signups, rewards, and revenue trends</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#1E2A78]" />
                      <span className="text-gray-600">Signups</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#8B5CF6]" />
                      <span className="text-gray-600">Rewards</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyActivity} barGap={10}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="day" 
                      axisLine={false}
                      tickLine={false}
                      className="text-sm text-gray-500"
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      className="text-sm text-gray-500"
                    />
                    <Tooltip content={renderCustomTooltip} />
                    <Bar 
                      dataKey="signups" 
                      fill="#1E2A78" 
                      radius={[4, 4, 0, 0]}
                      name="Signups"
                    />
                    <Bar 
                      dataKey="rewards" 
                      fill="#8B5CF6" 
                      radius={[4, 4, 0, 0]}
                      name="Rewards"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Enhanced Recent Activity */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                    <p className="text-sm text-gray-500">Latest customer interactions</p>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#1E2A78] hover:bg-[#1E2A78] hover:text-white rounded-lg transition-all duration-200">
                    <Eye className="h-4 w-4" />
                    View All
                  </button>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {recentActivity.map((activity, index) => (
                  <div 
                    key={activity.id} 
                    className="p-6 hover:bg-gray-50 transition-all duration-200 group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E2A78] to-[#3B4B9A] text-white flex items-center justify-center font-medium text-sm shadow-lg">
                        {activity.avatar}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold text-gray-900">{activity.customer}</p>
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                            activity.tier === 'Gold' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' :
                            activity.tier === 'Silver' ? 'bg-gray-100 text-gray-800 border border-gray-200' :
                            'bg-orange-100 text-orange-800 border border-orange-200'
                          }`}>
                            {activity.tier}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                            <p className="text-sm text-gray-600">{activity.action}</p>
                            {activity.reward && (
                              <p className="text-sm font-medium text-[#1E2A78]">{activity.reward}</p>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">{activity.points} pts</p>
                            <p className="text-xs text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                      </div>
                      
                      <button className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-all duration-200">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;