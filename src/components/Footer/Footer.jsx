import React from 'react'
import styles from './Footer.module.css'
export default function Footer() {
  return (
  <>
   <footer>
    <div className='container'>
    <div className='row g-4'>
      <div className='col-12 col-md-6 col-lg-4'>
        <h3>location</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>

      <div className='col-12 col-md-6 col-lg-4'>
        <h3>around the web</h3>
        <div className='d-flex gap-3 align-items-center justify-content-center'>
        
        <div className={styles.icon}>
          <i className="fa-brands fa-facebook"></i>
        </div>

        <div className={styles.icon}>
          <i className="fa-brands fa-twitter"></i>
        </div>

        <div className={styles.icon}>
          <i className="fa-brands fa-linkedin"></i>
        </div>

        <div className={styles.icon}>
          <i className="fa-solid fa-globe"></i>
        </div>

        </div>
      </div>

      <div className='col-12 col-md-6 col-lg-4'>
        <h3>about freelancer</h3>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
    </div>
    </div>
   </footer>
   <div className={styles.copyRight}>
   Copyright © Your Website 2023
 </div>
  </>
  )
}
