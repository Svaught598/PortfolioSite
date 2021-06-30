import React from 'react'
import clsx from 'clsx';
import Link from 'next/link'


export default function PostCard(props) {
  const {title, description, path, darkMode} = props

  const cardClass = (darkMode)
    ? clsx(
      "bg-gray shadow-2xl rounded-xl flex flex-col justify-between",
      "grow")
    : clsx(
      "bg-charcoal shadow-2xl rounded-xl flex flex-col justify-between",
      "grow")

  return (
    <a href={ path } aria-label={ title } >
      <div className={ cardClass }>
        <div>
          <div className="flex justify-between">
            <h2 className="text-orange-yellow-crayola text-xl xl:text-4xl p-3">{ title }</h2>  
          </div>
        </div>

        <div>
          <p className="text-orange-yellow-crayola text-md xl:text-2xl px-3 pb-3">{ description }</p>
        </div>
      </div>
    </a>
  )
}