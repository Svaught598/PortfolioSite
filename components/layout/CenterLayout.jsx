import React from 'react'


export default function CenterLayout(props) {
  return (
    <main className="main">
      <div id="wrapper">
        <div className="centered">
          <div className="d-flex justify-content-between flex-column">
            { props.children }
          </div>
        </div>
      </div>
    </main>
  )
}