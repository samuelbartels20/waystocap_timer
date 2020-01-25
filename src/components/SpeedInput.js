import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SPEEDS = [1, 1.5, 2];

function SpeedInput({ speed, onChange }) {
  const buttons = SPEEDS.map(s => (
    <Button key={s} active={s === speed} onClick={() => onChange(s)}>
      {s.toFixed(1)}X
    </Button>
  ));
  return <Button.Group>{buttons}</Button.Group>;
}

SpeedInput.propTypes = {
  speed: PropTypes.number,
  onChange: PropTypes.func,
};

export default SpeedInput;
