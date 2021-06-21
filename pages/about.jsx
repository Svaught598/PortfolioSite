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
        <main className="xl:my-72  w-6/12 mx-auto">

          <HeroLayout>
            <HeroHeader>
              <span><span className="text-2">About</span> Me.</span>
            </HeroHeader>
          </HeroLayout>
          
          <div className={clsx("flex flex-col space-y-10", delayEntrance)}>
            <p className="text-xl text-3 w-50 mx-auto">
              I'm a software developer based in <span className="text-2">Phoenix AZ</span> working with modern web technologies. Currently, I'm an Accessibility Specialist at <a href="https://www.seewritehear.com/" target="_blank" className="text-4 link-xl">SeeWriteHear</a> focused on building accessible, internal web-apps to improve workflow management.
            </p>
            <p className="text-xl text-3">
              Cool stuff I'm into includes (but is not limited to) Emulators, Math, and the area where they intersect: <a href="https://www.reddit.com/r/itrunsdoom/" className="text-5 link-xl flex">All the places you can run Doom</a>
            </p>
          </div>
        </main>
      </div>
    </>
  )
}