import React, { useState } from 'react'
import ParticleBackground from '../components/ui/ParticleBackground.jsx'

import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.css'
import "tailwindcss/tailwind.css"
import 'animate.css'

function MyApp({ Component, pageProps }) {
  const [darkBackground, setDarkBackground] = useState(false)

  pageProps.darkBackground = darkBackground
  pageProps.setDarkBackground = setDarkBackground

  return (
    <>
      <Component { ...pageProps } />
      <ParticleBackground darkMode={ darkBackground } />
    </>
  )
}

export default MyApp
