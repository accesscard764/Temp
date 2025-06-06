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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;