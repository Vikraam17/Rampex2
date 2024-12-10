import React, { useMemo, useState } from 'react'


const UseMemo = () => {
  const [number, setNumber]=useState(0);
  const [counter, setCounter]=useState(0);


  function cubeNum(num){
    console.log('calculation done!');
    return Math.pow(num,3)
  }
  const result=useMemo(()=> {
    return cubeNum(number)
  },[number]);
 
  return (
    <div className="header1">
      <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
      <h1>Cube of the number : {result}</h1>
      <button onClick={()=>setCounter(counter+1)} className="btn">counter++</button>
      <h1>{counter}</h1>
    </div>
  )
}


export default UseMemo
