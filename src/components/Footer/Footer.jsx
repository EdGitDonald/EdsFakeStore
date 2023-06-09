import React from 'react'
import './Footer.css'
import { BsHeart } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer-container">
      <p>Made with <BsHeart className="heart-icon2"/> by mimo </p>
      <a className='contact-css' href='/contactus'>Contact Us</a>
    </div>
  )
}

export default Footer