import React, {useContext, useEffect} from 'react'
import './Cart.css'
import { FavoritesContext } from '../../contexts/FavoritesContext'
import ProductCard from '../../components/ProductCard/ProductCard'
import CartItem from '../../components/CartItem/CartItem'
import Modal from 'react-modal'

function Cart() {
  //create state to control the modal 
  const [isOpen, setIsOpen] = React.useState(false)
  //create state to hold total price stored within favorites[]
  const [total, setTotal] = React.useState(0)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

   //use context for global state
  //NOTE { } NOT []
  const {favorites} = useContext(FavoritesContext)
  console.log(favorites.length)

  //I need to calculate the total when the page loads with a useEffect with a loop
  //create a state to store total
  React.useEffect(
    ()=> {
        //I need an accumulator to add them up
        let sum = 0;
        //loop through favorites.price and add to set total 
        for(let i = 0; i < favorites.length; i++){
          //add this price sum 
          sum = sum + favorites[i].price

        }
        // check if total is in console log
        console.log(sum)
        // put sum value in total 
        // using setTotal
        setTotal(sum)
        
    },[]
  )

  React.useEffect(
    ()=> {
        //I need an accumulator to add them up
        let sum = 0;
        //loop through favorites.price and add to set total 
        for(let i = 0; i < favorites.length; i++){
          //add this price sum 
          sum = sum + favorites[i].price

        }
        // check if total is in console log
        console.log(sum)
        // put sum value in total 
        // using setTotal
        setTotal(sum)
        
    },[favorites] //runs whenever favorites changes 
  )



  return (
    <div className='favorites-container'>
      <div className='cart-header '>
      <p className='twenty-percent'>Item</p>
      <p className='twenty-percent'>Price</p>
      <p className='twenty-percent'>Quantity</p>
      <p className='twenty-percent'>Remove</p>
      </div>
    
      <div className='favorite-products'>
        {
          favorites.length > 0?
          //will need to replace ProductCard with new jxs file to change display of content
          //new productcard will use a bin react icon to remove item from cart
          //will require adding on click to bin icon same remove code
          favorites.map(item =><CartItem key={item.id}
            product={item} />)
            :
            <p className='color'>Cart is empty</p>
        }

      </div>
      <div className='checkout-btn'>
      <p className=' total color'>Total {total} €</p>
      <button onClick={()=> setIsOpen(true)}>Checkout</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={()=> setIsOpen(false)}
        style={customStyles}
        contentLabel="Purchase Modal"
      >
        <div className='modal-detail'>
        <h2>Your Order was successful</h2>
        <p>Check your email for the order confirmation. Thank you for shopping with Fake Store!</p>     
        <button onClick={()=> setIsOpen(false)}>Return to Main Page</button>  
        </div>
      </Modal>
      </div>

    </div>
  )
}

export default Cart