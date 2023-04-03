import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="pokedex-log.svg" className="navbar-img" />
      </div>
    </nav>
  );
};

export default Navbar;
