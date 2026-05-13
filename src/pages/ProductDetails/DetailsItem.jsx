import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaShare } from "react-icons/fa";
import './productDetails.css'
import { BsFillCartCheckFill } from "react-icons/bs";

const DetailsItem = ({ product, renderStars, handeladdTOCart, inCart }) => {
  return (
<div className="details_item">
          <h1 className="name">{product.title}</h1>
          <div className="stars">{renderStars(product.rating)}</div>
          <p className="price">${product.price}</p>
          <h5 >Availability : <span>{product.availabilityStatus}</span></h5>
          <h5 >Brand :<span>{product.brand}</span></h5>
             <p className="desc">{product.description}</p>
          <h5 className='stock'>Hurry Up ! Only {product.stock} Products left in stock.   </h5>
       
          <button className="btn"  onClick={()=>{inCart?null:handeladdTOCart(product)}} >{inCart?"Added to Cart":"Add to Cart"}  {inCart?<BsFillCartCheckFill className='shps'  />:<CiShoppingCart className='shps' />} </button>
           <div className="icons">
                 {inCart?<BsFillCartCheckFill className='shps'  />:<CiShoppingCart className='shps'  onClick={()=>{inCart?null:handeladdTOCart(product)}}/>} 
                  <CiHeart  className='heart'/>
                  <FaShare className='share' />
                </div>
        </div>
  )
}

export default DetailsItem
