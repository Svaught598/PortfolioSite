import React from 'react'
import NextLink from 'next/link'


export default function Link({ content, destination, animated }) {

  function beginAnimation(e) {
    e.target.className="link animate__animated animate__jello"
  } 

  function stopAnimation(e) {
    e.target.className="link"
  }

  return (
    <NextLink href={destination}>
      <a
        onMouseOver={ (animated) ? beginAnimation : null }
        onMouseLeave={ (animated) ? stopAnimation : null }
        className="link"
      >
          {content}
      </a>
    </NextLink>
  )
}