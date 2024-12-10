import React, { useReducer, useState } from 'react'


const UseReducer = () => {
  const initialState={count :0};


  const reducer = (state, action) =>{
    switch(action.type){
      case 'increase' :{
        return {count : state.count+1}
      }
      case 'decrease':{
        return {count: state.count-1}
      }
      default:{
        return state
      }
    }
  }
  const [state,dispatch]=useReducer(reducer, initialState)
  return (
    <div className='header1'>
      <h1> Counter: {state.count}</h1>
        <div>
        <button onClick={()=>dispatch({type:'increase'})} className="btn">
          Increase
        </button>
        <button onClick={()=>dispatch({type:'decrease'})} className="btn">Decrease</button>
        </div>
    </div>
  )
}

export default UseReducer;