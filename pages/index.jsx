import React from 'react'
import Head from 'next/head'
import clsx from 'clsx';

import Link from 'components/ui/Link.jsx'
import HeaderLayout from 'components/layout/HeaderLayout.jsx';
import { HeroLayout, HeroHeader } from 'components/layout/HeroLayout.jsx';


export default function Home(props) {
  const delayEntrance = "animate__animated animate__fadeInUp delay04"
  
  return (
    <>
      <Head>
        <title>Steven Vaught</title>
        <meta name="description" content="Portfolio Site of Steven Vaught" />
        <link rel="icon" href="images/favicon.ico" />
      </Head>

      <div className="main container mx-auto w-75">
        <HeaderLayout { ...props } />
        <main className="w-11/12 mx-auto h-50">
          <HeroLayout>
            <HeroHeader>
              <span>My Name is <span className="text-persian-green">Steven Vaught.</span></span>
              <span>I am a <span className="text-sandy-brown">Software Developer.</span></span>
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
