import React, { useState, useEffect } from 'react'
import Particles, { ShapeType } from 'react-particles-js'

import styles from '../../styles/ParticleBackground.module.css'


export default function ParticleBackground({ darkMode }) {

  return (
    <div
      className={ (darkMode) ? styles.particlesDark : styles.particlesLight }>
      <Particles
        params={{
          particles: {
            number: {
              density: {
                value: 20,
                enable: true,
                value_area: 600,
              }
            },
            color: {
              value: darkMode ? '#FFFFFF' : '#e76f51'
            },
            shape: {
              stroke: {
                width: darkMode ? 5 : 10,
                color: darkMode ? '#FFFFFF' : '#e76f51',
              },
              polygon: {
                nb_sides: '7',
              },
              type: ShapeType.Circle
            },
            size: {
              value: darkMode ? 5 : 15,
              random: true,
            },
            opacity: {
              anim: {
                enable: false,
              }
            },
            lineLinked: {
              enable: !darkMode,
              distance: 200,
              color: '#f4a261',
              warp: true,
            },
            move: {
              enable: true,
              random: true,
              speed: 1,
              outMode: 'bounce',
            },
          },
          polygon: {
            enable: true,
          }
        }
      }
      />
    </div>
  )
}