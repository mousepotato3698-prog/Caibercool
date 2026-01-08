
import React from 'react';

const Blueprints: React.FC = () => {
  const caseStudies = [
    {
      tag: "RevOps",
      title: "Orchestrating 50k Leads/Month for Real Estate",
      challenge: "Manual lead triage was taking 4+ hours per agent, resulting in a 30% drop-off rate.",
      architecture: [
        "Twilio SMS -> Python Webhook Handler",
        "LLM-based Intent Classification (Scoring)",
        "Parallel routing to CRM & Slack Priority Channels",
        "Automated Cal.com scheduling via API"
      ],
      outcome: "92% reduction in lead response time (Sub-1 minute)."
    },
    {
      tag: "Logistics",
      title: "Autonomous Invoice Processing Engine",
      challenge: "Staff spent 15 hours/week typing data from complex PDF invoices into an ERP.",
      architecture: [
        "GCP Bucket Trigger -> AWS Textract / Vision LLM",
        "Validation Layer (Cross-ref against PO Database)",
        "Anomaly Detection (Flagging price discrepancies)",
        "Direct API Insert to Legacy Oracle ERP"
      ],
      outcome: "100% data accuracy; zero human touch for 95% of documents."
    },
    {
      tag: "HR Operations",
      title: "Zero-Touch Employee Onboarding",
      challenge: "New hires waited 3 days for access credentials due to fragmented IT processes.",
      architecture: [
        "Greenhouse 'Hired' Webhook Trigger",
        "Identity Provider Creation (Okta/Google Workspace)",
        "Auto-provisioning: Slack channels, Notion workspaces, Jira access",
        "Hardware procurement request via Vendor API"
      ],
      outcome: "Onboarding time reduced from 72 hours to 5 seconds."
    },
    {
      tag: "E-Commerce",
      title: "Real-Time Omni-Channel Inventory Sync",
      challenge: "Overselling on Amazon because Shopify inventory updates were too slow (15min delay).",
      architecture: [
        "Webhook Listener (Any Sale Source)",
        "Redis Queue Buffer (High Throughput)",
        "Master Inventory Database Update (Single Source of Truth)",
        "Fan-out API updates to Amazon, Shopify, eBay instantly"
      ],
      outcome: "Eliminated overselling incidents; Real-time parity across 5 channels."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-sm font-mono text-brand-green mb-4 uppercase tracking-[0.2em]">Engineering Breakdowns</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter">The Blueprints.</h1>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl">
            We don't just say we built it. We show you the architectural integrity of our systems.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((cs, i) => (
            <div key={i} className="glass-panel rounded-[2.5rem] overflow-hidden border border-white/5 flex flex-col lg:flex-row hover:border-brand-green/20 transition-colors duration-500 group">
              <div className="p-12 lg:w-1/2 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="inline-block px-3 py-1 rounded bg-brand-green text-black text-[10px] font-bold uppercase mb-6">{cs.tag}</span>
                <h3 className="text-3xl font-bold mb-6 group-hover:text-brand-green transition-colors">{cs.title}</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-gray-500 font-mono text-xs uppercase mb-3 tracking-widest">The Challenge</h4>
                    <p className="text-gray-300 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-gray-500 font-mono text-xs uppercase mb-3 tracking-widest">Architectural Flow</h4>
                    <ul className="space-y-3">
                      {cs.architecture.map((step, j) => (
                        <li key={j} className="flex items-start space-x-3 text-sm">
                          <span className="text-brand-green mt-1 font-mono">0{j+1}</span>
                          <span className="text-gray-400">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-white/5">
                    <h4 className="text-brand-green font-mono text-xs uppercase mb-2 tracking-widest">Business Outcome</h4>
                    <p className="text-xl font-bold">{cs.outcome}</p>
                  </div>
                </div>
              </div>
              <div className="bg-brand-dark p-8 lg:w-1/2 border-l border-white/5 font-mono text-xs flex flex-col justify-center relative overflow-hidden">
                 {/* Decorative background code */}
                 <div className="absolute inset-0 opacity-5 pointer-events-none select-none overflow-hidden">
                    <pre className="text-[10px] leading-tight text-brand-green">
                        {Array(20).fill('0101010100101101010').map((l, k) => <div key={k}>{l}</div>)}
                    </pre>
                 </div>

                 <div className="bg-brand-black rounded-xl p-6 border border-white/10 text-gray-400 relative z-10 shadow-2xl">
                    <div className="flex space-x-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <p className="mb-2"><span className="text-emerald-400">class</span> <span className="text-white">WorkflowEngine</span>:</p>
                    <p className="pl-4 mb-2"><span className="text-emerald-400">def</span> <span className="text-blue-400">__init__</span>(self, pipeline_id):</p>
                    <p className="pl-8">self.pipeline = load_config(pipeline_id)</p>
                    <p className="pl-8">self.status = <span className="text-orange-300">'STANDBY'</span></p>
                    <p className="pl-4 mt-2"><span className="text-emerald-400">async def</span> <span className="text-blue-400">execute_step</span>(self, step_data):</p>
                    <p className="pl-8">node = self.pipeline.get_node(step_data.type)</p>
                    <p className="pl-8 text-brand-green"># Run parallel logic processing</p>
                    <p className="pl-8">result = <span className="text-emerald-400">await</span> node.run(step_data.payload)</p>
                    <p className="pl-8">self.log_metrics(result.latency, result.success)</p>
                    <p className="pl-8"><span className="text-brand-green">return</span> result</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blueprints;
