import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Calendar } from 'lucide-react';

// Data for your projects
const PROJECTS = [
  { id: 1, img: 'assets/image1.png', link: 'https://example.com/project-1' },
  { id: 2, img: 'assets/image2.png', link: 'https://example.com/project-2' },
  { id: 3, img: 'assets/image2.png', link: 'https://example.com/project-3' },
  { id: 4, img: '/assets/projects/work-4.jpg', link: 'https://example.com/project-4' },
];

export const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // To create a seamless infinity loop, we double the array
  const infiniteProjects = [...PROJECTS, ...PROJECTS];

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-10 overflow-hidden bg-[#F4F4F4]">
      {/* Top Floating Badge */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-black/5 mb-12"
      >
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm font-medium">Recent work</span>
      </motion.div>

      {/* Main Copy */}
      <motion.div 
        style={{ opacity, scale }}
        className="max-w-4xl text-center space-y-6 px-6"
      >
        <p className="text-zinc-500 font-medium tracking-tight">Helped raise $440M+ in 2025. 70+ completed projects.</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900">
          A full-stack design and dev partner for high-growth startups
        </h1>
        <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
          A quality-obsessed design and development partner that moves fast and actually gets things shipped.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button className="flex items-center gap-2 bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg">
            <Calendar size={20} />
            Book Intro Call
          </button>
          <button className="flex items-center gap-2 bg-white border border-black/10 px-8 py-4 rounded-full font-semibold hover:bg-zinc-50 transition-colors shadow-sm">
            <Mail size={20} className="text-blue-500" />
            Send Message
          </button>
        </div>
      </motion.div>

      {/* Infinity Loop Carousel - Left to Right */}
      <div className="w-full mt-24 relative flex items-center">
        <motion.div 
          className="flex gap-6 px-3"
          /* Animation Logic:
             We start at -50% (halfway through the doubled list) 
             and move to 0% to create a 'Left to Right' motion.
          */
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {infiniteProjects.map((project, index) => (
            <a 
              key={`${project.id}-${index}`} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block min-w-[350px] md:min-w-[550px] aspect-[16/10] bg-white rounded-[40px] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
            >
              <img 
                src={project.img} 
                alt={`Project ${project.id}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </a>
          ))}
        </motion.div>
        
        {/* Subtle Side Blurs (Glassmorphism effect) */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F4F4F4] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F4F4F4] to-transparent z-10" />
      </div>

      {/* Logo Cloud Section (Screenshot 1 Bottom) */}
      
    </section>
  );
};