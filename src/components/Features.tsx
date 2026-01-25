import { motion } from 'framer-motion';
import { ShieldCheck, Star, Zap, UserCheck, Palette } from 'lucide-react';

const features = [
  { title: "Quality obsessed", desc: "We operate with a single standard. If it's not world-class, it doesn't ship.", icon: ShieldCheck },
  { title: "Senior talent only", desc: "You work directly with senior talent. No juniors. No outsourcing.", icon: Star },
  { title: "1:1 dev implementation", desc: "Our senior frontend development team delivers true 1:1, pixel-perfect builds.", icon: Zap },
  { title: "Dedicated PM", desc: "A single point of contact, fully invested in the project's success.", icon: UserCheck },
  { title: "Illustration, motion, and more", desc: "Illustration and animation designed to make your product feel alive.", icon: Palette },
];

export const Features = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-20">Why Sandbyte</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12 justify-center">
        {features.map((f, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center space-y-4"
          >
            <div className="p-4 bg-white rounded-2xl shadow-sm mb-2">
              <f.icon size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold">{f.title}</h3>
            <p className="text-zinc-500 leading-relaxed max-w-xs">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};