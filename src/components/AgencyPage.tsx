import React, { useState, useEffect } from 'react';
import { 
  Globe, Zap, Smartphone, ArrowUpRight, TrendingUp, 
  CheckCircle2, Activity, Cpu, Settings, ChevronRight, 
  Terminal, BarChart3, ShieldCheck, Layers, MousePointer2
} from 'lucide-react';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import CTA from './CTA';

const AgencyPage = () => {
  const [revenue, setRevenue] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue(prev => (prev >= 312 ? 305 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Web Architecture",
      icon: <Globe className="text-blue-500" />,
      desc: "Latest stacks (Next.js 14, Remix) with focus on Vercel-speed performance and SEO dominance.",
      features: ["Serverless Architecture", "Edge Computing", "Custom CMS"]
    },
    {
      title: "Mobile Ecosystems",
      icon: <Smartphone className="text-purple-500" />,
      desc: "Native-feel experiences using Flutter & React Native with seamless offline capabilities.",
      features: ["iOS & Android", "Biometric Auth", "Push Protocols"]
    },
    {
      title: "Code Ownership",
      icon: <Terminal className="text-emerald-500" />,
      desc: "Full source code transfer under clear IP conditions. Your software is your asset, always.",
      features: ["IP Protection", "Clean Git History", "Doc Handover"]
    },
    {
      title: "Marketing Engine",
      icon: <TrendingUp className="text-rose-500" />,
      desc: "Data-driven growth hacking using AI-predictive models for higher ROI on every ad spend.",
      features: ["Performance SEO", "Ad Scaling", "Conversion Logic"]
    }
  ];

  return (
    <div className="bg-[#FDFCFM] font-sans text-slate-900 selection:bg-purple-200 overflow-x-hidden">
      {/* --- NOISE & BACKGROUND --- */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-200/20 blur-[120px] rounded-full animate-float-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-200/20 blur-[120px] rounded-full animate-float-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 md:pt-40 pb-16 md:pb-24 max-w-7xl mx-auto px-5 md:px-6">
        <div className="flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-slate-200 shadow-xl px-4 py-1.5 rounded-full mb-6 md:mb-10 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-[10px] md:text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">Next-Gen Software Lab</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-[9.5rem] font-[1000] tracking-tighter mb-8 leading-[0.88] text-slate-900 animate-slide-up">
            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-500 italic">impossible.</span>
          </h1>
          
          <p className="text-slate-500 text-lg md:text-2xl font-medium max-w-2xl leading-relaxed mb-10 md:mb-14 animate-fade-in-delay">
            Expert development for ambitious brands. We deliver source code, security, and scalability as standard.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-fade-in-delay">
            <button className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-purple-600 transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
              Start Project <ArrowUpRight size={20} />
            </button>
            <button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all hover:scale-105 shadow-lg">
              View Capabilities
            </button>
          </div>
        </div>

        {/* --- BRAND MARQUEE --- */}
        <div className="mt-20 md:mt-32 border-y border-slate-100 py-10 md:py-16 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#FDFCFM] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#FDFCFM] to-transparent z-10" />
          <div className="flex w-max animate-marquee gap-16 md:gap-32 items-center whitespace-nowrap opacity-30 grayscale">
            {['MICROSOFT', 'ADOBE', 'TATA', 'RELIANCE', 'STRIPE', 'NEXT.JS', 'VERCEL', 'GOOGLE'].map((brand, i) => (
              <span key={i} className="text-xl md:text-3xl font-black tracking-tighter uppercase">{brand}</span>
            ))}
            {/* Duplicate for seamless loop */}
            {['MICROSOFT', 'ADOBE', 'TATA', 'RELIANCE', 'STRIPE', 'NEXT.JS', 'VERCEL', 'GOOGLE'].map((brand, i) => (
              <span key={i+100} className="text-xl md:text-3xl font-black tracking-tighter uppercase">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES / BENTO SLIDER --- */}
      <section className="py-16 md:py-32 max-w-7xl mx-auto px-5 md:px-6">
        <div className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="text-purple-600 font-bold text-xs uppercase tracking-[0.4em]">Service Spectrum</span>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none">Full-Stack<br/>Excellence.</h2>
          </div>
          <p className="text-slate-500 max-w-sm font-medium">From initial logic to global scaling, we handle the entire lifecycle of your digital product.</p>
        </div>

        {/* Grid for desktop / Horizontal scroll for mobile */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 snap-x no-scrollbar">
          {services.map((s, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-0 snap-center group bg-white border border-slate-100 p-8 rounded-[2.5rem] md:rounded-[3rem] hover:shadow-3xl hover:border-purple-200 transition-all duration-700 relative overflow-hidden">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                {React.cloneElement(s.icon, { size: 28, className: "transition-colors duration-500" })}
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">{s.desc}</p>
              <div className="space-y-3">
                {s.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400">
                    <CheckCircle2 size={12} className="text-purple-500" /> {f}
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>
       <Pricing/>

      {/* --- ANALYTICS SECTION --- */}
      <section className="mx-4 md:mx-10 my-10 py-16 md:py-32 bg-[#090A0F] rounded-[3rem] md:rounded-[6rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.15),transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 md:gap-24 relative z-10">
          <div className="w-full lg:w-1/2">
            <div className="bg-slate-900/40 backdrop-blur-2xl rounded-[3rem] md:rounded-[4.5rem] p-8 md:p-14 border border-white/10 shadow-3xl">
              <div className="flex justify-between items-start mb-12 md:mb-20">
                <div>
                  <h4 className="text-white text-2xl md:text-4xl font-black tracking-tight">Global Growth</h4>
                  <p className="text-slate-500 mt-2 flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
                    <Activity size={14} className="text-emerald-400 animate-pulse" /> Live Metrics
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-4xl md:text-6xl font-black text-white">+{revenue}%</p>
                  <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest mt-1">Scale Index</p>
                </div>
              </div>

              <div className="relative h-48 md:h-72 w-full flex items-end justify-between px-1 overflow-hidden group">
                {[60, 40, 80, 50, 100, 70, 90, 60, 85, 45, 75, 55, 90, 65].map((h, i) => (
                  <div 
                    key={i} 
                    className={`relative w-[5%] bg-gradient-to-t from-purple-600 to-indigo-400 rounded-full transition-all duration-1000`}
                    style={{ 
                      height: `${h}%`, 
                      animation: `infinitewave 3s ease-in-out infinite alternate`,
                      animationDelay: `${i * 0.15}s` 
                    }}
                  />
                ))}
              </div>
               

              <div className="mt-12 grid grid-cols-3 gap-3">
                {['Security', 'Speed', 'Uptime'].map((item, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center">
                    <p className="text-slate-500 text-[9px] font-black uppercase mb-2 tracking-tighter">{item}</p>
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500" style={{ width: `${80 + (i * 5)}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
         

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 md:mb-12">
              The Engine of <br/><span className="italic font-serif text-slate-400">Modern Growth.</span>
            </h2>
            <div className="space-y-6 md:space-y-10 max-w-md mx-auto lg:mx-0">
              <div className="flex gap-5 md:gap-8 items-start text-left">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-500/10 rounded-2xl md:rounded-[2rem] flex items-center justify-center shrink-0 border border-purple-500/20">
                  <Cpu size={28} className="text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-black text-xl md:text-2xl mb-2">Zero Vendor Lock-in</h4>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed">We deliver clean, documented code and full IP rights so you own your future.</p>
                </div>
              </div>
              <div className="flex gap-5 md:gap-8 items-start text-left">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500/10 rounded-2xl md:rounded-[2rem] flex items-center justify-center shrink-0 border border-blue-500/20">
                  <ShieldCheck size={28} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-black text-xl md:text-2xl mb-2">Lifetime Support</h4>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed">Monthly performance audits and security patches included in every partnership.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       <Testimonials />

      {/* --- CTA FOOTER --- */}
      <CTA/>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes infinitewave { 
          0% { transform: scaleY(0.8); opacity: 0.5; } 
          100% { transform: scaleY(1.1); opacity: 1; } 
        }
        @keyframes float-slow { 
          0%, 100% { transform: translateY(0) scale(1); } 
          50% { transform: translateY(-40px) scale(1.1); } 
        }
        @keyframes slide-up { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

        .animate-marquee { animation: marquee 40s linear infinite; }
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fade-in 2s ease-out forwards; }
        .animate-fade-in-delay { animation: fade-in 1.5s 0.6s ease-out both; }

        @media (max-width: 768px) {
          .animate-marquee { animation-duration: 25s; }
        }
      `}</style>
    </div>
  );
};

export default AgencyPage;