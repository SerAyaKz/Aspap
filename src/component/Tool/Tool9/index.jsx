import React, { useState, useRef, useEffect } from 'react';
import "./style.css";

function Tool9() {
  const [imageSrc, setImageSrc] = useState(null);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (imageSrc) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const image = new Image();
      image.src = imageSrc;

      image.onload = () => {
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(image, 0, 0, width, height);
      };
    }
  }, [imageSrc, width, height]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImageSrc(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    if (canvasRef.current) {
      const image = canvasRef.current.toDataURL("image/png").replace("image/png", "image/octet-stream");
      const link = document.createElement('a');
      link.download = 'resized-image.png';
      link.href = image;
      link.click();
    }
  };

  return (
    <div className="image-resizer">
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="Width" />
      <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height" />
      <button onClick={handleDownload}>Download Resized Image</button>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
}

export default Tool9;
