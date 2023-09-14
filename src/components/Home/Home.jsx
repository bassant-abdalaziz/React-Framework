import React from 'react'
import Heading from '../Heading/Heading'
import styles from './Home.module.css'

import avaterImg from '../../assets/avataaars.svg'

export default function Home() {
  return (
    <div  className={styles.home}>
      <img src={avaterImg} alt="avater" />
      <Heading header='start framework' color='rgb(255, 255, 255)'/>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}
