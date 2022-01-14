import calculate from '../logic/calculate';

describe('Testing Calculator operations', () => {
  test('Returns the Sum of two integers', () => {
    const mathObj = { total: 3, next: 4, operation: '+' };
    const result = calculate(mathObj, mathObj.operation);
    expect(result.total).toEqual('7');
  });
  test('Returns the Subtraction of two integers', () => {
    const mathObj = { total: 7, next: 5, operation: '-' };
    const result = calculate(mathObj, mathObj.operation);
    expect(result.total).toEqual('2');
  });
  test('Returns the Multiplication of two integers', () => {
    const mathObj = { total: 40, next: 5, operation: 'x' };
    const result = calculate(mathObj, mathObj.operation);
    expect(result.total).toEqual('200');
  });
  test('Returns Division of two integers', () => {
    const mathObj = { total: 12, next: 4, operation: '÷' };
    const result = calculate(mathObj, mathObj.operation);
    expect(result.total).toEqual('3');
  });
});

describe('Testing for math Operations for decimal numbers', () => {
  test('Returns the Sum of two integers', () => {
    const mathObj = { total: 2.5, next: 2.5, operation: '+' };
    const result = calculate(mathObj, mathObj.operation);
    expect(result.total).toEqual('5');
  });
  test('Returns result for Subtracting two decimal numbers', () => {
    const mathObj = { total: 10.5, next: 5.7, operation: '-' };
    const result = calculate(mathObj, mathObj.operation);
    expect(result.total).toEqual('4.8');
  });

  test('Returns the result for Multiplying two decimal numbers', () => {
    const mathObj = { total: 10.1, next: 4.1, operation: 'x' };
    const result = calculate(mathObj, mathObj.operation);
    expect(result.total).toEqual('41.41');
  });

  test('Returns the result for Diving two decimal numbers', () => {
    const mathObj = { total: 36.1, next: 6.2, operation: '÷' };
    const result = calculate(mathObj, mathObj.operation);
    expect(result.total).toEqual('5.82258064516129032258');
  });
});

describe('Testing for math Operations for Zeros Cases', () => {
  test('Returns 0', () => {
    const mathObj = { total: 0, next: 0, operation: '+' };
    const result = calculate(mathObj, mathObj.operation);
    expect(result.total).toEqual('0');
  });

  test('Returns 10', () => {
    const mathObj = { total: 10, next: 0, operation: '-' };
    const result = calculate(mathObj, mathObj.operation);
    expect(result.total).toEqual(10);
  });

  test('Returns 0', () => {
    const mathObj = { total: 5, next: 0, operation: 'x' };
    const result = calculate(mathObj, mathObj.operation);
    expect(result.total).toEqual(5);
  });
});
