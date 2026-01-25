import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';

export const PricingFAQ = () => {
  const [activeTab, setActiveTab] = useState('Product');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#EBEBEB]/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Pricing</h2>
        
        {/* Pricing Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full flex gap-1 shadow-sm border border-black/5">
            {['Product', 'Landing', 'Full Site', 'Brand'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab ? 'bg-zinc-900 text-white shadow-md' : 'text-zinc-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-32">
          {/* Main Plan Card */}
          <div className="bg-white p-10 rounded-[40px] shadow-sm border border-black/5">
            <span className="text-zinc-500 text-sm">Flat Fee - Custom scope</span>
            <div className="text-4xl font-bold mt-2 mb-8">$10,000+</div>
            <ul className="space-y-4 mb-10">
              {['Mobile/web/desktop products', 'Dedicated PM + senior designer', 'Deep UX research'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-zinc-600">
                  <Check size={18} className="text-green-500" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-bold">Book Intro</button>
          </div>

          {/* Retainer Card */}
          <div className="bg-white p-10 rounded-[40px] shadow-sm border border-black/5 flex flex-col justify-between">
            <div>
              <span className="text-zinc-500 text-sm">Design/dev retainer</span>
              <div className="text-4xl font-bold mt-2 mb-8">$10,000/mo</div>
              <ul className="space-y-4">
                 <li className="flex items-center gap-3 text-zinc-600"><Check size={18} /> 1 request at a time</li>
                 <li className="flex items-center gap-3 text-zinc-600"><Check size={18} /> Daily updates mon-fri</li>
              </ul>
            </div>
            <div className="mt-10 flex gap-2">
               <button className="flex-1 py-4 bg-zinc-900 text-white rounded-2xl font-bold">Book Intro</button>
               <button className="flex-1 py-4 bg-zinc-100 rounded-2xl font-bold">Pay Now</button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">FAQs</h2>
          <div className="space-y-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-white rounded-3xl border border-black/5 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex justify-between items-center text-left font-bold"
                >
                  Do you offer frontend dev?
                  <ChevronDown className={`transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="px-6 pb-6 text-zinc-500"
                    >
                      Yes. Once design is approved, our senior frontend development team takes over and implements everything 1:1.
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