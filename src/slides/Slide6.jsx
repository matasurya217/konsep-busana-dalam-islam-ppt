import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Sparkles, Fingerprint } from 'lucide-react';

export default function Slide6({ isActive, direction }) {
  return (
    <Slide isActive={isActive} direction={direction}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-hierarchy-heading mb-2">Fungsi Pakaian</h2>
        <p className="text-accent text-xl uppercase tracking-widest font-medium">Sosial & Moral</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto h-auto md:h-[400px]">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-primary/5 flex flex-col justify-center items-center text-center group"
        >
          <div className="w-20 h-20 rounded-full bg-cream flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
            <Sparkles size={40} />
          </div>
          <h3 className="text-accent text-6xl font-bold tracking-widest uppercase mb-4">١</h3>
          <h4 className="text-3xl font-bold text-primary mb-4">Sebagai Perhiasan</h4>
          <p className="text-primary-dark/70 text-lg md:text-xl leading-relaxed">
            Pakaian berfungsi sebagai perhiasan yang menata penampilan namun tetap sesuai nilai Islam, menutup aurat untuk menjaga kehormatan.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="bg-primary text-cream p-8 md:p-12 rounded-[2.5rem] shadow-xl flex flex-col justify-center items-center text-center group"
        >
          <div className="w-20 h-20 rounded-full bg-primary-light flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
            <Fingerprint size={40} />
          </div>
          <h3 className="text-accent text-6xl font-bold tracking-widest uppercase mb-4">٢</h3>
          <h4 className="text-3xl font-bold text-white mb-4">Sebagai Pembeda / Identitas</h4>
          <p className="text-cream/80 text-lg md:text-xl leading-relaxed mb-4">
            Pakaian menjadi pembeda/identitas agar kaum beriman mudah dikenali dan tidak diganggu.
          </p>
          <div className="inline-block bg-accent/20 text-accent text-sm font-bold px-4 py-1.5 rounded-full">
            QS. Al-Ahzab: 59
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}
