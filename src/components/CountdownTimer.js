import React, { useState, useEffect }  from 'react'; 
import TimeInput from './TimeInput';
import CountdownStartPause from './CountdownStartPause';
import SpeedInput from './SpeedInput';
import CountdownDisplay from './CountdownDisplay';
import CountdownStatus from './CountdownStatus';

import './CountdownTimer.css';

function CountdownTimer() { 
  const [inputMinutes, setInputMinutes] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setSecondsRemaining(s => s - 1);
      }, 1000 / speed);
      return () => clearInterval(interval);
    }
  }, [isRunning, speed]);

  if (isRunning && secondsRemaining === 0) setIsRunning(false);

  const onInputMinutesChange = (e, value) => {
    setInputMinutes(value.value);
  };

  const onStart = () => {
    const minutes = parseFloat(inputMinutes);

    if (isNaN(minutes) || minutes < 0) return;

    const totalSeconds = Math.floor(60 * minutes);

    setIsRunning(true);
    setSecondsRemaining(totalSeconds);
    setTotalSeconds(totalSeconds);
  };

  const onStartPause = () => {
    setIsRunning(!isRunning);
  };

  const onSpeedChange = newSpeed => setSpeed(newSpeed);
  return (
    <div className="countdown-timer">
      <TimeInput
        value={inputMinutes}
        onChange={onInputMinutesChange}
        onStart={onStart}
      />
      <CountdownStatus
        secondsRemaining={secondsRemaining}
        totalSeconds={totalSeconds}
      />
      <div className="display-row">
        <CountdownDisplay
          secondsRemaining={secondsRemaining}
          totalSeconds={totalSeconds}
        />
        <CountdownStartPause
          disabled={secondsRemaining === 0 || totalSeconds === 0}
          isRunning={isRunning}
          onClick={onStartPause}
        />
      </div>
      <SpeedInput speed={speed} onChange={onSpeedChange} />
    </div>
  );
}

export default CountdownTimer;
