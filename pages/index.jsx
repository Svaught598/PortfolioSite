import React, { useEffect } from 'react'
import Head from 'next/head'
import { promises as fs } from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'

import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import About from '../components/landing/About';
import Contact from '../components/landing/Contact';
import Footer from '../components/landing/Footer';
import Projects from '../components/landing/Projects';
import Testimonials from '../components/landing/Testimonials';

export default function Home({ projects }) {
  useEffect(() => {
    console.log(`%c
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢁⣴⣶⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣼⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢰⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠟⠛⠛⠛⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢰⣿⣿⣿⣿⡇⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢛⣋⣭⣵⣶⣶⣿⣿⠀⠀⠀⣀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⡿⢟⣃⣋⣭⣭⣭⣭⣙⣛⣛⠻⠿⣿⡿⠟⣋⣥⣶⣿⣿⣿⣿⣿⣿⣿⣿⠃⣀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠸⣫⣽⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡗⣀⣴⣿⣿⣿⣿⣿⣿⣿⣿⠿⢛⣩⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⣛⣭⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢠⣿⠟⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⡄⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠛⢛⣛⡋⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⣾⠁⠀⠿⠂⢹⣿⣿⣿⣿⣿⣿⣿⡟⠁⣶⡀⠙⣿⣿⣿⡇⢿⣿⣿⡿⠟⣛⣫⣭⣴⣶⣶⣿⣿⣿⣿⡿⢡⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢰⣿⣆⣀⣀⣠⣾⣿⣏⣙⣿⣿⣿⣿⣇⠀⠀⠀⢀⣿⣿⣿⡧⢘⣩⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢃⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣙⠻⣿⣿⡟⠿⠿⠋⣠⣉⠻⢿⣿⣿⢿⣿⣶⣾⣿⣿⣿⣿⡇⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⣾⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢸⣿⣷⢸⣿⣿⣇⢁⣾⣿⣿⣿⣶⣶⢰⣿⣿⣿⠟⣩⣶⣬⡛⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡘⠿⢃⣼⣿⣿⣿⡘⣿⣿⣿⣿⣿⡇⣼⣿⣿⣿⠘⣿⣿⣿⠇⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢏⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡘⢿⣿⣿⣿⣿⣧⠹⣿⣿⣿⡟⣰⣿⣿⣿⣿⣷⣌⣛⣩⣼⢠⣿⣿⣿⡁⣤⣤⣤⣤⣤⣤⣤⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠹⣿⣿⣿⣿⣷⣙⠿⢋⣴⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⣦⡙⣿⣿⣧⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢸⣦⣙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⣋⣴⣇⢸⣷⡌⢿⣿⡆⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢃⠿⣿⣿⣷⣦⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⣿⣿⠈⣋⣥⣾⣿⠿⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢋⣾⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠹⢋⣥⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⡈⢹⣿⠟⢋⣘⠻⠸⣿⣿⣿⣿⣿⣿⣿⡍⣿⢠⣿⣿⣿⣿⣿⣿⣿⡿⢸⠟⠂⡙⠻⡿⠋⠉⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⠃⠂⢡⣾⣿⣿⣿⡆⢿⣿⣿⣿⣿⣿⣿⣷⠈⣼⣿⣿⣿⣿⣿⣿⣿⠃⣶⣾⣿⣿⡟⡠⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠈⣶⣾⡌⣿⣿⣿⣿⣷⠘⣿⣿⣿⣿⣿⣿⣿⠄⣿⣿⣿⣿⣿⣿⣿⠏⣼⣿⣿⣿⣿⣰⣿⣿⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⢹⣿⣷⢸⣿⣿⣿⣿⣧⠹⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⠏⣼⣿⣿⣿⣿⣿⣿⣿⠇⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡌⢿⣿⣦⣿⣿⣿⣿⣿⣧⠹⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⠏⣼⣿⣿⣿⣿⡿⢻⣿⡟⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡌⢿⠏⠿⠿⠿⣿⣿⣿⣧⠙⠿⣿⣿⣿⢸⣿⣿⣿⡿⢋⣼⣿⣿⣿⣿⣿⡇⢸⡟⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣷⣶⣶⣶⣦⣄⣀⣁⣁⣄⣬⡙⣙⢉⢉⣀⣤⣤⣬⣭⣭⣥⣤⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿

 EASTER EGG! 

 Now I get to tell you something super cool for finding this! 
 Regardless of color, all the loops in Froot Loops are the same flavor. 
 Weird, right?

 Also, look at the code if you want!

 Written with Next.js & Tailwind, although that's definitely overkill for this site...
 https://github.com/Svaught598/PortfolioSite
`, 'color: orange; background-color: black;');
  }, []);
  
  return (
    <>
      <Head>
        <title>Steven Vaught</title>
        <meta name="description" content="Portfolio Site of Steven Vaught" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.ico" />
      </Head>


      <Header />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Testimonials />
      <Contact />
      <Footer />
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