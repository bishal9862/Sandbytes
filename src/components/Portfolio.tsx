import { ExternalLink, User } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'TripuraFly',
      category: 'Travel & Tourism Portal',
      founder: 'Vivek Das',
      url: 'https://tripurago.vercel.app',
      image: 'https://imgs.search.brave.com/6XAnO3YYw15_RLz7TTUEbJsDVA8uJ11tBQGfxrBOUH8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9taXIt/czMtY2RuLWNmLmJl/aGFuY2UubmV0L3By/b2plY3RzLzQwNC83/NDMyNDQyMzYyNzM2/OTEuWTNKdmNDd3lN/VFU0TERFMk9EZ3NO/RGdzTUEuanBn',
      description: 'A comprehensive travel booking engine for Tripura Tourism, featuring real-time package browsing and TTDCL verified circuits.',
    },
    {
      title: 'Fleket',
      category: 'Business Solutions',
      founder: 'Ankan Mondal',
      url: 'https://Fleket.com',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-end enterprise platform focusing on streamlined digital operations and modern business scalability.',
    },
    {
      title: 'Adam & Eve Fitness Studio',
      category: 'Health & Wellness',
      founder: 'Alex Rivera',
      url: 'https://adamandevefitnessstudio.com/',
      image: 'https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A dynamic fitness studio website featuring class schedules, membership plans, and trainer profiles.',
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-black text-xs uppercase tracking-[0.3em]">
            Case Studies
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-gray-900 italic tracking-tighter uppercase">
            Client Success Stories
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Discover how we help visionaries build high-impact digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-900/10 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 right-6 bg-white text-gray-900 p-4 rounded-2xl shadow-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-cyan-100 text-cyan-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-2">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-2 text-cyan-600 mb-4">
                  <User size={14} />
                  <span className="text-xs font-bold uppercase tracking-wider">Founder: {project.founder}</span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {project.description}
                </p>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-black text-gray-900 uppercase tracking-widest hover:text-cyan-600 transition-colors"
                  >
                    Visit Website <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-cyan-600 transition-all active:scale-95 shadow-xl shadow-gray-900/20"
          >
            Start Your Own Project
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}