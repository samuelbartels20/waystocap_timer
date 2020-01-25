import React from 'react';
import SpeedInput from './SpeedInput';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  shallow(<SpeedInput />);
});

it('activates button based on speed', () => {
  const input = shallow(<SpeedInput speed={2} />);
  expect(input).toMatchSnapshot();
});

it('changes correct speed', () => {
  const onChange = jest.fn();
  const input = mount(<SpeedInput onChange={onChange} />);

  input
    .find('Button')
    .filterWhere(b => b.text() === '2.0X')
    .simulate('click');
  expect(onChange.mock.calls.length).toBe(1);
  expect(onChange.mock.calls[0][0]).toBe(2);

  input.unmount();
});
