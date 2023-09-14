import React from 'react'
import styles from './Heading.module.css'


export default function Heading({header,color}) {
  return (
    <>
    <h1 className={styles.header} style={{color:color}}>{header}</h1>
    <div  className="d-flex align-items-center justify-content-center mb-3">
        <div className={`me-3 ${styles.line}`} style={{backgroundColor:color}}></div>
        <i className="fa-solid fa-star" style={{color:color}}></i>
        <div  className={`ms-3 ${styles.line}`} style={{backgroundColor:color}}></div>
    </div>
    </>
  )
}
