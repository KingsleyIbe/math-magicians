import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../Components/Calculator';
import Home from '../pages/Home';
import Quote from '../pages/Quote';

describe('Test UI of the webpage', () => {
  it('Home displays on the page', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Calculator displays on the page', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Quote displays on the page', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
