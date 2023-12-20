import React, { useState } from 'react';
import "./style.css";

function Tool11() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const convertToUpperCase = () => {
    setText(text.toUpperCase());
  };

  const convertToLowerCase = () => {
    setText(text.toLowerCase());
  };

  return (
    <div className="text-case-converter">
      <textarea 
        className="input-text" 
        value={text} 
        onChange={handleTextChange} 
        placeholder="Enter text here..."
      ></textarea>
      <div className="buttons">
        <button className="uppercase-button" onClick={convertToUpperCase}>Uppercase</button>
        <button className="lowercase-button" onClick={convertToLowerCase}>Lowercase</button>
      </div>
    </div>
  );
}

export default Tool11;
