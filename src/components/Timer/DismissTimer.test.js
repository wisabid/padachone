import React from 'react';
import ReactDOM from 'react-dom';
import DismissTimer from './DismissTimer';

describe('<DismissTimer />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DismissTimer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

