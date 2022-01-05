import React from 'react';
import operate from '../logic/operate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="container">
        <div id="calculator">
          <div id="result">
            <div id="history">
              <p id="history-value" />
            </div>
            <div id="output">
              <p id="output-value">0</p>
            </div>
          </div>
          <div id="keyboard">
            <button type="button" className="operator" id="clear">C</button>
            <button type="button" className="operator" id="backspace">AC</button>
            <button type="button" className="operator" id="backspace">+/-</button>
            <button type="button" className="operator" id="+">&#247;</button>
            <button type="button" className="operator" id="/">7</button>
            <button type="button" className="number" id="7">8</button>
            <button type="button" className="number" id="8">9</button>
            <button type="button" className="number" id="9">&times;</button>
            <button type="button" className="operator" id="*">4</button>
            <button type="button" className="number" id="4">5</button>
            <button type="button" className="number" id="5">6</button>
            <button type="button" className="number" id="6">-</button>
            <button type="button" className="operator" id="-">1</button>
            <button type="button" className="number" id="1">2</button>
            <button type="button" className="number" id="2">3</button>
            <button type="button" className="number" id="3">+</button>
            <button type="button" className="operator" id="%">%</button>
            <button type="button" className="empty" id="empty">0</button>
            <button type="button" className="number" id="0">.</button>
            <button type="button" className="operator" id="=">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
