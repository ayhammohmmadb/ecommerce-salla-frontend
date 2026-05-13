import React, { useEffect, useState, useContext } from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaShare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaCheck } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import { BsFillCartCheckFill } from "react-icons/bs";
const Product = ({category}) => {
    const [products, setProducts] = useState([]);
    const {CartItems, addToCart} = useContext(CartContext);
    useEffect(() => {
  console.log("Cart updated:", CartItems);
}, [CartItems]);
useEffect(() => {
  fetch(`https://dummyjson.com/products/category/${category}`)
    .then(res => res.json())
    .then(data => setProducts(data.products));
}, [category]);
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
          <button className="btn" style={{color:'white'}}><Link to="/cart"><span style={{color:'white'}}>View Cart</span></Link></button>
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
  return (

    <div className='product'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {products.map((product) => {
        const inCart=CartItems.some(i=>i.id===product.id)
        return(

        
    <SwiperSlide key={product.id}>
       <div className={`box ${inCart ? 'in-cart' : ''}`}>

    
      <Link to={`/product/${product.id}`} >
      <span className="status_cart"><FaCheck  className='check'/> In Cart</span>
        <div className="img">
          <img src={product.images[0]} alt={product.title} />
        </div>
        <div className="details">
          <p>{product.title}</p>
          <div className="rating">
  {renderStars(product.rating)}

</div>
          <div className="price">${product.price}</div>
        </div>
         </Link>
         <div className="icons">
   {inCart?<BsFillCartCheckFill className='shop-active'  />:<CiShoppingCart className='shop'  onClick={()=>{inCart?null:handeladdTOCart(product)}}/>} 
        <CiHeart  className='heart'/>
        <FaShare className='share' />
      </div>
     
        </div>
    </SwiperSlide>
          
        )})}
      </Swiper>
      
     
    </div>
  
  )
} 


export default Product
