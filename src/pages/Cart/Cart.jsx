import React , {useContext,useState} from 'react'
import { CartContext } from '../../components/context/CartContext';
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import { GiEmptyWoodBucketHandle } from "react-icons/gi";
import './cart.css'
const Cart = () => {
    const {CartItems,deleteitem} = useContext(CartContext);
    
const [itemquantity ,setitemquantity ]=useState(1);
   const addquantity=(id)=>{
    setitemquantity((prev)=>({
        ...prev,
        [id]:(prev[id] || 1)+1
  
   
    }))
   }
   const subtractquantity=(id)=>{
    setitemquantity((prev)=>({
        ...prev,
        [id]:(prev[id] || 1)-1
  
    }))
  
   }
   const total=CartItems.reduce((acc,item)=>{
    const quantity=itemquantity[item.id] || 1;
    return acc+item.price*quantity;
   },0)
   
  return (
   <div className="checkout">
    <div className="ordersummary">
        <h1 className="title">Order Summary</h1>
        <div className="items">
            {CartItems.length===0?<p className='empty'> Your cart is empty <GiEmptyWoodBucketHandle className='em' /></p>: CartItems.map((item)=>(
                <div className="item" key={item.id}>
                    
                       
                    
                    <div className='image_cart' >
                        <Link to={`/product/${item.id}`}>
                    <img src={item.images[0]} alt={item.title} />
                    </Link>
                    
                    <div className="content">
                         <Link to={`/product/${item.id}`}>
                       <h1 className="title_item">{item.title}</h1>
                       </Link>
                        <Link to={`/product/${item.id}`}>
                       <p className="price_item">${item.price.toFixed(2)}</p>
                        </Link>
                       <div className="quantity_controle">
                          <button className="quantity_btn" onClick={() => subtractquantity(item.id)}>-</button>
                          <span className="quantity">{itemquantity[item.id] || 1}</span>
                          <button className="quantity_btn" onClick={() => addquantity(item.id)}>+</button>
                       </div>
                    </div>
                 
                </div>
               
             <button className="delete_item" onClick={() => deleteitem(item.id)}><MdDeleteForever /></button>
        </div>
          ))}
        </div>
        <div className="bottom_summary">
            <div className="shop_table">
                <p className="total">Total</p>
                <span className="total_checkout">{total.toFixed(2)}</span>
                <div className="button_div">
                    <button className="place_order" type="submit">Place Order</button>
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Cart
