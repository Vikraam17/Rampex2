

import React from 'react'
import Contact from './Contact'
import Footer from './Footer'
import Profile from './Profile'

const UseContext = () => {
  return (
    <div className="header1">
      <Profile/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default UseContext