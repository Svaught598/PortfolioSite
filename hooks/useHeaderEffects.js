import { useEffect, useRef } from 'react';

export default function useHeaderEffects() {
  const header = useRef(null);
  const sidenav = useRef(null)

  const closeNav = (e) => {
    if (sidenav.current.contains(e.target)) return;
    sidenav.current.classList.add('translate-x-56');
  }

  useEffect(() => {
    setTimeout(() => {
      header.current.classList.remove('opacity-0');
    }, 500);

    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 64) header.current.classList.add('bg-white');
      else header.current.classList.remove('bg-white');
    });

    window.addEventListener('click', closeNav, false);

    return () => window.removeEventListener('click', closeNav, false);
  }, []);

  return [header, sidenav];
}