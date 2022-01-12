// const { calculate } = require('./logic/calculate');
const { operate } = require('./logic/operate');

describe('My math function', () => {
  test.each`
  numberOne | numberTwo | operation | expected
  ${4}      | ${4}      | ${'+'}    | ${8}
  ${7}      | ${4}      | ${'-'}    | ${0}
  ${8}      | ${4}      | ${'/'}    | ${1}
  ${3}      | ${4}      | ${'*'}    | ${16}
  `('adds $numberOne + $numberTwo to equal $expected', ({
    numberOne, numberTwo, operation, expected,
  }) => {
    expect(operate({ numberOne, numberTwo, operation })).toEqual(expected);
  });
});
