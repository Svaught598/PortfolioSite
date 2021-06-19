import React from 'react'
import Head from 'next/head'
import clsx from 'clsx';

import Link from 'components/ui/Link.jsx'
import HeaderLayout from 'components/layout/HeaderLayout.jsx';
import { HeroLayout, HeroHeader } from 'components/layout/HeroLayout.jsx';


export default function Home(props) {
  const delayEntrance = "animate__animated animate__lightSpeedInLeft animate__delay-1s"
  
  return (
    <>
      <Head>
        <title>Steven Vaught</title>
        <meta name="description" content="Portfolio Site of Steven Vaught" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main container mx-auto w-75">
        <HeaderLayout { ...props } />
        <main className="xl:my-72 w-11/12 mx-auto">
          <HeroLayout>
            <HeroHeader>
              <span>My Name is <span className="text-2">Steven Vaught.</span></span>
              <span>I am a <span className="text-4">Software Developer.</span></span>
            </HeroHeader>

            <nav className={clsx("flex flex-col", delayEntrance)}>
              <Link
                content="About."
                destination="/about"
                animated={true}
              />

              <Link
                content="Projects."
                destination="/projects"
                animated={true}
              />

              <Link
                content="Blog."
                destination="/blog"
                animated={true}
              />

              <Link
                content="Contact."
                destination="/contact"
                animated={true}
              />
            </nav>
          </HeroLayout>
        </main>
      </div>
    </>
  )
}
