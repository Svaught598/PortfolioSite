import * as React from 'react';
import  { useEffect, useState } from 'react';

const Overlay = () => {
  const [show, setShow] = useState(true);
  const [isOpaque, setIsOpaque] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsOpaque(true), 1000);
    setTimeout(() => setShow(false), 2000);
  }, []);

  const classes = isOpaque
    ? 'h-screen w-screen fixed left-0 top-0 bg-charcoal opacity-0 transition-opacity duration-500 ease-in overflow-auto'
    : 'h-screen w-screen fixed left-0 top-0 bg-charcoal opacity-100 transition-opacity duration-500 ease-in overflow-auto';

  return (
    <>
      {
        show &&
          <div
            id="overlay"
            className={ classes }
            style={{ zIndex: 9000 }}
          ></div>
      }
    </>
  )
}

export default Overlay;
