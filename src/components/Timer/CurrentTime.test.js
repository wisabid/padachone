import React from 'react';
import ReactDOM from 'react-dom';
import CurrentTime from './CurrentTime';

describe('<CurrentTime />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CurrentTime />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

