import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';

describe('<Messages />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Messages />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

