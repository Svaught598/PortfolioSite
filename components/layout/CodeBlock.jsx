import hljs from 'highlight.js'
import React, { useEffect } from 'react'
import 'highlight.js/styles/base16/material-darker.css';


export default function CodeBlock(props) {
  const { lang } = props

  useEffect(() => {
    document.querySelectorAll('pre code').forEach((el) => {
      console.log(lang)
      hljs.configure({ languages: [lang] })
      hljs.highlightElement(el)
    })
  }, [])

  return (
    <>
    </>
  )
}