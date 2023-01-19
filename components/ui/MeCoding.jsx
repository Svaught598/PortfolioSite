import React, { useEffect } from 'react';
import meCoding from '../../sprites/me'
import anime from 'animejs';

export default function MeCoding() {

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('pixel-art').classList.remove('opacity-0');
      anime({
        targets: '.anime .el',
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
        targets: '.anime .el',
        translateY: [
          { value: -5, easing: 'easeInOutQuad', duration: 50 },
          { value: 0, easing: 'easeInOutQuad', duration: 50 },
        ],
        delay: anime.stagger(50, {grid: [64, 32], from: 'last'})
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [])
  
    return (
      <div className='flex-1 pb-12 px-4 lg:p-0'>
        <div className='flex flex-row justify-center items-center py-4 border-16 border-charcoal bg-gradient-to-br from-persian-green bg-charcoal-lighter rounded-3xl'>
          <div id="pixel-art" className="anime grid grid-cols-64 opacity-0">
            { meCoding.map((pixel,i) => <div key={i} className="w-1 h-1 md:w-2 md:h-2 el" style={{ backgroundColor: pixel, marginRight: "1px", marginBottom: "1px" }} />)}
          </div>
        </div>
        <div className='w-full'>
          <a className='block text-sm mx-auto mt-2 text-charcoal font-exo font-black text-center'>Actual photograph of me working!</a>
        </div>
      </div>
    );
  };