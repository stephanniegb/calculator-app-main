import React, { useReducer } from 'react'
const initialstate = {
    firstcounter: 0
}
const reducer = (state, action) =>{
    switch(action.type){
        case 'inc':
         return {firstcounter: state.firstcounter + action.value}
        case 'dec' : 
            return {firstcounter: state.firstcounter - action.value}
        case 'rest':
            return initialstate
        default:
            return state
    }
}

function Counter2() {
    const[count, dispatch] = useReducer(reducer, initialstate)
  return (
    <div>
        <div>{count.firstcounter}</div>
        <button onClick={() => {dispatch({type: 'inc', value: 1})}}>inc</button>
        <button onClick={() => {dispatch({type: 'dec', value: 1})}}>dec</button>
        <button onClick={() => {dispatch({type: 'inc', value: 5})}}>inc5</button>
        <button onClick={() => {dispatch({type: 'dec', value: 5})}}>dec5</button>
        <button onClick={() => {dispatch({type: 'rest'})}}>rest</button>
    </div>
  )
}

export default Counter2