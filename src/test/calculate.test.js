import calculate from '../logic/calculate';

describe('Testing Calculator operations', () => {
  it('Returns the Sum of two integers', () => {
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
