import React from 'react'

import styles from './Layer.module.css'
export default function Layer() {
  return (
    <div 
    className={`position-absolute  top-0 
     h-100 w-100 rounded-3 opacity-0
     d-flex justify-content-center align-items-center
    layerImg ${styles.layer}`}>
      <i className={`fa-solid fa-plus text-white fw-bold ${styles.plus}`}></i>
    </div>
  )
}
