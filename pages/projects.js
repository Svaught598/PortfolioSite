import React from 'react'
import Head from 'next/head'

import CenterLayout from '../components/layout/CenterLayout.jsx'


export default function Projects() {
  const entrance = "animate__animated animate__lightSpeedInLeft"
  const delayEntrance ="animate__animated animate__lightSpeedInLeft animate__delay-2s"

  return (
    <>
      <Head>
        <title>Projects - Steven Vaught</title>
        <meta name="description" content="Projects Steven Vaught" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CenterLayout>
        <h1 className={"text-3 " + entrance}>
          Software I've <span className="text-2">built.</span>
        </h1>
        <p className={"h1 text-3 " + delayEntrance}>TODO: Build this page out.</p>
      </CenterLayout>
    </>
  )
}