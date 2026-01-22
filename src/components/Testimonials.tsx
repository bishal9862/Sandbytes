import { Star, Quote, UserCircle2, Building2, Globe } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Vivek Das',
      role: 'Founder, TripuraFly',
      website: 'tripurago.vercel.app',
      content: 'Sandbyte built our travel portal from scratch. The integration of TTDCL circuits and the seamless WhatsApp booking flow has significantly improved our customer conversion rate.',
      rating: 5,
      icon: <Globe className="text-cyan-600" size={24} />,
    },
    {
      name: 'Ankan Mondal',
      role: 'Founder, Fleket',
      website: 'Fleket.com',
      content: 'The team at Sandbyte understands modern business scalability. They delivered a high-performance platform that is both aesthetically pleasing and technically robust.',
      rating: 5,
      icon: <Building2 className="text-cyan-600" size={24} />,
    },
    {
      name: 'Alex Rivera',
      role: 'Founder, Adam & Eve Fitness',
      website: 'adamandevefitnessstudio.com',
      content: 'Our fitness studio needed a strong digital presence. Sandbyte provided a website that perfectly captures our brand energy and makes it easy for members to view schedules.',
      rating: 5,
      icon: <UserCircle2 className="text-cyan-600" size={24} />,
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-black text-xs uppercase tracking-[0.3em]">
            Testimonials
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-gray-900 italic tracking-tighter uppercase">
            Trusted by Innovators
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Hear directly from the founders who chose Sandbyte to bring their digital visions to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gray-50 rounded-[2.5rem] p-8 relative border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/5 group"
            >
              <Quote className="text-cyan-200/50 absolute top-8 right-8 group-hover:text-cyan-200 transition-colors" size={48} />

              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-amber-400 fill-current" size={16} />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 font-medium italic relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 group-hover:border-cyan-200 transition-all">
                  {testimonial.icon}
                </div>
                <div>
                  <div className="font-black text-gray-900 uppercase tracking-tight text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest">
                    {testimonial.role}
                  </div>
                  <div className="text-[10px] font-medium text-gray-400 mt-1">
                    {testimonial.website}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-20 bg-gray-900 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/10 blur-[100px] rounded-full" />
          
          <h3 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tighter mb-4">
            Delivering Excellence Globally
          </h3>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-medium">
            From local startups in Tripura to global business platforms, we maintain a 98% satisfaction rate.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 relative z-10">
            <div className="space-y-2">
              <div className="text-5xl font-black text-cyan-500 tracking-tighter italic">98%</div>
              <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Satisfaction Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-cyan-500 tracking-tighter italic">4.9/5</div>
              <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Google Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-cyan-500 tracking-tighter italic">24/7</div>
              <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Client Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}