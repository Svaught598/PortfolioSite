import React from 'react'
import Head from 'next/head'
import clsx from 'clsx';

import { faDiscord, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import HeaderLayout from 'components/layout/HeaderLayout'
import IconLink from 'components/ui/IconLink';
import { HeroLayout, HeroHeader } from 'components/layout/HeroLayout'
import { faLink } from '@fortawesome/free-solid-svg-icons';


export default function Contact(props) {
  const delayEntrance ="animate__animated animate__fadeInUp delay04"
  const darkMode = props.darkBackground
  const card = (darkMode) 
    ? 'bg-gray color-transition'
    : 'bg-charcoal color-transition'
  const formText = "h-8 w-full rounded p-2"
  const button = clsx("h-10 w-full", 
    "rounded shadow-xl bg-persian-green mx-auto orange-on-hover grow text-yellow-orange-crayola text-xl"
  )

  return (
    <>
      <Head>
        <title>Contact - Steven Vaught</title>
        <meta name="description" content="Contact Steven Vaught" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main container mx-auto w-75">
        <HeaderLayout { ...props } />
        <main className="w-11/12 md:w-6/12 mx-auto h-50">

          <HeroLayout>
            <HeroHeader>
              <span><span className="text-persian-green">Reach out</span> to me.</span>
            </HeroHeader>
          </HeroLayout>

          <div className={clsx("flex flex-col space-y-10 p-5 mb-5 rounded-xl shadow-xl", card, delayEntrance)}>
            <p className="text-xl text-orange-yellow-crayola w-50 mx-auto">
              I'm always seeking out opportunities to further my skills and create something cool.
            </p>
            <p className="text-xl text-orange-yellow-crayola w-50 me-auto">
              Have a question? Want to work together?<span className="flex">Contact me!</span>
            </p>

          
            <form name="contact" method="POST" action="https://formspree.io/Svaught598@gmail.com"  >
              <div className="mb-2 rounded">
                <label class="sr-only" htmlFor="inputName">Name</label>
                <input type="text" name="name" class={ formText } id="inputName" placeholder="Name" required />
              </div>
              
              <div className="mb-2 rounded">
                <label class="sr-only" htmlFor="inputEmail">Email</label>
                <input type="email" name="email" class={ formText } id="inputEmail" placeholder="Email" required />
              </div>
              
              <div className="mb-2 rounded">
                <label class="sr-only" htmlFor="inputMessage">Message</label>
                <textarea name="message" class={clsx(formText, "h-36") } id="inputMessage" rows="5" placeholder="Message" required></textarea>
              </div>

              <div className="w-full">
                <button type="submit" class={ clsx( "", button ) }>Send</button>
              </div>
            </form>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <IconLink destination="https://www.linkedin.com/in/steven-vaught/" target="_blank" icon={ faLinkedin } darkMode={ darkMode }/>
              <IconLink destination="https://github.com/svaught598/" target="_blank" icon={ faGithub } darkMode={ darkMode }/>
              <IconLink destination="https://twitter.com/TrashmanSteve" target="_blank" icon={ faTwitter } darkMode={ darkMode }/>
              <IconLink destination="https://discord.com/users/379666614204891137/" target="_blank" icon={ faDiscord } darkMode={ darkMode }/>
            </div>
          </div>

        </main>
      </div>
    </>
  )
}