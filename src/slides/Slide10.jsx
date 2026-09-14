import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Slide10({ isActive, direction }) {
  const sequence = [
    { text: "BERBUSANA DALAM ISLAM", highlight: false },
    { text: "MENUTUP AURAT", highlight: false },
    { text: "MENJAGA KEHORMATAN", highlight: false },
    { text: "MEMBENTUK EDENTITAS SOSIAL YANG BAIK", highlight: false },
    { text: "MENCERMINKAN KETAATAN", highlight: true }
  ];

  return (
    <Slide isActive={isActive} direction={direction}>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl mx-auto">

        {/* Left: Flow Sequence */}
        <div className="flex flex-col items-center flex-shrink-0">
          {sequence.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: item.highlight ? 1.03 : 1 }}
                transition={{ delay: 0.3 + (index * 0.4), duration: 0.7, ease: "easeOut" }}
                className={`text-center px-7 py-3 rounded-full ${item.highlight
                  ? 'bg-primary text-cream shadow-xl border border-accent mt-2 transition-colors'
                  : 'bg-white text-primary font-medium tracking-widest border border-primary/10 shadow-sm'
                  }`}
              >
                <h2 className={`text-base md:text-lg ${item.highlight ? 'font-bold tracking-widest' : 'font-semibold'}`}>
                  {item.text}
                </h2>
              </motion.div>

              {index < sequence.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 28 }}
                  transition={{ delay: 0.5 + (index * 0.4), duration: 0.5, ease: "easeOut" }}
                  className="w-px bg-accent my-1 relative"
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full text-accent">
                    <ArrowDown size={13} />
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Right: Kesimpulan Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1, ease: "easeOut" }}
          className="flex-1 islamic-card islamic-arch p-6 md:p-14 w-full"
        >
          {/* Subtle Decorative Arch Background Detail */}
          <div className="absolute inset-0 border border-accent/10 rounded-t-full rounded-b-xl pointer-events-none opacity-50 z-0" />
          
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="h-[2px] bg-accent" 
            />
            <span className="text-accent text-sm font-bold tracking-widest uppercase">Kesimpulan</span>
          </div>
          <p className="text-primary-dark text-lg md:text-xl leading-relaxed font-light">
            Konsep berbusana dalam Islam adalah pakaian yang <span className="font-semibold text-primary">menutup aurat</span>, tidak transparan dan ketat, hal ini guna untuk <span className="font-semibold text-primary">menjaga kehormatan</span> dan menjadi perhiasan seseorang serta <span className="font-semibold text-primary">membentuk edentitas sosial yang baik</span>.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
            className="mt-8 pt-6 border-t border-primary/10 flex items-center gap-4"
          >
            <div className="w-8 h-8 border border-accent rounded-full flex items-center justify-center opacity-50">
              <div className="w-4 h-4 bg-accent rounded-full" />
            </div>
            <p className="font-arabic text-3xl text-primary italic">شُكْرًا</p>
          </motion.div>
        </motion.div>

      </div>
    </Slide>
  );
}
