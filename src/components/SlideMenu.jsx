import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function SlideMenu({ isOpen, onClose, slides, currentSlide, onSelectSlide }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary-dark/40 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 w-80 h-full bg-cream shadow-2xl z-[70] flex flex-col border-r border-accent/20"
          >
            <div className="flex items-center justify-between p-6 border-b border-primary/10">
              <h3 className="text-xl font-semibold text-primary">Daftar Slide</h3>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-primary/10 text-primary transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              {slides.map((slideTitle, index) => (
                <button
                  key={index}
                  onClick={() => {
                    onSelectSlide(index);
                    onClose();
                  }}
                  className={`w-full text-left px-6 py-4 flex items-start gap-4 transition-colors hover:bg-primary/5 ${
                    currentSlide === index ? 'bg-primary/10 border-r-4 border-accent' : ''
                  }`}
                >
                  <span className={`font-mono text-sm mt-1 ${currentSlide === index ? 'text-accent' : 'text-primary/50'}`}>
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <span className={`font-medium ${currentSlide === index ? 'text-primary' : 'text-primary-dark/80'}`}>
                    {slideTitle}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
