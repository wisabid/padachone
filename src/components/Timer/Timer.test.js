import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';

describe('<Timer />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Timer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

