import React from 'react';
import ReactDOM from 'react-dom';
import SpecialDay from './SpecialDay';

describe('<SpecialDay />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SpecialDay />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

