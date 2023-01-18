import React, { useEffect, useState } from 'react'
import MeCoding from '../ui/MeCoding'

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() =>
    setTimeout(() => {
      document.getElementById('hero').classList.remove('opacity-0');
      setShow(true);
    }, 500), []);

  return (
    <section id="hero" className="w-full md:w-10/12 md:h-192 mx-auto flex flex-col-reverse md:grid md:grid-cols-2 mt-12 md:mt-0 justify-center items-center relative opacity-0 transition-opacity duration-500 ease-in">
        { show ? <MeCoding /> : <div /> }
        <div className='flex-1 w-full flex flex-col items-end mb-12 md:mb-0 px-4 md:px-0'>
          <h2 className="flex-1 text-4xl pl-8 py-4 relative z-10 font-bungee">
            <span className='absolute w-1 left-0 top-0 h-full bg-charcoal'></span>
            <span className='absolute w-1 left-1 top-0 h-full bg-charcoal-light'></span>
            <span className='absolute w-1 left-2 top-0 h-full bg-charcoal-lighter'></span>
            <span className='absolute w-1 left-3 top-0 h-full bg-burnt-sienna'></span>
            <span className='absolute w-1 left-4 top-0 h-full bg-sandy-brown'></span>
            <span className='absolute w-1 left-5 top-0 h-full bg-orange-yellow-crayola'></span>
            <span className="text-burnt-sienna">Software Developer</span>.<br/>
            <span className="text-charcoal">Sushi Enthusiast</span>.<br/>
            <span className="text-persian-green">Fan of Personal Flair</span>.
          </h2>
          <p className='flex-1 text-2xl text-right pr-8 py-4 text-charcoal-lighter relative z-10 font-exo font-black'>
            <span className='absolute w-1 right-0 top-0 h-full bg-charcoal'></span>
            <span className='absolute w-1 right-1 top-0 h-full bg-charcoal-light'></span>
            <span className='absolute w-1 right-2 top-0 h-full bg-charcoal-lighter'></span>
            <span className='absolute w-1 right-3 top-0 h-full bg-burnt-sienna'></span>
            <span className='absolute w-1 right-4 top-0 h-full bg-sandy-brown'></span>
            <span className='absolute w-1 right-5 top-0 h-full bg-orange-yellow-crayola'></span>
            Striving for <span className='text-burnt-sienna underline'>Uniqueness</span> & <span className='text-charcoal underline'>Simplicity</span><br/>
            in both design and implementation.<br/>
            <span className='text-xs'>Damn that sounds good.</span>
          </p>   
        </div>
    </section>
  );
}