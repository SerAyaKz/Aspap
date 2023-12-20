import React from 'react';
import './style.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">&copy; {new Date().getFullYear()} Aspap. All rights reserved.</p>
    </footer>
  );
};

export default Footer;