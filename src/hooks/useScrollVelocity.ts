import { useState, useEffect } from 'react';

export const useScrollVelocity = () => {
  const [scrollVelocity, setScrollVelocity] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    let velocityTimeout: number;

    const updateVelocity = () => {
      const currentScrollY = window.scrollY;
      const velocity = currentScrollY - lastScrollY;
      setScrollVelocity(velocity);
      lastScrollY = currentScrollY;
      ticking = false;

      // Reset velocity when scrolling stops
      clearTimeout(velocityTimeout);
      velocityTimeout = window.setTimeout(() => {
        setScrollVelocity(0);
      }, 50);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateVelocity);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(velocityTimeout);
    };
  }, []);

  return scrollVelocity;
};
