
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NodeCard = ({ title, icon, color, delay }: { title: string, icon: any, color: string, delay: string }) => (
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

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
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

const Home: React.FC = () => {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden px-6">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Content */}
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
          
          {/* Right Visual - The "Node Graph" with Data Packets */}
          <div className="relative h-[500px] w-full hidden lg:flex items-center justify-center perspective-[1000px]">
             
             {/* Animated Connections */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                {/* Path 1: Top Left to Center */}
                <path id="path1" d="M120 150 C 200 150, 200 250, 280 250" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
                {/* Data Packet 1 */}
                <circle r="3" fill="#00FF41">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M120 150 C 200 150, 200 250, 280 250" />
                  <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
                </circle>

                {/* Path 2: Center to Bottom Right */}
                <path id="path2" d="M470 250 C 550 250, 550 350, 630 350" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
                {/* Data Packet 2 */}
                <circle r="3" fill="#3B82F6">
                  <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M470 250 C 550 250, 550 350, 630 350" />
                  <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1.5s" repeatCount="indefinite" />
                </circle>
             </svg>

             {/* Node 1: Trigger */}
             <div className="absolute top-20 left-10 z-10">
                <NodeCard 
                    title="Webhook: New Lead" 
                    delay="0s"
                    color="border-purple-500"
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>} 
                />
             </div>

             {/* Node 2: Logic (Center) */}
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

             {/* Node 3: Action */}
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

      {/* Trust Bar */}
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

      {/* Value Prop Cards */}
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

      {/* Comparison Section (Retention Strategy) */}
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

      {/* FAQ Section (Retention Strategy) */}
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

      {/* Final CTA */}
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

export default Home;
