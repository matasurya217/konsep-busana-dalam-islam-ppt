import Slide from '../components/Slide';
import { motion } from 'framer-motion';

export default function Slide2({ isActive, direction }) {
  return (
    <Slide isActive={isActive} direction={direction}>
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
        className="text-hierarchy-heading text-center"
      >
        Pengertian <span className="text-accent font-light">Pakaian</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12">
        {/* Kiri: Pengertian */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="islamic-card"
          >
            <h3 className="text-sm font-bold tracking-widest uppercase text-primary/70 mb-3 flex items-center gap-2">
              <span className="w-4 h-px bg-accent"></span>
              Secara Umum
            </h3>
            <p className="text-hierarchy-body">
              Pakaian secara umum adalah sesuatu yang dipakai menutup tubuh (dada, perut, pinggul).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
            className="islamic-card"
          >
            <h3 className="text-sm font-bold tracking-widest uppercase text-accent mb-3 flex items-center gap-2">
              <span className="w-4 h-px bg-accent"></span>
              Dalam Islam
            </h3>
            <p className="text-hierarchy-body">
              Pakaian adalah sarana menutupi aurat yang diwajibkan Allah sekaligus berfungsi sebagai perhiasan yang menutup aib jasmani.
            </p>
          </motion.div>
        </div>

        {/* Kanan: Dalil */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 bg-primary text-cream p-6 md:p-10 rounded-[2rem] shadow-xl relative overflow-hidden border border-accent/20"
        >
          {/* Decorative inner frame */}
          <div className="absolute inset-3 border border-accent/20 rounded-[1.5rem] pointer-events-none" />
          <div className="absolute inset-4 border border-accent/10 rounded-[1.25rem] pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/5 rounded-full -ml-10 -mb-10 pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[1px] bg-accent" />
              <span className="text-accent text-sm tracking-widest font-semibold uppercase">Al-A'raf : 26</span>
            </div>

            <p className="text-2xl lg:text-4xl text-cream mb-8 text-right leading-relaxed">
              يَا بَنِي آدَمَ قَدْ أَنْزَلْنَا عَلَيْكُمْ لِبَاسًا يُوَارِي سَوْآتِكُمْ وَرِيشًا ۖ وَلِبَاسُ التَّقْوَىٰ ذَٰلِكَ خَيْرٌ
            </p>

            <p className="text-cream/80 text-lg leading-relaxed font-light">
              "Hai anak Adam, sesungguhnya Kami telah menurunkan kepadamu pakaian untuk menutupi auratmu dan pakaian indah untuk perhiasan. Dan pakaian takwa itulah yang paling baik..."
            </p>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}
