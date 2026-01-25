import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, MessageCircle, Calendar } from 'lucide-react';

/**
 * Pricing & FAQ Component
 * Mobile Improvements:
 * 1. Horizontal scroll for tabs on small screens
 * 2. Stacking cards for mobile view
 * 3. Enhanced touch targets for accordions
 * 4. Integrated Contact CTA
 */

const FAQS = [
  { q: "Do you offer frontend dev?", a: "Yes. Once design is approved, our senior frontend development team takes over and implements everything 1:1 using Next.js or React." },
  { q: "How fast can we start?", a: "We typically have a 1-2 week lead time. Book a call to check our current availability." },
  { q: "What is your revision policy?", a: "We offer unlimited revisions within the scope of the project. We work until you are 100% satisfied." },
  { q: "Do you offer branding?", a: "Yes, we offer full brand identity services including logo design, typography, and brand guidelines." }
];

export const PricingFAQ = () => {
  const [activeTab, setActiveTab] = useState('Product');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#EBEBEB]/50 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16 tracking-tighter">Pricing</h2>
        
        {/* --- PRICING TABS (Mobile Scrollable) --- */}
        <div className="flex justify-start md:justify-center mb-10 md:mb-12 overflow-x-auto no-scrollbar pb-2">
          <div className="bg-white p-1 rounded-full flex gap-1 shadow-sm border border-black/5 min-w-max">
            {['Product', 'Landing', 'Full Site', 'Brand'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 md:px-8 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all ${
                  activeTab === tab ? 'bg-zinc-900 text-white shadow-md' : 'text-zinc-500 hover:bg-zinc-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* --- PRICING CARDS (Mobile Stacked) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-20 md:mb-32">
          
          {/* Main Plan Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 md:p-12 rounded-[32px] md:rounded-[40px] shadow-sm border border-black/5 flex flex-col"
          >
            <div className="flex justify-between items-start mb-6 md:mb-8">
               <div>
                  <span className="text-zinc-400 text-[10px] md:text-xs uppercase font-black tracking-widest">Fixed Scope</span>
                  <div className="text-3xl md:text-4xl font-black mt-1">$10,000+</div>
               </div>
               <div className="bg-blue-50 text-blue-600 p-2 rounded-xl">
                  <Calendar size={20} />
               </div>
            </div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {['Mobile/web/desktop products', 'Dedicated PM + senior designer', 'Deep UX research', '1:1 Technical handoff'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base text-zinc-600 font-medium">
                  <Check size={18} className="text-green-500 shrink-0" /> {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
               <button className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-black transition-colors">
                  Book Intro Call
               </button>
               <button className="w-full py-4 bg-zinc-100 text-zinc-900 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors">
                  <MessageCircle size={18} /> Contact Support
               </button>
            </div>
          </motion.div>

          {/* Retainer Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-zinc-900 p-8 md:p-12 rounded-[32px] md:rounded-[40px] shadow-xl text-white flex flex-col"
          >
            <div className="flex justify-between items-start mb-6 md:mb-8">
               <div>
                  <span className="text-zinc-500 text-[10px] md:text-xs uppercase font-black tracking-widest">Subscription</span>
                  <div className="text-3xl md:text-4xl font-black mt-1">$10,000<span className="text-lg text-zinc-500">/mo</span></div>
               </div>
               <div className="bg-zinc-800 text-zinc-400 p-2 rounded-xl">
                  <Check size={20} />
               </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
               <li className="flex items-center gap-3 text-sm md:text-base text-zinc-400 font-medium">
                  <Check size={18} className="text-blue-400 shrink-0" /> 1 request at a time
               </li>
               <li className="flex items-center gap-3 text-sm md:text-base text-zinc-400 font-medium">
                  <Check size={18} className="text-blue-400 shrink-0" /> Daily updates mon-fri
               </li>
               <li className="flex items-center gap-3 text-sm md:text-base text-zinc-400 font-medium">
                  <Check size={18} className="text-blue-400 shrink-0" /> Pause or cancel anytime
               </li>
            </ul>

            <div className="flex flex-col gap-3">
               <button className="w-full py-4 bg-white text-zinc-900 rounded-2xl font-bold hover:bg-zinc-100 transition-colors">
                  Get Started
               </button>
               <button className="w-full py-4 bg-zinc-800 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors">
                  <MessageCircle size={18} /> Chat with Ankan
               </button>
            </div>
          </motion.div>
        </div>

        {/* --- FAQ SECTION (Mobile Optimized) --- */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 tracking-tighter">FAQs</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-[24px] md:rounded-3xl border border-black/5 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 md:p-6 flex justify-between items-center text-left font-bold text-sm md:text-lg group"
                >
                  <span className="pr-4">{faq.q}</span>
                  <div className={`p-2 rounded-full transition-all ${openFaq === i ? 'bg-zinc-900 text-white rotate-180' : 'bg-zinc-50 text-zinc-400 group-hover:bg-zinc-100'}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 md:px-6 pb-6 text-zinc-500 text-sm md:text-base leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};