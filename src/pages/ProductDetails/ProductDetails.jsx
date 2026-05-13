import React, { useEffect, useState, useContext } from 'react'
import { useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import './productDetails.css'

import SlideProduct from '../../components/slideProducts/SlideProduct';
import { CartContext } from '../../components/context/CartContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import ProductImags from './ProductImage';
import DetailsItem from './DetailsItem';

const ProductDetails = () => {
const { CartItems, addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
  console.log("Cart updated:", CartItems);
}, [CartItems]);

    const renderStars = (rating) => {
  return [...Array(5)].map((_, index) => {
    const starValue = index + 1;

    if (rating >= starValue) {
      return <FaStar key={index} />;
    } else if (rating >= starValue - 0.5) {
      return <FaStarHalfAlt key={index} />;
    } else {
      return <FaRegStar key={index} />;
    }
  });
};
const handeladdTOCart=(product)=>{
  addToCart(product);
  toast.success(
    <div className='toast_wrapper'>
       <img src={product.images[0]} alt={product.title}  className='toast_img'/>
       <div className="toast_content">
        <strong>
          {product.title} added to cart!
        </strong>
        <div>
          <button className="btn"><Link to="/cart">View Cart</Link></button>
        </div>
       </div>
    </div>
    ,
    {
      duration: 5000,
      style: {
        border: '1px solid #333',
        padding: '16px',
        color: '#333',
      },
      
      },
    
    
  );
}
  const { id } = useParams();

  useEffect(() => {

    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();

        setProduct(data);
        setLoading(false);

      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }

    fetchProduct();

  }, [id]);
if (loading) {
  return (
    <div className="loading">
      <AiOutlineLoading3Quarters className='spin' />
    </div>
  )
}
  
     const inCart=CartItems.some(i=>i.id===product.id)
  return (
    <div className="items">
 <div className="item_details">
      <div className="container">
       <ProductImags product={product} />
        <DetailsItem 
          product={product} 
          renderStars={renderStars} 
          handeladdTOCart={handeladdTOCart} 
          inCart={inCart} 
        />
      </div>
    
    </div>
    <div className="category">
        <SlideProduct category={product.category} />
    </div>
    </div>
   
  )
}


export default ProductDetails