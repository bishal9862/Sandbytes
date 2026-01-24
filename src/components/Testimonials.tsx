import React from 'react';
import { Star, Quote, UserCircle2, Building2, Globe, Heart } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Vivek Das',
      role: 'Founder, TripuraFly',
      website: 'tripurago.vercel.app',
      content: 'Sandbyte built our travel portal from scratch. The integration of TTDCL circuits and the seamless WhatsApp booking flow has significantly improved our customer conversion rate.',
      rating: 5,
      icon: <Globe className="text-purple-600" size={20} />,
    },
    {
      name: 'Ankan Mondal',
      role: 'Founder, Fleket',
      website: 'Fleket.com',
      content: 'The team at Sandbyte understands modern business scalability. They delivered a high-performance platform that is both aesthetically pleasing and technically robust.',
      rating: 5,
      icon: <Building2 className="text-purple-600" size={20} />,
    },
    {
      name: 'Alex Rivera',
      role: 'Founder, Adam & Eve Fitness',
      website: 'adamandevefitnessstudio.com',
      content: 'Our fitness studio needed a strong digital presence. Sandbyte provided a website that perfectly captures our brand energy and makes it easy for members to view schedules.',
      rating: 5,
      icon: <UserCircle2 className="text-purple-600" size={20} />,
    },
    {
      name: 'Sarah Chen',
      role: 'CEO, Nexus Lab',
      website: 'nexuslab.io',
      content: 'The attention to detail in the UI/UX design is unparalleled. Our engagement rates jumped by 40% after the redesign and migration to Next.js.',
      rating: 5,
      icon: <Globe className="text-purple-600" size={20} />,
    },
  ];

  // Double the array for seamless looping
  const firstRow = [...testimonials, ...testimonials];
  const secondRow = [...testimonials, ...testimonials].reverse();

  return (
    <section id="testimonials" className="py-32 bg-[#FDFCFM] overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100/30 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm px-4 py-1.5 rounded-full mb-6 animate-fade-in">
          <Heart size={12} className="text-purple-500 fill-purple-500" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Client Success Stories</span>
        </div>
        
        <h2 className="text-6xl md:text-7xl font-[1000] text-slate-900 tracking-tighter mb-6 leading-[0.9]">
          Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 italic">visionaries.</span>
        </h2>
        
        <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
          We don't just build software; we build the foundations for global businesses. Hear from the founders who scaled with us.
        </p>
      </div>

      {/* --- MARQUEE CONTAINER --- */}
      <div className="relative flex flex-col gap-10">
        
        {/* Gradient Overlays (The "Fade" effect on the sides) */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#FDFCFM] via-[#FDFCFM]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#FDFCFM] via-[#FDFCFM]/80 to-transparent z-10 pointer-events-none" />

        {/* First Row: Moving Left */}
        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] py-4">
          {firstRow.map((t, i) => (
            <TestimonialCard key={`row1-${i}`} data={t} />
          ))}
        </div>

        {/* Second Row: Moving Right */}
        <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused] py-4">
          {secondRow.map((t, i) => (
            <TestimonialCard key={`row2-${i}`} data={t} />
          ))}
        </div>
      </div>

      {/* --- CUSTOM STYLES --- */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 50s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 50s linear infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

const TestimonialCard = ({ data }) => (
  <div className="w-[450px] mx-5 bg-white border border-slate-100 rounded-[3rem] p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_-15px_rgba(124,58,237,0.08)] hover:border-purple-200 transition-all duration-700 group relative">
    {/* Floating Quote Icon */}
    <div className="absolute top-8 right-10 text-slate-50 group-hover:text-purple-50 group-hover:scale-110 transition-all duration-700">
      <Quote size={64} fill="currentColor" stroke="none" />
    </div>
    
    <div className="relative z-10">
      <div className="flex items-center gap-5 mb-8">
        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-inner">
          {React.cloneElement(data.icon, { className: "group-hover:text-white transition-colors" })}
        </div>
        <div>
          <h4 className="font-black text-slate-900 text-base uppercase tracking-tight">{data.name}</h4>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(data.rating)].map((_, i) => (
              <Star key={i} size={12} className="text-amber-400 fill-current" />
            ))}
          </div>
        </div>
      </div>

      <p className="text-slate-500 leading-[1.8] font-medium mb-10 text-[15px] italic">
        "{data.content}"
      </p>

      <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
        <div>
          <div className="text-[11px] font-black text-purple-600 uppercase tracking-[0.2em]">{data.role}</div>
          <div className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{data.website}</div>
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
          <ChevronRight size={14} className="text-purple-500" />
        </div>
      </div>
    </div>
  </div>
);

// Added helper icon for the card
const ChevronRight = ({ size, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m9 18 6-6-6-6"/>
  </svg>
);