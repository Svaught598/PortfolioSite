import { useState, useRef, useEffect } from 'react';

export default function useTextSwap(textOptions) {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      ref.current.classList.toggle('opacity-0');
      setTimeout(() => {
        setIndex(i => (i + 1 >= textOptions.length) ? 0 : i + 1)
        ref.current.classList.toggle('opacity-0');
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return [textOptions[index], ref];
}