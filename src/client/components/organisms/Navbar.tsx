import React from "react";
import SearchBox from "../molecules/SearchBox";

const Navbar: React.FC = () => (
  <nav className="topnav">
    <a className="active" href="#home">
      Home
    </a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
    <SearchBox />
  </nav>
);

export default Navbar;
