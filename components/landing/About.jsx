import React, { useState, useEffect } from 'react';
import SkillsCard from '../ui/SkillsCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  const [index, setIndex] = useState(0);
  const roles = [
    "A Programmer",
    "A Designer",
    "A Mentor",
    "A Guitarist",
    "A Human",
    "🐈🐕💞"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      document.getElementById('role').classList.toggle('opacity-0');
      setTimeout(() => {
        setIndex(i => (i + 1 >= roles.length) ? 0 : i + 1)
        document.getElementById('role').classList.toggle('opacity-0');
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about-section" className="bg-gradient-to-br from-charcoal to-persian-green">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row items-start py-12 md:py-24">
        <h2 className='flex-1 font-bungee text-sandy-brown text-3xl pb-12 md:p-0 md:text-5xl'>
          Hi, I'm Steven<br/>
          <span id='role' className='text-orange-yellow-crayola transition-all ease-in-out duration-500'>{ roles[index] }</span>
        </h2>
        <div className='flex-1 text-right'>
          <p className='text-left md:text-right font-exo font-black text-sm md:text-xl text-orange-yellow-crayola mb-6 md:mb-12'>
            I'm a problem solver - first and foremost - with an ability to
            break down complex machinations into simpler ideas.
          </p>
          <p className='text-left md:text-right font-exo font-black text-sm md:text-xl text-orange-yellow-crayola mb-6 md:mb-12'>
            I currently work for <a href="https://letmegooglethat.com/?q=American+Airlines" className='underline text-sandy-brown hover:text-burnt-sienna transition-colors duration-300 ease-in-out'>American Airlines</a>,
            rebuilding the frontend of a legacy AngularJS application.
          </p>
          <p className='text-left md:text-right font-exo font-black text-sm md:text-xl text-orange-yellow-crayola'>
            My best work happens when I organize things. Whether that is visual design,
            architectural planning, or plain prioritization is inconsequential.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12 md:w-10/12 mx-auto pb-12 md:pb-24'>
        <SkillsCard header="What.">
          <ul className='list-disc ml-4 md:ml-8'>
            <li className='text-sm md:text-xl font-exo font-bold text-charcoal-lighter mb-2'>
              Custom Websites (optional CMS integrations)
            </li>
            <li className='text-sm md:text-xl font-exo font-bold text-charcoal-lighter mb-2'>
              Maintenance and Support for existing systems
            </li>
            <li className='text-sm md:text-xl font-exo font-bold text-charcoal-lighter mb-2'>
              Technical Consulting and IT Strategy
            </li>
            <li className='text-sm md:text-xl font-exo font-bold text-charcoal-lighter mb-2'>
              Manual Labor
            </li>
          </ul>
        </SkillsCard>
        <SkillsCard header="How.">
          <p className='text-sm md:text-xl font-exo font-bold text-charcoal-lighter mb-4'>
            When given a choice, my preferred stack for web development is the <a href="https://create.t3.gg" className='text-burnt-sienna hover:text-orange-yellow-crayola duration-300 transition-colors ease-in-out'>T3 Framework</a>.
          </p>
          <p className='text-sm md:text-xl font-exo font-bold text-charcoal-lighter mb-2'>
            Of course, the specifications of given project ultimately dictate the right tool for the job.
          </p>
        </SkillsCard>
        <SkillsCard header="When.">
          <a href="/" className='text-5xl md:text-7xl font-bungee text-burnt-sienna mb-2 hover:text-orange-yellow-crayola transition-colors duration-300 ease-in-out'>
            Reach out now!
          </a>
          <button className='md:hidden flex flex-row items-center gap-2 mt-6 px-4 py-2 text-sm bg-white font-bold text-burnt-sienna border-2 border-burnt-sienna rounded-xl'>
            <FontAwesomeIcon className='text-2xl' icon={faEnvelope} />
            Get in Touch
          </button>
        </SkillsCard>
      </div>
    </section>
  );
}