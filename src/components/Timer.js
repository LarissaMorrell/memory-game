import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { Typography } from '@material-ui/core';
import { AccessAlarm } from '@material-ui/icons';
import './Timer.css';

const Timer = ({ gameID, paused, handleLoseGame }) => {
  const [time, setTime] = useState(90000);
  const prevGameIdRef = useRef();

  useEffect(() => {
    if (!gameID || prevGameIdRef.current !== gameID) {
      prevGameIdRef.current = gameID;
      setTime(90000);
    }

    if (!paused) {
      if (time <= 0) {
        handleLoseGame();
        setTime(90000);
      } else {
        const timer = setTimeout(() => setTime(moment(time).subtract(1, 's')), 1000);
        return () => clearTimeout(timer)
      }
    }
  }, [gameID, handleLoseGame, paused, time]);
  
  if (gameID)
    return (
      <Typography
        className="Timer"
        variant="h6"
        color={time <= 5000 ? "secondary" : "initial"}
      >
        <AccessAlarm style={ time <= 5000 ? { color: "secondary" } : null} />
        {moment(time).format('m:ss')}
      </Typography>
    );
  return null;
}

export default Timer;