import React from 'react'
import Head from 'next/head'
import { promises as fs } from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'

import HeaderLayout from 'components/layout/HeaderLayout.jsx';
import { HeroLayout, HeroHeader } from 'components/layout/HeroLayout';
import ProjectCard from 'components/layout/ProjectCard';


export default function Projects(props) {
  const entrance = "animate__animated animate__lightSpeedInLeft"
  const delayEntrance ="animate__animated animate__lightSpeedInLeft animate__delay-1s"
  const { projects } = props

  return (
    <>
      <Head>
        <title>Projects - Steven Vaught</title>
        <meta name="description" content="Projects Steven Vaught" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main container mx-auto w-75">
        <HeaderLayout { ...props } />
        <main className="w-11/12 mx-auto h-50">

          <HeroLayout>
            <HeroHeader>
              <span>Some things I've <span className="text-2">built...</span></span>
            </HeroHeader>
          </HeroLayout>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
            { projects.map(project => {
              return (
                <div key={ project.title }>
                  <a>
                    <ProjectCard { ...project } />
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
  const projectsDir = path.join(process.cwd(), 'pages/projects');
  const filenames = await fs.readdir(projectsDir)

  const files = await Promise.all(filenames.map(async filename => {
    const filePath = path.join(projectsDir, filename);
    const content = await fs.readFile(filePath, 'utf8');
    const matter = grayMatter(content);
    return {
      filename, 
      matter
    }
  }))

  const projects = files.map(file => {
    return {
      path: `/projects/${file.filename.replace('.mdx', '')}`,
      title: file.matter.data.title,
      description: file.matter.data.description,
      githubLink: file.matter.data.githubLink,
      imageLink: file.matter.data.imageLink,
    }
  })

  return {
    props: {
      projects,
    }
  }
}

