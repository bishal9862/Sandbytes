import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between w-full max-w-[95%] md:max-w-5xl h-[72px] bg-white border border-gray-100 rounded-full px-4 md:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md bg-opacity-90">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-gradient-to-tr from-purple-600 to-purple-400 rounded-lg overflow-hidden">
            {/* Simple SVG Logo representation */}
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900">
            Sandbyte
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center bg-gray-50/50 rounded-full px-2 py-1.5 border border-gray-50">
          <a href="#benefits" className="px-5 py-2 text-sm font-bold text-slate-900 bg-white rounded-full shadow-sm">
            Benefits
          </a>
          <a href="#pricing" className="px-5 py-2 text-sm font-bold text-slate-500 hover:text-purple-600 transition-colors">
            Pricing
          </a>
          <a href="#testimonials" className="px-5 py-2 text-sm font-bold text-slate-500 hover:text-purple-600 transition-colors">
            Testimonials
          </a>
        </div>

        {/* Action Button */}
        <div>
          <button className="bg-[#9333ea] hover:bg-[#7e22ce] text-white px-6 md:px-8 py-3 rounded-full text-sm font-black transition-all transform active:scale-95 shadow-lg shadow-purple-200">
            Get Template
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;