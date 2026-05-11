import React from 'react'
import { IoMenu } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SlLogin } from "react-icons/sl";
import { FaUserPlus } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
const NavLiks=[
    {title:'Home',link:'/'},
    {title:'About',link:'/about'},
    {title:'Acessories',link:'/acessories'},
    {title:'Blog',link:'/blog'},
    {title:'Contact',link:'/Contact'},
]
const BtmHeader = () => {
    const [categories, setCategories] = useState([]);
    const [openCategories, setOpenCategories] = useState(false);
   const toggleCategories = () => {
  setOpenCategories(!openCategories);
};
    useEffect(() => {
    fetch('https://dummyjson.com/products/categories')   
    .then(res => res.json()) 
    .then(data=>setCategories(data))
    })
    const location=useLocation();
  return (
    <div className="btm_header">
        <div className="container">
            <nav className="nav">
                <div className="category_nav">
                    <div className="category_btn">
                        <IoMdMenu  onClick={toggleCategories} />
                        <p onClick={toggleCategories}>browse categories</p>
                        <MdOutlineKeyboardArrowDown onClick={toggleCategories}/>
                    </div>
                    <div className="category_nav_list">
                    {openCategories && categories.map((category)=>
                        <Link to={category.slug}>{category.name}</Link>
                     )}
                    </div>
                    
                </div>
                <div className="nav_links">
                        {NavLiks.map((link, index)=>
                      <li className={location.pathname===link.link?'active':''} key={link.id || index}>  <Link to={link.link}>{link.title}</Link></li>
                        )}
                    </div>
            </nav>
            <div className="sign_regs_icon">
                <Link to="/login"><SlLogin /></Link>
                <Link to="/register"><FaUserPlus /></Link>
            </div>
        </div>
    </div>
  )
}

export default BtmHeader
