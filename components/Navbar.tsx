
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TechLogo = () => (
  <svg className="w-10 h-10 text-brand-green transition-all duration-300" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Electrical Nodes (Expand on Hover) */}
    <g className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out origin-center">
      <circle cx="20" cy="2" r="1.5" fill="white" className="group-hover:translate-y-[-4px] transition-transform duration-500 delay-75"/>
      <circle cx="35.5" cy="11" r="1.5" fill="white" className="group-hover:translate-x-[3px] group-hover:translate-y-[-2px] transition-transform duration-500 delay-100"/>
      <circle cx="35.5" cy="29" r="1.5" fill="white" className="group-hover:translate-x-[3px] group-hover:translate-y-[2px] transition-transform duration-500 delay-150"/>
      <circle cx="20" cy="38" r="1.5" fill="white" className="group-hover:translate-y-[4px] transition-transform duration-500 delay-200"/>
      <circle cx="4.5" cy="29" r="1.5" fill="white" className="group-hover:translate-x-[-3px] group-hover:translate-y-[2px] transition-transform duration-500 delay-300"/>
      <circle cx="4.5" cy="11" r="1.5" fill="white" className="group-hover:translate-x-[-3px] group-hover:translate-y-[-2px] transition-transform duration-500 delay-400"/>
    </g>

    {/* Hexagon Outer */}
    <path d="M20 3L34.7 11.5V28.5L20 37L5.3 28.5V11.5L20 3Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors duration-300"/>
    
    {/* Symmetrical 'C' */}
    {/* A perfect arc centered at 20,20 */}
    <path d="M26 13C24.5 11.5 22.5 10.5 20 10.5C14.7533 10.5 10.5 14.7533 10.5 20C10.5 25.2467 14.7533 29.5 20 29.5C22.5 29.5 24.5 28.5 26 27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="group-hover:stroke-white transition-colors duration-300"/>
    
    {/* Center Dot */}
    <circle cx="20" cy="20" r="2" fill="currentColor" className="group-hover:fill-brand-green transition-colors duration-300"/>
  </svg>
);

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <nav className="glass-panel rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl shadow-2xl shadow-brand-green/5">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group mr-8">
          <div className="relative">
             <TechLogo />
          </div>
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block group-hover:text-brand-green transition-colors">
            CAIBER<span className="text-brand-green group-hover:text-white transition-colors">.TECH</span>
          </span>
        </Link>
        
        {/* Links */}
        <div className="hidden md:flex items-center space-x-1 bg-brand-black/30 rounded-full p-1 border border-white/5">
          {[
            { path: '/solutions', label: 'Solutions' },
            { path: '/blueprints', label: 'Blueprints' },
            { path: '/protocol', label: 'Protocol' },
            { path: '/calculator', label: 'ROI' },
          ].map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive(item.path) 
                  ? 'bg-brand-green/10 text-brand-green shadow-[0_0_10px_rgba(0,255,65,0.1)]' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center pl-8">
          <Link to="/#contact" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand-green hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all transform hover:-translate-y-0.5">
            Book Audit
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
