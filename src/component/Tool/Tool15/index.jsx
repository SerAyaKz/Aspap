import React, { useState } from 'react';
import "./style.css";

function Tool15() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="simple-notepad">
      <textarea
        className="notepad-input"
        value={text}
        onChange={handleTextChange}
        placeholder="Type something..."
      ></textarea>
      <div className="notepad-display">{text}</div>
    </div>
  );
}

export default Tool15;
