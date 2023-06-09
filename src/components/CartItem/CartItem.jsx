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
        <div className='cart-img align'>
        <img src={product.image} />
        </div>
        
        <Link to={`/details/${product.id}`} className='twenty-percent color align'>{product.title}</Link>
        <p className=' twenty-percent color align'>{product.price}€</p>
        <p className=' twenty-percent color align'>1</p>
        {
          <BsTrash className='bin-icon color twenty-percent ' onClick={()=> removeProduct(product.id)}/>
        }
        
    </div>
  )
}

export default CartItem