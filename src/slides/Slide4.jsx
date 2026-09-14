import Slide from '../components/Slide';
import { motion } from 'framer-motion';

export default function Slide4({ isActive, direction }) {
  const principles = [
    {
      title: "Menutup Aurat",
      subtitle: "QS. Al-Ahzab: 59",
      desc: "Menutup aurat agar dikenali dan terjaga."
    },
    {
      title: "Niat Karena Allah",
      subtitle: "Tujuan Ketaatan",
      desc: "Amal dinilai dari niat; berpakaian harus dilandasi tujuan ketaatan."
    },
    {
      title: "Tidak Berlebih",
      subtitle: "Menghindari Sombong",
      desc: "Hindari israf dan sikap sombong saat berpakaian."
    }
  ];

  return (
    <Slide isActive={isActive} direction={direction}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-hierarchy-heading text-center mb-16"
      >
        Ketentuan <span className="text-accent font-light">Berpakaian</span>
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Timeline Connecting Line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent -translate-y-1/2 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {principles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + (index * 0.2), duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              {/* Central Node */}
              <div className="w-8 h-8 rounded-full bg-cream border-4 border-accent shadow-[0_0_0_8px_rgba(249,246,240,1)] mb-8 z-10 relative">
                <div className="absolute inset-0 rounded-full animate-ping bg-accent/30" />
              </div>

              {/* Content Box */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5 hover:border-accent/30 transition-colors w-full">
                <h3 className="text-2xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">{item.subtitle}</p>
                <p className="text-primary-dark/70 text-lg">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
