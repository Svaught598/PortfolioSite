import React from 'react'
import Head from 'next/head'

import HeaderLayout from 'components/layout/HeaderLayout';
import { HeroLayout, HeroHeader } from 'components/layout/HeroLayout';


export default function Blog(props) {
  const delayEntrance ="animate__animated animate__fadeInUp delay04"
  
  return (
    <>
      <Head>
        <title>Blog - Steven Vaught</title>
        <meta name="description" content="Blog Steven Vaught" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main container mx-auto w-75">
        <HeaderLayout { ...props } />
        <main className="w-11/12 md:w-6/12 mx-auto h-50">

          <HeroLayout>
            <HeroHeader>
              <span>Articles I've <span className="text-persian-green">written.</span></span>
            </HeroHeader>
          </HeroLayout>
        </main>
      </div>
    </>
  )
}