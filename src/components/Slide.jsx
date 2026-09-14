import { motion } from 'framer-motion';

export default function Slide({ children, isActive, direction }) {
  if (!isActive) return null;

  const variants = {
    enter: () => {
      return {
        y: 20,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1
    },
    exit: () => {
      return {
        zIndex: 0,
        y: -10,
        opacity: 0
      };
    }
  };

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full overflow-y-auto overflow-x-hidden px-6 md:px-12 lg:px-24 py-20 md:py-8 [&::-webkit-scrollbar]:hidden"
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        y: { type: "spring", stiffness: 200, damping: 25 },
        opacity: { duration: 0.6, ease: "easeOut" }
      }}
    >
      <div className="w-full max-w-6xl mx-auto min-h-full flex flex-col justify-center">
        {children}
      </div>
    </motion.div>
  );
}
