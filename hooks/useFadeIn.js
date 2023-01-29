import { useEffect, useRef, useState } from 'react';

export default function useFadeIn() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      ref.current.classList.remove('opacity-0');
      setShow(true);
    }, 500);
  }, []);

  return [ref, show];
}