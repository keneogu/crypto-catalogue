import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <div className="navbar">
      <h1 className="left-head">Crypto</h1>
      <div className="right-head">
        <Link to="/">Home</Link>
        <Link to="/category">Category</Link>
      </div>
    </div>
  );
}

export default Header;
