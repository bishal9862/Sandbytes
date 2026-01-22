import { Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xjkaqrpg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss your ideas and create something amazing together. Get a free quote today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Sandbyte?
              </h3>
              <ul className="space-y-4">
                {[
                  'Transparent pricing with no hidden fees',
                  'Fast turnaround without compromising quality',
                  'Dedicated project manager for every client',
                  'Free consultation and project estimation',
                  'Post-launch support and maintenance',
                  'Flexible payment plans available',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <div className="bg-cyan-100 rounded-full p-1 mt-0.5">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 pt-8">
              <div className="flex items-center space-x-4 group">
                <div className="bg-cyan-100 p-4 rounded-xl group-hover:bg-cyan-600 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-medium">Email Us</div>
                  <a href="mailto:mail2bongguy@gmail.com" className="font-bold text-gray-900 hover:text-cyan-600 transition-colors">
                    mail2bongguy@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="bg-cyan-100 p-4 rounded-xl group-hover:bg-cyan-600 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-medium">Call Us</div>
                  <a href="tel:+917031139797" className="font-bold text-gray-900 hover:text-cyan-600 transition-colors">
                    +91 70311 39797
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-[2rem] p-8 text-white shadow-xl shadow-cyan-900/20">
              <h4 className="text-xl font-bold mb-2">Free Consultation</h4>
              <p className="text-cyan-100 mb-6">
                Not sure where to start? Book a free 30-minute consultation call with our experts.
              </p>
              <button className="w-full sm:w-auto bg-white text-cyan-600 px-8 py-3 rounded-xl font-bold hover:bg-cyan-50 transition-all active:scale-95">
                Schedule a Call
              </button>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>

            {submitStatus === 'success' && (
              <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-4 rounded-2xl flex items-center gap-3 animate-in fade-in zoom-in duration-300">
                <CheckCircle className="text-emerald-500" />
                <p className="text-sm font-bold">Success! We'll get back to you within 24 hours.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 bg-rose-50 border border-rose-200 text-rose-800 px-4 py-4 rounded-2xl animate-in fade-in zoom-in duration-300">
                <p className="text-sm font-bold">Oops! Something went wrong. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-2 ml-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-cyan-600 focus:bg-white focus:border-transparent outline-none transition-all font-medium text-gray-900"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-2 ml-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-cyan-600 focus:bg-white focus:border-transparent outline-none transition-all font-medium text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-2 ml-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-cyan-600 focus:bg-white focus:border-transparent outline-none transition-all font-medium text-gray-900"
                  placeholder="+91 70311 39797"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-2 ml-1">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-cyan-600 focus:bg-white focus:border-transparent outline-none transition-all font-medium text-gray-900 appearance-none"
                >
                  <option value="">Select a service</option>
                  <option value="app">App Development</option>
                  <option value="web">Website Design</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="custom">Custom Package</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-2 ml-1">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-cyan-600 focus:bg-white focus:border-transparent outline-none transition-all resize-none font-medium text-gray-900"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-600 text-white px-8 py-5 rounded-2xl hover:bg-cyan-700 transition-all font-black text-[12px] uppercase tracking-widest shadow-xl shadow-cyan-900/20 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center space-x-3"
              >
                <span>{isSubmitting ? 'Processing...' : 'Send Message'}</span>
                {!isSubmitting && <Send size={18} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}