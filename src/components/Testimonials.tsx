import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    brand: "OSTIUM",
    text: "Just writing to tell you what a pleasure it is to work with Kargul. The team was ultra responsive and turned design requests around quickly!",
    author: "Blake Hunsicker",
    avatar: "/avatars/blake.jpg"
  },
  {
    brand: "listkit",
    text: "Marcel and the team delivered an exceptional ListKit redesign. Insanely fast and clean! Highly recommend them to founders looking for world-class UI/UX.",
    author: "Oliver Schmalholz",
    avatar: "/avatars/oliver.jpg"
  },
  {
    brand: "SideShift",
    text: "With Marcel and his team, we shipped 2 web apps, a website, and a world-class app in under 3 months. The design was just insane.",
    author: "Nick Lawton",
    avatar: "/avatars/nick.jpg"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[40px] border border-black/5 shadow-sm flex flex-col justify-between h-full"
            >
              <div>
                <div className="font-black text-xl mb-6 tracking-tighter">{rev.brand.toUpperCase()}</div>
                <p className="text-zinc-600 leading-relaxed text-lg">"{rev.text}"</p>
              </div>
              <div className="flex items-center gap-3 mt-10">
                <img src={rev.avatar} alt={rev.author} className="w-10 h-10 rounded-full bg-zinc-200" />
                <span className="font-bold text-zinc-900">{rev.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};