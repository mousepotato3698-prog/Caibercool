
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <svg className="w-8 h-8 text-brand-green" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3L34.7 11.5V28.5L20 37L5.3 28.5V11.5L20 3Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M26 13C24.5 11.5 22.5 10.5 20 10.5C14.7533 10.5 10.5 14.7533 10.5 20C10.5 25.2467 14.7533 29.5 20 29.5C22.5 29.5 24.5 28.5 26 27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="20" cy="20" r="2" fill="currentColor"/>
                </svg>
              <span className="text-2xl font-extrabold tracking-tighter text-white">
                C<span className="text-brand-green">AI</span>BER
              </span>
              <span className="text-brand-green font-mono text-sm">.TECH</span>
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              We engineer autonomous businesses. Specializing in high-reliability technical automation for the modern enterprise.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/solutions" className="hover:text-brand-green transition-colors">Solutions</Link></li>
              <li><Link to="/blueprints" className="hover:text-brand-green transition-colors">Blueprints</Link></li>
              <li><Link to="/protocol" className="hover:text-brand-green transition-colors">Methodology</Link></li>
              <li><Link to="/calculator" className="hover:text-brand-green transition-colors">ROI Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="hover:text-brand-green transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-brand-green transition-colors cursor-pointer">Terms of Service</li>
              <li className="hover:text-brand-green transition-colors cursor-pointer">Security Compliance</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 space-y-4 md:space-y-0">
          <p>&copy; 2024 CAIBER.TECH. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>Silicon Valley, CA / Remote Global</span>
            <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-brand-green mr-2"></span>
                System Status: Online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
