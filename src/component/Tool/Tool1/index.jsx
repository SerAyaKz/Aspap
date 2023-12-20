import React, { useState } from 'react';
import "./style.css";

function Tool1() {
  const [text, setText] = useState('');
  const [resultText, setResultText] = useState('');
  const [preserveParagraphs, setPreserveParagraphs] = useState(true);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const removeLineBreaks = () => {
    if (preserveParagraphs) {
      // Remove single line breaks, preserve paragraph breaks
      const modifiedText = text.replace(/(?<!\n)\n(?!\n)/g, ' ');
      setResultText(modifiedText);
    } else {
      // Remove all line breaks
      const modifiedText = text.replace(/\n/g, ' ');
      setResultText(modifiedText);
    }
  };

  return (
    <div className="line-break-removal-tool">
      <textarea
        className="input-text"
        value={text}
        onChange={handleTextChange}
        placeholder="Paste your text here..."
      ></textarea>
      <div>
        <label>
          <input
            type="checkbox"
            checked={preserveParagraphs}
            onChange={() => setPreserveParagraphs(!preserveParagraphs)}
          />
          Preserve Paragraph Breaks
        </label>
      </div>
      <button onClick={removeLineBreaks}>Remove Line Breaks</button>
      <textarea
        className="output-text"
        value={resultText}
        readOnly
        placeholder="Processed text will appear here..."
      ></textarea>
    </div>
  );
}

export default Tool1;
