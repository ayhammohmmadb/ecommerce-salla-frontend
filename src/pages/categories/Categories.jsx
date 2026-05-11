import React, { useEffect,useState } from 'react'
import { data, useParams } from 'react-router-dom'
import Product from '../../components/slideProducts/product'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import './categories.css'
import ProductDetails from '../ProductDetails/ProductDetails';
import { Link } from 'react-router-dom';
const Categories = () => {
    const[loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
  const { category } = useParams();
useEffect(() => {
    const fetchProduct = async () => {
        try{
            setLoading(true);
            const res=await fetch(`https://dummyjson.com/products/category/${category}`);
            const data=await res.json();
            setProducts(data.products||[]);
            setLoading(false);

        }
        catch(err){
            console.log(err);
            setLoading(false);
        }
    }
    fetchProduct();

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
    if (loading) {
      return (
        <div className="loader">
          <AiOutlineLoading3Quarters className="spin" />
        </div>
      )
    }
  
    if (!products) {
      return <AiOutlineLoading3Quarters />
    }
  return (
    <div className="products">
        <div className="container">
          <h1 className="titlecat">{category}</h1>
        <div className="product">
            {products.map((product)=>{
                return <div className="items" key={product.id}>
                    <Link to={`/product/${product.id}`}>
                    <div className="img">
                        <img src={product.images[0]} alt=""  onClick={()=>ProductDetails()}/>

                    </div>
                    <div className="info">
                        <h3 className="title">{product.title}</h3>
                        <h3 className="price">${product.price}</h3>
                        <p className="rate">{renderStars(product.rating)}</p>
                        </div>
                        </Link>

                    
                </div>
            })}
        </div>
        </div>
    </div>
  )
}

export default Categories
