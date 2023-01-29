import React from 'react';
import Head from 'next/head';
import useFadeIn from '../hooks/useFadeIn';

export default function Custom404() {
  const [ref, _] = useFadeIn();

  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta name="description" content="404 Page for svaught.com. Really, nothing very cool here. Surprised you're reading this tbh." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.ico" />
      </Head>

      <div ref={ref} className="h-screen w-screen bg-white relative opacity-0 transition-opacity duration-500 ease-in-out">
        <img className="absolute h-full w-full object-cover left-0 right-0 top-0 z-0" src={require('../public/images/404-bg-top.svg')} />
        <img className="absolute h-full w-full object-cover left-0 right-0 bottom-0 z-0" src={require('../public/images/404-bg-bottom.svg')} />
        <div className="relative mx-auto w-11/12 md:w-1/2 h-full flex flex-col justify-center items-start z-10">
          <h2 className="text-5xl md:text-9xl font-bungee text-persian-green">404!</h2>
          <p className="text-lg md:text-3xl font-exo text-charcoal-light">This page no longer exists. Or never did?</p>
          <a className="text-lg md:text-3xl font-exo text-burnt-sienna hover:text-sandy-brown underline transition duration-200 ease-in-out" href="/">Back to Main Page.</a>
        </div>
      </div>
    </>
  )
}