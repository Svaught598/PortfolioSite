import React from 'react'
import clsx from 'clsx';


export function HeroLayout(props) {
  return (
    <div
      className={clsx(
        "flex justify-center flex-col h-full",
        "my-8 xl:my-24",
      )}
    >
      { props.children }
    </div>
  )
}

export function HeroHeader(props) {
  const entrance = "animate__animated animate__flipInX"

  return (
    <h1
      className={clsx(
        "flex flex-col mb-5 text-orange-yellow-crayola font-extrabold",
        "text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl",
        entrance
      )}
    >
      { props.children }
    </h1>
  )
}