import React from 'react'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { About, ContactUs, Home, Services } from './Pages'
import { Routes,Route } from 'react-router-dom'
import Login from './components/LogIn/login'
import SignUp from './components/SignUp/Signup'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import UseRef from './Hooks/UseRef'
import UseReducer from './Hooks/UseReducer'
import UseMemo from './Hooks/UseMemo'
import UseCallBack from './Hooks/UseCallBack'
import Git from './Git/Git'

const App = () => {
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/contactUs" element={<ContactUs />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp/>}></Route>
          <Route path="/UseState" element={<UseState/>}></Route>
          <Route path="/UseEffect" element={<UseEffect/>}></Route>
          <Route path="/UseRef" element={<UseRef/>}></Route>
          <Route path="/UseReducer" element={<UseReducer/>}></Route>
          <Route path="/UseMemo" element={<UseMemo/>}></Route>
          <Route path="/UseCallBack" element={<UseCallBack/>}></Route>
          <Route path="/Git" element={<Git/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App