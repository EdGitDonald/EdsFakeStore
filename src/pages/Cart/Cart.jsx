import React, {useContext} from 'react'
import './Cart.css'
import { FavoritesContext } from '../../contexts/FavoritesContext'
import ProductCard from '../../components/ProductCard/ProductCard'

function Cart() {
   //use context for global state
  //NOTE { } NOT []
  const {favorites} = useContext(FavoritesContext)
  return (
    <div className='favorites-container'>
      <div className='favorite-products'>
        {
          favorites.length > 0?
          //will need to replace ProductCard with new jxs file to change display of content
          //new productcard will use a bin react icon to remove item from cart
          //will require adding on click to bin icon same remove code
          favorites.map(item =><ProductCard key={item.id}
            product={item} />)
            :
            <p>Cart is empty</p>
        }

      </div>

    </div>
  )
}

export default Cart