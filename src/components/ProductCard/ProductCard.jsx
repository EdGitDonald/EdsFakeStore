import React, { useContext, useEffect } from 'react'
import './ProductCard.css'
import {Link} from 'react-router-dom'
import {FaHeart, FaRegHeart} from "react-icons/fa"
import { FavoritesContext } from '../../contexts/FavoritesContext'

function ProductCard({product}) {

  //use context for global state
  //NOTE { } NOT []
  const {favorites, addProduct, removeProduct} = useContext(FavoritesContext)
  //create varible for hearts / will become state
  const [isFavorite, setIsFavorite] = React.useState(false)

  React.useEffect(
    ()=> {
      //  console.log('update')
      //is this product in favorites?
      setIsFavorite(favorites.find(item => item.id === product.id))
      //not found is undefined which is "falsy"

    },[favorites]
  )

  return (
    <div className="product-card">
        <img src={product.image} />
        <Link to={`/details/${product.id}`} className='title-css'>{product.title}</Link>
        <p>{product.category}</p>
        <p>{product.price}€</p>
        {
          isFavorite?
          <FaHeart className='heart-icon' onClick={()=> removeProduct(product.id)}/>
          :
          <FaRegHeart className='heart-icon' onClick={()=> addProduct(product)}/>
        }
    </div>
  )
}

export default ProductCard