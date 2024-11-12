import { useEffect, useState } from "react";

const ReactTimer = () => {
  const [time, setTime] = useState(0);
  const [isTimer, setisTimer] = useState(false);

  useEffect(() => {
    let newTime;
    if (isTimer) {
      newTime = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(newTime);
    };
  }, [isTimer]);

  const handleStart = () => {
    setisTimer(true);
  };

  const handleStop = () => {
    setisTimer(false);
  };

  const handleReset = () => {
    setTime(0);
    setisTimer(false);
  };
  return (
    <>
      <div className="Timer-wrapper">
        <h2>Timer</h2>
        <div className="Time">{time}</div>
        <div className="btn-container">
          <button onClick={handleStart} className="start-btn">Start</button>
          <button onClick={handleStop} className="stop-btn">Stop</button>
          <button onClick={handleReset} className="reset-btn">Reset</button>
        </div>
      </div>
    </>
  );
};

export default ReactTimer;
