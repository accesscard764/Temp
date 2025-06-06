import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Gift,
  QrCode,
  UserCog,
  LineChart,
  CreditCard,
  Settings,
  ChevronRight,
  Bell,
  Search,
  Menu,
  X,
  ChefHat,
  Crown,
  RefreshCw,
  Filter,
  Download
} from 'lucide-react';

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, title: 'New Gold tier customer', message: 'Sarah J. just reached Gold status', time: '2m ago', type: 'success' },
    { id: 2, title: 'High redemption alert', message: 'Free dessert rewards 80% claimed', time: '15m ago', type: 'warning' },
    { id: 3, title: 'Daily summary ready', message: 'Yesterday\'s performance report available', time: '1h ago', type: 'info' }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [timeRange, setTimeRange] = useState('7d');
  const [refreshing, setRefreshing] = useState(false);
  const [isPro] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Customers', href: '/dashboard/customers', icon: Users },
    { name: 'Rewards', href: '/dashboard/rewards', icon: Gift },
    { name: 'QR Codes', href: '/dashboard/qr', icon: QrCode },
    { name: 'Staff', href: '/dashboard/staff', icon: UserCog },
    { name: 'Analytics', href: '/dashboard/analytics', icon: LineChart },
    { name: 'Billing', href: '/dashboard/billing', icon: CreditCard },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
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
          {isPro && (
            <div className="ml-auto">
              <Crown className="h-5 w-5 text-yellow-300" />
            </div>
          )}
        </div>

        <nav className="flex flex-col gap-1 p-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive(item.href)
                    ? 'bg-gradient-to-r from-[#1E2A78] to-[#3B4B9A] text-white shadow-lg transform scale-[1.02]'
                    : 'text-gray-700 hover:bg-gray-50 hover:scale-[1.01]'
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive(item.href) ? 'text-white' : 'text-gray-500 group-hover:text-[#1E2A78]'}`} />
                <span className="font-medium">{item.name}</span>
                <ChevronRight className={`ml-auto h-4 w-4 transition-all duration-200 ${
                  isActive(item.href) ? 'text-white opacity-100 transform rotate-90' : 'text-gray-400 opacity-0 group-hover:opacity-100'
                }`} />
              </Link>
            );
          })}
        </nav>

        {/* Pro upgrade section */}
        {!isPro && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Crown className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">Upgrade to Pro</span>
              </div>
              <p className="text-xs text-gray-600 mb-3">Unlock advanced analytics and unlimited customers</p>
              <button className="w-full bg-gradient-to-r from-[#1E2A78] to-[#3B4B9A] text-white text-xs font-medium py-2 rounded-lg hover:shadow-lg transition-all duration-200">
                Upgrade Now
              </button>
            </div>
          </div>
        )}
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

                  {/* Enhanced Notifications dropdown */}
                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
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
                  {isPro && (
                    <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                      <Crown className="h-3 w-3" />
                      PRO
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="pt-16 lg:pt-16 min-h-screen">
          <div className="p-4 lg:p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;