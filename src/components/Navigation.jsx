import { ChevronLeft, ChevronRight, Maximize, Minimize, Menu } from 'lucide-react';
import { useFullscreen } from '../hooks/useFullscreen';
import { useState } from 'react';
import SlideMenu from './SlideMenu';

export default function Navigation({ currentSlide, totalSlides, onNext, onPrev, slideTitles, onSelectSlide }) {
  const { isFullscreen, toggleFullscreen } = useFullscreen();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <SlideMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        slides={slideTitles} 
        currentSlide={currentSlide}
        onSelectSlide={onSelectSlide}
      />
      
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 md:space-x-6 bg-white/90 backdrop-blur-md px-4 md:px-6 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-primary/10 z-50 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] w-max max-w-[90vw]">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="p-2 rounded-full hover:bg-primary/10 text-primary transition-colors"
          title="Daftar Slide"
        >
          <Menu size={20} />
        </button>

        <div className="w-px h-6 bg-primary/20"></div>

        <button 
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="p-2 rounded-full hover:bg-primary/10 text-primary transition-colors disabled:opacity-30"
          title="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="font-mono font-medium text-primary-dark select-none min-w-[60px] text-center text-sm">
          {(currentSlide + 1).toString().padStart(2, '0')} / {totalSlides.toString().padStart(2, '0')}
        </div>
        
        <button 
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="p-2 rounded-full hover:bg-primary/10 text-primary transition-colors disabled:opacity-30"
          title="Next Slide"
        >
          <ChevronRight size={24} />
        </button>

        <div className="w-px h-6 bg-primary/20"></div>

        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-full hover:bg-primary/10 text-primary transition-colors"
          title="Toggle Fullscreen"
        >
          {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
        </button>
      </div>
    </>
  );
}
