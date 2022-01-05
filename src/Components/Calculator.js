import { Component } from 'react';
import '../styles/App.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick(e) {
    this.setState((state) => (calculate(state, e.target.textContent)));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div id="container">
        <div id="calculator">
          <div id="result">
            <div id="history">
              <p id="history-value" />
            </div>
            <div id="output">
              {total}
              {operation}
              {next}
            </div>
          </div>
          <div id="keyboard">
            <button type="button" className="operator" id="clear" onClick={this.handleBtnClick}>C</button>
            <button type="button" className="operator" id="backspace" onClick={this.handleBtnClick}>AC</button>
            <button type="button" className="operator" id="backspace" onClick={this.handleBtnClick}>+/-</button>
            <button type="button" className="operator" id="+" onClick={this.handleBtnClick}>&#247;</button>
            <button type="button" className="operator" id="7" onClick={this.handleBtnClick}>7</button>
            <button type="button" className="number" id="8" onClick={this.handleBtnClick}>8</button>
            <button type="button" className="number" id="9" onClick={this.handleBtnClick}>9</button>
            <button type="button" className="number" id="x" onClick={this.handleBtnClick}>x</button>
            <button type="button" className="operator" id="4" onClick={this.handleBtnClick}>4</button>
            <button type="button" className="number" id="5" onClick={this.handleBtnClick}>5</button>
            <button type="button" className="number" id="6" onClick={this.handleBtnClick}>6</button>
            <button type="button" className="number" id="7" onClick={this.handleBtnClick}>-</button>
            <button type="button" className="operator" id="1" onClick={this.handleBtnClick}>1</button>
            <button type="button" className="number" id="2" onClick={this.handleBtnClick}>2</button>
            <button type="button" className="number" id="3" onClick={this.handleBtnClick}>3</button>
            <button type="button" className="number" id="4" onClick={this.handleBtnClick}>+</button>
            <button type="button" className="operator" id="+" onClick={this.handleBtnClick}>%</button>
            <button type="button" className="empty" id="0" onClick={this.handleBtnClick}>0</button>
            <button type="button" className="number" id="." onClick={this.handleBtnClick}>.</button>
            <button type="button" className="operator" id="=" onClick={this.handleBtnClick}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
