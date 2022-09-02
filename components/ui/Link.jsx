import React, { useState } from 'react'
import NextLink from 'next/link'
import clsx from 'clsx'


export default function Link({ content, destination, animated, icon }) {
  const [mouseOver, setMouseOver] = useState(false)

  function handleMouseOver(e) {
    if (e.type === "mouseover") return setMouseOver(true)
    return setMouseOver(false)
  }

  function getIcon() {
    if (icon) {
      return <img
        className="inline h-100 mr-4"
        src={ require(`../../public/images/${ icon }.svg`)}
        height="64" width="64"
      />
    }
  }

  return (
    <NextLink href={destination}>
      <a
        onMouseOver={ handleMouseOver }
        onMouseLeave={ handleMouseOver }
        className={clsx(
          "link my-0", 
          "leading-normal lg:leading-normal xl:leading-normal",
          "text-5xl lg:text-5xl xl:text-7xl",
          animated && mouseOver && "animate__animated animate__headShake",
        )}
      >
          { getIcon() }
          { content }
      </a>
    </NextLink>
  )
}