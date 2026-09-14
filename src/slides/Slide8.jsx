import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Expand, Users, Droplets } from 'lucide-react';

export default function Slide8({ isActive, direction }) {
  const cards = [
    { 
      icon: <ShieldCheck size={28} />, 
      title: "Menutup Aurat", 
      desc: "Laki-laki: pusar hingga lutut. Perempuan: seluruh tubuh kecuali wajah dan telapak tangan.",
      ref: ""
    },
    { 
      icon: <Scale size={28} />, 
      title: "Tidak Berlebihan (Israf)", 
      desc: "Hindari pakaian yang berlebihan atau menunjukkan kesombongan; ajaran kesederhanaan dalam Islam.",
      ref: ""
    },
    { 
      icon: <Expand size={28} />, 
      title: "Longgar & Tidak Transparan", 
      desc: "Pakaian harus longgar dan tidak tembus pandang agar tidak menonjolkan lekuk tubuh.",
      ref: "HR. Muslim"
    },
    { 
      icon: <Users size={28} />, 
      title: "Sesuai Jenis Kelamin", 
      desc: "Laki-laki dan perempuan dilarang menyerupai lawan jenis dalam berbusana.",
      ref: "HR. Bukhari"
    },
    { 
      icon: <Droplets size={28} />, 
      title: "Kebersihan & Kerapian", 
      desc: "Pakaian harus bersih dan rapi karena Allah mencintai keindahan dan kebersihan.",
      ref: ""
    }
  ];

  return (
    <Slide isActive={isActive} direction={direction}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-hierarchy-heading text-center mb-10"
      >
        Konsep Teknis <span className="text-accent font-light">Berpakaian</span>
      </motion.h2>

      {/* Grid of 5 Cards (Top row: 3, Bottom row: 2 centered) */}
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
            whileHover={{ y: -5 }}
            className={`bg-white p-5 rounded-3xl shadow-sm border border-primary/5 flex flex-col items-center text-center group w-full md:w-[calc(33.333%-1rem)] ${index > 2 ? 'md:w-[calc(40%-1rem)]' : ''}`}
          >
            <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-accent mb-3 group-hover:bg-primary group-hover:text-cream transition-colors">
              {card.icon}
            </div>
            <h3 className="text-lg font-bold text-primary mb-1">{card.title}</h3>
            <p className="text-primary-dark/70 text-sm leading-relaxed mb-2">
              {card.desc}
            </p>
            {card.ref && (
              <div className="inline-block bg-primary/5 text-primary text-xs font-semibold px-3 py-1 rounded-full mt-auto">
                {card.ref}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}
