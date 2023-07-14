import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav className="ptz-navbar">
    <input type="checkbox" className="ptz-navbar__nav-check" />
    <div className="ptz-navbar__header">
      <h1 className="ptz-navbar__title">The Simpsons characters</h1>
    </div>
    <div className="nptz-navbar__btn">
      <label htmlFor="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>

    <div className="ptz-navbar__links-container">
      <Link to="/" className="ptz-navbar__link">
        Home
      </Link>
      <Link to="/favorites" className="ptz-navbar__link">
        Favorites
      </Link>
    </div>
  </nav>
);

export default Navbar;
