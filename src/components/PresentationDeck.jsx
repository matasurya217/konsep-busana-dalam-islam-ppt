import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';
import { useFullscreen } from '../hooks/useFullscreen';
import { useSwipeNavigation } from '../hooks/useSwipeNavigation';
import Navigation from './Navigation';
import ProgressIndicator from './ProgressIndicator';

// Import all slides
import Slide1 from '../slides/Slide1';
import Slide2 from '../slides/Slide2';
import Slide3 from '../slides/Slide3';
import Slide4 from '../slides/Slide4';
import Slide5 from '../slides/Slide5';
import Slide6 from '../slides/Slide6';
import Slide7 from '../slides/Slide7';
import Slide8 from '../slides/Slide8';
import Slide9 from '../slides/Slide9';
import Slide10 from '../slides/Slide10';

const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10
];

const slideTitles = [
  "Cover",
  "Pengertian Pakaian",
  "Syarat Berpakaian",
  "Ketentuan Berpakaian",
  "Fungsi: Perlindungan",
  "Fungsi: Sosial & Moral",
  "Etika Berpakaian",
  "Konsep Teknis",
  "Hikmah Menutup Aurat",
  "Kesimpulan"
];

export default function PresentationDeck() {
  const [[page, direction], setPage] = useState([0, 0]);
  const { isFullscreen } = useFullscreen();
  const slideContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const container = slideContainerRef.current;
      if (!container) return;

      const isMobileLandscape = window.matchMedia("(max-width: 950px) and (orientation: landscape)").matches;

      if (isMobileLandscape) {
        const SLIDE_WIDTH = 1024;
        const SLIDE_HEIGHT = 600;
        
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const scaleX = viewportWidth / SLIDE_WIDTH;
        const scaleY = viewportHeight / SLIDE_HEIGHT;
        const scale = Math.min(scaleX, scaleY);

        container.style.width = `${SLIDE_WIDTH}px`;
        container.style.height = `${SLIDE_HEIGHT}px`;
        container.style.position = 'absolute';
        container.style.left = '50%';
        container.style.top = '50%';
        container.style.transform = `translate(-50%, -50%) scale(${scale})`;
        container.style.transformOrigin = 'center center';
        container.style.maxWidth = 'none';
        container.style.maxHeight = 'none';
      } else {
        container.style.width = '';
        container.style.height = '';
        container.style.position = '';
        container.style.left = '';
        container.style.top = '';
        container.style.transform = '';
        container.style.transformOrigin = '';
        container.style.maxWidth = '';
        container.style.maxHeight = '';
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    document.addEventListener('fullscreenchange', handleResize);

    const timeoutId = setTimeout(handleResize, 100);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      document.removeEventListener('fullscreenchange', handleResize);
      clearTimeout(timeoutId);
    };
  }, [isFullscreen]);

  const paginate = (newDirection) => {
    const newPage = page + newDirection;
    if (newPage >= 0 && newPage < slides.length) {
      setPage([newPage, newDirection]);
    }
  };

  const goToSlide = (index) => {
    if (index === page) return;
    const dir = index > page ? 1 : -1;
    setPage([index, dir]);
  };

  const goToFirst = () => setPage([0, -1]);
  const goToLast = () => setPage([slides.length - 1, 1]);

  useKeyboardNavigation({
    onNext: () => paginate(1),
    onPrev: () => paginate(-1),
    onFirst: goToFirst,
    onLast: goToLast
  });

  useSwipeNavigation({
    onNext: () => paginate(1),
    onPrev: () => paginate(-1)
  });

  const CurrentSlideComponent = slides[page];

  return (
    <div className="relative w-full h-full overflow-hidden pattern-bg">
      {!isFullscreen && <ProgressIndicator currentSlide={page} totalSlides={slides.length} />}
      
      <div className="slide-container" ref={slideContainerRef}>
        <AnimatePresence initial={false} custom={direction}>
          <CurrentSlideComponent 
            key={page} 
            isActive={true} 
            direction={direction} 
          />
        </AnimatePresence>
      </div>

      {!isFullscreen && (
        <Navigation 
          currentSlide={page} 
          totalSlides={slides.length}
          onNext={() => paginate(1)}
          onPrev={() => paginate(-1)}
          slideTitles={slideTitles}
          onSelectSlide={goToSlide}
        />
      )}
    </div>
  );
}
