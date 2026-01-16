
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';

// --- COMPONENTS ---

const TechLogo = () => (
  <svg className="w-10 h-10 text-brand-green transition-all duration-300" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out origin-center">
      <circle cx="20" cy="2" r="1.5" fill="white" className="group-hover:translate-y-[-4px] transition-transform duration-500 delay-75"/>
      <circle cx="35.5" cy="11" r="1.5" fill="white" className="group-hover:translate-x-[3px] group-hover:translate-y-[-2px] transition-transform duration-500 delay-100"/>
      <circle cx="35.5" cy="29" r="1.5" fill="white" className="group-hover:translate-x-[3px] group-hover:translate-y-[2px] transition-transform duration-500 delay-150"/>
      <circle cx="20" cy="38" r="1.5" fill="white" className="group-hover:translate-y-[4px] transition-transform duration-500 delay-200"/>
      <circle cx="4.5" cy="29" r="1.5" fill="white" className="group-hover:translate-x-[-3px] group-hover:translate-y-[2px] transition-transform duration-500 delay-300"/>
      <circle cx="4.5" cy="11" r="1.5" fill="white" className="group-hover:translate-x-[-3px] group-hover:translate-y-[-2px] transition-transform duration-500 delay-400"/>
    </g>
    <path d="M20 3L34.7 11.5V28.5L20 37L5.3 28.5V11.5L20 3Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors duration-300"/>
    <path d="M26 13C24.5 11.5 22.5 10.5 20 10.5C14.7533 10.5 10.5 14.7533 10.5 20C10.5 25.2467 14.7533 29.5 20 29.5C22.5 29.5 24.5 28.5 26 27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="group-hover:stroke-white transition-colors duration-300"/>
  </svg>
);

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <nav className="glass-panel rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl shadow-2xl shadow-brand-green/5">
        <Link to="/" className="flex items-center space-x-3 group mr-8">
          <div className="relative">
             <TechLogo />
          </div>
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block group-hover:text-brand-green transition-colors">
            CAIBER<span className="text-brand-green group-hover:text-white transition-colors">.TECH</span>
          </span>
        </Link>
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
        <div className="flex items-center pl-8">
          <Link to="/#contact" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand-green hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all transform hover:-translate-y-0.5">
            Book Audit
          </Link>
        </div>
      </nav>
    </div>
  );
};

const Footer = () => (
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
            <li className="hover:text-brand-green transition-colors cursor-pointer flex items-center gap-2">LinkedIn</li>
            <li className="hover:text-brand-green transition-colors cursor-pointer flex items-center gap-2">Twitter / X</li>
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

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);
  return null;
};

const BackgroundEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div 
        className="absolute inset-0 bg-grid opacity-50 spotlight-mask transition-opacity duration-300"
        style={{
            '--mouse-x': `${mousePosition.x}px`,
            '--mouse-y': `${mousePosition.y}px`
        }} as React.CSSProperties}
      ></div>
      <div 
        className="absolute w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[100px] mix-blend-screen transition-transform duration-75 ease-out"
        style={{
            transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`
        }}
      ></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000"></div>
    </div>
  );
};

// --- PAGES ---

const NodeCard = ({ title, icon, color, delay }) => (
  <div className={`glass-panel p-4 rounded-xl border-l-4 ${color} w-48 shadow-lg transform transition-all hover:scale-105 animate-float hover:shadow-[0_0_20px_rgba(0,255,65,0.2)]`} style={{ animationDelay: delay }}>
    <div className="flex items-center justify-between mb-2">
      <div className="text-xs font-mono text-gray-500 uppercase">Node</div>
      <div className={`w-2 h-2 rounded-full ${color.replace('border-', 'bg-')}`}></div>
    </div>
    <div className="flex items-center space-x-3">
      <div className="text-gray-300">{icon}</div>
      <div className="font-bold text-sm text-white">{title}</div>
    </div>
  </div>
);

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-brand-green' : 'text-gray-300 group-hover:text-white'}`}>{question}</span>
        <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45 text-brand-green' : 'text-gray-500'}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-400 leading-relaxed max-w-2xl">{answer}</p>
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden px-6">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-xs font-mono font-bold mb-8 shadow-[0_0_15px_rgba(0,255,65,0.2)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
              </span>
              <span>AGENCY & ENTERPRISE AUTOMATION</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1] tracking-tight mb-8">
              We Engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400 text-glow">Digital Workforces</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-lg mb-10 leading-relaxed border-l-2 border-brand-green/50 pl-6">
              We build the bots so you don't have to be one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/#contact" className="px-8 py-4 bg-brand-green text-black rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(0,255,65,0.5)] transition-all text-center">
                Automate Now
              </Link>
              <Link to="/blueprints" className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl font-bold text-white hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2 group">
                <span>View Blueprints</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
          <div className="relative h-[500px] w-full hidden lg:flex items-center justify-center perspective-[1000px]">
             <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                <path id="path1" d="M120 150 C 200 150, 200 250, 280 250" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
                <circle r="3" fill="#00FF41">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M120 150 C 200 150, 200 250, 280 250" />
                  <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
                </circle>
                <path id="path2" d="M470 250 C 550 250, 550 350, 630 350" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
                <circle r="3" fill="#3B82F6">
                  <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M470 250 C 550 250, 550 350, 630 350" />
                  <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1.5s" repeatCount="indefinite" />
                </circle>
             </svg>
             <div className="absolute top-20 left-10 z-10">
                <NodeCard 
                    title="Webhook: New Lead" 
                    delay="0s"
                    color="border-purple-500"
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>} 
                />
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="glass-panel p-6 rounded-2xl border border-brand-green shadow-[0_0_50px_rgba(0,255,65,0.15)] w-64 animate-pulse-slow">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-mono text-brand-green font-bold uppercase tracking-wider">Processing</span>
                        <div className="flex space-x-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-bounce"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-bounce delay-100"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-bounce delay-200"></div>
                        </div>
                    </div>
                    <div className="font-mono text-sm text-gray-300">
                        <span className="text-purple-400">const</span> <span className="text-white">enrich</span> = <span className="text-yellow-300">await</span> ai.lookup(email);
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                        Lat: 124ms | Tokens: 450
                    </div>
                </div>
             </div>
             <div className="absolute bottom-20 right-10 z-10">
                <NodeCard 
                    title="Update Salesforce" 
                    delay="1s"
                    color="border-blue-500"
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>} 
                />
             </div>
          </div>
        </div>
      </section>
      <section className="border-y border-white/5 bg-brand-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between">
            <span className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-6 md:mb-0">Interoperable with</span>
            <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                {['n8n', 'OpenAI', 'Salesforce', 'HubSpot', 'Stripe', 'Supabase'].map(tech => (
                    <span key={tech} className="text-lg font-bold font-mono hover:text-white cursor-default">{tech}</span>
                ))}
            </div>
        </div>
      </section>
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Zero Latency", desc: "Humans sleep. API endpoints don't. We build systems that react the millisecond a lead arrives.", icon: "⚡" },
                    { title: "Infinite Memory", desc: "No more 'I forgot to update the sheet'. Every data point is logged, tracked, and synced.", icon: "🧠" },
                    { title: "Total Consistency", desc: "Scripts follow the SOP exactly, every single time. Remove human error from the loop.", icon: "🎯" }
                ].map((card, i) => (
                    <div key={i} className="glass-panel p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group hover:border-brand-green/30">
                        <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{card.icon}</div>
                        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-green transition-colors">{card.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{card.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">The Evolution of Work</h2>
                <p className="text-gray-400">Why the old way is costing you more than just money.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-10 rounded-3xl border border-red-500/20 bg-red-500/5">
                    <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center">
                        <span className="mr-2">❌</span> The Manual Way
                    </h3>
                    <ul className="space-y-4 text-gray-400">
                        <li>• Data siloed in individual inboxes</li>
                        <li>• 4-hour response times for hot leads</li>
                        <li>• Copy-pasting errors corrupting your CRM</li>
                        <li>• High employee churn due to boring tasks</li>
                    </ul>
                </div>
                <div className="glass-panel p-10 rounded-3xl border border-brand-green/40 bg-brand-green/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 blur-[50px] rounded-full pointer-events-none"></div>
                    <h3 className="text-xl font-bold text-brand-green mb-6 flex items-center">
                        <span className="mr-2">✅</span> The CAIBER Way
                    </h3>
                    <ul className="space-y-4 text-white">
                        <li>• Unified data layer across all apps</li>
                        <li>• 500ms response time, 24/7/365</li>
                        <li>• Programmatic accuracy (Validation Layers)</li>
                        <li>• Teams focus on strategy, not admin</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
                <p className="text-gray-400">Understanding how we integrate with your business.</p>
            </div>
            <div className="glass-panel rounded-3xl p-8 md:p-12">
                <FaqItem 
                    question="Do I need to fire my support team?"
                    answer="No. We build 'Iron Man Suits' for your team. We automate the repetitive 80% of their work (tagging, routing, data entry) so they can focus on the high-value 20% (closing deals, complex support)."
                />
                <FaqItem 
                    question="Is this just Zapier?"
                    answer="No. Zapier is great for simple triggers, but it breaks at scale. We write custom Python/TypeScript middleware and host dedicated n8n instances that handle complex logic, error recovery, and heavy data loads."
                />
                <FaqItem 
                    question="What happens if an API breaks?"
                    answer="Our systems are built with 'Dead Letter Queues' and auto-retry logic. If an external API goes down, we queue the data and retry until it succeeds. You never lose a lead."
                />
                <FaqItem 
                    question="How long does implementation take?"
                    answer="A standard RevOps pipeline takes 2-3 weeks from audit to deployment. We work in sprints and provide a 'Sandbox' environment for you to test before going live."
                />
            </div>
        </div>
      </section>
      <section id="contact" className="py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">Ready to <span className="text-brand-green">Scale</span>?</h2>
            <p className="text-xl text-gray-400 mb-10">Limited availability for new enterprise audits this month.</p>
            <Link to="/#contact" className="inline-block bg-white text-black px-12 py-5 rounded-full text-xl font-bold hover:bg-brand-green hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,255,65,0.3)]">
                Book Your Technical Audit
            </Link>
          </div>
      </section>
    </div>
  );
};

