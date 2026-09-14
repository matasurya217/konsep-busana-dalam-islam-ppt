import { useEffect } from 'react';

export function useKeyboardNavigation({ 
  onNext, 
  onPrev, 
  onFirst, 
  onLast 
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing in an input field (just in case)
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ': // Space
          e.preventDefault();
          onNext();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          onPrev();
          break;
        case 'Home':
          e.preventDefault();
          onFirst();
          break;
        case 'End':
          e.preventDefault();
          onLast();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev, onFirst, onLast]);
}
