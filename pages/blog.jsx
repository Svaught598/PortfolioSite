import React from 'react'
import Head from 'next/head'
import { promises as fs } from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'

import HeaderLayout from 'components/layout/HeaderLayout';
import { HeroLayout, HeroHeader } from 'components/layout/HeroLayout';
import PostCard from 'components/layout/PostCard'


export default function Blog(props) {
  const delayEntrance ="animate__animated animate__fadeInUp delay04"
  const { posts } = props

  return (
    <>
      <Head>
        <title>Blog - Steven Vaught</title>
        <meta name="description" content="Blog Steven Vaught" />
        <link rel="icon" href="images/favicon.ico" />
      </Head>

      <div className="main container mx-auto w-75">
        <HeaderLayout { ...props } />
        <main className="w-11/12 md:w-6/12 mx-auto h-50">

          <HeroLayout>
            <HeroHeader>
              <span>Articles I've <span className="text-persian-green">written.</span></span>
            </HeroHeader>
          </HeroLayout>

          <div className="grid grid-col-1 gap-4 my-10 w-full">
            { posts.map(post => {
              return (
                <div key={ post.title } className={ delayEntrance }>
                  <a>
                    <PostCard { ...post } darkMode={ props.darkBackground }/>
                  </a>
                </div>
              )
            })}
          </div>
        </main>
      </div>
    </>
  )
}


export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'pages/posts');
  const filenames = await fs.readdir(postsDir)

  const files = await Promise.all(filenames.map(async filename => {
    const filePath = path.join(postsDir, filename);
    const content = await fs.readFile(filePath, 'utf8');
    const matter = grayMatter(content);
    return {
      filename, 
      matter,
    }
  }))

  const posts = files.map(file => {
    return {
      path: `/posts/${file.filename.replace('.mdx', '')}`,
      title: file.matter.data.title,
      description: file.matter.data.description,
    }
  })

  return {
    props: {
      posts,
    }
  }
}