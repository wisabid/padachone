import React from 'react';
import ReactDOM from 'react-dom';
import Bgmusic from './Bgmusic';

describe('<Bgmusic />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Bgmusic />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

