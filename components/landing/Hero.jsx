import React from 'react';
import MeCoding from '../ui/MeCoding';

export default function Hero() {

  return (
    <section className="h-936 md:h-auto py-0 md:py-28 bg-white relative">
      <div className='absolute top-0 left-0 right-0 bottom-0'>
        <div className='w-full h-full relative top-0 left-0'>
          <img src="/images/hero-background-top-1.svg" className='absolute top-0 left-0 right-0 w-screen object-cover overflow-auto' width={900} height={600} alt=''/>
          <img src="/images/hero-background-bottom-1.svg" className='absolute bottom-0 left-0 right-0 w-screen object-cover overflow-auto' width={900} height={600} alt=''/>
        </div>
      </div>

      <div className='py-24 md:py-0 md:h-screen w-full md:w-12/12 lg:w-10/12 2xl:w-9/12 mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 mt-12 lg:mt-0 justify-center items-center '>
        <MeCoding />
        <div className='flex-1 w-full flex flex-col items-center lg:items-end mb-12 lg:mb-0 px-4 lg:px-0'>
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
      </div>
    </section>
  );
}