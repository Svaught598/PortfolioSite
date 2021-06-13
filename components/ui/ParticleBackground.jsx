import React, { useEffect } from 'react'
import Particles from 'react-particles-js'

import styles from '../../styles/ParticleBackground.module.css'


export default function ParticleBackground() {

  return (
    <div className={styles.particles}>
      <Particles
        params={{
          particles: {
            number: {
              density: {
                value: 80,
                enable: true,
                value_area: 400,
              }
            },
            shape: {
              stroke: {
                width: 4,
                color: '#e76f51',
              },
              type: "polygon"
            },
            lineLinked: {
              enable: true,
              distance: 150,
              color: '#f4a261',
            },
            move: {
              enable: true,
              random: true,
              speed: 2,
              outMode: 'bounce',
            }
          }
        }}
      />
    </div>
  )
}