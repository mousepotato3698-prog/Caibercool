
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
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="hover:text-brand-green transition-colors cursor-pointer flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </li>
              <li className="hover:text-brand-green transition-colors cursor-pointer flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Twitter / X
              </li>
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
