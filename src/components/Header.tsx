import React, { useState, useEffect } from 'react';
import { ChefHat } from 'lucide-react';
import Button from './common/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <ChefHat className="h-8 w-8 text-[#1E2A78]" />
          <span className="ml-2 text-xl font-bold text-[#1E2A78]">TableLoyalty</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            {['features', 'how-it-works', 'benefits', 'faq'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item)}
                className="text-[#212529] hover:text-[#1E2A78] transition-colors font-medium"
              >
                {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollToSection('trial')}>Start Free Trial</Button>
        </div>

        <button 
          className="md:hidden text-[#1E2A78]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 md:hidden">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              {['features', 'how-it-works', 'benefits', 'faq'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item)}
                  className="text-[#212529] hover:text-[#1E2A78] transition-colors font-medium text-left py-2"
                >
                  {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
              <Button onClick={() => scrollToSection('trial')} fullWidth>Start Free Trial</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;