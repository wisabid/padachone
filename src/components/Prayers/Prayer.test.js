import React from 'react';
import ReactDOM from 'react-dom';
import Prayer from './Prayer';

describe('<Prayer />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Prayer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

