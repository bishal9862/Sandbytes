import React from 'react';
import { Search, Bell, Rocket, Code, BarChart3, Globe, CheckCircle, Zap, ShieldCheck, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#F9F8FF] mt-24 m-2 md:pt-24 overflow-hidden text-center">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-100 mb-8 animate-fade-in">
        <span className="bg-[#9333ea] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Top Rated Agency</span>
        <span className="text-sm font-medium text-slate-700 italic">Leading Digital Transformation in India &gt;</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-[80px] font-[900] text-slate-900 leading-[1.05] tracking-tight mb-8 px-4">
        Premium Web & App <br /> Solutions for Business
      </h1>
      
      <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-medium px-6">
        We bridge the gap between complex technology and intuitive design. <br className="hidden md:block" /> 
        High-performance development paired with aggressive digital marketing.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-24 px-6">
        <button className="bg-[#9333ea] text-white px-10 py-[18px] rounded-2xl font-bold shadow-2xl shadow-purple-300 hover:scale-105 transition-transform active:scale-95">
          Start Your Project
        </button>
        <button className="bg-white text-slate-900 border border-gray-200 px-10 py-[18px] rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm">
          Explore Portfolio
        </button>
      </div>

      {/* The Visual Stack - Mobile Mockups & Floating UI */}
      <div className="relative flex justify-center items-end max-w-7xl mx-auto px-4 h-[600px]">
        
        {/* LEFT DEVICE: App UI Mockup */}
        <div className="hidden lg:block w-72 h-[500px] bg-white rounded-[3rem] border-[10px] border-slate-900 shadow-2xl transform -rotate-12 translate-y-28 -mr-16 p-0 overflow-hidden text-left z-10">
          <div className="p-5">
             <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-bold text-slate-400">Project: FinTech App</span>
             </div>
             <div className="h-40 bg-purple-50 rounded-2xl mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?auto=format&fit=crop&q=80&w=400" alt="App UI" className="w-full h-full object-cover" />
             </div>
             <h4 className="font-black text-slate-900 text-sm mb-1">User Wallet Interface</h4>
             <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <div key={i} className="w-6 h-1 bg-[#9333ea] rounded-full opacity-30" />)}
             </div>
             <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-50 p-2 rounded-xl text-center"><p className="font-black text-xs">99.9%</p><p className="text-[8px] text-gray-400 uppercase">Uptime</p></div>
                <div className="bg-gray-50 p-2 rounded-xl text-center"><p className="font-black text-xs">Secure</p><p className="text-[8px] text-gray-400 uppercase">SSL Engaged</p></div>
             </div>
          </div>
        </div>

        {/* CENTER DEVICE: Marketing Dashboard */}
        <div className="relative z-30 w-[340px] h-[620px] bg-white rounded-[3.5rem] border-[12px] border-slate-900 shadow-[0_60px_120px_-20px_rgba(147,51,234,0.15)] overflow-hidden text-left">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-9 bg-slate-900 rounded-b-3xl z-40" />
          
          <div className="pt-10 px-6">
            <div className="flex justify-between items-center mb-8">
              <span className="font-black text-[#9333ea] text-xl tracking-tighter italic">AGENCY.IO</span>
              <div className="flex gap-3 text-slate-900"><Search size={22}/><Bell size={22}/></div>
            </div>

            {/* Tech Stack Horizontal Scroll */}
            <div className="flex gap-3 mb-8 overflow-x-auto no-scrollbar pb-2">
              {[
                { label: 'React', color: 'bg-blue-50' },
                { label: 'Node', color: 'bg-green-50' },
                { label: 'Flutter', color: 'bg-cyan-50' },
                { label: 'Cloud', color: 'bg-purple-50' }
              ].map((item, i) => (
                <div key={i} className={`flex flex-col items-center gap-1 shrink-0`}>
                  <div className={`w-14 h-14 rounded-full border-2 border-[#9333ea] flex items-center justify-center ${item.color}`}>
                    <Cpu size={24} className="text-[#9333ea]" />
                  </div>
                  <span className="text-[9px] text-slate-500 font-bold uppercase">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Marketing Stats Card */}
            <div className="bg-white rounded-[2rem] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-50">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600"><Rocket size={18}/></div>
                 <div>
                   <p className="text-xs font-black">Conversion Growth</p>
                   <p className="text-[10px] text-gray-400 font-medium">Real-time Campaign Audit</p>
                 </div>
              </div>
              <div className="h-32 bg-[#F9F8FF] rounded-2xl mb-4 flex items-end p-3 gap-1.5 group">
                 {[40, 70, 45, 90, 60, 100, 75].map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-[#9333ea] rounded-t-md opacity-80 hover:opacity-100 transition-all duration-500" />
                 ))}
              </div>
              <div className="flex justify-between items-center px-1">
                <span className="text-xs font-black text-slate-900">+412% ROAS</span>
                <span className="text-[10px] text-green-500 font-bold flex items-center gap-1">Live <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /></span>
              </div>
            </div>
          </div>

          {/* Floating Bubble: Status */}
          <div className="absolute top-32 -left-24 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-gray-100 z-50 animate-bounce-slow">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/100?u=1" className="w-8 h-8 rounded-full border-2 border-white" alt="Client" />
              <img src="https://i.pravatar.cc/100?u=2" className="w-8 h-8 rounded-full border-2 border-white" alt="Client" />
            </div>
            <div className="flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1.5 rounded-full text-[10px] font-black">
              <ShieldCheck size={14} /> Milestones Met
            </div>
          </div>

          {/* Floating Bubble: Tech Stack */}
          <div className="absolute bottom-48 -right-28 bg-white/95 backdrop-blur-md p-5 rounded-[2rem] shadow-2xl w-56 border border-gray-100 z-50">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center text-[#9333ea]"><Zap size={16}/></div>
              <p className="text-xs font-black">Performance First</p>
            </div>
            <p className="text-[10px] text-gray-500 leading-relaxed">
              Proprietary framework built for <span className="text-slate-900 font-bold">SEO scalability</span> and sub-second load times.
            </p>
          </div>
        </div>

        {/* RIGHT DEVICE: Web Portfolio (Rotated) */}
        <div className="hidden lg:block w-72 h-[500px] bg-white rounded-[3rem] border-[10px] border-slate-900 shadow-2xl transform rotate-12 translate-y-28 -ml-16 p-0 overflow-hidden text-left z-10">
           <div className="h-44 w-full bg-slate-100 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" alt="Web Project" className="w-full h-full object-cover" />
           </div>
           <div className="p-5">
             <p className="text-[10px] font-black text-slate-400 mb-4 uppercase tracking-tighter">Server Health: Optimal</p>
             {[
                { name: "Global SaaS Launch", stat: "Success", color: "text-blue-500" },
                { name: "E-comm Ecosystem", stat: "Optimized", color: "text-green-500" },
                { name: "B2B Portal UI", stat: "Verified", color: "text-purple-500" }
             ].map((job, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
                  <span className="text-[10px] font-black text-slate-800">{job.name}</span>
                  <span className={`text-[8px] font-bold ${job.color} uppercase tracking-widest`}>{job.stat}</span>
                </div>
             ))}
           </div>
        </div>
      </div>

      {/* Brand Partners Infinite Marquee Section */}
      <div className="bg-white border-t border-gray-100 py-20 mt-20 overflow-hidden">
        <p className="text-[11px] font-black text-slate-900 uppercase tracking-[0.3em] mb-12">
          Partnering with India's Industry Leaders
        </p>
        
        {/* CSS Marquee */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-32 px-10">
            {['RELIANCE', 'TATA DIGI', 'INFOSYS', 'WIPRO', 'ADANI', 'ZOMATO', 'SWIGGY', 'PAYTM', 'JIO'].map((brand, i) => (
              <span key={i} className="text-2xl md:text-4xl font-[900] text-slate-900/20 hover:text-[#9333ea]/40 transition-colors cursor-default tracking-tighter">
                {brand}
              </span>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 md:gap-32 px-10">
            {['RELIANCE', 'TATA DIGI', 'INFOSYS', 'WIPRO', 'ADANI', 'ZOMATO', 'SWIGGY', 'PAYTM', 'JIO'].map((brand, i) => (
              <span key={i} className="text-2xl md:text-4xl font-[900] text-slate-900/20 hover:text-[#9333ea]/40 transition-colors cursor-default tracking-tighter">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Config Extension (Add this to your globals.css or tailwind.config) */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-marquee2 { animation: marquee2 30s linear infinite; }
        .animate-bounce-slow { animation: bounce 3s infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default Hero;