import React, { useState }  from 'react'; 
import TimeInput from './TimeInput';
import CountdownStartPause from './CountdownStartPause';
import './CountdownTimer.css';
import CountdownDisplay from './CountdownDisplay';

function CountdownTimer() { 
  const [inputMinutes, setInputMinutes] = useState(''); 
  const [isRunning, setIsRunning] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(0);

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
    
  return (
    <div className="countdown-timer">
       <TimeInput
        value={inputMinutes}
        onChange={onInputMinutesChange}
        onStart={onStart}
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
    </div>
  );
}

export default CountdownTimer;
