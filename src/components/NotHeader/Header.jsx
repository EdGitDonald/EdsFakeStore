import React, {useContext} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
import { FavoritesContext } from '../../contexts/FavoritesContext';

//BsCart3
function Header() {
    //use context for global state
  //NOTE { } NOT []
  const {favorites} = useContext(FavoritesContext)
  return (
    <div className="header-container">
        <a href='/'><h1>Fake Store</h1></a>
        <div className="cart-container">
          <p>{favorites.length}</p>
          <Link to='/cart'><BsCart3 className="cart-icon"/></Link>
        </div>
    </div>
  )
}

export default Header