import React from 'react'
import styles from '../../styles/Toggle.module.css'

export default function Toggle({ value, setValue}) {
  const handleChange = (e) => {
    setValue(e.target.value)
    console.log("changed, new value: ", value, e)
  };
  console.log("created", value)

  return (
    <label className={ styles.switch }>
      <input value={ value } onChange={ handleChange } type="checkbox" />
      <span className={styles.slider}></span>
    </label>
  )
}