import React from 'react'
import Heading from '../Heading/Heading'
import styles from './About.module.css'


export default function About() {
  return (
    <div  className={styles.about}>
      <div className='container'>
      <Heading header='about component' color='rgb(255, 255, 255)'/>
      <div className='row pe-5 ps-5'>
        <div className='col-12 col-md-6 text-white mt-3'>
        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </div>
        <div className='col-12 col-md-6 text-white mt-3'>
        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </div>
      </div>
      </div>
    </div>
  )
}
