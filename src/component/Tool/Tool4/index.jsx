import React, { useState } from 'react';
import "./style.css";

function Tool4() {
  const [text, setText] = useState('');
  const [stats, setStats] = useState({ sentences: 0, words: 0, characters: 0 });

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    const sentences = inputText.split(/[.!?]+/).filter(Boolean).length;
    const words = inputText.match(/\b(\w+)\b/g)?.length || 0;
    const characters = inputText.length;

    setStats({ sentences, words, characters });
  };

  return (
    <div className="sentence-counter">
      <textarea
        className="input-text"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
      ></textarea>
      <div className="stats">
        <p>Sentences: {stats.sentences}</p>
        <p>Words: {stats.words}</p>
        <p>Characters: {stats.characters}</p>
      </div>
    </div>
  );
}

export default Tool4;
