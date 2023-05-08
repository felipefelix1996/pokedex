import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar-pokedex">
      <div className="container-pokedex">
        <img src={logo} alt="pokedex-log.svg" className="navbar-img" />
      </div>
    </nav>
  );
};

export default Navbar;
