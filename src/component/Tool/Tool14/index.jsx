import React, { useState } from 'react';
import { diffWordsWithSpace } from 'diff';
import "./style.css";

function Tool14() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [diffs, setDiffs] = useState([]);

  const compareTexts = () => {
    const diffResult = diffWordsWithSpace(text1, text2);
    setDiffs(diffResult);
  };

  return (
    <div className="text-comparer">
      <div className="input-areas">
        <textarea value={text1} onChange={(e) => setText1(e.target.value)} placeholder="Enter original text here..."></textarea>
        <textarea value={text2} onChange={(e) => setText2(e.target.value)} placeholder="Enter modified text here..."></textarea>
      </div>
      <button onClick={compareTexts}>Compare Texts</button>
      <div className="diff-results">
        {diffs.map((part, index) => (
          <div key={index} className={`diff-part ${part.added ? 'added' : part.removed ? 'removed' : ''}`}>
            {part.value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tool14;
