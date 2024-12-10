import React, { useState } from 'react'
import "./Navbar.css"
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

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
          <li><NavLink className='link' to="/">Home</NavLink></li>
          <li><NavLink className='link' to="/About">About</NavLink></li>
          <li><NavLink className='link'to="/Services">Services</NavLink></li>
          <li><NavLink className='link'to="/contactUs">Contact us</NavLink></li>
          <li><NavLink className='link' to="/LogIn">LogIn</NavLink></li>
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