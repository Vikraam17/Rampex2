import React, { useCallback, useState } from 'react'
import Header from './Header'


const UseCallBack = () => {
  const [count, setCount]= useState(0);
  const newFun = useCallback((count)=>{},[count]);
  return (
    <div className='header1'>
      <Header newFun={newFun}/>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)} className="btn">+</button>
    </div>
  )
}


export default UseCallBack
