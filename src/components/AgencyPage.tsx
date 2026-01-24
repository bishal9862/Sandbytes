import React, { useState, useEffect } from 'react';
import { 
  Globe, Zap, Users, Smartphone, Lock, Code2, LineChart, 
  CheckCircle2, ArrowUpRight, TrendingUp, BarChart3, 
  Monitor, Star, ChevronRight, Activity, Terminal, 
  ShieldCheck, Settings, Cpu, MousePointer2, Layers
} from 'lucide-react';

const AgencyPage = () => {
  const [revenue, setRevenue] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

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
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-200/20 blur-[120px] rounded-full animate-float-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-200/20 blur-[120px] rounded-full animate-float-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-slate-200 shadow-xl px-5 py-2 rounded-full mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">Next-Gen Software Lab</span>
          </div>
          
          <h1 className="text-7xl md:text-[9rem] font-[1000] tracking-tighter mb-8 leading-[0.85] text-slate-900 animate-slide-up">
            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-500">impossible.</span>
          </h1>
          
          <p className="text-slate-500 text-xl font-medium max-w-2xl leading-relaxed mb-10 animate-fade-in-delay">
            Expert development for ambitious brands. We deliver source code, security, and scalability as standard.
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delay">
            <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-purple-600 transition-all shadow-2xl hover:scale-105 flex items-center gap-2">
              Start Project <ArrowUpRight size={20} />
            </button>
            <button className="bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all hover:scale-105 shadow-lg">
              View Capabilities
            </button>
          </div>
        </div>

        {/* --- BRAND MARQUEE --- */}
        <div className="mt-32 border-y border-slate-100 py-16 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#FDFCFM] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#FDFCFM] to-transparent z-10" />
          <div className="flex w-max animate-marquee gap-24 items-center whitespace-nowrap opacity-40">
            {['MICROSOFT', 'ADOBE', 'TATA', 'RELIANCE', 'STRIPE', 'NEXT.JS', 'VERCEL', 'GOOGLE'].map((brand, i) => (
              <span key={i} className="text-3xl font-black tracking-tighter hover:text-purple-600 transition-colors cursor-default">
                {brand}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {['MICROSOFT', 'ADOBE', 'TATA', 'RELIANCE', 'STRIPE', 'NEXT.JS', 'VERCEL', 'GOOGLE'].map((brand, i) => (
              <span key={i + 8} className="text-3xl font-black tracking-tighter hover:text-purple-600 transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION (THE "WHAT WE GIVE") --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-20 space-y-4">
          <span className="text-purple-600 font-bold text-xs uppercase tracking-[0.4em]">Service Spectrum</span>
          <h2 className="text-5xl font-black tracking-tighter">Full-Stack Excellence.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group bg-white border border-slate-100 p-8 rounded-[3rem] hover:shadow-3xl hover:border-purple-200 transition-all duration-500 relative overflow-hidden">
              <div className="w-16 h-16 bg-slate-50 rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                {React.cloneElement(s.icon, { size: 28, className: "group-hover:text-white" })}
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.desc}</p>
              <div className="space-y-2">
                {s.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400">
                    <CheckCircle2 size={12} className="text-purple-500" /> {f}
                  </div>
                ))}
              </div>
              <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-purple-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 2: THE INFINITE PERFORMANCE GRAPH --- */}
      <section className="mx-6 my-12 py-32 bg-[#090A0F] rounded-[5rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-10 flex flex-col lg:flex-row items-center gap-24 relative z-10">
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="bg-slate-900/40 backdrop-blur-2xl rounded-[4rem] p-12 border border-white/10 shadow-3xl overflow-hidden">
                <div className="flex justify-between items-start mb-16">
                  <div>
                    <h4 className="text-white text-3xl font-bold tracking-tight">Growth Analytics</h4>
                    <p className="text-slate-400 mt-2 flex items-center gap-2">
                      <Activity size={14} className="text-emerald-400" /> Real-time Performance
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-black text-white">+{revenue}%</p>
                    <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">Global Scale</p>
                  </div>
                </div>

                <div className="relative h-64 w-full flex items-end justify-between px-2 overflow-hidden group">
                  <div className="absolute inset-0 flex flex-col justify-between opacity-10">
                    {[1,2,3,4].map(i => <div key={i} className="w-full h-px bg-white" />)}
                  </div>
                  {[60, 40, 80, 50, 100, 70, 90, 60, 85, 45, 75, 55].map((h, i) => (
                    <div 
                      key={i} 
                      className="relative w-[6%] bg-gradient-to-t from-purple-600 via-indigo-500 to-purple-400 rounded-full"
                      style={{ 
                        height: `${h}%`, 
                        animation: `infinitewave 3s ease-in-out infinite alternate`,
                        animationDelay: `${i * 0.1}s` 
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent w-20 h-full animate-scan pointer-events-none" />
                </div>

                <div className="mt-12 grid grid-cols-3 gap-4">
                  {['Ad Reach', 'Engagement', 'Retention'].map((item, i) => (
                    <div key={i} className="bg-white/5 p-4 rounded-3xl border border-white/5 text-center">
                      <p className="text-slate-500 text-[10px] font-bold uppercase mb-1">{item}</p>
                      <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 animate-pulse" style={{ width: `${40 + (i * 20)}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-6xl md:text-7xl font-bold text-white leading-[0.95] tracking-tighter mb-10">
              The Engine of <br/><span className="italic font-serif text-slate-300">Modern Business.</span>
            </h2>
            <div className="space-y-8 max-w-md">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center shrink-0">
                  <Cpu size={24} className="text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Source Code Transfer</h4>
                  <p className="text-slate-400 text-sm">Full repository access with deployment documentation. No vendor lock-in, ever.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center shrink-0">
                  <Settings size={24} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Lifetime Maintenance</h4>
                  <p className="text-slate-400 text-sm">Monthly patches, server optimization, and security audits to keep you running 24/7.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER / CTA --- */}
      <footer className="py-24 bg-slate-900 text-white mx-6 mb-6 rounded-[4rem] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        <div className="max-w-7xl mx-auto px-10 text-center relative z-10">
          <h2 className="text-5xl md:text-[8rem] font-[1000] mb-12 tracking-tighter">Let's build.</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-20">
            <button className="bg-purple-600 text-white px-12 py-8 rounded-[2.5rem] text-xl font-black hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3">
              Book a Strategy Call <ChevronRight />
            </button>
            <button className="bg-slate-800 text-white px-12 py-8 rounded-[2.5rem] text-xl font-black border border-slate-700 hover:bg-slate-700 transition-all">
              See Pricing
            </button>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center font-black">S</div>
              <span className="text-slate-300 font-bold tracking-widest uppercase text-xs">Sandbyte Lab © 2026</span>
            </div>
            <div className="flex gap-8 text-slate-400 text-sm font-bold">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">IP Conditions</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Careers</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- CUSTOM KEYFRAME ANIMATIONS --- */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes infinitewave {
          0% { height: 30%; transform: scaleY(1); }
          100% { height: 100%; transform: scaleY(1.1); }
        }
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(500%); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-scan { animation: scan 4s linear infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fade-in 1.5s ease-out forwards; }
        .animate-fade-in-delay { animation: fade-in 1.5s 0.5s ease-out both; }
      `}</style>
    </div>
  );
};

export default AgencyPage;