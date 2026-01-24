import React, { useState } from 'react';
import { Check, Zap } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  // Pricing values in INR
  const monthlyRate = 899;
  const yearlyRate = 699; // Monthly equivalent when paid yearly

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto relative">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200/20 blur-[100px] rounded-full" />
      </div>

      <div className="text-center mb-16 md:mb-24">
        <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
          <span className="text-purple-600 font-bold text-[10px] uppercase tracking-widest">Investment Plans</span>
        </div>
        <h2 className="text-4xl md:text-7xl font-[1000] text-slate-900 mb-6 tracking-tighter">
          Scale your <span className="italic font-serif text-slate-400">vision.</span>
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto font-medium text-lg leading-relaxed">
          Transparent pricing for high-growth teams. No hidden fees, just pure engineering excellence.
        </p>
        
        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-5 mt-12">
          <span className={`text-sm font-black transition-colors ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className="w-16 h-8 bg-slate-200 rounded-full relative p-1 transition-all duration-300 hover:bg-slate-300"
          >
            <div className={`w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-300 ease-out ${isYearly ? 'translate-x-8' : 'translate-x-0'}`} />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-black transition-colors ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Yearly</span>
            <span className="bg-emerald-100 text-emerald-600 text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-tighter">
              Save 20%
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Basic Plan */}
        <div className="bg-white border border-slate-100 p-8 md:p-12 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 group relative">
          <div className="mb-10">
            <h3 className="text-2xl font-black mb-2 tracking-tight">Starter Lab</h3>
            <p className="text-slate-400 text-sm font-medium">Ideal for MVPs and early-stage startups.</p>
          </div>
          
          <div className="flex items-baseline gap-1 mb-10">
            <span className="text-6xl font-[1000] tracking-tighter text-slate-900">₹0</span>
            <span className="text-slate-400 font-bold text-sm tracking-tight">/ month</span>
          </div>

          <button className="w-full py-5 border-2 border-slate-900 text-slate-900 rounded-2xl font-black text-lg hover:bg-slate-900 hover:text-white transition-all duration-300 mb-12">
            Claim Free Trial
          </button>
          
          <div className="space-y-5">
            <p className="font-black text-[11px] uppercase tracking-[0.2em] text-slate-400">Core Features</p>
            {[
              "Custom Architecture Design",
              "Repository Setup & Handover",
              "Basic Security Audit",
              "Community Support Access",
              "Bi-weekly Progress Syncs"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 text-sm font-medium text-slate-600">
                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Pro Plan */}
        <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] text-white shadow-3xl relative overflow-hidden group">
          {/* Animated Background Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full group-hover:bg-purple-600/30 transition-all duration-700" />
          
          {/* Popular Badge */}
          <div className="absolute top-8 right-8 bg-gradient-to-r from-purple-500 to-indigo-500 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl flex items-center gap-1.5">
            <Zap size={10} fill="currentColor" /> Most Popular
          </div>
          
          <div className="mb-10">
            <h3 className="text-2xl font-black mb-2 tracking-tight">Growth Scale</h3>
            <p className="text-slate-400 text-sm font-medium">Full ownership and high-speed delivery.</p>
          </div>

          <div className="flex items-baseline gap-1 mb-10">
            <span className="text-6xl font-[1000] tracking-tighter">₹{isYearly ? yearlyRate : monthlyRate}</span>
            <span className="text-slate-400 font-bold text-sm tracking-tight">/ month</span>
          </div>

          <button className="w-full py-5 bg-purple-600 text-white rounded-2xl font-black text-lg hover:bg-purple-500 hover:scale-[1.02] transition-all duration-300 mb-12 shadow-xl shadow-purple-900/20">
            Start Scaling
          </button>
          
          <div className="space-y-5 relative z-10">
            <p className="font-black text-[11px] uppercase tracking-[0.2em] text-slate-500">Premium Ecosystem</p>
            {[
              "Everything in Starter Lab",
              "Full Source Code Transfer",
              "Unlimited Performance SEO",
              "24/7 Priority Engineering",
              "Advanced AI-Predictive Models"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 text-sm font-medium text-slate-300">
                <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 border border-purple-500/30">
                  <Check size={12} strokeWidth={3} />
                </div>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;