import { Smartphone, Globe, TrendingUp, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications built with the latest technologies for iOS and Android.',
      features: ['React Native', 'Flutter', 'Progressive Web Apps', 'API Integration'],
      price: 'On Request Price',
    },
    {
      icon: Globe,
      title: 'Website Design',
      description: 'Responsive, fast-loading websites that convert visitors into customers with stunning designs.',
      features: ['Custom Design', 'SEO Optimized', 'Mobile Responsive', 'CMS Integration'],
      price: 'On Request Price',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your online presence and boost your revenue.',
      features: ['Social Media', 'SEO/SEM', 'Content Strategy', 'Analytics & Reporting'],
      price: 'On Request Price',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Everything You Need to Succeed Online
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to launch, we provide comprehensive digital solutions tailored to your budget and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="bg-cyan-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors">
                  <Icon className="text-cyan-600 group-hover:text-white transition-colors" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-gray-200">
                  <div className="text-2xl font-bold text-gray-900 mb-4">
                    {service.price}
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 group/link"
                  >
                    Get Started
                    <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={18} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Need a Custom Package?
              </h3>
              <p className="text-gray-700 text-lg">
                We understand every business is unique. Let's discuss your specific needs and create a tailored solution that fits your budget.
              </p>
            </div>
            <div className="flex justify-start md:justify-end">
              <a
                href="#contact"
                className="inline-flex items-center bg-cyan-600 text-white px-8 py-4 rounded-lg hover:bg-cyan-700 transition-all font-semibold shadow-lg"
              >
                Request a Quote
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
