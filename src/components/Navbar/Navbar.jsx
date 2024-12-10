import React, { useState } from 'react'
import "./Navbar.css"
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {

const [isOpen, setIsOpen]=useState(false);

const toggleMenu =()=>{
  setIsOpen(!isOpen);
};
  return (
      <header>
      <div className='container'>
      <nav className=''>
        <div className='logo'>
          <h2>Logo</h2>
        </div>
        <ul className={isOpen ? "nav-link active" : "nav-link"}>
          <li><a href="/">Home</a></li>
          <li><a href="/About" >About</a></li>
          <li><a href="/Services" >Services</a></li>
          <li><a href="/contactUs" >Contact us</a></li>
          <li><a href="/LogIn" >LogIn</a></li>
        </ul>
        <div className="icon" onClick={toggleMenu}>
        <FaBarsStaggered />
        </div>
      </nav>
    </div>
    </header>
  )
}

export default Navbar