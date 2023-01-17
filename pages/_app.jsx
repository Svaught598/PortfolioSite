import React, { useState, useEffect } from 'react'
import { str2bool } from 'utils';
import { AnimatePresence } from 'framer-motion/dist/framer-motion.js'

import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import 'animate.css'

function MyApp({ Component, pageProps }) {
  const [darkBackground, setDarkBackground] = useState(false)
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
    <Component {...pageProps} />
  )
}

export default MyApp
