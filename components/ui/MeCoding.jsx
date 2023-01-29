import React from 'react';
import Image from 'next/image';
import meCoding from '../../sprites/me';
import usePixelAnimation from '../../hooks/usePixelAnimation';


export default function MeCoding() {
  const targets = '.anime .el'
  const ref = usePixelAnimation(targets);
  
  return (
    <div className='flex-1 p-4 lg:p-0 relative move-in-circle preserve-3d'>
      <div className='bg-transparent p-4 lg:p-0 absolute top-0 left-0 w-full h-full rounded-full border-16 border-charcoal z-50' style={{ transform: 'translateZ(10px)'}} ></div>
      <div className='bg-transparent p-4 lg:p-0 absolute top-0 left-0 w-full h-full rounded-full border-16 border-charcoal z-50' style={{ transform: 'translateZ(20px)'}} ></div>
      <div className='bg-transparent p-4 lg:p-0 absolute top-0 left-0 w-full h-full rounded-full border-16 border-charcoal z-50' style={{ transform: 'translateZ(30px)'}} ></div>
      <div className='bg-transparent p-4 lg:p-0 absolute top-0 left-0 w-full h-full rounded-full border-16 border-charcoal z-50' style={{ transform: 'translateZ(40px)'}} ></div>
      <img 
        className="absolute top-0 bottom-0 left-0 right-0 rounded-full object-cover h-full w-full"
        src={ require('../../public/images/me-coding-bg.svg') }
      />
      {/* <Image className='object-cover absolute top-0 rounded-full' src='/images/me-coding-bg.svg' layout='fill' /> */}
      <div className='flex flex-row justify-center items-center ' style={{ transformStyle: 'flat' }}>
        <div ref={ref} id="pixel-art" className="anime grid grid-cols-64 opacity-0" >
          { meCoding.map((pixel,i) => <div key={i} className="w-1 h-1 md:w-2 md:h-2 el" style={{ backgroundColor: pixel, marginRight: "1px", marginBottom: "1px" }} />)}
        </div>
      </div>
    </div>
  );
};