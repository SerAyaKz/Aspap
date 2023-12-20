import React, { useState, useEffect } from 'react';
import "./style.css";

function Tool18() {
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState('work'); // modes: work, shortBreak, longBreak
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [task, setTask] = useState('');

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            switch (mode) {
              case 'work': return 5 * 60; // default to short break
              case 'shortBreak': return 25 * 60; // default back to work
              case 'longBreak': return 25 * 60; // default back to work
              default: return 25 * 60;
            }
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (!isActive && timeLeft !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, mode]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMode('work');
    setTimeLeft(25 * 60);
  };

  const setShortBreak = () => {
    setIsActive(false);
    setMode('shortBreak');
    setTimeLeft(5 * 60);
  };

  const setLongBreak = () => {
    setIsActive(false);
    setMode('longBreak');
    setTimeLeft(15 * 60);
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="pomodoro-timer">
      <input
        type="text"
        value={task}
        onChange={handleTaskChange}
        placeholder="Enter your task..."
        className="task-input"
      />
      <div className="timer-display">
        {mode === 'work' ? 'Work Time' : mode === 'shortBreak' ? 'Short Break' : 'Long Break'}: {formatTime(timeLeft)}
      </div>
      <div className="timer-controls">
        {isActive ? (
          <button onClick={pauseTimer}>Pause</button>
        ) : (
          <button onClick={startTimer}>Start</button>
        )}
        <button onClick={resetTimer}>Reset</button>
        <button onClick={setShortBreak}>Short Break</button>
        <button onClick={setLongBreak}>Long Break</button>
      </div>
    </div>
  );
}

export default Tool18;
