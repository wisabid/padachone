import React from 'react';
import ReactDOM from 'react-dom';
import PrayerTime from './PrayerTime';

describe('<PrayerTime />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PrayerTime />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

