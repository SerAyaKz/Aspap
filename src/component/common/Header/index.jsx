import React from 'react';
import './style.css'; 
import { Logo } from "../../../images/index";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
       <Link to={"/"}>
      <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <h1 className="website-name">Aspap : Your Ultimate Toolkit for the Digital Age!</h1>
      <a href="https://main--starlit-baklava-7e8595.netlify.app/">PLS: CHECK OUT ANOTHER PROJECT</a>
    </header>
  );
};

export default Header;