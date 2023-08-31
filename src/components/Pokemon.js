import React, { useContext, useEffect, useState } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Pokemon = props => {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const { pokemon } = props;
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };
  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";
  const [typePokemon, setTypePokemon] = useState([]);

  const selectTypeTerrain = type => {
    if (
      type === "grass" ||
      type === "bug" ||
      type === "normal" ||
      type === "poison" ||
      type === "electric"
    ) {
      return "grass-terrain";
    }
    if (type === "fire") {
      return "fire-terrain";
    }
    if (type === "water") {
      return "water-terrain";
    }
  };
  useEffect(() => {
    const newArry = [];
    pokemon.types.map(type => {
      newArry.push(type.type.name);
    });

    setTypePokemon(newArry);
  }, []);

  return (
    <div className="pokemon-card">
      <div className={`pokemon-info-name`}>
        <h3>
          # {pokemon.id} {pokemon.name}
        </h3>
        <div>
          <button className="pokemon-heart-byn" onClick={onHeartClick}>
            {heart}
          </button>
        </div>
      </div>
      <div className={`pokemon-card-top ${selectTypeTerrain(typePokemon[0])}`}>
        <div className="pokemon-card-image">
          <img
            alt={pokemon.name}
            src={
              pokemon.name !== "nidoran-m"
                ? `https://play.pokemonshowdown.com/sprites/xyani/${pokemon.name}.gif`
                : pokemon.sprites.front_default
            }
            className="pokemon-image"
          />
        </div>
      </div>
      <div className="pokemon-card-bottom">
        <div className="pokemon-type">
          {pokemon.types.map((type, index) => {
            return (
              <div
                key={index}
                className={`${
                  type.type.name ? type.type.name : ""
                } pokemon-type-text`}
              >
                {type.type.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
