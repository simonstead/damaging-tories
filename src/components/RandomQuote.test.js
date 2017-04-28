import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ReactTestUtils, { scryRenderedDOMComponentsWithTag } from 'react-dom/test-utils';
import RandomQuote from './RandomQuote';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RandomQuote />, div);
});

it('is populated with a quote', () => {
  const rendered = ReactTestUtils.renderIntoDocument(
    <RandomQuote/>
  );
  const quote = rendered.state.randomQuote
  expect(quote.author).toBeDefined();
  expect(quote.src).toBeDefined();
  expect(quote.quote).toBeDefined();
})

it('has a button that changes the quote', () => {
  const rendered = ReactTestUtils.renderIntoDocument(
    <RandomQuote/>
  );
  const quote = rendered.state.randomQuote
  expect(quote.author).toBeDefined();
  expect(quote.src).toBeDefined();
  expect(quote.quote).toBeDefined();

  ReactTestUtils.Simulate.click(rendered.refs.new_quote);

  const second_quote = rendered.state.randomQuote
  expect(quote).not.toEqual(second_quote);
})
