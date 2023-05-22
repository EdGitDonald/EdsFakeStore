import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'

function Homepage() {
    //create state to hold clothing info
    const [products, setProducts] = useState([])
    //show all items when page loads, https://fakestoreapi.com/products
    //set up useEffect when page loads

    //create a state to hold categories
    const [categories, setCategories] = useState([])


    useEffect(
        ()=>{
            console.log('homepage loads')
            //what things need to happen when the page loads
            //get product data and categorie data
            //make api call to get the products
            axios.get(`https://fakestoreapi.com/products`)
            .then(res =>{console.log(res.data)
            //store this data in state
            setProducts(res.data)
            })
            .catch(err =>console.log(err))
            //make api call to get categories
            axios.get(`https://fakestoreapi.com/products/categories`)
            .then(res =>{
                console.log(res.data)
                //what do i do with this data
                //store categories in state ^^
                setCategories(res.data)
            })
            .catch(err => console.log(err))

        }, [] //empty array means run once is important
    )


const filterCategorie = (categorie) =>{
    //change categorie to the parameter
    console.log(categorie)
    //make a api call to get the products from this categorie
    axios.get(`https://fakestoreapi.com/products/category/${categorie}`)
    .then(res =>{console.log(res.data)
        //what to do with this data
        //change what is on homepage
        setProducts(res.data)
    
    })
    .catch(err => console.log(err))
    //line below needs api call made to change categories
       
 }

 const showAllProducts = () => {
    console.log("showAll")
    // make api to get all the products
    axios.get(`https://fakestoreapi.com/products`)
            .then(res =>{console.log(res.data)
            //store this data in state
            setProducts(res.data)
            })
            .catch(err =>console.log(err))

 }

  return (
    <div className="home-container">
        <form className="categorie-container">
            <p onClick={showAllProducts}>All</p>
            {
         categories.map(item=><p key={item.id} onClick={()=>filterCategorie(item)}>{item}</p>)
         // onClick={()=>changeCategorie(item)}
            }
        </form>

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