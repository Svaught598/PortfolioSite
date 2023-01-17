import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    const links = [
        { url: 'https://www.linkedin.com/in/steven-vaught/', icon: faLinkedin },
        { url: 'https://github.com/svaught598/', icon: faGithub },
        { url: 'https://discord.com/users/379666614204891137/', icon: faDiscord },
    ]

  return (
    <section className="h-192 bg-white flex flex-col justify-between">
      <div className="w-10/12 mx-auto flex flex-row items-start pt-24">
        <h2 className='flex-1 font-bungee text-persian-green text-5xl'>
          Contact
        </h2>
        <div className='flex-1 text-right'>
            <p className='text-right font-exo font-bold text-xl text-charcoal mb-12'>
                Shoot me an email, or a DM, or a friend request, or a carrier pidgeon, just do SOMETHING.
                I've even got this handy form here to make it easy.
            </p>
            <p className='text-right font-exo font-bold text-xl text-charcoal mb-12'>
            Let's work together and make some magic happen!
            </p>
        </div>
      </div>

      <form className='w-6/12 mx-auto flex flex-col' name="contact" method="POST" action="https://formspree.io/Svaught598@gmail.com"  >
        <div className='w-full pb-4'>
            <label className="sr-only" htmlFor="inputName">Name</label>
            <input className='w-full bg-gray text-charcoal p-4 border-rounded-xl' type="text" name="name" id="inputName" placeholder="Name" required />
        </div>
        
        <div className='w-full pb-4'>
            <label className="sr-only" htmlFor="inputEmail">Email</label>
            <input className='w-full bg-gray text-charcoal p-4 border-rounded-xl' type="email" name="email" id="inputEmail" placeholder="Email" required />
        </div>
        
        <div className="mb-2 rounded">
            <label className="sr-only" htmlFor="inputMessage">Message</label>
            <textarea className='w-full bg-gray text-charcoal p-4 border-rounded-xl' name="message" id="inputMessage" rows="5" placeholder="Message" required></textarea>
        </div>

        <div className="w-full flex flex-row justify-between items-center pb-24">
            <div className='flex flex-row justify-center'>
            {
                links.map(l => (
                    <a href={l.url} className='p-2 text-5xl'>
                        <FontAwesomeIcon
                            icon={ l.icon }
                            className='transition-color text-persian-green hover:text-charcoal-lighter duration-300 ease-in-out'
                        />
                    </a>
                ))
            }
            </div>
            <button type="submit" className='p-4 px-12 bg-persian-green hover:bg-charcoal-lighter duration-300 transition-colors text-white font-bungee rounded-xl'>Send</button>
        </div>
    </form>


    </section>
  );
}