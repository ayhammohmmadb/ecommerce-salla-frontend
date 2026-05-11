import React , { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/icon.png'
import './header.css'
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import { CartContext } from '../context/CartContext';
const TopHeader = () => {
    const {CartItems} = useContext(CartContext);
  return (
    <div>
    <div className="top_header">
       <div className="container">
        <Link to="/" className='logo'><img src={logo} alt="" />
        <h1 className='logo-name'>salla</h1></Link>
        <form action="" className="search_box">
            <input type="text" name="" id="search" className="search" placeholder="Search For Products" />
            <button type="submit"><FaSearch />
</button>
        </form>
        <div className="header_icons">
            <div className="icon">
                <CiHeart />
                <span className="count">0</span>
            </div>
            <div className="icon">
                <Link to="/cart"><FaOpencart /></Link>

               <Link to="/cart"><span className="count">{CartItems.length}</span></Link>
            </div>
        </div>
        </div> 
    </div>
    </div>
  )
}

export default TopHeader
