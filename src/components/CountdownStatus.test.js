import React from 'react';
import CountdownStatus from './CountdownStatus';
import { shallow } from 'enzyme';

it('renders initial state', () => {
  const initialState = shallow(
    <CountdownStatus secondsRemaining={0} totalSeconds={0} />
  );
  expect(initialState).toMatchSnapshot();
});

it('renders times up state', () => {
  const initialState = shallow(
    <CountdownStatus secondsRemaining={0} totalSeconds={10} />
  );
  expect(initialState).toMatchSnapshot();
});

it('renders half way state', () => {
  const initialState = shallow(
    <CountdownStatus secondsRemaining={2} totalSeconds={5} />
  );
  expect(initialState).toMatchSnapshot();
});
