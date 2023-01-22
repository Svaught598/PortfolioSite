import React from 'react';
import ProjectCard from '../ui/ProjectCard';

export default function Projects({ projects }) {
  return (
    <section className="bg-gray">
      <div className="w-10/12 sm:w-8/12 lg:w-10/12 mx-auto flex flex-col lg:flex-row items-start py-12 lg:pt-24">
        <h2 className='flex-1 font-bungee text-charcoal text-3xl pb-12 lg:p-0 lg:text-5xl'>
          Projects
        </h2>
        <div className='flex-1 text-right'>
          <p className='text-left lg:text-right font-exo font-black text-sm lg:text-xl text-charcoal lg:mb-12'>
            Most of the code I write professionally is private,
            but here are some cool things I had the pleasure of working on.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-11/12 sm:w-8/12 md:w-10/12 mx-auto pb-12 md:px-24 lg:p-24'>
        { projects.map(p => <ProjectCard key={p.title} project={p} />)}
      </div>
    </section>
  );
}