import React from 'react'
import Head from 'next/head'

import CenterLayout from '../components/layout/CenterLayout.jsx'


export default function Contact(props) {
  const entrance = "animate__animated animate__lightSpeedInLeft"
  const delayEntrance ="animate__animated animate__lightSpeedInLeft animate__delay-2s"

  return (
    <>
      <Head>
        <title>Contact - Steven Vaught</title>
        <meta name="description" content="Contact Steven Vaught" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CenterLayout { ...props }>
        <h1 className={"text-3 " + entrance}>
        <span className="text-2">Reach out</span> to me.
        </h1>
        <p className={"h1 text-3 " + delayEntrance}>TODO: Build this page out.</p>
      </CenterLayout>
    </>
  )
}