import React, { useReducer, useState } from "react";
import "./style/theme1.css";
import Toggle from "./Toggle";

function Cal() {
  const [inputVal, setInputVal] = useState("");
  const [isLong, setIsLong] = useState(false)
  const [result, setResult] = useState("");
  const opperators = ['/', '+', '*','-', '.']


  const updateCal = (e) => {
    if (inputVal.length >= 17) {
      setIsLong(true)
    }
    if (
      ((opperators.includes(inputVal)) && inputVal === '') ||
      (opperators.includes(inputVal) && opperators.includes(inputVal.slice(-1)))
      ) {   
        return   
    }
    setInputVal(inputVal + e.target.value);
    if (!opperators.includes(inputVal)) {
      setResult(eval(inputVal + e.target.value).toString())
      
    }
    
  };
  const resetCal = () => {
    setInputVal("");
    setIsLong(false)
  };
  // CUSTOM INPUT...
  function CustomInput({value, className, func = updateCal}){
    return(
      <input
        type="button"
        className={className}
        value={value.toString()}
        onClick={func}
    />
    )
  }
  const evaluate = () =>{
    setInputVal(eval(inputVal.toString()))
  }
  const deleteLast = () =>{
    if (inputVal == '') {
      return;
    } 
    const value = inputVal.slice(0, -1)
    setInputVal(value)
  }
  return (
    <div className="theme1">
      <div className="header">
        <span className="logo">calc</span>
        <div className="header__theme">
          <small>THEME</small>
          <Toggle/>
        </div>
      </div>
      <div className="output__display" style={{fontSize: isLong ? '2em': '2.5em'}}>
        {/* <small>{result}</small> */}
        <p>{inputVal || 0}</p>
      </div>

      <div className="cal__btnDiv">
        <div className="cal__numBtns">
          <CustomInput value={7} className={'cal__btn'}/>
          <CustomInput value={8} className={'cal__btn'}/>
          <CustomInput value={9} className={'cal__btn'}/>
          <CustomInput value={'DEL'} className={'delBtn'} func={deleteLast}/>
          <CustomInput value={4} className={'cal__btn'}/>
          <CustomInput value={5} className={'cal__btn'}/>
          <CustomInput value={6} className={'cal__btn'}/>
          <CustomInput value={'+'} className={'cal__btn'}/>
          <CustomInput value={1} className={'cal__btn'}/>
          <CustomInput value={2} className={'cal__btn'}/>
          <CustomInput value={3} className={'cal__btn'}/>
          <CustomInput value={'-'} className={'cal__btn'}/>
          <CustomInput value={'.'} className={'cal__btn'}/>
          <CustomInput value={0} className={'cal__btn'}/>
          <CustomInput value={'/'} className={'cal__btn'}/>
          <CustomInput value={'*'} className={'cal__btn'}/>
        </div>
        <div className="cal__resetBtns">
          <input type="button"className="resetBtn" value="RESET" onClick={resetCal}/>
          <input type="button" className="equalBtn" value="=" onClick={evaluate}/>
        </div>
      </div>
    </div>
  );
}

export default Cal;
