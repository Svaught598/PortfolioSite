import React from 'react'
import Head from 'next/head'

export default function ProjectLayout(props) {
  let { children, frontMatter } = props;

    return (
      <div>
        <Head>
          <title>{ frontMatter.title }</title>
          <meta name="description" content={ frontMatter.title } />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>

        { children }
      </div>
    )
}