import { motion } from 'framer-motion';

export default function ProgressIndicator({ currentSlide, totalSlides }) {
  const progress = ((currentSlide) / (totalSlides - 1)) * 100;

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 bg-primary/10 z-50">
      <motion.div
        className="h-full bg-accent"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </div>
  );
}
