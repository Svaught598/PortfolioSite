import React, { useEffect } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
    const links = [
        { url: 'https://www.linkedin.com/in/steven-vaught/', icon: faLinkedin },
        { url: 'https://github.com/svaught598/', icon: faGithub },
        { url: 'https://discord.com/users/379666614204891137/', icon: faDiscord },
    ]

  useEffect(() =>
    setTimeout(() => {
      document.getElementById('header').classList.remove('opacity-0');
    }, 500), []);

  return (
    <header id="header" className="px-24 sticky top-0 shadow-xl flex justify-between items-center h-24 opacity-0 z-50 bg-white">
      <Link href="/">
        <a className="font-bungee">
          <span className="text-persian-green text-5xl lg:text-6xl xl:text-6xl">S</span>
          <span className="text-burnt-sienna text-5xl lg:text-6xl xl:text-6xl">V</span>
        </a>
      </Link>

      <div className="mt-2 flex flex-row items-center">
        {
            links.map(l => (
                <a href={l.url} className='p-2 text-4xl'>
                    <FontAwesomeIcon
                        icon={ l.icon }
                        color='#e76f51ff'
                        className='transition-color hover:text-orange-yellow-crayola duration-300 ease-in-out'
                    />
                </a>
            ))
        }
        <Link href="#about-section"><a className='ml-4 rounded-xl bg-persian-green text-white py-3 px-5 text-lg font-bungee transition-color hover:bg-charcoal-lighter duration-300 ease-in-out flex flex-row items-center'>
          <FontAwesomeIcon icon={faEnvelope} className='mr-4'/>
          Talk to Me
        </a></Link>
        <Link href="https://garden.svaught.com"><a className='ml-4 rounded-xl bg-white text-persian-green py-3 px-5 text-lg font-bungee transition-color hover:text-charcoal-lighter duration-300 ease-in-out border-2 border-persian-green hover:border-charcoal-lighter'>
          Garden
        </a></Link>
        <Link href="https://svaught.com/resume.pdf"><a className='ml-4 rounded-xl bg-white text-persian-green py-3 px-5 text-lg font-bungee transition-color hover:text-charcoal-lighter duration-300 ease-in-out border-2 border-persian-green hover:border-charcoal-lighter'>
          Resumè
        </a></Link>
      </div>
    </header>
  );
}