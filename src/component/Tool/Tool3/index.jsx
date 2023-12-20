import React, { useState } from 'react';
import "./style.css";

function Tool3() {
  const [htmlInput, setHtmlInput] = useState('');
  const [plainText, setPlainText] = useState('');
  const [metaInfo, setMetaInfo] = useState({ title: '', description: '' });

  const handleHtmlInputChange = (e) => {
    setHtmlInput(e.target.value);
  };

  const convertHtmlToText = () => {
    const doc = new DOMParser().parseFromString(htmlInput, 'text/html');
    setPlainText(doc.body.textContent || '');

    const title = doc.querySelector('title') ? doc.querySelector('title').textContent : '';
    const description = doc.querySelector('meta[name="description"]') ? doc.querySelector('meta[name="description"]').getAttribute('content') : '';
    setMetaInfo({ title, description });
  };

  return (
    <div className="html-to-text-converter">
      <textarea className="input-html" value={htmlInput} onChange={handleHtmlInputChange} placeholder="Enter your HTML code here..."></textarea>
      <button className="convert-button" onClick={convertHtmlToText}>Convert</button>
      <div className="meta-info">
        {metaInfo.title && <p><strong>Title:</strong> {metaInfo.title}</p>}
        {metaInfo.description && <p><strong>Description:</strong> {metaInfo.description}</p>}
      </div>
      <textarea className="output-text" value={plainText} readOnly placeholder="Your plain text will appear here..."></textarea>
    </div>
  );
}

export default Tool3;
