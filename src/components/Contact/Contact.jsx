import React from 'react'

import Heading from '../Heading/Heading'

import styles from './Contact.module.css'


export default function Contact() {
  return (
    <div className={styles.contact}>
        <Heading header='contact section' color='rgb(44, 62, 80)'/>
        <div className='container'>
          <form>
          <div className="mb-5">
           <input className="form-control" type="text" placeholder='userName'/>
          </div>
          
          <div className="mb-5">
           <input className="form-control" type="number" placeholder='userAge'/>
          </div>

          <div className="mb-5">
           <input className="form-control" type="email" placeholder='userEmail'/>
          </div>

          <div className="mb-5">
           <input className="form-control" type="password" placeholder='userPassword'/>
          </div>

          <button className={`btn ${styles.btn}`} >Send Message</button>
         </form>
        </div>
    </div>
  )
}
