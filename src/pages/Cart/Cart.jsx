import React, {useContext} from 'react'
import './Cart.css'
import { FavoritesContext } from '../../contexts/FavoritesContext'
import ProductCard from '../../components/ProductCard/ProductCard'
import CartItem from '../../components/CartItem/CartItem'

function Cart() {
   //use context for global state
  //NOTE { } NOT []
  const {favorites} = useContext(FavoritesContext)
  console.log(favorites.length)
  return (
    <div className='favorites-container'>
      <p>Headings</p>
      <div className='favorite-products'>
        {
          favorites.length > 0?
          //will need to replace ProductCard with new jxs file to change display of content
          //new productcard will use a bin react icon to remove item from cart
          //will require adding on click to bin icon same remove code
          favorites.map(item =><CartItem key={item.id}
            product={item} />)
            :
            <p>Cart is empty</p>
        }

      </div>
      <p>Total ---</p>
      <button>Checkout</button>

    </div>
  )
}

export default Cart