import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { ShieldCheck, UserX, EyeOff } from 'lucide-react';

export default function Slide3({ isActive, direction }) {
  const cards = [
    {
      num: "١",
      icon: <ShieldCheck size={32} />,
      title: "Menutup Aurat",
      desc: "Kewajiban utama bagi setiap muslim dan muslimah.",
      ref: "QS. Al-A'raf: 26"
    },
    {
      num: "٢",
      icon: <UserX size={32} />,
      title: "Tidak Menyerupai Lawan Jenis / Kafir",
      desc: "Dilarang menyerupai lawan jenis atau gaya yang khusus untuk orang kafir.",
      ref: ""
    },
    {
      num: "٣",
      icon: <EyeOff size={32} />,
      title: "Tidak Transparan / Tidak Ketat",
      desc: "Pakaian tidak boleh tembus pandang atau menonjolkan lekuk tubuh.",
      ref: "HR. Muslim no. 2128"
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
        Syarat Berpakaian <span className="text-accent font-light">Menurut Syariat</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + (index * 0.15), duration: 0.6 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="bg-white p-6 md:p-10 rounded-[2rem] shadow-sm border border-primary/5 relative overflow-hidden group"
          >
            {/* Background Number Accent */}
            <div className="absolute -top-1 -right-1 text-9xl font-bold text-cream-dark/50 group-hover:text-accent/10 transition-colors pointer-events-none z-0">
              {card.num}
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">{card.title}</h3>
              <p className="text-primary-dark/70 text-lg leading-relaxed mb-4">
                {card.desc}
              </p>

              {card.ref && (
                <div className="inline-block bg-primary/5 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                  {card.ref}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}
