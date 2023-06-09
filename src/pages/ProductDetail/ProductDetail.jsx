import React, { useContext} from 'react'
import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FavoritesContext } from '../../contexts/FavoritesContext'



function ProductDetail() {

     //show data for a specific character
    //the id is in the url
    //to get data , use hook to retrieve the value
    const {productId} = useParams()
    console.log('data type:', typeof (productId))

     //use context for global state
  //NOTE { } NOT []
  const {favorites, addProduct, removeProduct} = useContext(FavoritesContext)
   //create varible for hearts / will become state
   const [isFavorite, setIsFavorite] = React.useState(false)

   React.useEffect(
    ()=> {
      //  console.log('update')
      //is this product in favorites?
      setIsFavorite(favorites.find(item => item.id == productId))
      //not found is undefined which is "falsy"

    },[favorites]
  )

   

    //state to hold product data
    const[productDet, setProductDet] = React.useState('')

    //https://fakestoreapi.com/products/2
    //I need to get the data when page loads
    React.useEffect(
        ()=>{
            console.log('details')
            //make api call to get product data
            axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res => {console.log(res.data)
            //^I have the data, where do i put it
            //create a state to hold to hold character data 
            //const[productDet, setProductDet] = React.useState('')
            setProductDet(res.data)

            })
            .catch(err => console.log(err))
        }, []
    )

  return (
    //html here
<div className='detail-page'>
    <div className='productDet-container'>
        <div className='fifty-percent'>
        <img className='detail-img' src={productDet.image} />
        </div>
        <div className='text-container fifty-percent'>
        <p className='prod-title'>{productDet.title}</p>
        <p className='prod-price'>{productDet.price}€</p>
        <div>
        <p className='prod-des-t'>Description</p>
        <p className='prod-des'>{productDet.description}</p>
        </div>
        {
        isFavorite?
        <button className='addToCart-btn' onClick={()=> removeProduct(productDet.id)}>Remove From Cart</button>
        :
        <button className='addToCart-btn' onClick={()=> addProduct(productDet)}>Add to Cart</button>
        }
        </div>
    </div>
</div>
  )
}

export default ProductDetail