import React from 'react'
import Toggle from '../ui/Toggle.jsx'
import Link from 'next/link'


export default function Header({ darkBackground, setDarkBackground }) {
  
  function toggleBackground() {
    setDarkBackground(!darkBackground)
  }

  return (
    <header className="container d-flex justify-content-between p-3">
      <Link href="/">
        <a className="logoFont">
          <span className="text-2">S</span>
          <span className="text-3">V</span>
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