import React from 'react'
import Header from './Header'

export default function CenterLayout(props) {

  return (
    <div className="main">
      <Header { ...props } />
      <main className="centered">
        <div className="d-flex justify-content-between flex-column">
          { props.children }
        </div>
      </main>
    </div>
  )
}