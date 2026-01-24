import React from 'react';
import { 
  Facebook, Twitter, Instagram, Linkedin, 
  Mail, Phone, MapPin, ExternalLink, ArrowUpRight 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'TripuraFly', href: 'https://tripurago.vercel.app' },
      { label: 'E-commerce Solutions', href: '#services' },
      { label: 'Fitness Dashboards', href: 'https://adamandevefitnessstudio.com/' },
      { label: 'Custom Web Apps', href: '#contact' },
    ],
    company: [
      { label: 'Our Founder', href: '#' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact Us', href: '#contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cancellation Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#090A0F] text-slate-400 relative overflow-hidden pt-20 pb-10">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Identity Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <a href="#" className="text-4xl font-[1000] text-white tracking-tighter uppercase flex items-center gap-2">
                Sand<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 italic">byte</span>
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
              </a>
              <p className="text-lg leading-relaxed max-w-sm font-medium text-slate-500">
                Architecting high-performance digital ecosystems for the next generation of Indian innovators.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <a href="mailto:mail2bongguy@gmail.com" className="group p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-purple-500/30 transition-all">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Inquiries</p>
                <div className="flex items-center gap-2 text-white font-bold group-hover:text-purple-400 transition-colors">
                  <Mail size={16} /> <span className="text-sm">Email Us</span>
                </div>
              </a>
              
              <a href="tel:+917031139797" className="group p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Direct Line</p>
                <div className="flex items-center gap-2 text-white font-bold group-hover:text-blue-400 transition-colors">
                  <Phone size={16} /> <span className="text-sm">+91 70311 39797</span>
                </div>
              </a>
            </div>
          </div>

          {/* Spacer for Desktop */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:col-span-6 gap-8">
            <div className="space-y-6">
              <h3 className="text-white text-[11px] font-black uppercase tracking-[0.3em]">Featured Work</h3>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-purple-400 transition-colors text-xs font-bold flex items-center gap-1.5 group">
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-white text-[11px] font-black uppercase tracking-[0.3em]">Company</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-purple-400 transition-colors text-xs font-bold">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 col-span-2 sm:col-span-1">
              <h3 className="text-white text-[11px] font-black uppercase tracking-[0.3em]">Support</h3>
              <ul className="space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-purple-400 transition-colors text-xs font-bold">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Stats & Socials */}
        <div className="pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-10">
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-black">S</div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                © {currentYear} Sandbyte Studio <span className="mx-2">|</span> Kolkata, WB
              </p>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500/5 border border-emerald-500/10 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500/80">Systems Fully Operational</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 group"
                  aria-label={social.label}
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </div>

        </div>

        {/* Huge Background Text */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 select-none opacity-[0.02] whitespace-nowrap">
           <span className="text-[15rem] font-[1000] tracking-tighter uppercase italic">SANDBYTE</span>
        </div>
      </div>
    </footer>
  );
}