const Solutions = () => {
  const services = [
    {
      title: "RevOps Orchestration",
      desc: "Connect your marketing funnels directly to sales execution. No CSV exports.",
      tags: ["Lead Scoring", "Auto-Scheduling", "CRM Sync"],
      color: "border-purple-500/50"
    },
    {
      title: "Document Intelligence",
      desc: "Turn PDFs, invoices, and contracts into structured JSON data automatically.",
      tags: ["OCR", "Entity Extraction", "Verification"],
      color: "border-blue-500/50"
    },
    {
      title: "Legacy Integration",
      desc: "We build the API wrappers your old software doesn't have.",
      tags: ["SQL/NoSQL", "Middleware", "Custom Webhooks"],
      color: "border-brand-green/50"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                We build the <span className="text-brand-green">glue</span> that<br/>holds your stack together.
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                Modern businesses run on dozens of SaaS tools. We make them talk to each other fluently.
            </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
                <div key={i} className={`glass-panel p-10 rounded-3xl border-t-4 ${s.color} hover:bg-white/5 transition-colors`}>
                    <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                    <p className="text-gray-400 mb-8 h-20">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                        {s.tags.map(t => (
                            <span key={t} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <div className="mt-32 glass-panel rounded-[3rem] overflow-hidden border border-brand-green/20 relative">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-green/10 to-transparent"></div>
            <div className="grid lg:grid-cols-2 relative z-10">
                <div className="p-12 lg:p-20 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-6">Central Intelligence Layer</h2>
                    <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                        We don't just "zap" data. We build a central database of record that acts as the "Brain" for your operations. It sanitizes inputs, handles errors gracefully, and creates a log of every automated action.
                    </p>
                    <ul className="space-y-4">
                        {['99.9% Uptime Architecture', 'Full Audit Logging', 'Human-in-the-loop Error Handling'].map(item => (
                            <li key={item} className="flex items-center space-x-3">
                                <span className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">✓</span>
                                <span className="font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-brand-black/50 border-l border-white/5 p-12 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                        <div className="absolute inset-0 border-2 border-dashed border-gray-700 rounded-full animate-spin-slow"></div>
                        <div className="absolute inset-4 border border-brand-green/20 rounded-full"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 bg-brand-green rounded-2xl shadow-[0_0_40px_rgba(0,255,65,0.4)] flex items-center justify-center">
                                <span className="text-black font-bold font-mono text-xl">CORE</span>
                            </div>
                        </div>
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-xs font-mono">Stripe</div>
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-xs font-mono">HubSpot</div>
                        <div className="absolute top-1/2 -left-8 -translate-y-1/2 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-xs font-mono">Gmail</div>
                        <div className="absolute top-1/2 -right-8 -translate-y-1/2 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-xs font-mono">Slack</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const CaseStudyCard = ({ data }) => {
  const [hoveredStep, setHoveredStep] = useState(null);
  return (
    <div className="glass-panel rounded-[2.5rem] overflow-hidden border border-white/5 flex flex-col lg:flex-row hover:border-brand-green/20 transition-colors duration-500 group relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="p-12 lg:w-1/2 flex flex-col justify-between">
        <div>
          <span className="inline-block px-3 py-1 rounded bg-brand-green text-black text-[10px] font-bold uppercase mb-6 shadow-[0_0_10px_rgba(0,255,65,0.3)]">
            {data.tag}
          </span>
          <h3 className="text-3xl font-bold mb-6 group-hover:text-brand-green transition-colors">
            {data.title}
          </h3>
          <div className="space-y-8">
            <div>
              <h4 className="text-gray-500 font-mono text-xs uppercase mb-3 tracking-widest">
                The Challenge
              </h4>
              <p className="text-gray-300 leading-relaxed border-l-2 border-white/10 pl-4">
                {data.challenge}
              </p>
            </div>
            <div>
              <h4 className="text-gray-500 font-mono text-xs uppercase mb-3 tracking-widest">
                Architectural Flow
              </h4>
              <ul className="space-y-2">
                {data.architecture.map((step, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className={`flex items-start space-x-3 text-sm p-3 rounded-lg cursor-default transition-all duration-300 ${
                      hoveredStep === index
                        ? 'bg-brand-green/10 translate-x-2'
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <span
                      className={`font-mono mt-0.5 transition-colors ${
                        hoveredStep === index ? 'text-brand-green' : 'text-gray-600'
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span
                      className={`transition-colors ${
                        hoveredStep === index ? 'text-white' : 'text-gray-400'
                      }`}
                    >
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-6 mt-8 border-t border-white/5">
          <h4 className="text-brand-green font-mono text-xs uppercase mb-2 tracking-widest">
            Business Outcome
          </h4>
          <p className="text-xl font-bold text-white">{data.outcome}</p>
        </div>
      </div>
      <div className="bg-brand-dark lg:w-1/2 border-l border-white/5 font-mono text-xs flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none select-none overflow-hidden">
          <pre className="text-[10px] leading-tight text-brand-green">
            {Array(30).fill('0101010100101101010').map((l, k) => <div key={k}>{l}</div>)}
          </pre>
        </div>
        <div className="relative z-10 p-8 h-full flex flex-col justify-center">
          <div className="bg-brand-black rounded-xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-[10px] text-gray-600 uppercase tracking-wider">
                main.py
              </div>
            </div>
            <div className="p-6 overflow-x-auto">
              {data.codeSnippet.map((line, i) => {
                const isHovered = hoveredStep !== null && line.stepIndex === hoveredStep;
                const isDimmed = hoveredStep !== null && line.stepIndex !== undefined && line.stepIndex !== hoveredStep;
                return (
                  <div
                    key={i}
                    className={`leading-6 transition-all duration-300 ${
                      isHovered
                        ? 'bg-brand-green/20 -mx-6 px-6 text-white scale-[1.02] origin-left border-l-2 border-brand-green'
                        : isDimmed
                        ? 'opacity-30 blur-[0.5px]'
                        : 'opacity-100'
                    }`}
                    style={{ paddingLeft: isHovered ? undefined : `${line.indent * 16}px` }}
                  >
                    <span className={line.color || "text-gray-400"} dangerouslySetInnerHTML={{ __html: line.text }} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Blueprints = () => {
  const caseStudies = [
    {
      tag: "RevOps",
      title: "Orchestrating 50k Leads/Month",
      challenge: "Manual lead triage was taking 4+ hours per agent, resulting in a 30% drop-off rate.",
      architecture: [
        "Twilio SMS -> Python Webhook Handler",
        "LLM-based Intent Classification (Scoring)",
        "Parallel routing to CRM & Slack Priority",
        "Automated Cal.com scheduling via API"
      ],
      outcome: "92% reduction in lead response time (Sub-1 minute).",
      codeSnippet: [
        { text: "<span class='text-purple-400'>@app.route</span>('/webhook/sms', methods=['POST'])", indent: 0 },
        { text: "<span class='text-brand-green'>async def</span> <span class='text-blue-400'>handle_lead</span>(request):", indent: 0 },
        { text: "payload = <span class='text-brand-green'>await</span> request.json()", indent: 1, stepIndex: 0 },
        { text: "", indent: 1 },
        { text: "<span class='text-gray-500'># 1. Analyze Intent with LLM</span>", indent: 1, stepIndex: 1 },
        { text: "intent = <span class='text-brand-green'>await</span> ai.classify(payload.body)", indent: 1, stepIndex: 1 },
        { text: "", indent: 1 },
        { text: "<span class='text-gray-500'># 2. Sync to Systems Parallelly</span>", indent: 1, stepIndex: 2 },
        { text: "<span class='text-brand-green'>await</span> asyncio.gather(", indent: 1, stepIndex: 2 },
        { text: "crm.create_contact(payload.sender, intent),", indent: 2, stepIndex: 2 },
        { text: "slack.notify('#hot-leads', intent.summary)", indent: 2, stepIndex: 2 },
        { text: ")", indent: 1, stepIndex: 2 },
        { text: "", indent: 1 },
        { text: "<span class='text-brand-green'>if</span> intent.score > 80:", indent: 1, stepIndex: 3 },
        { text: "<span class='text-brand-green'>await</span> calendar.book_slot(payload.sender)", indent: 2, stepIndex: 3 },
      ]
    },
    {
      tag: "Logistics",
      title: "Autonomous Invoice Processing",
      challenge: "Staff spent 15 hours/week typing data from complex PDF invoices into an ERP.",
      architecture: [
        "GCP Bucket Trigger (File Upload)",
        "Validation Layer (PO Matching)",
        "Anomaly Detection (Price Variance)",
        "Direct API Insert to Legacy Oracle ERP"
      ],
      outcome: "100% data accuracy; zero human touch for 95% of documents.",
      codeSnippet: [
        { text: "<span class='text-brand-green'>def</span> <span class='text-blue-400'>process_invoice</span>(event, context):", indent: 0 },
        { text: "file = gcp.download(event.bucket, event.name)", indent: 1, stepIndex: 0 },
        { text: "data = textract.analyze_document(file)", indent: 1, stepIndex: 0 },
        { text: "", indent: 1 },
        { text: "<span class='text-gray-500'># Validate against Purchase Order</span>", indent: 1, stepIndex: 1 },
        { text: "po = db.orders.find(id=data.po_number)", indent: 1, stepIndex: 1 },
        { text: "<span class='text-brand-green'>if not</span> po: <span class='text-brand-green'>raise</span> Error('PO Missing')", indent: 1, stepIndex: 1 },
        { text: "", indent: 1 },
        { text: "<span class='text-gray-500'># Check for price anomalies > 10%</span>", indent: 1, stepIndex: 2 },
        { text: "<span class='text-brand-green'>if</span> data.total > po.total * 1.10:", indent: 1, stepIndex: 2 },
        { text: "<span class='text-brand-green'>return</span> alert.human_review(data)", indent: 2, stepIndex: 2 },
        { text: "", indent: 1 },
        { text: "<span class='text-gray-500'># Push to ERP</span>", indent: 1, stepIndex: 3 },
        { text: "oracle.insert_invoice(data.json())", indent: 1, stepIndex: 3 },
      ]
    },
    {
      tag: "HR Ops",
      title: "Zero-Touch Onboarding",
      challenge: "New hires waited 3 days for access credentials due to fragmented IT processes.",
      architecture: [
        "Greenhouse 'Hired' Webhook Trigger",
        "Identity Provider Creation (Okta)",
        "Auto-provisioning: Slack, Notion, Jira",
        "Hardware procurement request via API"
      ],
      outcome: "Onboarding time reduced from 72 hours to 5 seconds.",
      codeSnippet: [
        { text: "<span class='text-purple-400'>@webhook</span>('greenhouse', 'candidate_hired')", indent: 0 },
        { text: "<span class='text-brand-green'>async def</span> <span class='text-blue-400'>onboard</span>(payload):", indent: 0, stepIndex: 0 },
        { text: "user = payload.candidate", indent: 1, stepIndex: 0 },
        { text: "", indent: 1 },
        { text: "<span class='text-gray-500'># 1. Create Identity</span>", indent: 1, stepIndex: 1 },
        { text: "uid = <span class='text-brand-green'>await</span> okta.create_user(user.email)", indent: 1, stepIndex: 1 },
        { text: "", indent: 1 },
        { text: "<span class='text-gray-500'># 2. Provision SaaS Access</span>", indent: 1, stepIndex: 2 },
        { text: "<span class='text-brand-green'>await</span> asyncio.wait([", indent: 1, stepIndex: 2 },
        { text: "slack.invite(uid, channels=['#general'])", indent: 2, stepIndex: 2 },
        { text: "notion.add_member(uid),", indent: 2, stepIndex: 2 },
        { text: "jira.assign_license(uid)", indent: 2, stepIndex: 2 },
        { text: "])", indent: 1, stepIndex: 2 },
        { text: "", indent: 1 },
        { text: "<span class='text-gray-500'># 3. Order Hardware</span>", indent: 1, stepIndex: 3 },
        { text: "vendor.order_laptop(address=user.address)", indent: 1, stepIndex: 3 },
      ]
    },
    {
      tag: "E-Commerce",
      title: "Real-Time Inventory Sync",
      challenge: "Overselling on Amazon because Shopify inventory updates were too slow (15min delay).",
      architecture: [
        "Webhook Listener (Any Sale Source)",
        "Redis Queue Buffer (High Throughput)",
        "Master Inventory Database Update",
        "Fan-out API updates to all channels"
      ],
      outcome: "Eliminated overselling incidents; Real-time parity across 5 channels.",
      codeSnippet: [
        { text: "<span class='text-brand-green'>async def</span> <span class='text-blue-400'>ingest_order</span>(order):", indent: 0 },
        { text: "<span class='text-gray-500'># 1. Buffer High-Velocity Events</span>", indent: 1, stepIndex: 1 },
        { text: "<span class='text-brand-green'>await</span> redis.rpush('inventory_queue', order)", indent: 1, stepIndex: 1 },
        { text: "", indent: 1 },
        { text: "<span class='text-brand-green'>async def</span> <span class='text-blue-400'>process_worker</span>():", indent: 0 },
        { text: "item = <span class='text-brand-green'>await</span> redis.lpop('inventory_queue')", indent: 1, stepIndex: 1 },
        { text: "", indent: 1 },
        { text: "<span class='text-gray-500'># 2. Atomic DB Update</span>", indent: 1, stepIndex: 2 },
        { text: "<span class='text-brand-green'>async with</span> db.transaction():", indent: 1, stepIndex: 2 },
        { text: "new_stock = db.decrement(item.sku)", indent: 2, stepIndex: 2 },
        { text: "", indent: 1 },
        { text: "<span class='text-gray-500'># 3. Broadcast to Channels</span>", indent: 1, stepIndex: 3 },
        { text: "<span class='text-brand-green'>await</span> asyncio.gather(", indent: 1, stepIndex: 3 },
        { text: "amazon.update_stock(item.sku, new_stock),", indent: 2, stepIndex: 3 },
        { text: "shopify.update_stock(item.sku, new_stock),", indent: 2, stepIndex: 3 },
        { text: ")", indent: 1, stepIndex: 3 },
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-mono text-brand-green mb-4 uppercase tracking-[0.2em]">Engineering Breakdowns</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter">The Blueprints.</h1>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl">
            We don't just say we built it. We show you the architectural integrity of our systems. Hover over the steps to trace the code.
          </p>
        </div>
        <div className="space-y-16">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={i} data={cs} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Protocol = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      id: "01",
      title: "System Audit",
      subtitle: "Discovery & Mapping",
      desc: "We dive deep into your existing tech stack, mapping out every API endpoint and bottleneck. We don't guess; we measure.",
      tools: ["Postman", "Miro", "Swagger Docs"],
      status: "ANALYZING"
    },
    {
      id: "02",
      title: "Logic Engineering",
      subtitle: "Architecture Design",
      desc: "We design the autonomous architecture in n8n or Python. This is where we define 'If this, then that' logic with enterprise-grade error handling.",
      tools: ["n8n", "Python", "Docker"],
      status: "BUILDING"
    },
    {
      id: "03",
      title: "Sandbox Isolation",
      subtitle: "Risk-Free Testing",
      desc: "We build and test in a mirrored environment. We run 1,000+ simulated transactions to ensure no live data is ever corrupted.",
      tools: ["Unit Tests", "Sandbox Env", "Mock Data"],
      status: "TESTING"
    },
    {
      id: "04",
      title: "Live Handover",
      subtitle: "Deployment & Training",
      desc: "We hand over the keys. You get full documentation, video Loom SOPs, and a dashboard to monitor your new digital workforce.",
      tools: ["Notion Docs", "Loom", "Dashboard"],
      status: "DEPLOYED"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-mono text-brand-green mb-4 uppercase tracking-[0.2em]">The CAIBER Protocol</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter">A Predictable <span className="text-gray-500">Methodology.</span></h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:h-[600px]">
          <div className="flex flex-col justify-between space-y-4">
            {steps.map((step, i) => (
              <div 
                key={i}
                onMouseEnter={() => setActiveStep(i)}
                className={`group p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  activeStep === i 
                    ? 'bg-brand-green/10 border-brand-green/50 shadow-[0_0_30px_rgba(0,255,65,0.1)]' 
                    : 'bg-white/5 border-white/5 hover:bg-white/10'
                }`}
              >
                 <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${activeStep === i ? 'bg-brand-green' : 'bg-transparent'}`}></div>
                 <div className="flex items-center justify-between">
                    <div>
                        <div className={`text-xs font-mono mb-1 transition-colors ${activeStep === i ? 'text-brand-green' : 'text-gray-500'}`}>
                            PHASE {step.id}
                        </div>
                        <h3 className={`text-xl font-bold transition-colors ${activeStep === i ? 'text-white' : 'text-gray-400'}`}>
                            {step.title}
                        </h3>
                    </div>
                    <div className={`transform transition-transform duration-300 ${activeStep === i ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                        <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                    </div>
                 </div>
              </div>
            ))}
          </div>
          <div className="relative glass-panel rounded-3xl border border-white/10 p-8 flex flex-col overflow-hidden">
             <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
             <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="font-mono text-xs text-gray-500">terminal@caiber-system:~</div>
             </div>
             <div key={activeStep} className="flex-grow flex flex-col justify-center animate-pulse-slow">
                <div className="inline-block px-3 py-1 rounded bg-brand-green/20 text-brand-green text-xs font-mono font-bold mb-6 w-max">
                    STATUS: {steps[activeStep].status}...
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    {steps[activeStep].subtitle}
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                    {steps[activeStep].desc}
                </p>
                <div>
                    <span className="text-xs font-mono text-gray-600 uppercase tracking-widest block mb-4">Deployed Stack</span>
                    <div className="flex gap-3">
                        {steps[activeStep].tools.map(tool => (
                            <span key={tool} className="px-4 py-2 bg-brand-black border border-white/10 rounded-lg text-sm font-mono text-gray-300">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
             </div>
             <div className="mt-8 pt-4 border-t border-white/5 flex justify-between font-mono text-[10px] text-gray-600">
                <span>CPU: 12%</span>
                <span>MEM: 404MB</span>
                <span>UPTIME: 99.99%</span>
             </div>
          </div>
        </div>
        <div className="mt-24 p-12 glass-panel rounded-[2.5rem] border-brand-green/20 bg-brand-green/5 text-center relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-green/20 blur-[100px] rounded-full"></div>
          <h3 className="text-2xl font-bold mb-6 italic relative z-10">"Systems over scripts."</h3>
          <p className="text-gray-400 max-w-xl mx-auto relative z-10">
            We don't build temporary fixes. We build permanent digital assets that grow with your company. Every workflow is documented and transferrable.
          </p>
        </div>
      </div>
    </div>
  );
};

const Calculator = () => {
  const [hours, setHours] = useState(20);
  const [rate, setRate] = useState(45);
  const [employees, setEmployees] = useState(1);
  const yearlyWaste = hours * rate * 52 * employees;
  const potentialSavings = yearlyWaste * 0.85;

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center">
            <h2 className="text-sm font-mono text-brand-green mb-4 uppercase tracking-[0.2em]">Efficiency Analysis</h2>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter">The ROI Calculator.</h1>
        </div>
        <div className="glass-card p-10 rounded-[2.5rem] border-white/5">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
                <div className="space-y-6">
                    <label className="block text-sm font-mono text-gray-500 uppercase">Manual Hours / Week</label>
                    <input 
                        type="range" min="1" max="40" value={hours} 
                        onChange={(e) => setHours(parseInt(e.target.value))}
                        className="w-full accent-brand-green"
                    />
                    <div className="text-3xl font-bold text-white">{hours} hrs</div>
                </div>
                <div className="space-y-6">
                    <label className="block text-sm font-mono text-gray-500 uppercase">Employee Hourly Rate</label>
                    <input 
                        type="range" min="20" max="250" step="5" value={rate} 
                        onChange={(e) => setRate(parseInt(e.target.value))}
                        className="w-full accent-brand-green"
                    />
                    <div className="text-3xl font-bold text-white">${rate} / hr</div>
                </div>
                <div className="space-y-6">
                    <label className="block text-sm font-mono text-gray-500 uppercase">Affected Employees</label>
                    <input 
                        type="range" min="1" max="20" value={employees} 
                        onChange={(e) => setEmployees(parseInt(e.target.value))}
                        className="w-full accent-brand-green"
                    />
                    <div className="text-3xl font-bold text-white">{employees} staff</div>
                </div>
            </div>
            <div className="bg-brand-black/50 p-8 rounded-3xl border border-white/5 grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <p className="text-gray-400 text-sm mb-1 uppercase font-mono">Current Yearly Efficiency Loss</p>
                    <div className="text-5xl font-extrabold text-red-500 tracking-tighter">
                        ${yearlyWaste.toLocaleString()}
                    </div>
                </div>
                <div className="md:border-l border-white/10 md:pl-8">
                    <p className="text-brand-green text-sm mb-1 uppercase font-mono">Recoverable Capital</p>
                    <div className="text-5xl font-extrabold text-brand-green tracking-tighter">
                        ${potentialSavings.toLocaleString()}
                    </div>
                </div>
            </div>
            <div className="mt-12 text-center">
                <p className="text-gray-500 text-sm mb-8">
                    *Based on an 85% average operational lift following CAIBER.TECH deployment.
                </p>
                <Link to="/#contact" className="inline-block bg-brand-green text-black px-10 py-5 rounded-2xl font-black text-lg hover:shadow-[0_0_50px_rgba(0,255,65,0.4)] transition-all">
                    GET MY DETAILED AUDIT
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative bg-brand-black text-slate-200">
        <BackgroundEffects />
        <Navbar />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/blueprints" element={<Blueprints />} />
            <Route path="/protocol" element={<Protocol />} />
            <Route path="/calculator" element={<Calculator />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
