import React from 'react'
import clsx from 'clsx';
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProjectCard(props) {
  const {title, description, imageLink, githubLink, path} = props

  const cardClass = clsx(
    "bg-1 shadow-2xl rounded-xl flex flex-col justify-between",
    "grow projectCard"
  )

  return (
    <div className={ cardClass }>
      <div>
        <div className="h-80">
          <img
            className="rounded-t-xl w-100 object-cover max-h-full min-h-full"
            src={ require(`../../public${ imageLink }`)}
            width="500" height="325"
          />
        </div>

        <div className="flex justify-between">
          <Link href={ path }>
            <a className="text-3 text-xl xl:text-4xl p-3">{ title }</a>
          </Link>
          <a href={ githubLink } className="xl:max-h-10 md:max-h-8 max-h-8 m-3 w-10">
            <FontAwesomeIcon icon={ faGithub } className="h-full" fill="black"/>
          </a>
        </div>
      </div>

      <div>
        <p className="text-3 text-md xl:text-2xl px-3 pb-3">{ description }</p>
      </div>
    </div>
  )
}