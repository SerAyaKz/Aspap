import React, { useState } from 'react';
import "./style.css";

function Tool12() {
  const [text, setText] = useState('');
  const [processedText, setProcessedText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const removeExtraSpaces = () => {
    const normalizedText = text.replace(/\s+/g, ' ').trim();
    setProcessedText(normalizedText);
  };

  return (
    <div className="space-remover">
      <textarea 
        className="input-text" 
        value={text} 
        onChange={handleTextChange} 
        placeholder="Enter text here..."
      ></textarea>
      <button className="remove-spaces-button" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
      <textarea 
        className="output-text" 
        value={processedText} 
        readOnly 
        placeholder="Text with removed spaces will appear here..."
      ></textarea>
    </div>
  );
}

export default Tool12;
