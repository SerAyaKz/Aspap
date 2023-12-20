import React, { useState } from 'react';
import "./style.css";

function Tool13() {
  const [text, setText] = useState('');
  const [readingTime, setReadingTime] = useState({ minutes: 0, seconds: 0 });

  const calculateReadingTime = (text) => {
    const words = text.trim().split(/\s+/).length;
    const averageReadingSpeed = 200; // Average reading speed in words per minute
    const totalReadingTimeInMinutes = words / averageReadingSpeed;
    const minutes = Math.floor(totalReadingTimeInMinutes);
    const seconds = Math.floor((totalReadingTimeInMinutes - minutes) * 60);

    return { minutes, seconds };
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    setReadingTime(calculateReadingTime(e.target.value));
  };

  return (
    <div className="reading-time-estimator">
      <textarea
        className="input-text"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter or paste your text here..."
      ></textarea>
      <p>Estimated Reading Time: {readingTime.minutes} minutes {readingTime.seconds} seconds</p>
    </div>
  );
}

export default Tool13;
