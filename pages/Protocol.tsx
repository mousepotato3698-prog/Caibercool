
import React, { useState } from 'react';

const Protocol: React.FC = () => {
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
          
          {/* Left Column: Interactive List */}
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
                 {/* Progress Line Indicator */}
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

          {/* Right Column: Dynamic Monitor */}
          <div className="relative glass-panel rounded-3xl border border-white/10 p-8 flex flex-col overflow-hidden">
             {/* Background Grid */}
             <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
             
             {/* Header */}
             <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="font-mono text-xs text-gray-500">terminal@caiber-system:~</div>
             </div>

             {/* Content */}
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

                {/* Tools Grid */}
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

             {/* Footer Decoration */}
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

export default Protocol;
