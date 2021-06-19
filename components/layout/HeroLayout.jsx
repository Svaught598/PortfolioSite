import React from 'react'
import clsx from 'clsx';


export function HeroLayout(props) {
  return (
    <div
      className={clsx(
        "flex justify-center flex-col h-full",
        "my-12 xl:my-24",
      )}
    >
      { props.children }
    </div>
  )
}

export function HeroHeader(props) {
  const entrance = "animate__animated animate__lightSpeedInLeft"

  return (
    <h1
      className={clsx(
        "flex flex-col mb-5 text-3",
        "text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl",
        entrance
      )}
    >
      { props.children }
    </h1>
  )
}