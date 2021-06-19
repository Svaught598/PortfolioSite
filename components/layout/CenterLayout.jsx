import React from 'react'
import Header from './Header'

export default function CenterLayout(props) {

  return (
    <div className="main h-screen">
      <Header { ...props } />
      <main className="mx-auto w-11/12 h-5/6">
        <div className="flex justify-center flex-col h-full">
          { props.children }
        </div>
      </main>
    </div>
  )
}