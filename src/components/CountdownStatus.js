import React from 'react';
import PropTypes from 'prop-types';

import './CountdownStatus.css';

function CountdownStatus({ secondsRemaining, totalSeconds }) {
  let status = '';
  if (secondsRemaining === 0 && totalSeconds > 0) {
    status = "Time's up!";
  } else if (secondsRemaining / totalSeconds < 0.5) {
    status = 'More than halfway there!';
  }

  return <div className="countdown-status">{status}</div>;
}

CountdownStatus.propTypes = {
  secondsRemaining: PropTypes.number.isRequired,
  totalSeconds: PropTypes.number.isRequired,
};

export default CountdownStatus;
