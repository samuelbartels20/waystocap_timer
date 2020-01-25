import React from 'react';
import { act } from 'react-dom/test-utils';
import CountdownTimer from './CountdownTimer';
import { shallow, mount } from 'enzyme';

jest.useFakeTimers();

it('renders without crashing', () => {
  shallow(<CountdownTimer />);
});

it('can run a timer for 1 minute at 1x', () => {
  const timer = mount(<CountdownTimer />);
  timer.find('form input').simulate('change', { target: { value: '1' } });
  timer.find('form .button').simulate('click');
  expect(timer.find('.countdown-display').text()).toBe('01:00');
  act(() => jest.advanceTimersByTime(59 * 1000));
  expect(timer.find('.countdown-display').text()).toBe('00:01');
  act(() => jest.advanceTimersByTime(1 * 1000));
  expect(timer.find('.countdown-status').text()).toBe("Time's up!");
  expect(timer.find('.countdown-display').text()).toBe('00:00');
  act(() => jest.advanceTimersByTime(60 * 1000));
  expect(timer.find('.countdown-display').text()).toBe('00:00');
  timer.unmount();
});

it('can run a timer for 4 minutes at 2x', () => {
  const timer = mount(<CountdownTimer />);
  timer.find('form input').simulate('change', { target: { value: '4' } });
  timer.find('form .button').simulate('click');
  timer
    .find('SpeedInput')
    .find('.button')
    .filterWhere(b => b.text() === '2.0X')
    .simulate('click');
  expect(timer.find('.countdown-display').text()).toBe('04:00');
  act(() => jest.advanceTimersByTime(60 * 1000));
  expect(timer.find('.countdown-display').text()).toBe('02:00');
  act(() => jest.advanceTimersByTime(60 * 1000));
  expect(timer.find('.countdown-status').text()).toBe("Time's up!");
  expect(timer.find('.countdown-display').text()).toBe('00:00');
  act(() => jest.advanceTimersByTime(1 * 1000));
  expect(timer.find('.countdown-display').text()).toBe('00:00');
  timer.unmount();
});
