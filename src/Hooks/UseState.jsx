import React, { useState } from 'react'
const UseState = () => {
  const [count, setCount]=useState(0);
  const updateCount = () =>{
    setCount(count => count+1);
    setCount(count => count+1);
    setCount(count => count+1);
    setCount(count => count+1);
  }
  return (
    <div className='header1'>
        <h1>Count the Render</h1>
        <h2>Count : {count}</h2>
        <div>
        <button onClick={()=>{setCount(count => count-1)}} className="btn">-</button>
        <button onClick={updateCount} className="btn">+</button>
        </div>
    </div>
  );
}


export default UseState;
