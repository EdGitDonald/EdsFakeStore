import React, {useContext} from 'react'
import './CartItem.css'
import {Link} from 'react-router-dom'
import { BsTrash } from "react-icons/bs";
import { FavoritesContext } from '../../contexts/FavoritesContext';

function CartItem({product}) {

  //use context for global state
  //NOTE { } NOT []
  const {favorites, addProduct, removeProduct} = useContext(FavoritesContext)


  return (
    <div className="cart-card">
        <img src={product.image} />
        
        <Link to={`/details/${product.id}`}>{product.title}</Link>
        <p>{product.price}€</p>
        <p>1</p>
        {
          <BsTrash className='bin-icon' onClick={()=> removeProduct(product.id)}/>
        }
        
    </div>
  )
}

export default CartItem