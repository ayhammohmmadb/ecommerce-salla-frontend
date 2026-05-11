import React from 'react'
import Product from './product'
import './slideProduct.css'
const SlideProduct = ({category}) => {
  return (
    <div className="slide_products slid">
        <div className="container">
            <div className="top_slide">
                <h2>{category}</h2>
                <p>Check out our latest products</p>
            </div>
            <Product category={category} />
        </div>
    </div>
  )
}

export default SlideProduct
