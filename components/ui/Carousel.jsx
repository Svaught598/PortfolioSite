import React, { useEffect } from 'react';
import { useTransitionCarousel } from 'react-spring-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight, faDotCircle } from '@fortawesome/free-solid-svg-icons';

const CarouselItem = ({ text, author, title }) => {
  return (
    <div className='relative w-full h-full bg-white flex flex-col justify-center'>
      <span className='absolute w-1 left-0 top-0 h-full bg-charcoal'></span>
      <span className='absolute w-1 left-1 top-0 h-full bg-charcoal-light'></span>
      <span className='absolute w-1 left-2 top-0 h-full bg-charcoal-lighter'></span>
      <span className='absolute w-1 left-3 top-0 h-full bg-burnt-sienna'></span>
      <span className='absolute w-1 left-4 top-0 h-full bg-sandy-brown'></span>
      <span className='absolute w-1 left-5 top-0 h-full bg-orange-yellow-crayola'></span>
      <div>
        <p className='font-exo text-lg md:text-xl lg:text-2xl p-4 pl-8 text-charcoal font-bold'>{ text }</p>
        <p className='font-exo text-sm md:text-md lg:text-lg text-right font-bold px-8 text-charcoal-light'>- { author }, <span className='font-normal'>{ title }</span></p>
      </div>
    </div>
  )
}

export default function Carousel({ items }) {
  const {
    carouselFragment,
    slideToNextItem,
    slideToPrevItem,
    slideToItem,
    activeItem,
  } = useTransitionCarousel({
    withLoop: true,
    gutter: 16,
    items: items.map((i) => ({
      renderItem: (
        <CarouselItem
          key={i.title}
          text={i.text}
          author={i.author}
          title={i.title}
        ></CarouselItem>
      ),
    })),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      slideToNextItem();
    }, 8000);
    return () => clearInterval(interval);
  }, [activeItem])

  return (
    <div>
      <div className='w-11/12 md:w-8/12 mx-auto flex flex-row items-center relative'>
        <button className='hidden md:block mr-12 text-4xl text-sandy-brown' onClick={slideToPrevItem}>
          <FontAwesomeIcon icon={faChevronCircleLeft} />
        </button>
        <div className="h-80 md:h-64 flex-1">
          { carouselFragment }
        </div>
        <button className='hidden md:block ml-12 text-4xl text-sandy-brown' onClick={slideToNextItem}>
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </button>
      </div>
      <div className='w-full flex flex-row justify-center py-8'>
        { items.map((item,i) => {
          return (
            <button
              key={i}
              className={ (activeItem === i) 
                ? 'text-burnt-sienna px-4 duration-300 ease-in-out transition-colors'
                : 'text-sandy-brown px-4 duration-300 ease-in-out transition-colors'
              }
              onClick={() => slideToItem(i)}
            >
              <FontAwesomeIcon icon={faDotCircle} />
            </button>
          )
        })}
      </div>
    </div>
  );
}
