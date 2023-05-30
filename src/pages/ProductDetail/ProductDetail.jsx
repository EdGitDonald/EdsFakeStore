import React from 'react'
import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ProductDetail() {
    //show data for a specific character
    //the id is in the url
    //to get data , use hook to retrieve the value
    const {productId} = useParams()

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
<div className='centering'>
    <div className='productDet-container'>
        <img src={productDet.image} />
        <div className='text-container'>
        <p>{productDet.title}</p>
        <p>{productDet.price}</p>
        <div>
        <p>Description</p>
        <p>{productDet.description}€</p>
        </div>
        <button>Add to Cart</button>
        </div>
    </div>
</div>
  )
}

export default ProductDetail