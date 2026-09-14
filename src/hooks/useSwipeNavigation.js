import { useEffect } from 'react';

export function useSwipeNavigation({ onNext, onPrev }) {
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;
    
    // Minimum horizontal swipe distance threshold (in px)
    const SWIPE_THRESHOLD = 50;
    // Maximum allowed vertical movement to still be considered a horizontal swipe
    const SWIPE_MAX_Y_OFFSET = 50; 

    const handleTouchStart = (e) => {
      // Only track single touch
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchEndX = touchStartX;
        touchEndY = touchStartY;
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 1) {
        touchEndX = e.touches[0].clientX;
        touchEndY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      // If no valid touch data, do nothing
      if (!touchStartX || !touchEndX) return;

      const distanceX = touchStartX - touchEndX;
      const distanceY = Math.abs(touchStartY - touchEndY);
      
      // Check if it's primarily a horizontal swipe
      const isHorizontalSwipe = distanceY <= SWIPE_MAX_Y_OFFSET;
      
      if (isHorizontalSwipe) {
        const isLeftSwipe = distanceX > SWIPE_THRESHOLD;
        const isRightSwipe = distanceX < -SWIPE_THRESHOLD;

        if (isLeftSwipe && onNext) {
          onNext();
        } else if (isRightSwipe && onPrev) {
          onPrev();
        }
      }

      // Reset values
      touchStartX = 0;
      touchEndX = 0;
      touchStartY = 0;
      touchEndY = 0;
    };

    // Attach listeners to document to capture swipe anywhere
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onNext, onPrev]);
}
