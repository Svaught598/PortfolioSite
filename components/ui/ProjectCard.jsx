import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Tilt from 'react-parallax-tilt';

export default function ProjectCard({ project }) {
    const { title, description, imageLink, githubLink } = project

    return (
        <Tilt
            className="bg-white pl-6 relative h-full"
            gyroscope={true}
            style={{ transform: 'perspective(100px)', transformStyle: 'preserve-3d' }}
        >
            <span className='absolute w-1 left-0 top-0 h-full bg-charcoal'></span>
            <span className='absolute w-1 left-1 top-0 h-full bg-charcoal-light'></span>
            <span className='absolute w-1 left-2 top-0 h-full bg-charcoal-lighter'></span>
            <span className='absolute w-1 left-3 top-0 h-full bg-burnt-sienna'></span>
            <span className='absolute w-1 left-4 top-0 h-full bg-sandy-brown'></span>
            <span className='absolute w-1 left-5 top-0 h-full bg-orange-yellow-crayola'></span>
            <img 
                className="w-full h-64 object-cover"
                src={ require(`../../public${ imageLink }`) }
            />
            <div style={{ transform: 'translateZ(40px) scale(0.9)'}}>
                <h3 className="text-xl md:text-3xl font-bungee text-charcoal px-4 py-2 md:p-4 pb-0 flex flex-row items-center justify-between">
                    { title }
                    <a href={ githubLink }>
                        <FontAwesomeIcon icon={ faGithub } className="" fill="black"/>
                    </a>
                </h3>
                <p className="text-sm md:text-xl font-exo text-charcoal p-4">{ description }</p>
            </div>
        </Tilt>
    )
}