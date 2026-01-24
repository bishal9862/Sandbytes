import React from 'react';
import { 
  Zap, Code2, Smartphone, 
  Globe, ShieldCheck, Cpu, ArrowUpRight, 
  CheckCircle2, TrendingUp, MousePointer2, Megaphone, 
  Search
} from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-white font-sans selection:bg-purple-100">
      
      {/* --- SECTION 1: WEB & APP DEVELOPMENT --- */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full mx-auto lg:mx-0">
              <Code2 size={16} className="text-purple-600" />
              <span className="text-xs font-black text-purple-600 uppercase tracking-widest">Development Suite</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-[900] text-slate-900 leading-[1.1] tracking-tight">
              Explore Our Premium <br/> Key Features
            </h2>
            
            <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
              {[
                { 
                  icon: <Zap />, 
                  title: "Smart matching algorithms for tailored UX." 
                },
                { 
                  icon: <Smartphone />, 
                  title: "Customizable interfaces for personal expression." 
                },
                { 
                  icon: <ShieldCheck />, 
                  title: "End-to-end encrypted business solutions." 
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 rounded-[2rem] bg-[#F9F8FF] border border-transparent hover:border-purple-200 hover:bg-white hover:shadow-xl transition-all duration-300 group text-left">
                  <div className="p-3 bg-white rounded-2xl text-purple-600 shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                  </div>
                  <p className="font-bold text-slate-700 text-base md:text-lg pt-1">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Mockup - App View */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative bg-[#F9F8FF] rounded-[3rem] p-6 sm:p-12 flex items-center justify-center overflow-hidden">
               {/* Floating Badges */}
               <div className="absolute top-10 left-6 md:left-12 bg-white px-4 py-2 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-2 animate-bounce-slow z-10">
                 <CheckCircle2 size={16} className="text-green-500" />
                 <span className="text-[10px] font-black uppercase">Pixel Perfect</span>
               </div>

               <div className="relative bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-6 w-full max-w-sm group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-full overflow-hidden">
                      <img src="https://i.pravatar.cc/100?u=dev" alt="client" />
                    </div>
                    <div>
                      <p className="text-sm font-black">Interface Preview</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">React Native Build</p>
                    </div>
                  </div>
                  <div className="h-48 md:h-64 bg-slate-100 rounded-3xl mb-6 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt="Application UI" 
                    />
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
                    <div className="h-2 w-24 bg-gray-200 rounded-full" />
                    <ArrowUpRight size={18} className="text-purple-600" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: DIGITAL MARKETING & ANIMATED GRAPH --- */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Visual Mockup - Marketing Graph */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#0F172A] rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <div className="space-y-1">
                  <h4 className="text-white font-black text-lg">Marketing ROI</h4>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Real-time Campaign Data</p>
                </div>
                <div className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-[10px] font-black animate-pulse">
                  LIVE TRACKING
                </div>
              </div>

              {/* Animated Graph */}
              <div className="h-48 flex items-end gap-2 mb-8 px-2">
                {[60, 45, 80, 55, 95, 70, 110, 85].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg transition-all duration-1000 ease-out animate-grow"
                    style={{ 
                      height: `${h}%`,
                      animationDelay: `${i * 150}ms`
                    }}
                  />
                ))}
              </div>

              {/* Marketing Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                  <TrendingUp className="text-emerald-400 mb-2" size={20} />
                  <p className="text-2xl font-black text-white">+248%</p>
                  <p className="text-[10px] text-slate-500 font-bold">CONVERSION RATE</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                  <MousePointer2 className="text-purple-400 mb-2" size={20} />
                  <p className="text-2xl font-black text-white">12.4k</p>
                  <p className="text-[10px] text-slate-500 font-bold">DAILY CLICKS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full mx-auto lg:mx-0">
              <Megaphone size={16} className="text-emerald-600" />
              <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Advanced Capabilities</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-[900] text-slate-900 leading-[1.1]">
              Engineered for <br className="hidden md:block"/> Business Growth
            </h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
              We leverage data-driven advanced capabilities designed to elevate your brand's digital presence.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Globe />, label: "Real-time global translation services." },
                { icon: <Search />, label: "Advanced SEO & intent-based filters." },
                { icon: <Cpu />, label: "Seamless cross-platform integration." },
                { icon: <TrendingUp />, label: "Scalable performance marketing." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-purple-100">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                  </div>
                  <p className="font-bold text-sm text-slate-800 leading-snug">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: RESPONSIVE STATS --- */}
      <section className="py-24 bg-[#F9F8FF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-[900] text-slate-900 leading-tight">
              Driving Results Across India
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">Empowering 500+ Businesses Nationwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { val: "500k+", label: "Shared moments and stories" },
              { val: "200k+", label: "Communities thriving across" },
              { val: "50+", label: "Countries where we are growing" }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="p-10 md:p-14 bg-white rounded-[3rem] border border-gray-100 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="text-5xl md:text-6xl font-[1000] text-slate-900 mb-4 tracking-tighter italic group-hover:text-purple-600 transition-colors">
                  {stat.val}
                </div>
                <p className="text-gray-400 font-bold text-xs md:text-sm uppercase tracking-widest leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes grow {
          from { height: 0; opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-grow {
          animation: grow 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Services;