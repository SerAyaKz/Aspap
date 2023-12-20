import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import "./style.css";

function Tool17() {
  const [url, setUrl] = useState('');

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="qr-code-generator">
      <input 
        type="text" 
        value={url} 
        onChange={handleUrlChange} 
        placeholder="Enter URL here..."
      />
      <div className="qr-code-display">
        {url && <QRCode value={url} />}
      </div>
    </div>
  );
}

export default Tool17;
