import React, { useReducer} from "react";
import './style/styleSheet.css'
import Calc from "./Cal";
const initialValues ={
  theme1: true,
  theme2: false,
  theme3:false,
  id:'theme1'
}
const TOGGLE_ACTIONS ={
  SET_THEME1:'update theme1',
  SET_THEME2:'update theme2',
  SET_THEME3:'update theme3',
}
function reducer(state, action){
  switch (action) {
    case TOGGLE_ACTIONS.SET_THEME1:
      return{
        ...state,
        theme1:false,
        theme2:true,
        id: 'theme2'
      }
    case TOGGLE_ACTIONS.SET_THEME2:
      return{
        ...state,
        theme2:false,
        theme3:true,
        id: 'theme3'
      }
    case TOGGLE_ACTIONS.SET_THEME3:
      return{
        ...state,
        theme3:false,
        theme1:true,
        id: 'theme1'
      }
    default: return state
  }
}

function Calculator() {
  const [{theme1, theme2, theme3, id}, dispatch] = useReducer(reducer, initialValues)

  return (
    <div className="themes" id={id}>
      <section className="header">
        <span className="logo">calc</span>
        <div className="header__theme">
          <small>THEME</small>
          <div className="header__toggle">
            <div className="header__nums">
              <small>1</small> <small>2</small> <small>3</small>
            </div>
            <div className="toggle">
              <input
                style={{ opacity: theme1 ? "1" : "0" }}
                className="ball"
                type="radio"
                name="theme"
                id="one"
                key={"key1"}
                onClick={() =>{dispatch(TOGGLE_ACTIONS.SET_THEME1)}}
              />

              <input
                style={{ opacity: theme2 ? "1" : "0" }}
                className="ball"
                type="radio"
                name="theme"
                id="two"
                key={"key2"}
                onClick={() =>{dispatch(TOGGLE_ACTIONS.SET_THEME2)}}
              />

              <input
                style={{ opacity: theme3 ? "1" : "0" }}
                className="ball"
                type="radio"
                name="theme"
                id="three"
                key={"key3"}
                onClick={() =>{dispatch(TOGGLE_ACTIONS.SET_THEME3)}}
              />
            </div>
          </div>
        </div>
      </section>
      <Calc/>
    </div>
  );
}

export default Calculator;
