
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Calculator: React.FC = () => {
  const [hours, setHours] = useState(20);
  const [rate, setRate] = useState(45);
  const [employees, setEmployees] = useState(1);

  const yearlyWaste = hours * rate * 52 * employees;
  const potentialSavings = yearlyWaste * 0.85; // Assume 85% efficiency gain

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

export default Calculator;
