import React, { useEffect, useState, useContext } from 'react'
import { useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import './productDetails.css'
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaShare } from "react-icons/fa";
import SlideProduct from '../../components/slideProducts/SlideProduct';
import { CartContext } from '../../components/context/CartContext';

const ProductDetails = () => {
const { CartItems, addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
useEffect(() => {
  console.log("Cart updated:", CartItems);
}, [CartItems]);

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
  if (loading) {
    return (
      <div className="loader">
        <AiOutlineLoading3Quarters className="spin" />
      </div>
    )
  }

  if (!product) {
    return <AiOutlineLoading3Quarters />
  }

  return (
    <div className="items">
 <div className="item_details">
      <div className="container">
        <div className="imgs_item">
          <div className="big_img">
            <img id='big_img' src={product.images[0]} alt="item" />
          </div>
          <div className="sm_img">
          {product.images.map((image, index) => (
              <img
                src={image}
                alt="item"
                key={index}
                className={index === 0 ? "active" : ""}
                onClick={()=>{document.getElementById("big_img").src=image}}
              />
            ))}
          </div>
        </div>
        <div className="details_item">
          <h1 className="name">{product.title}</h1>
          <div className="stars">{renderStars(product.rating)}</div>
          <p className="price">${product.price}</p>
          <h5 >Availability : <span>{product.availabilityStatus}</span></h5>
          <h5 >Brand :<span>{product.brand}</span></h5>
             <p className="desc">{product.description}</p>
          <h5 className='stock'>Hurry Up ! Only {product.stock} Products left in stock.   </h5>
       
          <button className="btn" >Add To Cart  <CiShoppingCart className='shps' /> </button>
           <div className="icons">
                  <CiShoppingCart className='shop'  onClick={() =>addToCart(product)}/>
                  <CiHeart  className='heart'/>
                  <FaShare className='share' />
                </div>
        </div>
      </div>
    
    </div>
    <div className="category">
        <SlideProduct category={product.category} />
    </div>
    </div>
   
  )
}


export default ProductDetails