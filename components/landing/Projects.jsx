import React, { useState, useEffect } from 'react';
import ProjectCard from '../ui/ProjectCard';

export default function Projects({ projects }) {
  console.log(projects)

  return (
    <section className="bg-gray">
      <div className="w-10/12 mx-auto flex flex-row items-start py-24">
        <h2 className='flex-1 font-bungee text-charcoal text-5xl'>
          Projects
        </h2>
        <div className='flex-1 text-right'>
          <p className='text-right font-exo font-black text-xl text-charcoal mb-12'>
            Most of the code I write professionally is private,
            but here are some cool things I had the pleasure of working on.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 w-10/12 mx-auto pb-24'>
        { projects.map(p => <ProjectCard project={p} />)}
      </div>
    </section>
  );
}