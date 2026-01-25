import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Component Imports
import { HeroSection } from './components/HeroSection';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { TeamSection } from './components/TeamSection';
import { PricingFAQ } from './components/PricingFAQ';
import { Footer } from './components/Footer';

/**
 * App Component
 * Replicates the Sandbyte layout structure.
 * Features a soft-white background (#F4F4F4) and 
 * high-fidelity bento-grid transitions.
 */
const App: React.FC = () => {
  // Progress bar logic for top of page (standard studio UI feature)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Effect to handle smooth entry of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F4F4] text-[#1A1A1A] selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden font-sans">
      {/* Global Progress Bar 
        Subtle detail often found in premium design agency sites.
      */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Sticky Header / Navigation Badge 
        Matches the floating 'Recent work' styling from Screenshot 1.
      */}
      <header className="fixed top-0 w-full z-40 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="pointer-events-auto cursor-pointer"
          >
            {/* Logo placeholder - using the 'K' mark seen in Team section */}
            <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-black/5 flex items-center justify-center font-black text-lg">
              K
            </div>
          </motion.div>
          
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex gap-1 bg-white/80 backdrop-blur-md p-1 rounded-full border border-black/5 shadow-sm pointer-events-auto"
          >
            {['Work', 'Services', 'Pricing', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="px-5 py-2 rounded-full text-sm font-semibold text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-all"
              >
                {item}
              </a>
            ))}
          </motion.nav>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="pointer-events-auto"
          >
             <button className="bg-[#1A1A1A] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg">
               Let's talk
             </button>
          </motion.div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="relative">
        {/* Section 1: Hero & Work Carousel */}
        <HeroSection />

        {/* Section 2: Trusted By / Logo Cloud 
            As seen in Screenshot 1 footer 
        */}
        <div className="py-20 opacity-40">
           <p className="text-center font-bold text-sm mb-8 tracking-widest text-zinc-500">TRUSTED BY STARTUPS AND INDUSTRY LEADERS.</p>
           <div className="flex flex-wrap justify-center gap-12 grayscale">
              {/* These correspond to the logos in your screenshot */}
              <span className="font-bold text-xl">Whop</span>
              <span className="font-bold text-xl">Jupiter</span>
              <span className="font-bold text-xl">SideShift</span>
              <span className="font-bold text-xl">OSTIUM</span>
              <span className="font-bold text-xl">listkit</span>
           </div>
        </div>

        {/* Section 3: Value Propositions */}
        <Features />

        {/* Section 4: Social Proof */}
        <Testimonials />

        {/* Section 5: Mastery & People */}
        <TeamSection />

        {/* Section 6: Conversions & Support */}
        <PricingFAQ />

        {/* Section 7: Final CTA & Legal */}
        <Footer />
      </main>

      {/* Background Aesthetic Decoration 
        Subtle gradient blobs used to create the 'soft' look in the studio theme.
      */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-200/50 blur-[120px] rounded-full" />
      </div>
    </div>
  );
};

export default App;