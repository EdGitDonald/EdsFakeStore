import React from 'react'
import './Footer.css'
import { BsHeart } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer-container">
      <p>Made with <BsHeart className="heart-icon"/> by mimo </p>
      <p>Contact Us</p>
    </div>
  )
}

export default Footer