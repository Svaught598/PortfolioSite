import React from 'react';
import Head from 'next/head';
import { promises as fs } from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import useEasterEgg from '../hooks/useEasterEgg';

import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import About from '../components/landing/About';
import Contact from '../components/landing/Contact';
import Footer from '../components/landing/Footer';
import Projects from '../components/landing/Projects';
import Testimonials from '../components/landing/Testimonials';
import Overlay from '../components/landing/Overlay';

export default function Home({ projects }) {
  useEasterEgg();
  
  return (
    <>
      <Head>
        <title>Steven Vaught</title>
        <link rel="icon" href="images/favicon.ico" />
        <meta name="description" content="Steven Vaught's Porftolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Steven Vaught's Portfolio" />
        <meta property="og:description" content="Need a website built? Have a cat that needs to be watched? We offer these services and more! Visit now to see how we can help you achieve your dreams today." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://svaught.com" />
        <meta property="og:image" content="https://svaught.com/images/og-pic.png" />

        <meta property="twitter:title" content="Steven Vaught's Portfolio" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://svaught.com/images/og-pic.png" />
      </Head>
      <Overlay />
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