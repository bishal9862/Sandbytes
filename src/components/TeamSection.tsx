import React from 'react';
import { motion } from 'framer-motion';

/**
 * Updated Team Data
 * Structured to follow the specific visual order in the screenshot.
 */
const team = [
  // Top Row
  { name: "Ankan", role: "Founder & Designer", img: "/assets/team/ankan.png" },
  { name: "Vivek", role: "Project Manager", img: "/assets/team/vivek.png" },
  { name: "Arjun", role: "Frontend Developer", img: "/assets/team/arjun.png" },
  { name: "Ishaan", role: "Frontend Developer", img: "/assets/team/ishaan.png" },
  
  // Middle Row (Wait for logo in center)
  { name: "Rohan", role: "Head of Sales", img: "/assets/team/rohan.png" },
  { name: "Aditya", role: "Motion Designer", img: "/assets/team/aditya.png" },
  { name: "Siddharth", role: "Frontend Developer", img: "/assets/team/siddharth.png" },
  { name: "Kabir", role: "Brand Designer", img: "/assets/team/kabir.png" },
  
  // Bottom Row
  { name: "Aarav", role: "Illustration Designer", img: "/assets/team/aarav.png" },
  { name: "Vihaan", role: "Illustration Designer", img: "/assets/team/vihaan.png" },
  { name: "Dev", role: "Brand Designer", img: "/assets/team/dev.png" },
  { name: "Aryan", role: "Product Designer", img: "/assets/team/aryan.png" },
];

const tools = ["Figma", "Framer", "Next.js", "Webflow", "Rive", "Illustrator"];

export const TeamSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F4F4F4] px-6 relative">
      {/* Tools Mastered Marquee - Clean White Card Style */}
      <div className="max-w-4xl mx-auto mb-40 text-center">
        <h2 className="text-xl font-bold mb-10 tracking-tight text-zinc-900">Tools we've mastered</h2>
        <div className="bg-white/90 backdrop-blur-xl border border-black/5 rounded-[32px] p-10 flex flex-wrap justify-around items-center shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          {tools.map((tool) => (
            <span 
              key={tool} 
              className="grayscale opacity-40 font-bold text-xl hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default px-4"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Team Grid Logic */}
      <div className="max-w-6xl mx-auto text-center relative">
        <h2 className="text-4xl font-bold mb-20 tracking-tight">Team</h2>
        
        {/* The Grid: 4 Columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
          {team.map((member, i) => (
            <React.Fragment key={member.name}>
              {/* Insert the "K" Logo and "5+ More" badge exactly in the middle of the grid */}
              {i === 6 && (
                <div className="hidden md:flex flex-col items-center justify-center absolute left-1/2 top-[55%] -translate-x-1/2 z-10">
                   <motion.div 
                     initial={{ scale: 0.8, opacity: 0 }}
                     whileInView={{ scale: 1, opacity: 1 }}
                     className="w-24 h-24 bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center border border-black/5"
                   >
                      <span className="font-black text-3xl italic">K</span>
                   </motion.div>
                   <div className="mt-5 bg-white px-5 py-1.5 rounded-full text-[13px] font-bold border border-black/5 shadow-sm text-zinc-800">
                     5+ More
                   </div>
                </div>
              )}

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="flex flex-col items-center group"
              >
                {/* Avatar Container with specific rounded corners from screenshot */}
                <div className="w-32 h-32 md:w-44 md:h-44 bg-white rounded-[45px] mb-5 overflow-hidden border border-black/5 shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${member.name}&background=f4f4f5&color=a1a1aa&size=128`;
                    }}
                  />
                </div>
                <h3 className="font-bold text-xl text-zinc-900">{member.name}</h3>
                <p className="text-zinc-500 text-sm font-medium">{member.role}</p>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};