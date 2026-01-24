import React, { useState } from 'react';
import { ChevronRight, X, PhoneCall, Mail, Calendar, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Smooth Scroll to Pricing
  const handlePricingClick = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="py-16 md:py-32 bg-slate-900 text-white mx-4 md:mx-10 mb-8 rounded-[3rem] md:rounded-[5rem] relative overflow-hidden">
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-[10rem] font-[1000] mb-8 md:mb-16 tracking-tighter leading-none animate-pulse-slow">
            Ready to <span className="text-purple-500 italic">start?</span>
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-20 md:mb-28">
            {/* Book Strategy Call Trigger */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group bg-purple-600 text-white px-8 py-6 md:px-14 md:py-8 rounded-[2rem] md:rounded-[2.5rem] text-lg md:text-2xl font-black hover:bg-purple-500 transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-95"
            >
              Book a Strategy Call 
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* See Pricing Trigger */}
            <button 
              onClick={handlePricingClick}
              className="bg-slate-800 text-white px-8 py-6 md:px-14 md:py-8 rounded-[2rem] md:rounded-[2.5rem] text-lg md:text-2xl font-black border border-slate-700 hover:bg-slate-700 transition-all active:scale-95"
            >
              See Pricing
            </button>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={scrollToTop}>
              <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center font-black text-xl group-hover:rotate-12 transition-transform">S</div>
              <div className="text-left">
                <span className="block text-white font-black tracking-widest text-[10px] uppercase">Sandbyte Lab</span>
                <span className="text-slate-500 font-bold text-[9px] uppercase tracking-tighter">© 2026 Engineering the future</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-slate-500 text-[10px] md:text-xs font-black uppercase tracking-widest">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">IP Terms</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Careers</a>
              <button onClick={scrollToTop} className="flex items-center gap-1 text-purple-500 hover:text-white transition-colors">
                Back to Top <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Background Ambient Glow */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full" />
      </footer>

      {/* STRATEGY CALL MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md animate-fade-in"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="bg-white w-full max-w-xl rounded-[2.5rem] overflow-hidden relative z-[110] shadow-2xl animate-modal-up">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
            >
              <X size={20} className="text-slate-600" />
            </button>

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
                  <PhoneCall size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter">Let's strategize.</h3>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Work Email</label>
                  <input type="email" placeholder="john@company.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Project Details</label>
                  <textarea rows="3" placeholder="Tell us about your vision..." className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all" />
                </div>
                
                <button className="w-full py-5 bg-purple-600 text-white rounded-2xl font-black text-lg hover:bg-purple-500 transition-all shadow-xl shadow-purple-200 mt-4 flex items-center justify-center gap-2">
                  <Calendar size={20} /> Schedule Call
                </button>
                <p className="text-center text-slate-400 text-[10px] font-medium pt-2">
                  No sales pitch. Just pure engineering advice.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modal-up {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-modal-up {
          animation: modal-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Footer;