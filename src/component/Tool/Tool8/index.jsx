import React, { useState } from 'react';
import "./style.css";

function Tool8() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const encodeToBase64 = () => {
    setOutputText(btoa(inputText));
  };

  const decodeFromBase64 = () => {
    try {
      setOutputText(atob(inputText));
    } catch (e) {
      setOutputText('Invalid Base64 string.');
    }
  };

  return (
    <div className="base64-tool">
      <textarea
        className="input-text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text here..."
      ></textarea>
      <div className="buttons">
        <button className="encode-button" onClick={encodeToBase64}>Encode</button>
        <button className="decode-button" onClick={decodeFromBase64}>Decode</button>
      </div>
      <textarea
        className="output-text"
        value={outputText}
        readOnly
        placeholder="Result..."
      ></textarea>
    </div>
  );
}

export default Tool8;
