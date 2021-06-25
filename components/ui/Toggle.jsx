import React from 'react'
import styles from '../../styles/Toggle.module.css'
import { str2bool } from '../../utils';



export default function Toggle({ value, setValue}) {
  const handleChange = (e) => {
    let newVal = str2bool(e.target.checked)
    setValue(newVal)
    console.log("changed, new value: ", value, newVal)
  };
  
  return (
    <label className={ styles.switch }>
      <input checked={ value } onChange={ handleChange } type="checkbox" />
      <span className={ styles.slider }></span>
    </label>
  )
}