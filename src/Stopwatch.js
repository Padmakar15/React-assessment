import React, { useState, useEffect } from "react";
import "./App.css";

const Stopwatch = () => {
  const [hrs, setHrs] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [mSeconds, setMSeconds] = useState(0);
  const [stop, setStop] = useState(false);
  const onStart = () => {
    setStop(false);
  };
  const onStop = () => {
    setStop(true);
  };
  const onReset = () => {
    setHrs(0);
    setMinutes(0);
    setSeconds(0);
    setMSeconds(0);
  };
  useEffect(() => {
    let interval = null;
    if (!stop) {
      interval = setInterval(() => {
        if (minutes > 59) {
          setHrs(hrs + 1);
          setMinutes(0);
          clearInterval(interval);
        }
        if (seconds > 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
          clearInterval(interval);
        }
        if (mSeconds > 999) {
          setSeconds(seconds + 1);
          setMSeconds(0);
          clearInterval(interval);
        }
        if (mSeconds <= 999) {
          setMSeconds(mSeconds + 1);
        }
      }, 1);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className="stopwatch">
      <div className="inner">
        <div>
          <p>
            {hrs}:{minutes}:{seconds}:{mSeconds}
          </p>
        </div>
        <div>
          <button onClick={onStart}>Start</button>
          <button onClick={onStop}>Stop</button>
          <button onClick={onReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
