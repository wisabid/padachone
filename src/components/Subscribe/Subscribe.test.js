import React from 'react';
import ReactDOM from 'react-dom';
import Subscribe from './Subscribe';

describe('<Subscribe />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Subscribe />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

