import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function usePixelAnimation(targets) {
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current.classList.remove('opacity-0');
      anime({
        targets,
        scale: {
          value: [0, 1],
          easing: 'easeOutSine',
          duration: 100
        },
        delay: anime.stagger(100, {grid: [64, 32], from: 'center'})
      });
    }, 0);

    const interval = setInterval(() => {
      anime({
        targets,
        translateY: [
          { value: -5, easing: 'easeInOutQuad', duration: 50 },
          { value: 0, easing: 'easeInOutQuad', duration: 50 },
        ],
        delay: anime.stagger(50, {grid: [64, 32], from: 'last'})
      });
    }, 6000);
  }, []);

  return ref;
}