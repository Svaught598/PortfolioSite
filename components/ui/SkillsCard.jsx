import React from "react";
import Tilt from 'react-parallax-tilt';

export default function SkillsCard({ header, children }) {
    return (
        <Tilt
            className="bg-white p-4 pl-12 relative h-full"
            style={{ transform: 'perspective(100px)', transformStyle: 'preserve-3d' }}
        >
            <span className="opacity-0 left-0 top-0 h-full w-full z-50"></span>
            <span className='absolute w-1 left-0 top-0 h-full bg-charcoal'></span>
            <span className='absolute w-1 left-1 top-0 h-full bg-charcoal-light'></span>
            <span className='absolute w-1 left-2 top-0 h-full bg-charcoal-lighter'></span>
            <span className='absolute w-1 left-3 top-0 h-full bg-burnt-sienna'></span>
            <span className='absolute w-1 left-4 top-0 h-full bg-sandy-brown'></span>
            <span className='absolute w-1 left-5 top-0 h-full bg-orange-yellow-crayola'></span>
            <div style={{ transform: 'translateZ(40px) scale(0.9)'}}>
                <h3 className="text-3xl font-bungee text-charcoal mb-4">{ header }</h3>
                { children }
            </div>
        </Tilt>
    )
}