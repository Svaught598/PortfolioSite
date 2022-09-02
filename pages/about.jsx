import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import clsx from 'clsx';

import { HeroLayout, HeroHeader } from 'components/layout/HeroLayout';
import HeaderLayout from 'components/layout/HeaderLayout';



export default function About(props) {
  const delayEntrance ="animate__animated animate__fadeInUp delay04"
  const darkMode = props.darkBackground
  const card = (darkMode) 
    ? 'bg-gray color-transition'
    : 'bg-charcoal color-transition'

  return (
    <>
      <Head>
        <title>About - Steven Vaught</title>
        <meta name="description" content="About Steven Vaught" />
        <link rel="icon" href="images/favicon.ico" />
      </Head>

      <div className="main container mx-auto w-75">
        <HeaderLayout { ...props } />
        <main className="w-11/12 md:w-6/12 mx-auto h-50">

          <HeroLayout>
            <HeroHeader>
              <span><span className="text-persian-green">About</span> Me.</span>
            </HeroHeader>
          </HeroLayout>
          
          <div className={clsx("flex flex-col space-y-10 p-5 mb-5 rounded-xl shadow-xl", card, delayEntrance)}>
            <p className="text-xl text-orange-yellow-crayola w-50 mx-auto">
              I'm a software developer based in <span className="text-persian-green">Phoenix AZ</span> working with modern web technologies. Currently, I'm at <a href="https://www.aa.com/" target="_blank" className="text-burnt-sienna link-xl underline">American Airlines</a> focused on rewriting a legacy AngularJS application with Angular 12, Typescript, and RxJS.
            </p>
            <p className="text-xl text-orange-yellow-crayola">
              Cool stuff I'm into includes (but is not limited to) Emulators, Math, and the area where they intersect: <a href="https://www.reddit.com/r/itrunsdoom/" target="_blank" className="text-burnt-sienna link-xl underline">All the places you can run Doom</a>
            </p>
            <p className="text-xl text-orange-yellow-crayola">
              I mostly work with <a href="https://angular.io/" target="_blank" className="text-persian-green link-xl underline">Angular 12</a>, <a href="https://kotlinlang.org/" target="_blank" className="text-persian-green link-xl underline">Kotlin</a>, &amp; <b className="text-persian-green">PostgreSQL</b> day-to-day, but love learning new things in my free time. I really like <a href="https://www.lexaloffle.com/pico-8.php" target="_blank" className="text-persian-green link-xl underline">PICO-8</a>, and spend some free time making minimal games.
            </p>
            <p className="text-xl text-orange-yellow-crayola">
              Here's my <a className="text-burnt-sienna link-xl underline" href="https://www.svaught.com/resume.pdf" target="_blank">most recent resume</a>. <span>Here is <Link href={ "/contact" }><a className="text-burnt-sienna link-xl underline">how to get in touch with me </a></Link></span>
            </p>
          </div>
        </main>
      </div>
    </>
  )
}