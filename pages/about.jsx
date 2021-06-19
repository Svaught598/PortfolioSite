import React from 'react'
import Head from 'next/head'
import clsx from 'clsx';

import CenterLayout from '../components/layout/CenterLayout.jsx'


export default function About(props) {
  const entrance = "animate__animated animate__lightSpeedInLeft"
  const delayEntrance ="animate__animated animate__lightSpeedInLeft animate__delay-1s"

  return (
    <>
      <Head>
        <title>About - Steven Vaught</title>
        <meta name="description" content="About Steven Vaught" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CenterLayout { ...props }>
        <h1 
          className={clsx(
            "mb-5 text-3",
            "text-2xl xs:text-3xl sm:text-5xl lg:text-6xl xl:text-8xl",
            entrance
          )}
        >
          I <span className="text-4">design</span> &amp; <span className="text-2 bold">build</span> software.
        </h1>
        <p className={"h1 text-3 " + delayEntrance}>Sometimes for fun.</p>
        <p className={"h1 text-3 " + delayEntrance}>TODO: Build this page out.</p>
      </CenterLayout>
    </>
  )
}