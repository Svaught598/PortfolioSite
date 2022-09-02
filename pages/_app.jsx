import React, { useState, useEffect } from 'react'
import ParticleBackground from '../components/ui/ParticleBackground.jsx'
import { str2bool } from 'utils';

import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import 'animate.css'

function MyApp({ Component, pageProps }) {
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const [darkBackground, setDarkBackground] = useState(prefersDarkMode)
  pageProps.darkBackground = darkBackground
  pageProps.setDarkBackground = setDarkBackground

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode != null)
      setDarkBackground(str2bool(darkMode))
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', darkBackground)
  }, [darkBackground])

  return (
    <>
      <Component {...pageProps} />
      <ParticleBackground darkMode={darkBackground} />
    </>
  )
}

export default MyApp
