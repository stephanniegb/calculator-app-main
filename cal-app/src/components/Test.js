import React, { useReducer, useState } from 'react'
const initialstate = 0
const reducer = (state, action) =>{
    switch(action){
        case 'inc':
         return state + 1
        case 'dec' :
            return state - 1
        case 'rest':
            return initialstate
        default:
            return state
    }
}
function Test() {
   const [count, dispatch] = useReducer(reducer, initialstate)
   const [inputVal, setInputVal] = useState(0)

   const updateCal = (e) => {
    setInputVal(inputVal + e.target.value);
   }

  return (
    <div>
        <div>{inputVal}</div>
        <div>{count}</div>
        <input type="button" value="7" onClick={updateCal} />
        <input type="button" value="+" onClick={updateCal} />


        <input type="button" value="8" onClick={updateCal} />

        <button onClick={() => {dispatch('inc')}}>inc</button>
        <button onClick={() => {dispatch('dec')}}>dec</button>
        <button onClick={() => {dispatch('rest')}}>rest</button>
    </div>
  )
}
export default Test