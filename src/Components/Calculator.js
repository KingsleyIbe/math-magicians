import React, { useState } from 'react';
import '../styles/App.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: 0, operation: null });
  const handleBtnClick = (e) => {
    setState(calculate(state, e.target.textContent));
  };

  return (
    <div id="container">
      <div className="calc-h2">
        <h2>Lets do some math!</h2>
      </div>
      <div id="calculator">
        <div id="result">
          <div id="history">
            <p id="history-value" />
          </div>
          <div id="output">
            { state.total }
            { state.operation }
            { state.next }
          </div>
        </div>
        <div id="keyboard">
          <button type="button" className="operator" id="clear" onClick={handleBtnClick}>C</button>
          <button type="button" className="operator" id="backspace" onClick={handleBtnClick}>AC</button>
          <button type="button" className="operator" id="backspace" onClick={handleBtnClick}>+/-</button>
          <button type="button" className="operator" id="+" onClick={handleBtnClick}>&#247;</button>
          <button type="button" className="operator" id="7" onClick={handleBtnClick}>7</button>
          <button type="button" className="number" id="8" onClick={handleBtnClick}>8</button>
          <button type="button" className="number" id="9" onClick={handleBtnClick}>9</button>
          <button type="button" className="number" id="*" onClick={handleBtnClick}>x</button>
          <button type="button" className="operator" id="4" onClick={handleBtnClick}>4</button>
          <button type="button" className="number" id="5" onClick={handleBtnClick}>5</button>
          <button type="button" className="number" id="6" onClick={handleBtnClick}>6</button>
          <button type="button" className="number" id="7" onClick={handleBtnClick}>-</button>
          <button type="button" className="operator" id="1" onClick={handleBtnClick}>1</button>
          <button type="button" className="number" id="2" onClick={handleBtnClick}>2</button>
          <button type="button" className="number" id="3" onClick={handleBtnClick}>3</button>
          <button type="button" className="number" id="4" onClick={handleBtnClick}>+</button>
          <button type="button" className="operator" id="+" onClick={handleBtnClick}>%</button>
          <button type="button" className="empty" id="0" onClick={handleBtnClick}>0</button>
          <button type="button" className="number" id="." onClick={handleBtnClick}>.</button>
          <button type="button" className="operator" id="=" onClick={handleBtnClick}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
