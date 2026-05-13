import React from 'react'
import { FaSearch } from "react-icons/fa";
import './header.css'

const SearchBox = () => {
  return (
    <div className="searchBox_contaner">
         <form action="" className="search_box">
                    <input type="text" name="" id="search" className="search" placeholder="Search For Products" />
                    <button type="submit"><FaSearch />
        </button>
                </form>
    </div>
  )
}

export default SearchBox
