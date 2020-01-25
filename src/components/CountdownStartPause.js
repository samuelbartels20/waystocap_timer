import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function CountdownStartPause({ disabled, isRunning, onClick }) {
  const icon = isRunning ? 'pause' : 'play';
  return (
    <Button disabled={disabled} onClick={onClick} icon>
      <Icon name={icon} />
    </Button>
  );
}

CountdownStartPause.propTypes = {
  disabled: PropTypes.bool,
  isRunning: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default CountdownStartPause;
