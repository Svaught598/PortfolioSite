import React from 'react'
import ParticleBackground from '../components/ui/ParticleBackground'

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ParticleBackground />
    </>
  )
}

export default MyApp
