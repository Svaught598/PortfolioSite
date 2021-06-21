import React from 'react'
import Head from 'next/head'

import HeaderLayout from 'components/layout/HeaderLayout';
import { HeroLayout, HeroHeader } from 'components/layout/HeroLayout';


export default function Blog(props) {

  return (
    <>
      <Head>
        <title>Blog - Steven Vaught</title>
        <meta name="description" content="Blog Steven Vaught" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main container mx-auto w-75">
        <HeaderLayout { ...props } />
        <main className="xl:my-72  w-6/12 mx-auto">

          <HeroLayout>
            <HeroHeader>
              <span>Articles I've <span className="text-2">written.</span></span>
            </HeroHeader>
          </HeroLayout>
        </main>
      </div>
    </>
  )
}