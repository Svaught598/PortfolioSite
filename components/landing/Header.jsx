import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBars, faWindowClose, faBook, faFile } from '@fortawesome/free-solid-svg-icons';
import useHeaderEffects from '../../hooks/useHeaderEffects';


export default function Header() {
  const links = [
    { url: 'https://www.linkedin.com/in/steven-vaught/', icon: faLinkedin },
    { url: 'https://github.com/svaught598/', icon: faGithub },
    { url: 'https://discord.com/users/379666614204891137/', icon: faDiscord },
  ];

  const closeNav = (e) => {
    if (!e) return sidenav.current.classList.add('translate-x-56');
    sidenav.current.classList.add('translate-x-56');
  }

  const showNav = (e) => {
    sidenav.current.classList.remove('translate-x-56');
    e.stopPropagation();
  }

  const [header, sidenav] = useHeaderEffects();
  
  return (
    <header ref={header} className="px-4 md:px-12 lg:px-24 fixed left-0 right-0 top-0 flex justify-between items-center h-16 md:h-20 lg:h-24 opacity-0 z-50 transition-all duration-300 ease-in-out">
      <Link href="/">
        <a className="font-bungee">
          <span className="text-persian-green text-4xl md:text-4xl xl:text-6xl">S</span>
          <span className="text-burnt-sienna text-4xl md:text-4xl xl:text-6xl">V</span>
        </a>
      </Link>

      <div className="mt-2 flex flex-row items-center">
        {
            links.map(l => (
                <a key={l.url} href={l.url} className='hidden lg:block p-2 text-4xl'>
                    <FontAwesomeIcon
                        icon={ l.icon }
                        color='#e76f51ff'
                        className='transition-color hover:text-orange-yellow-crayola duration-300 ease-in-out'
                    />
                </a>
            ))
        }
        <Link href="#contact-section">
          <a className='hidden ml-4 rounded-xl bg-persian-green text-white py-3 px-5 text-lg font-bungee transition-color hover:bg-charcoal-lighter duration-300 ease-in-out lg:flex flex-row items-center'>
            <FontAwesomeIcon icon={faEnvelope} className='mr-4'/>
            Talk to Me
          </a>
        </Link>
        <Link href="https://garden.svaught.com">
          <a className='hidden ml-4 rounded-xl bg-persian-green text-white py-3 px-5 text-lg font-bungee transition-color hover:bg-charcoal-lighter duration-300 ease-in-out lg:flex flex-row items-center'>
            <FontAwesomeIcon icon={faBook} className='mr-4'/>
            Garden
          </a>
        </Link>
        <Link href="https://svaught.com/resume.pdf">
          <a className='hidden lg:block ml-4 rounded-xl bg-white text-persian-green py-3 px-5 text-lg font-bungee transition-color hover:text-charcoal-lighter duration-300 ease-in-out border-2 border-persian-green hover:border-charcoal-lighter'>
            Rèsumè
          </a>
        </Link>
        <button className='lg:hidden p-2 ml-12 text-3xl' onClick={(e) => showNav(e)}>
          <FontAwesomeIcon icon={faBars} className='text-persian-green' />
        </button>
      </div>

      <nav ref={sidenav} className='w-56 transform translate-x-56 h-screen absolute right-0 top-0 bg-white shadow-2xl transition-all duration-500 ease-in-out flex flex-col'>
        <button onClick={() => closeNav()} className='m-4 rounded-xl flex flex-row items-center bg-white text-persian-green py-3 px-5 text-lg font-bungee transition-color hover:text-charcoal-lighter duration-300 ease-in-out border-2 border-persian-green hover:border-charcoal-lighter justify-center'>
          <FontAwesomeIcon icon={faWindowClose} className='mr-4'/>
          Close
        </button>

        <h3 className='text-2xl px-4 pt-4 font-bungee text-charcoal-light'>Social</h3>
        <div className='flex flex-row justify-between mx-4 my-2'>
          {
            links.map(l => (
              <a key={l.url} href={l.url} className='p-2 text-4xl'>
                  <FontAwesomeIcon
                      icon={ l.icon }
                      className='text-persian-green'
                  />
              </a>
            ))
          }
        </div>

        <h3 className='text-2xl px-4 pt-4 font-bungee text-charcoal-light'>Other</h3>
        <Link href="#contact-section">
          <a onClick={() => closeNav()} className='mx-4 justify-center my-2 rounded-xl bg-persian-green text-white py-3 px-5 text-lg font-bungee transition-color flex flex-row items-center'>
            <FontAwesomeIcon icon={faEnvelope} className='mr-4'/>
            Talk to Me
          </a>
        </Link>
        <Link href="https://garden.svaught.com">
          <a className='mx-4 justify-center my-2 rounded-xl bg-persian-green text-white py-3 px-5 text-lg font-bungee transition-color flex flex-row items-center'>
            <FontAwesomeIcon icon={faBook} className='mr-4'/>
            Garden
          </a>
        </Link>
        <Link href="https://svaught.com/resume.pdf">
        <a className='mx-4 justify-center my-2 rounded-xl bg-persian-green text-white py-3 px-5 text-lg font-bungee transition-color flex flex-row items-center'>
            <FontAwesomeIcon icon={faFile} className='mr-4'/>
            Rèsumè
          </a>
        </Link>
      </nav>
    </header>
  );
}