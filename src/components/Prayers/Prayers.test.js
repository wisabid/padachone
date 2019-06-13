import React from 'react';
import ReactDOM from 'react-dom';
import Prayers from './Prayers';

describe('<Prayers />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Prayers />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

