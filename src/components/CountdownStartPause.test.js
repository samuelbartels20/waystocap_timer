import React from 'react';
import CountdownStartPause from './CountdownStartPause';
import { shallow } from 'enzyme';

it('shows a different icon for running and not running', () => {
  const notRunning = shallow(<CountdownStartPause isRunning={false} />);
  expect(notRunning).toMatchSnapshot();
  const running = shallow(<CountdownStartPause isRunning={true} />);
  expect(running).toMatchSnapshot();
});
