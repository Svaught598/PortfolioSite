import React from 'react'
import styles from '../../styles/Toggle.module.css'

export default function Toggle({ value, setValue}) {

  const triggerToggle = () => {
    setValue(!value)
  }

  return (
    <label className={ styles.switch }>
      <input onChange={ triggerToggle } type="checkbox" />
      <span className={styles.slider}></span>
    </label>
  )
}