import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-purple-600 font-bold text-xs mb-4 flex items-center justify-center gap-1">
          <span className="w-4 h-[1px] bg-purple-600"></span> Our Pricing
        </p>
        <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Flexible Pricing Plans</h2>
        <p className="text-gray-500 mb-10">Choose a plan that fits your needs, with flexible options and transparent pricing.</p>
        
        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-bold ${!isYearly ? 'text-slate-900' : 'text-gray-400'}`}>Monthly</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className="w-14 h-7 bg-gray-200 rounded-full relative p-1 transition-colors duration-200 ease-in-out"
          >
            <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${isYearly ? 'translate-x-7' : 'translate-x-0'}`} />
          </button>
          <span className={`text-sm font-bold ${isYearly ? 'text-slate-900' : 'text-gray-400'}`}>Yearly</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free Plan */}
        <div className="bg-white border border-gray-100 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold mb-2">Free Plan</h3>
          <p className="text-gray-400 text-sm mb-6">Basic access with essential features.</p>
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-5xl font-extrabold">$0</span>
            <span className="text-gray-400 text-sm">/ per month</span>
          </div>
          <button className="w-full py-4 border-2 border-purple-600 text-purple-600 rounded-2xl font-bold hover:bg-purple-50 transition-colors mb-10">
            Get Started
          </button>
          
          <div className="space-y-4 text-left">
            <p className="font-bold text-sm text-slate-800">What's included</p>
            {[
              "Create and customize profile",
              "Connect with other users",
              "Send and receive messages",
              "Access to basic features",
              "Receive notifications and updates"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-500">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Check size={12} strokeWidth={3} />
                </div>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Premium Plan */}
        <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
          {/* Badge */}
          <div className="absolute top-6 right-6 bg-purple-600 text-[10px] font-bold px-3 py-1 rounded-full">
            Save 20% Yearly
          </div>
          
          <h3 className="text-xl font-bold mb-2">Premium Plan</h3>
          <p className="text-slate-400 text-sm mb-6">Full access for better experience.</p>
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-5xl font-extrabold">${isYearly ? '8' : '10'}</span>
            <span className="text-slate-400 text-sm">/ per month</span>
          </div>
          <button className="w-full py-4 bg-purple-600 text-white rounded-2xl font-bold hover:bg-purple-700 transition-colors mb-10">
            Get Started
          </button>
          
          <div className="space-y-4 text-left">
            <p className="font-bold text-sm text-slate-200">What's included</p>
            {[
              "Create and customize profile",
              "Connect with other users",
              "Send unlimited messages",
              "Access to basic features",
              "Receive notifications and updates"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-slate-400">
                <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
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