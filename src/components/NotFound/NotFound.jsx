import React from 'react'
import errorImg from '../../assets/notFound.png'

import styles from './NotFound.module.css'
export default function NotFound() {
  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
      <img src={errorImg} alt="error" className={styles.img}/>
    </div>
  )
}
