
import React, { useState } from 'react';

// Type definitions for our data structure
type CodeLine = {
  text: string;
  indent: number;
  stepIndex?: number; // Maps to the index of the architecture step
  highlight?: boolean; // Static highlight for keywords
  color?: string; // Specific color for syntax highlighting
};

type CaseStudy = {
  tag: string;
  title: string;
  challenge: string;
  architecture: string[];
  outcome: string;
  codeSnippet: CodeLine[];
};

const CaseStudyCard: React.FC<{ data: CaseStudy }> = ({ data }) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <div className="glass-panel rounded-[2.5rem] overflow-hidden border border-white/5 flex flex-col lg:flex-row hover:border-brand-green/20 transition-colors duration-500 group relative">
      {/* Interactive Gradient Border Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

      {/* Left Column: Content */}
      <div className="p-12 lg:w-1/2 flex flex-col justify-between">
        <div>
          <span className="inline-block px-3 py-1 rounded bg-brand-green text-black text-[10px] font-bold uppercase mb-6 shadow-[0_0_10px_rgba(0,255,65,0.3)]">
            {data.tag}
          </span>
          <h3 className="text-3xl font-bold mb-6 group-hover:text-brand-green transition-colors">
            {data.title}
          </h3>

          <div className="space-y-8">
            {/* Challenge Section */}
            <div>
              <h4 className="text-gray-500 font-mono text-xs uppercase mb-3 tracking-widest">
                The Challenge
              </h4>
              <p className="text-gray-300 leading-relaxed border-l-2 border-white/10 pl-4">
                {data.challenge}
              </p>
            </div>

            {/* Interactive Architecture List */}
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

        {/* Outcome Footer */}
        <div className="pt-6 mt-8 border-t border-white/5">
          <h4 className="text-brand-green font-mono text-xs uppercase mb-2 tracking-widest">
            Business Outcome
          </h4>
          <p className="text-xl font-bold text-white">{data.outcome}</p>
        </div>
      </div>

      {/* Right Column: Code Terminal */}
      <div className="bg-brand-dark lg:w-1/2 border-l border-white/5 font-mono text-xs flex flex-col relative overflow-hidden">
        {/* Background Matrix Rain Effect (Static CSS implementation for performance) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none select-none overflow-hidden">
          <pre className="text-[10px] leading-tight text-brand-green">
            {Array(30)
              .fill('0101010100101101010')
              .map((l, k) => (
                <div key={k}>{l}</div>
              ))}
          </pre>
        </div>

        {/* Code Window */}
        <div className="relative z-10 p-8 h-full flex flex-col justify-center">
          <div className="bg-brand-black rounded-xl border border-white/10 shadow-2xl overflow-hidden">
            {/* Terminal Header */}
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

            {/* Code Content */}
            <div className="p-6 overflow-x-auto">
              {data.codeSnippet.map((line, i) => {
                const isHovered =
                  hoveredStep !== null && line.stepIndex === hoveredStep;
                const isDimmed =
                  hoveredStep !== null &&
                  line.stepIndex !== undefined &&
                  line.stepIndex !== hoveredStep;

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
                    {/* Syntax Highlighting Rendering */}
                    <span 
                        className={line.color || "text-gray-400"}
                        dangerouslySetInnerHTML={{ __html: line.text }}
                    />
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

const Blueprints: React.FC = () => {
  const caseStudies: CaseStudy[] = [
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
        <div className="mb-20">
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

export default Blueprints;
