
import React from 'react';

const Solutions: React.FC = () => {
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

        {/* The "Brain" Section */}
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
                    {/* Visual representation of a central hub */}
                    <div className="relative w-64 h-64">
                        <div className="absolute inset-0 border-2 border-dashed border-gray-700 rounded-full animate-spin-slow"></div>
                        <div className="absolute inset-4 border border-brand-green/20 rounded-full"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 bg-brand-green rounded-2xl shadow-[0_0_40px_rgba(0,255,65,0.4)] flex items-center justify-center">
                                <span className="text-black font-bold font-mono text-xl">CORE</span>
                            </div>
                        </div>
                        {/* Satellites */}
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

export default Solutions;
