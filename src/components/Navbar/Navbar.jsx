import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
export default function Navbar() {
  return (
 <nav className="navbar navbar-expand-lg fixed-top z-3 py-3 w-100">
  <div className="container">
    <Link className= 'navbar-brand text-uppercase fw-bold fs-3 text-white' to=' '>start framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-3">
        <li className="nav-item">
          <NavLink className={`nav-link ${styles.link}`}  to='about'>about</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className={`nav-link ${styles.link}`} to='portfolio'>portfolio</NavLink>
        </li>

        <li className="nav-item">
        <NavLink className={`nav-link ${styles.link}`} to='contact'>contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
