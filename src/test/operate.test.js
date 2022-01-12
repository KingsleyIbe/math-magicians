import operate from '../logic/operate';

describe('Testing for math Operations for integers', () => {
  it('Returns the Sum of two integers', () => {
    expect(operate(2, 5, '+')).toEqual('7');
  });
  it('Returns result for Subtracting two integers', () => {
    expect(operate(10, 5, '-')).toEqual('5');
  });
  it('Returns the result for Multiplying two integers', () => {
    expect(operate(100, 4, 'x')).toEqual('400');
  });
  it('Returns the result for Diving two integers', () => {
    expect(operate(36, 6, '÷')).toEqual('6');
  });
});

describe('Testing for math Operations for decimal numbers', () => {
  it('Returns the Sum of two integers', () => {
    expect(operate(2.5, 2.5, '+')).toEqual('5');
  });
  it('Returns result for Subtracting two decimal numbers', () => {
    expect(operate(10.5, 5.7, '-')).toEqual('4.8');
  });
  it('Returns the result for Multiplying two decimal numbers', () => {
    expect(operate(10.1, 4.1, 'x')).toEqual('41.41');
  });
  it('Returns the result for Diving two decimal numbers', () => {
    expect(operate(36, 6, '÷')).toEqual('6');
  });
});
