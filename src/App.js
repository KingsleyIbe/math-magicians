import './styles/App.css';
import Calculator from './Components/Calculator';
// import { Component } from 'react/cjs/react.production.min';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Math magicians</h1>
      </header>
      <Calculator />
    </div>
  );
}

export default App;
