import React from 'react';
import PropTypes from 'prop-types';

import './CountdownDisplay.css';

function CountdownDisplay({ secondsRemaining, totalSeconds }) {
  const minutes = Math.floor(secondsRemaining / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (secondsRemaining % 60).toString().padStart(2, '0');

  const classNames = ['countdown-display'];

  if (secondsRemaining > 0) {
    if (secondsRemaining < 20) classNames.push('near-end');
    if (secondsRemaining < 10) classNames.push('imminent-end');
  }

  return (
    <div className={classNames.join(' ')}>
      {minutes}:{seconds}
    </div>
  );
}

CountdownDisplay.propTypes = {
  secondsRemaining: PropTypes.number.isRequired,
  totalSeconds: PropTypes.number.isRequired,
};

export default CountdownDisplay;
