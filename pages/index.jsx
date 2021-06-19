import React from 'react'
import Head from 'next/head'
import clsx from 'clsx';

import Link from '../components/ui/Link.jsx'
import CenterLayout from '../components/layout/CenterLayout.jsx'


export default function Home(props) {
  const entrance = "animate__animated animate__lightSpeedInLeft"
  const delayEntrance = "animate__animated animate__lightSpeedInLeft animate__delay-1s"

  return (
    <>
      <Head>
        <title>Steven Vaught</title>
        <meta name="description" content="Portfolio Site of Steven Vaught" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CenterLayout { ...props }>
        <h1 
          className={clsx(
            "flex flex-col mb-5 text-3",
            "text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl",
            entrance
          )}
        >
          <span>My Name is <span className="text-2 ">Steven Vaught.</span></span>
          <span>I am a <span className="text-4">Software Developer.</span></span>
        </h1>

        <nav className={clsx("flex flex-col", delayEntrance)}>
          <Link
            content="About."
            destination="/about"
            animated={ true }
          />

          <Link 
            content="Projects."
            destination="/projects"
            animated={ true }
          />

          <Link
            content="Blog."
            destination="/blog"
            animated={ true }
          />

          <Link
            content="Contact."
            destination="/contact"
            animated={ true }
          />
        </nav>
      </CenterLayout>
    </>
  )
}
