import React, { useState } from 'react';
import "./style.css";

function Tool10() {
  const [text, setText] = useState('');
  const [capitalizedText, setCapitalizedText] = useState('');

  const capitalizeSentences = () => {
    const regex = /([.!?]\s*)([a-z])/g;
    const capitalized = text.replace(regex, (match, p1, p2) => p1 + p2.toUpperCase());
    
    // Capitalize the first character of the text if it's not already
    const result = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);

    setCapitalizedText(result);
  };

  return (
    <div className="capitalize-sentences">
      <textarea 
        className="input-text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter text here..."
      ></textarea>
      <button className="capitalize-button" onClick={capitalizeSentences}>Capitalize Sentences</button>
      <textarea 
        className="output-text" 
        value={capitalizedText} 
        readOnly 
        placeholder="Capitalized text will appear here..."
      ></textarea>
    </div>
  );
}

export default Tool10;
