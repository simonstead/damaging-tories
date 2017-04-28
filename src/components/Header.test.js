import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

it('always renders the same', () => {
  const component = renderer.create(<Header/>)
  expect(component.toJSON()).toMatchSnapshot();
})
