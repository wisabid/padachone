import React from 'react';
import ReactDOM from 'react-dom';
import Emailbox from './Emailbox';

describe('<Emailbox />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Emailbox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

