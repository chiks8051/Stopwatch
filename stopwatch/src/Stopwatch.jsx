import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const startTimer = () => {
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setTime(0);
    setRunning(false);
  };

  useEffect (() => {
    let timerId;
     timerId = running 
        ? setInterval(() => {
            setTime(prevTime => prevTime + 1);
          }, 1000)
        : clearInterval(timerId);

    return () => clearInterval(timerId);

  },[running])

  const formatTime = time => {
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formatNumber = num => (num < 10 ? `0${num}` : num);

    return `${minutes}:${formatNumber(seconds)}`;
  };

  return (
    <>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(time)}</p>
      {!running ? (
        <button onClick={startTimer}>Start</button>
      ) : (
        <button onClick={stopTimer}>Stop</button>
      )}
      <button onClick={resetTimer}>Reset</button>
    </>
  );
};
export default Stopwatch;
