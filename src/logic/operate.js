import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  let result;
  switch (operation) {
    case '+':
      result = one.plus(two).toString();
      break;
    case '-':
      result = one.minus(two).toString();
      break;
    case 'x':
      result = one.times(two).toString();
      break;
    case '÷':
      try {
        result = one.div(two).toString();
      } catch (e) {
        result = "Can't divide by 0.";
      }
      break;
    case '%':
      try {
        result = one.mod(two).toString();
      } catch (e) {
        result = "Can't find modulo as can't divide by 0.";
      }
      break;
    default:
      throw Error(`Unknown operation '${operation}'`);
  }
  return result;
}

export default operate;
