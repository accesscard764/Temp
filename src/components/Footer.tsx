import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ChefHat, Mail, Phone } from 'lucide-react';
import Button from './common/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E2A78] text-white pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <ChefHat className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">TableLoyalty</span>
            </div>
            <p className="mb-6 text-blue-100">
              Turning first-time diners into loyal customers through seamless loyalty experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Features</h3>
            <ul className="space-y-3">
              {["Loyalty Program", "SMS Notifications", "POS Integration", "Customer Analytics", "Reward Management"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Careers", "Blog", "Case Studies", "Privacy Policy", "Terms of Service"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@tableloyalty.com" className="text-blue-100 hover:text-white transition-colors">
                  info@tableloyalty.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+18005551234" className="text-blue-100 hover:text-white transition-colors">
                  1-800-555-1234
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Button onClick={() => document.getElementById('trial')?.scrollIntoView({ behavior: 'smooth' })}>
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 mt-8 text-blue-200 text-sm text-center md:flex md:justify-between">
          <p>© 2025 TableLoyalty. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            <a href="#" className="hover:text-white mr-4">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;