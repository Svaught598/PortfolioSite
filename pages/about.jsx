import React from 'react'
import Head from 'next/head'
import clsx from 'clsx';

import { HeroLayout, HeroHeader } from 'components/layout/HeroLayout';
import HeaderLayout from 'components/layout/HeaderLayout';
import Link from 'components/ui/Link';


export default function About(props) {
  
  const delayEntrance ="animate__animated animate__lightSpeedInLeft animate__delay-1s"

  return (
    <>
      <Head>
        <title>About - Steven Vaught</title>
        <meta name="description" content="About Steven Vaught" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main container mx-auto w-75">
        <HeaderLayout { ...props } />
        <main className="xl:my-72 w-11/12 mx-auto">

          <HeroLayout>
            <HeroHeader>
              <span>I <span className="text-4">design</span> &amp; <span className="text-2 bold">build</span> software.</span>
            </HeroHeader>
          </HeroLayout>
          
          <div className={clsx("flex flex-col", delayEntrance)}>
            <p className="text-xl text-3">
              I'm a software developer based in <span className="text-2">Phoenix AZ</span> working with modern web technologies. Currently, I'm an Accessibility Specialist at <a href="https://www.seewritehear.com/" target="_blank" className="text-4 link text-xl">SeeWriteHear</a> focused on building accessible, internal web-apps to improve workflow management.</p>
          </div>
        </main>
      </div>
    </>
  )
}