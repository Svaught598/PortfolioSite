import React from 'react'
import HeaderLayout from './HeaderLayout'

export default function CenterLayout(props) {

  return (
      <main className="mx-auto w-11/12 h-5/6">
        <div className="flex justify-center flex-col h-full xl:w-75">
          { props.children }
        </div>
        <div className="container w-75 lg:mx-auto">
          { props.content}
        </div>
      </main>
  )
}