import React, { useReducer} from "react";
import "./style/theme1.css";
import { formatOperand } from "./util/formatter";
import Toggle from "./Toggle";

const ACTIONS = {
  ADD_DIGIT:'add_digit',
  CLEAR:'clear',
  DELETE_DIGIT:'delete_digit',
  CHOOSE_OPERATION:'choose_operation',
  EVALUATE:'evaluate'
}
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload,
          overwrite: false,
        };
      }
      if (payload == 0 && state.currentOperand == 0) return state;
      if (payload == '.' && state.currentOperand == null) return state;
      if (payload == "." && state.currentOperand.includes(".")) return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload}`,
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.prevOperand == null) {
        return state;
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload,
        };
      }
      if (state.prevOperand == null) {
        return {
          ...state,
          operation: payload,
          prevOperand: state.currentOperand,
          currentOperand: null,
        };
      }
      return {
        ...state,
        prevOperand: evaluate(state),
        operation: payload,
        currentOperand: null,
      };

    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {};
      }
      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1 && state.prevOperand == null) {
        return {};
      }
      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null,
        };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.prevOperand == null
      ) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        prevOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
    default:
  }
}
function evaluate({ currentOperand, prevOperand, operation }) {
  const previous = parseFloat(prevOperand);
  const currentt = parseFloat(currentOperand);
  if (isNaN(previous) || isNaN(currentt)) {
    return "";
  }
  let solution = "";
  switch (operation) {
    case "+":
      solution = previous + currentt;
      break;
    case "-":
      solution = previous - currentt;
      break;
    case "/":
      solution = previous / currentt;
      break;
    case "*":
      solution = previous * currentt;
      break;
    default:
  }
  return solution.toString();
}

function Calc() {
  const [{currentOperand = 0, prevOperand, operation}, dispatch] = useReducer(reducer, {})
  return (
    <div className="theme1">
      <div className="header">
        <span className="logo">calc</span>
        <div className="header__theme">
          <small>THEME</small>
          <Toggle/>
        </div>
      </div>
      <div className="output__display">
      {formatOperand(prevOperand)} {operation} {formatOperand(currentOperand)}
      </div>
      <div className="cal__btnDiv">
        <div className="cal__numBtns">
        <button className="cal__btn" onClick={() => dispatch({type:ACTIONS.ADD_DIGIT, payload:7})}>7</button>
        <button className="cal__btn" onClick={() => dispatch({type:ACTIONS.ADD_DIGIT, payload:8})}>8</button>
        <button className="cal__btn" onClick={() => dispatch({type:ACTIONS.ADD_DIGIT, payload:9})}>9</button>
        <button className="delBtn" onClick={() => dispatch({type:ACTIONS.DELETE_DIGIT})}>DEL</button>
        <button className="cal__btn" onClick={() => dispatch({type:ACTIONS.ADD_DIGIT, payload:4})}>4</button>
        <button className="cal__btn" onClick={() => dispatch({type:ACTIONS.ADD_DIGIT, payload:5})}>5</button>
        <button className="cal__btn" onClick={() => dispatch({type:ACTIONS.ADD_DIGIT, payload:6})}>6</button>
        <button className="cal__btn" onClick={() => dispatch({type:ACTIONS.CHOOSE_OPERATION, payload: '+'})}>+</button>
        <button className="cal__btn" onClick={() => dispatch({type:ACTIONS.ADD_DIGIT, payload:1})}>1</button>
        <button className="cal__btn" onClick={() => dispatch({type:ACTIONS.ADD_DIGIT, payload:2})}>2</button>
        <button className="cal__btn" onClick={() => dispatch({type:ACTIONS.ADD_DIGIT, payload:3})}>3</button>
        <button className="cal__btn" onClick={() => dispatch({type:ACTIONS.CHOOSE_OPERATION, payload: '-'})}>-</button>
        <button className="cal__btn" onClick={() => dispatch({type:ACTIONS.ADD_DIGIT, payload:'.'})}>.</button>
        <button className="cal__btn" onClick={() => dispatch({type:ACTIONS.ADD_DIGIT, payload:0})}>0</button>
        <button className="cal__btn" onClick={() => dispatch({type:ACTIONS.CHOOSE_OPERATION, payload: '/'})}>/</button>
        <button className="cal__btn" onClick={() => dispatch({type:ACTIONS.CHOOSE_OPERATION, payload: '*'})}>x</button>
        </div>
        <div className="cal__resetBtns">
        <button className="resetBtn" onClick={() => dispatch({type:ACTIONS.CLEAR})}>Reset</button>
          <button className="equalBtn" onClick={() => dispatch({type:ACTIONS.EVALUATE})}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calc;
