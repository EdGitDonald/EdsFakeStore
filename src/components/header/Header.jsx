import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
//BsCart3
function Header() {
  return (
    <div className="header-container">
        <a href='/'><h1>Fake Store</h1></a>
        <div className="cart-container">
          <p>1</p>
          <Link to='/cart'><BsCart3 className="cart-icon"/></Link>
        </div>
    </div>
  )
}

export default Header