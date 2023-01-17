import React from "react";

export default function SkillsCard({ header, children }) {
    return (
        <div className="bg-white p-4 pl-12 hover:shadow-2xl transition-all duration-500 ease-in-out relative">
            <span className='absolute w-1 left-0 top-0 h-full bg-charcoal'></span>
            <span className='absolute w-1 left-1 top-0 h-full bg-charcoal-light'></span>
            <span className='absolute w-1 left-2 top-0 h-full bg-charcoal-lighter'></span>
            <span className='absolute w-1 left-3 top-0 h-full bg-burnt-sienna'></span>
            <span className='absolute w-1 left-4 top-0 h-full bg-sandy-brown'></span>
            <span className='absolute w-1 left-5 top-0 h-full bg-orange-yellow-crayola'></span>
            <h3 className="text-3xl font-bungee text-charcoal mb-4">{ header }</h3>
            { children }
        </div>
    )
}