import React from 'react'
import './Header.css'
import { BsCart3 } from "react-icons/bs";
//BsCart3
function Header() {
  return (
    <div className="header-container">
        <h1>Fake Store</h1>
        <div className="cart-container">
          <p>1</p>
          <BsCart3 className="cart-icon"/>
        </div>
    </div>
  )
}

export default Header