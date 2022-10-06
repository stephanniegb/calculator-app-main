import React from "react";
function Toggle() {
  function CustomInput () {
    return(
      <input type="checkbox" className='toggle1' id="check" />
    )
  }
  return (
    <div className="header__toggle">
      <div className="header__nums" >
        <small>1</small> <small>2</small> <small>3</small>
      </div>
      <label htmlFor="check" className="switch">
        <CustomInput/>
        {/* <input type="checkbox" className="toggle" id="check" />
        <input type="checkbox" className="toggle" id="check" />
        <input type="checkbox" className="toggle" id="check" /> */}
        <span className="toggle__ball"></span>
      </label>
    </div>
  );
}

export default Toggle;
