export default function display() {
  const getHistory = () => (
    document.getElementById('history-value').innerText
  );

  const printHistory = (num) => {
    document.getElementById('history-value').innerText = num;
  };

  const getOutput = () => document.getElementById('output-value').innerText;

  const getFormattedNumber = (num) => {
    if (num === '-') {
      return '';
    }
    const n = Number(num);
    const value = n.toLocaleString('en');
    return value;
  };

  const printOutput = (num) => {
    if (num === '') {
      document.getElementById('output-value').innerText = num;
    } else {
      document.getElementById('output-value').innerText = getFormattedNumber(num);
    }
  };

  const reverseNumberFormat = (num) => Number(num.replace(/,/g, ''));

  const operator = document.getElementsByClassName('operator');
  for (let i = 0; i < operator.length; i += 1) {
    operator[i].addEventListener('onClick', () => {
      if (this.id === 'clear') {
        printHistory('');
        printOutput('');
      } else if (this.id === 'backspace') {
        let output = reverseNumberFormat(getOutput()).toString();
        if (output) {
        // if output has a value
          output = output.substr(0, output.length - 1);
          printOutput(output);
        }
      } else {
        let output = getOutput();
        let history = getHistory();
        if (output === '' && history !== '') {
          if (output.isNaN(history[history.length - 1])) {
            history = history.substr(0, history.length - 1);
          }
        }
        if (output !== '' || history !== '') {
          output = output === '' ? output : reverseNumberFormat(output);
          history += output;
          if (this.id === '=') {
          // eslint-disable-next-line
          const result = Function(history);
            printOutput(result);
            printHistory('');
          } else {
            history += this.id;
            printHistory(history);
            printOutput('');
          }
        }
      }
    });
  }
  const number = document.getElementsByClassName('number');
  for (let i = 0; i < number.length; i += 1) {
    number[i].addEventListener('onClick', () => {
      let output = reverseNumberFormat(getOutput());
      if (output.isNaN === false) {
      // if output is a number
        output += this.id;
        printOutput(output);
      }
    });
  }
}
