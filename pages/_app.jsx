import React, { useState, useEffect } from 'react'
import { str2bool } from 'utils';

import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import 'animate.css'

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
