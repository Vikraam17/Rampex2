import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='linkContainer'>
      <Link className='link' to="/UseState">useState</Link>
      <Link className='link' to="/UseEffect">UseEffect</Link>
      <Link className='link' to="/UseRef">UseRef</Link>
      <Link className='link' to="/UseReducer">UseReducer</Link>
      <Link className='link' to="/UseMemo">UseMemo</Link>
      <Link className='link' to="/UseCallBack">UseCallBack</Link>
      <Link className='link' to="/Git">Git</Link>
      </div>
  )
}

export default Home
