import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import ProductCard from '../ProductCard/ProductCard'

function Homepage() {
    //create state to hold clothing info
    const [products, setProducts] = useState([])
    //show all items when page loads
    //https://fakestoreapi.com/products

    //set up useEffect when page loads
    useEffect(
        ()=>{
            console.log('homepage loads')
            //make api call to get the data
            axios.get(`https://fakestoreapi.com/products`)
            .then(res =>{console.log(res.data)
            //store this data in state
            setProducts(res.data)
            })
            .catch(err =>console.log(err))

        }, [] //empty array means run once is important
    )


  return (
    <div className="home-container">
        <div className="products-container">
            {
                products.map(item =><ProductCard key={item.id}
                product={item} />)

                // products.map(item =><p key={item.id}>{item.title}</p>) 
            }
        </div>
    </div>
  )
}

export default Homepage