import React from 'react';
import TimeInput from './TimeInput';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<TimeInput />);
});
