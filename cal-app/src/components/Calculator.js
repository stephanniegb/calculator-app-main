import React, { useState } from "react";
import './style/styleSheet.css'
import Calc from "./Cal";

function Calculator() {
  const [theme1, setTheme1] = useState(true);
  const [theme2, setTheme2] = useState(false);
  const [theme3, setTheme3] = useState(false);
  const [id, setId] = useState("theme1");

  function handleTheme1() {
    setTheme1(false);
    setTheme2(true);
    setId("theme2");
  }
  function handleTheme2() {
    setTheme2(false);
    setTheme3(true);
    setId("theme3");
  }
  function handleTheme3() {
    setTheme3(false);
    setTheme1(true);
    setId("theme1");
  }

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
                onClick={handleTheme1}
              />

              <input
                style={{ opacity: theme2 ? "1" : "0" }}
                className="ball"
                type="radio"
                name="theme"
                id="two"
                key={"key2"}
                onClick={handleTheme2}
              />

              <input
                style={{ opacity: theme3 ? "1" : "0" }}
                className="ball"
                type="radio"
                name="theme"
                id="three"
                key={"key3"}
                onClick={handleTheme3}
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
