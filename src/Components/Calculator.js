import React from 'react';

const Calculator = () => (
  <div id="container">
    <div id="calculator">
      <div id="result">
        <div id="history">
          <p id="history-value" />
        </div>
        <div id="output">
          <p id="output-value" />
        </div>
      </div>
      <div id="keyboard">
        <button type="button" className="operator" id="clear">C</button>
        <button type="button" className="operator" id="backspace">AC</button>
        <button type="button" className="operator" id="backspace">+/-</button>
        <button type="button" className="operator" id="%">%</button>
        <button type="button" className="operator" id="/">&#247;</button>
        <button type="button" className="number" id="7">7</button>
        <button type="button" className="number" id="8">8</button>
        <button type="button" className="number" id="9">9</button>
        <button type="button" className="operator" id="*">&times;</button>
        <button type="button" className="number" id="4">4</button>
        <button type="button" className="number" id="5">5</button>
        <button type="button" className="number" id="6">6</button>
        <button type="button" className="operator" id="-">-</button>
        <button type="button" className="number" id="1">1</button>
        <button type="button" className="number" id="2">2</button>
        <button type="button" className="number" id="3">3</button>
        <button type="button" className="operator" id="+">+</button>
        <button type="button" className="empty" id="empty" aria-label="empty" />
        <button type="button" className="number" id="0">0</button>
        <button type="button" className="empty" id="empty" aria-label="empty" />
        <button type="button" className="operator" id="=">=</button>
      </div>
    </div>
  </div>
);

document.getElementById('output').innerHTML = '0';
Calculator();

export default Calculator;
