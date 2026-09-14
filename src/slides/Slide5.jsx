import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Sun, Shield, Layers } from 'lucide-react';

export default function Slide5({ isActive, direction }) {
  const functions = [
    {
      num: "١",
      icon: <Sun size={40} />,
      title: "Melindungi dari Panas",
      desc: "Menahan sengatan matahari dan debu untuk menjaga tubuh tetap nyaman."
    },
    {
      num: "٢",
      icon: <Shield size={40} />,
      title: "Perlindungan Saat Peperangan",
      desc: "Berfungsi sebagai pelindung tubuh di medan konflik."
    },
    {
      num: "٣",
      icon: <Layers size={40} />,
      title: "Menutup Aurat",
      desc: "Menjaga kehormatan, kesopanan, dan identitas manusia."
    }
  ];

  return (
    <Slide isActive={isActive} direction={direction}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-hierarchy-heading mb-2">Fungsi Pakaian</h2>
        <p className="text-accent text-xl uppercase tracking-widest font-medium mb-2">Perlindungan & Praktis</p>
        <p className="text-primary-dark/60 font-medium text-sm">(QS. An-Nahl: 81 & QS. Al-A'raf: 26)</p>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto">
        {functions.map((fn, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + (index * 0.15), duration: 0.6 }}
            className="flex-1 bg-primary text-cream p-6 md:p-10 rounded-[2.5rem] border border-primary-light relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
          >
            {/* Minimalist Overlay Graphic */}
            <div className="absolute -bottom-8 -right-8 opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 text-accent">
              {fn.icon}
            </div>

            <div className="text-accent/50 text-5xl font-light font-mono mb-6">{fn.num}</div>
            <div className="text-accent mb-6">
              {fn.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white leading-tight">{fn.title}</h3>
            <p className="text-cream/70 text-lg">
              {fn.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}
