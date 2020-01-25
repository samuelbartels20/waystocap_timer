import React from 'react';
import CountdownDisplay from './CountdownDisplay';
import { shallow } from 'enzyme';

it('renders initial state', () => {
  const initialState = shallow(
    <CountdownDisplay secondsRemaining={0} totalSeconds={0} />
  );
  expect(initialState).toMatchSnapshot();
});

it('renders normal state', () => {
  const initialState = shallow(
    <CountdownDisplay secondsRemaining={25} totalSeconds={30} />
  );
  expect(initialState).toMatchSnapshot();
});

it('renders near end state', () => {
  const initialState = shallow(
    <CountdownDisplay secondsRemaining={15} totalSeconds={30} />
  );
  expect(initialState).toMatchSnapshot();
});

it('renders imminent end state', () => {
  const initialState = shallow(
    <CountdownDisplay secondsRemaining={5} totalSeconds={30} />
  );
  expect(initialState).toMatchSnapshot();
});
