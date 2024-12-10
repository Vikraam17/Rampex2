import React, { useEffect, useState } from 'react'
const UseEffect = () => {
  const [count, setCount]=useState(0);
  const [value, setValue]=useState(0);
  useEffect(()=>{
    setTimeout(() => {
      setValue(value+1);
    },2000);
  },[count])
  return (
    <div className='header1'>
        <h1>Count the Render</h1>
        <h2>Count : {count}</h2>
        <div>
        <button onClick={()=>{setCount(count => count-1)}} className="btn">-</button>
        <button onClick={()=>{setCount(count => count+1)}} className="btn">+</button>
        </div>
        <h1>value: {value}</h1>
    </div>
  );
}


export default UseEffect;
