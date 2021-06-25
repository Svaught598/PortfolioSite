import React from 'react'
import clsx from 'clsx';
import Toggle from '../ui/Toggle.jsx'
import Link from 'next/link'


export default function HeaderLayout({ darkBackground, setDarkBackground }) {

  return (
    <header className="mx-auto my-3 flex justify-between w-11/12 lg:w-11/12 xl:w-11/12">
      <Link href="/">
        <a className="logoFont">
          <span className="text-2 text-5xl lg:text-6xl xl:text-6xl">S</span>
          <span className="text-3 text-5xl lg:text-6xl xl:text-6xl">V</span>
        </a>
      </Link>

      <div className="mt-2">
        <Toggle
          value={darkBackground}
          setValue={setDarkBackground}
        />
      </div>
    </header>
  )
}