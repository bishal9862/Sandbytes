import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

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
    <footer className="bg-gray-950 text-gray-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#" className="text-3xl font-black text-white tracking-tighter uppercase italic">
              Sand<span className="text-cyan-500">byte</span>
            </a>
            <p className="text-sm leading-relaxed max-w-sm font-medium">
              Empowering Indian startups and global brands with high-performance digital products.
            </p>
            
            <div className="space-y-4 pt-4">
              <a href="mailto:mail2bongguy@gmail.com" className="flex items-center space-x-3 group hover:text-white transition-colors">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-cyan-500/10 group-hover:text-cyan-500 transition-all">
                  <Mail size={18} />
                </div>
                <span className="text-sm font-bold tracking-tight">mail2bongguy@gmail.com</span>
              </a>
              
              <a href="tel:+917031139797" className="flex items-center space-x-3 group hover:text-white transition-colors">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-cyan-500/10 group-hover:text-cyan-500 transition-all">
                  <Phone size={18} />
                </div>
                <span className="text-sm font-bold tracking-tight">+91 70311 39797</span>
              </a>

              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-white/5 rounded-lg text-cyan-500">
                  <MapPin size={18} />
                </div>
                <span className="text-sm font-bold tracking-tight text-gray-500">Kolkata, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">Featured Work</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-500 transition-colors text-xs font-bold flex items-center gap-2"
                  >
                    {link.label}
                    {link.href.startsWith('http') && <ExternalLink size={10} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-500 transition-colors text-xs font-bold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">Support</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-500 transition-colors text-xs font-bold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-black uppercase tracking-widest text-gray-600">
            © {currentYear} Sandbyte Studio. Built with Precision.
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-cyan-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">System Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}