import React, { useEffect } from 'react'
import Head from 'next/head'
import clsx from 'clsx';

import HeaderLayout from "components/layout/HeaderLayout"
import { HeroHeader, HeroLayout } from "components/layout/HeroLayout"
import styles from '../styles/PostLayout.module.css'

export default function ProjectLayout(props) {
  let { children, frontMatter, darkBackground } = props
  const delayEntrance ="animate__animated animate__fadeInUp delay04"
  const cardBackground = (darkBackground) ? "bg-gray" : "bg-charcoal"

  return (
    <div>
      <Head>
        <title>{ frontMatter.title }</title>
        <meta name="description" content={ frontMatter.title } />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <div className="main container mx-auto">
        <HeaderLayout { ...props } />
        <main className="md:my-48 sm:my-36 w-11/12 mx-auto">
          <article className="container mx-auto w-full md:w-9/12 lg:w-9/12">
            <HeroLayout>
              <HeroHeader>
                <span>{ frontMatter.title }</span>
                <span className="flex text-base mt-5">By { frontMatter.author }</span>
                <span className="flex text-base">{ frontMatter.date }</span>
              </HeroHeader>
            </HeroLayout>

            <div className={ clsx(cardBackground, delayEntrance, "p-5 rounded-xl shadow-xl color-transition mb-5") }>
              <div className={clsx("text-orange-yellow-crayola text-xl", styles.content)}>
                { children }
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}