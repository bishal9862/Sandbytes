import React from 'react';
import { Check, Zap, Rocket, Coffee, ArrowRight, ShieldCheck, Globe, Star } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing-section" className="py-12 md:py-32 max-w-7xl mx-auto relative px-4 overflow-hidden">
      {/* --- BACKGROUND AMBIANCE --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-200/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-200/20 blur-[120px] rounded-full" />
      </div>

      {/* --- HEADER SECTION --- */}
      <div className="text-center mb-12 md:mb-24">
        <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm px-4 py-1.5 rounded-full mb-6 animate-fade-in">
          <Star size={12} className="text-purple-500 fill-purple-500" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Investment Framework</span>
        </div>
        
        <h2 className="text-4xl md:text-8xl font-[1000] text-slate-900 mb-6 tracking-tighter leading-[0.85]">
          Scale your <br/>
          <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-slate-400">digital estate.</span>
        </h2>
        
        <p className="text-slate-500 font-medium text-sm md:text-xl max-w-2xl mx-auto leading-relaxed">
          Predictable one-time pricing. No monthly "vampire" subscriptions. 
          You own 100% of the code and the assets.
        </p>
      </div>

      {/* --- PRICING GRID (MOBILE MICRO-SCROLL) --- */}
      <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth">
        
        {/* TIER 1: DISCOVERY (₹0) */}
        <div className="min-w-[85vw] md:min-w-0 snap-center bg-white border border-slate-100 p-6 md:p-10 rounded-[2.5rem] md:rounded-[4rem] shadow-sm hover:shadow-xl hover:border-purple-100 transition-all duration-500 flex flex-col group">
          <div className="mb-8">
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
              <Coffee size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-2 tracking-tight text-slate-900">Discovery</h3>
            <p className="text-slate-400 text-xs md:text-sm font-medium">Strategy & Architecture mapping.</p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl md:text-6xl font-[1000] tracking-tighter text-slate-900">₹0</span>
              <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">/ Start</span>
            </div>
            <div className="h-1 w-12 bg-purple-600 mt-2 rounded-full" />
          </div>

          <button className="group/btn w-full py-4 bg-slate-50 border border-slate-200 text-slate-900 rounded-2xl font-black text-sm hover:bg-slate-900 hover:text-white transition-all duration-300 mb-10 flex items-center justify-center gap-2">
            Start Free Session <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
          
          <div className="space-y-4 flex-grow">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">Phase One Included</p>
            {[
              "Free Expert Consultation",
              "Business Strategy Mapping",
              "UI/UX Design Selection",
              "Tech Stack Recommendation",
              "Full Project Roadmap"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-xs md:text-sm font-medium text-slate-600">
                <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* TIER 2: DIGITAL LAUNCH (₹15K) */}
        <div className="min-w-[85vw] m-5 md:min-w-0 snap-center bg-white border-2 border-purple-600/10 p-6 md:p-10 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl shadow-purple-500/10 relative flex flex-col group ring-4 ring-purple-50">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg">
            Recommended
          </div>

          <div className="mb-8 mt-4">
            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Rocket size={24} className="text-purple-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-2 tracking-tight text-slate-900">Digital Launch</h3>
            <p className="text-slate-500 text-xs md:text-sm font-medium">Professional market entry.</p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl md:text-6xl font-[1000] tracking-tighter text-slate-900">₹15k</span>
              <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">/ Setup</span>
            </div>
            <p className="text-[10px] text-purple-600 font-black mt-3 uppercase tracking-widest bg-purple-50 inline-block px-2 py-1 rounded">
              ₹5,000 Annual Renewal
            </p>
          </div>

          <button className="w-full py-4 bg-purple-600 text-white rounded-2xl font-black text-sm hover:bg-purple-700 transition-all duration-300 mb-10 shadow-xl shadow-purple-200 active:scale-95">
            Claim Your Spot
          </button>
          
          <div className="space-y-4 flex-grow">
             <p className="text-[10px] font-black text-purple-300 uppercase tracking-widest mb-2">Launch Essentials</p>
            {[
              "Custom Web Development",
              "Free Domain (.com / .in)",
              "Premium Web Hosting",
              "1 Year Free Maintenance",
              "Core SEO Optimization",
              "WhatsApp API Integration"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-xs md:text-sm font-medium text-slate-700">
                <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-white shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* TIER 3: DOMINANCE (₹20K) */}
        <div className="min-w-[85vw] md:min-w-0 snap-center bg-slate-900 p-6 md:p-10 rounded-[2.5rem] md:rounded-[4rem] text-white shadow-3xl relative overflow-hidden flex flex-col group border border-white/5">
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/30 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="mb-8 z-10">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6">
              <Zap size={24} className="text-amber-400 fill-amber-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-2 tracking-tight">Dominance</h3>
            <p className="text-slate-400 text-xs md:text-sm font-medium">Complete business engine.</p>
          </div>

          <div className="mb-8 z-10">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl md:text-6xl font-[1000] tracking-tighter text-white">₹20k</span>
              <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">/ Setup</span>
            </div>
            <p className="text-[10px] text-emerald-400 font-black mt-3 uppercase tracking-widest border border-emerald-400/30 inline-block px-2 py-1 rounded">
              Everything Included
            </p>
          </div>

          <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black text-sm hover:bg-emerald-400 transition-all duration-300 mb-10 z-10 active:scale-95">
            Get Full Suite
          </button>
          
          <div className="space-y-4 flex-grow relative z-10">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Growth Features</p>
            {[
              "Everything in Launch Plan",
              "Google Business Profile Setup",
              "Advanced Local SEO",
              "G-Workspace Setup",
              "Priority 24hr Maintenance",
              "Analytics Dashboard"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-xs md:text-sm font-medium text-slate-300">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 border border-white/10">
                  <Check size={12} strokeWidth={3} />
                </div>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- TRUST FOOTER --- */}
      

      {/* --- UTILITY STYLES --- */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Pricing;