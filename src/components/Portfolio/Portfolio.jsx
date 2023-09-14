import React, { useState } from 'react'
import Heading from '../Heading/Heading'

import styles from './Portfolio.module.css'

import img1 from '../../assets/port1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
import img4 from '../../assets/port4.png'
import img5 from '../../assets/port5.png'
import img6 from '../../assets/port6.png'
import Layer from '../Layer/Layer'

import { LazyLoadImage } from "react-lazy-load-image-component";


let arrImages = [];
arrImages.push(img1, img2, img3, img4, img5, img6);

export default function Portfolio() {
  const [imgSrc, setImgSrc]= useState('')
  const [imgClicked, setImgClicked]= useState(false)

  // ... (Previous code)

const showImage = (img) => {
  console.log(img);
  setImgSrc(img);
  setImgClicked(true);
};

const hideImage = () => {
  setImgClicked(false);
};

return (
  <div className={styles.portfolio}>
    <Heading header='portfolio component' color='rgb(44, 62, 80)' />
    <div className='container'>
      <div className={`${styles.rowImgs}`}>
        {arrImages.map((el, index) => (
          <div
            key={index}
            className={`cardImg ${styles.portfolioImg}`}
            onClick={() => showImage(el)}
          >
            <LazyLoadImage src={el} alt="portfolio" className='w-100 h-100 rounded-3' />
            <Layer />
          </div>
        ))}
      </div>
    </div>
    {imgClicked && (
      <div className={styles.layout} onClick={hideImage}>
        <img src={imgSrc} alt="portfolio-img" />
      </div>
    )}
  </div>
)}