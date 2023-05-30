import React from 'react'
import './ProductCard.css'

function ProductCard({product}) {
  return (
    <div className="product-card">
        <img src={product.image} />
        <a href={`/details/${product.id}`}>{product.title}</a>
        <p>{product.category}</p>
        <p>{product.price}€</p>
    </div>
  )
}

export default ProductCard