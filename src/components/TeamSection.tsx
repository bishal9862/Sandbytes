import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: "Marcel", role: "Founder & Designer", img: "/avatars/marcel.png" },
  { name: "Deniz", role: "Project Manager", img: "/avatars/deniz.png" },
  { name: "Vipul", role: "Frontend Developer", img: "/avatars/vipul.png" },
  { name: "Karan", role: "Frontend Developer", img: "/avatars/karan.png" },
  { name: "Jeremiah", role: "Head of Sales", img: "/avatars/jeremiah.png" },
  { name: "Kacper", role: "Motion Designer", img: "/avatars/kacper.png" },
  { name: "Eaxi", role: "Frontend Developer", img: "/avatars/eaxi.png" },
  { name: "Peter", role: "Brand Designer", img: "/avatars/peter.png" },
  { name: "Pawel", role: "Illustration Designer", img: "/avatars/pawel.png" },
  { name: "Darius", role: "Illustration Designer", img: "/avatars/darius.png" },
  { name: "Vishesh", role: "Brand Designer", img: "/avatars/vishesh.png" },
  { name: "Choirul", role: "Product Designer", img: "/avatars/choirul.png" },
];

const tools = ["Figma", "Framer", "Next.js", "Webflow", "Rive", "Illustrator"];

export const TeamSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F4F4F4] px-6">
      {/* Tools Mastered Marquee */}
      <div className="max-w-4xl mx-auto mb-32 text-center">
        <h2 className="text-xl font-bold mb-8">Tools we've mastered</h2>
        <div className="bg-white/80 backdrop-blur-md border border-black/5 rounded-[32px] p-8 flex justify-around items-center shadow-sm">
          {tools.map((tool) => (
            <span key={tool} className="grayscale opacity-50 font-bold text-lg hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {team.map((member, i) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center group"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-[40px] mb-4 overflow-hidden border border-black/5 shadow-sm group-hover:shadow-md transition-shadow">
                {/* Replace with actual image tags */}
                <div className="w-full h-full bg-zinc-100 flex items-center justify-center text-zinc-400">
                   <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-zinc-500 text-sm">{member.role}</p>
            </motion.div>
          ))}
          
          {/* Central Logo/CTA Circle as seen in image */}
          <div className="hidden md:flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 mt-40">
             <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-black/5">
                <span className="font-black text-2xl">K</span>
             </div>
             <div className="mt-4 bg-white px-4 py-1 rounded-full text-xs font-bold border border-black/5 shadow-sm">
               5+ More
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};