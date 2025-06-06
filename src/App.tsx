import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Trial from './components/Trial';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import OnboardingLayout from './components/onboarding/OnboardingLayout';
import BusinessInfo from './components/onboarding/BusinessInfo';
import SetupPreference from './components/onboarding/SetupPreference';
import FinalSetup from './components/onboarding/FinalSetup';
import SystemSetupLayout from './components/setup/SystemSetupLayout';
import RewardStructure from './components/setup/RewardStructure';
import FirstReward from './components/setup/FirstReward';
import CustomerSignup from './components/setup/CustomerSignup';
import StaffTablet from './components/setup/StaffTablet';
import Activation from './components/setup/Activation';
import DashboardLayout from './components/dashboard/DashboardLayout';
import DashboardHome from './components/dashboard/DashboardHome';
import BillingPage from './components/dashboard/BillingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-[#F8F9FA] text-[#212529] font-sans">
            <Header />
            <main>
              <Hero />
              <Features />
              <HowItWorks />
              <Benefits />
              <FAQ />
              <Trial />
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        } />
        
        <Route path="/get-started" element={<OnboardingLayout />}>
          <Route index element={<BusinessInfo />} />
          <Route path="setup" element={<SetupPreference />} />
          <Route path="finalize" element={<FinalSetup />} />
        </Route>
        
        <Route path="/setup" element={<SystemSetupLayout />}>
          <Route path="rewards" element={<RewardStructure />} />
          <Route path="first-reward" element={<FirstReward />} />
          <Route path="signup" element={<CustomerSignup />} />
          <Route path="tablet" element={<StaffTablet />} />
          <Route path="activation" element={<Activation />} />
        </Route>
        
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="billing" element={<BillingPage />} />
          <Route path="customers" element={<div className="p-6"><h1 className="text-2xl font-bold">Customers Page</h1><p>Coming soon...</p></div>} />
          <Route path="rewards" element={<div className="p-6"><h1 className="text-2xl font-bold">Rewards Page</h1><p>Coming soon...</p></div>} />
          <Route path="qr" element={<div className="p-6"><h1 className="text-2xl font-bold">QR Codes Page</h1><p>Coming soon...</p></div>} />
          <Route path="staff" element={<div className="p-6"><h1 className="text-2xl font-bold">Staff Page</h1><p>Coming soon...</p></div>} />
          <Route path="analytics" element={<div className="p-6"><h1 className="text-2xl font-bold">Analytics Page</h1><p>Coming soon...</p></div>} />
          <Route path="settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Settings Page</h1><p>Coming soon...</p></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;