import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { BookHeart, ArrowRight, Scale, Sparkles } from 'lucide-react';

export default function Slide7({ isActive, direction }) {
  const cards = [
    {
      icon: BookHeart,
      title: "Membaca Doa Saat Berpakaian",
      desc: "Mengawali berpakaian dengan doa yang diajarkan (HR. Abu Dawud no. 4023).",
    },
    {
      icon: ArrowRight,
      title: "Mendahulukan Kanan",
      desc: "Memakai dari sebelah kanan dan melepas dari kiri (HR. Bukhari).",
    },
    {
      icon: Scale,
      title: "Tidak Berlebih & Sombong",
      desc: "Hindari israf dan menunjukkan kesombongan; ajaran hadits dan QS. Al-A'raf:31.",
    },
    {
      icon: Sparkles,
      title: "Kebersihan & Kerapian",
      desc: "Berpakaian bersih dan rapi karena Allah mencintai keindahan (HR. Muslim).",
    }
  ];

  return (
    <Slide isActive={isActive} direction={direction}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-hierarchy-heading mb-2">Etika Berpakaian</h2>
        <p className="text-accent text-xl uppercase tracking-widest font-medium">Dalam Islam</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1), duration: 0.6 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-primary/5 flex flex-col items-start group hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform shrink-0">
                <Icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">{card.title}</h3>
              <p className="text-primary-dark/70 text-lg leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Slide>
  );
}
