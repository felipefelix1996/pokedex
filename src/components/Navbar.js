import React from "react";

const Navbar = () => {
  const logoimg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div>
        <img src={logoimg} alt="pokedex-log.svg" className="navbar-img" />
      </div>
    </nav>
  );
};

export default Navbar;
