import Slide from '../components/Slide';
import { motion } from 'framer-motion';

export default function Slide1({ isActive, direction }) {
  return (
    <Slide isActive={isActive} direction={direction}>
      <div className="relative w-full max-w-5xl mx-auto min-h-[80vh] md:h-[80vh] flex flex-col justify-center items-center slide1-landscape-fix-root">
        {/* Subtle Decorative Arch Frame */}
        <div className="absolute inset-0 border-[1px] border-accent/30 rounded-t-[200px] pointer-events-none hidden md:block" />
        <div className="absolute inset-4 border-[1px] border-primary/10 rounded-t-[180px] pointer-events-none hidden md:block" />

        <div className="flex flex-col lg:flex-row items-center justify-between w-full px-4 md:px-8 lg:px-16 z-10 mt-4 pb-12 md:pb-20 gap-6 slide1-landscape-fix-content">
          {/* Text Content */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start flex-1">
            <h1 className="text-hierarchy-title mb-1">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="block font-light text-primary/80 text-4xl md:text-5xl lg:text-6xl mb-2 tracking-widest uppercase slide1-landscape-fix-title1"
              >
                Konsep Berbusana
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
                className="text-accent inline-block slide1-landscape-fix-title2"
              >
                Dalam Islam
              </motion.span>
            </h1>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 96, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="h-[2px] bg-accent/60 my-4 slide1-landscape-fix-line"
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              className="mb-1 slide1-landscape-fix-subject-wrap"
            >
              <span className="text-accent text-sm md:text-base font-bold tracking-[0.2em] uppercase slide1-landscape-fix-subject">Pendidikan Agama Islam</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
              className="text-lg md:text-xl font-light text-primary-light italic mt-1 max-w-xl slide1-landscape-fix-quote"
            >
              "Memahami pengertian, syarat, ketentuan, fungsi, etika dan konsep berpakaian, serta hikmah menutup aurat"
            </motion.h2>
          </div>

          {/* Cover Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block w-5/12 max-w-md relative"
          >
            <div className="relative p-2 islamic-card rounded-[2.5rem] rounded-tl-[6rem] shadow-xl border border-accent/20">
              <div className="rounded-[2rem] rounded-tl-[5.5rem] overflow-hidden border border-primary/10 bg-cream">
                <img
                  src="/images/cover-couple.jpg"
                  alt="Ilustrasi Muslim dan Muslimah"
                  className="w-full h-[400px] object-cover object-center mix-blend-multiply opacity-90"
                />
              </div>
            </div>
            {/* Decorative element behind image */}
            <div className="absolute -inset-4 border border-accent/20 rounded-[3rem] rounded-tl-[7rem] pointer-events-none -z-10" />
          </motion.div>
        </div>

        {/* Footer Area for Group & Dosen Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="static md:absolute md:bottom-12 w-full px-4 md:px-8 lg:px-16 flex flex-col sm:flex-row justify-center md:justify-start items-center sm:items-start gap-6 md:gap-12 lg:gap-16 text-sm text-primary-dark/60 font-medium tracking-wide uppercase mt-8 md:mt-0 slide1-landscape-fix-footer"
        >
          <div className="text-center sm:text-left normal-case">
            <span className="block text-accent mb-1 text-xs uppercase">Kelompok 1</span>
            Miftah Rahman Hakim<br />
            Muhhammad Pratama Dermawan<br />
            muchamad Rizqy kurniawan
          </div>

          <div className="text-center sm:text-left sm:ml-1 normal-case">
            <span className="block text-accent mb-1 text-xs uppercase">Dosen Pengampu</span>
            Dr. Dodi Misbah J, M.Pd
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}
