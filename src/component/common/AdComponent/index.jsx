import React, { useEffect } from 'react';

const AdComponent = () => {
  useEffect(() => {
    // Load Google AdSense script
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3642212396752437';
    script.async = true;
    script.crossOrigin = 'anonymous';

    document.body.appendChild(script);

    return () => {
      // Cleanup if necessary
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="ad-container">
      {/* Add your AdSense ad unit here */}
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-3642212396752437"
           data-ad-slot="8871181482"
           data-ad-format="auto"></ins>
    </div>
  );
};

export default AdComponent;
