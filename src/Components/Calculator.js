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

  handleBtnClick(sym) {
    this.setState((state) => (calculate(state, sym)));
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
              <p id="output-value">0</p>
            </div>
          </div>
          <div id="keyboard">
            <button type="button" className="operator" id="clear" handleBtnClick={this.handleBtnClick}>C</button>
            <button type="button" className="operator" id="backspace" handleBtnClick={this.handleBtnClick}>AC</button>
            <button type="button" className="operator" id="backspace" handleBtnClick={this.handleBtnClick}>+/-</button>
            <button type="button" className="operator" id="+" handleBtnClick={this.handleBtnClick}>&#247;</button>
            <button type="button" className="operator" id="/" handleBtnClick={this.handleBtnClick}>7</button>
            <button type="button" className="number" id="7" handleBtnClick={this.handleBtnClick}>8</button>
            <button type="button" className="number" id="8" handleBtnClick={this.handleBtnClick}>9</button>
            <button type="button" className="number" id="9" handleBtnClick={this.handleBtnClick}>&times;</button>
            <button type="button" className="operator" id="*" handleBtnClick={this.handleBtnClick}>4</button>
            <button type="button" className="number" id="4" handleBtnClick={this.handleBtnClick}>5</button>
            <button type="button" className="number" id="5" handleBtnClick={this.handleBtnClick}>6</button>
            <button type="button" className="number" id="6" handleBtnClick={this.handleBtnClick}>-</button>
            <button type="button" className="operator" id="-" handleBtnClick={this.handleBtnClick}>1</button>
            <button type="button" className="number" id="1" handleBtnClick={this.handleBtnClick}>2</button>
            <button type="button" className="number" id="2" handleBtnClick={this.handleBtnClick}>3</button>
            <button type="button" className="number" id="3" handleBtnClick={this.handleBtnClick}>+</button>
            <button type="button" className="operator" id="%" handleBtnClick={this.handleBtnClick}>%</button>
            <button type="button" className="empty" id="empty" handleBtnClick={this.handleBtnClick}>0</button>
            <button type="button" className="number" id="0" handleBtnClick={this.handleBtnClick}>.</button>
            <button type="button" className="operator" id="=" handleBtnClick={this.handleBtnClick}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
