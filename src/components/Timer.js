import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { AccessAlarm } from '@material-ui/icons';
import './Timer.css';

const Timer = ({ gameID, paused, handleLoseGame }) => {
  const [time, setTime] = useState(90000);
  const prevGameIdRef = useRef();

  useEffect(() => {
    if (!paused) {
      if (time <= 0) {
        handleLoseGame();
      } else {
        const timer = setTimeout(() => setTime(moment(time).subtract(1, 's')), 1000);
        return () => clearTimeout(timer)
      }
    }
    // When the GameID changes we reset the clock
    if (prevGameIdRef.current !== gameID) {
      prevGameIdRef.current = gameID;
      setTime(90000);
    }
  });

  return (
    <div className="Timer">
      <AccessAlarm className="icon" style={ time <= 5000 ? { color: "red" } : null} />
      <h2 style={ time <= 5000 ? { color: "red" } : null}>
        {moment(time).format('m:ss')}
      </h2>
    </div>
  );
}

export default Timer;