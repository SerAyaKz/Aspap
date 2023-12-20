import React, { useState } from 'react';
import "./style.css";

function Tool2() {
  const [text, setText] = useState('');
  const [htmlFormat, setHtmlFormat] = useState('<p>');
  const [convertedHtml, setConvertedHtml] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFormatChange = (e) => {
    setHtmlFormat(e.target.value);
  };

  const convertTextToHtml = () => {
    let html = '';
    if (htmlFormat === '<p>') {
      html = text.split('\n').map(line => `<p>${line}</p>`).join('');
    } else if (htmlFormat === '<p> & <br>') {
      html = `<p>${text.replace(/\n/g, '<br>')}</p>`;
    } else {
      html = text.replace(/\n/g, '<br>');
    }
    setConvertedHtml(html);
  };

  return (
    <div className="text-to-html-converter">
  <textarea className="input-text" value={text} onChange={handleTextChange} placeholder="Enter your text here..."></textarea>
  
  <div className="format-options">
    <label className="format-option">
      <input type="radio" value="<p>" checked={htmlFormat === '<p>'} onChange={handleFormatChange} />
      Use paragraph p tags only
    </label>
    <label className="format-option">
      <input type="radio" value="<p> & <br>" checked={htmlFormat === '<p> & <br>'} onChange={handleFormatChange} />
      Use paragraph p and line break br tags
    </label>
    <label className="format-option">
      <input type="radio" value="<br>" checked={htmlFormat === '<br>'} onChange={handleFormatChange} />
      Use line break tags br only
    </label>
  </div>
  
  <button className="convert-button" onClick={convertTextToHtml}>Convert</button>
  
  <textarea className="output-html" value={convertedHtml} readOnly placeholder="Your HTML code will appear here..."></textarea>
</div>

  );
}

export default Tool2;
