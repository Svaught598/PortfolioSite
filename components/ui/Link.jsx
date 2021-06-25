import React, { useState } from 'react'
import NextLink from 'next/link'
import clsx from 'clsx'


export default function Link({ content, destination, animated }) {
  const [mouseOver, setMouseOver] = useState(false)

  function handleMouseOver(e) {
    if (e.type === "mouseover") return setMouseOver(true)
    return setMouseOver(false)
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
          {content}
      </a>
    </NextLink>
  )
}