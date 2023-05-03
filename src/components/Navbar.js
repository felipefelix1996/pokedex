import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import logo from "../assets/logo.png";
const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  return (
    <nav>
      <div>
        <img src={logo} alt="pokedex-log.svg" className="navbar-img" />
      </div>
      <div>
        <div>{favoritePokemons.length}❤️</div>
      </div>
    </nav>
  );
};

export default Navbar;
