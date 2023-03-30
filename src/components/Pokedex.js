import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, loading } = props;

  return (
    <div>
      <div className="pokedex-hedaer">
        <h1>Pokedex</h1>
        <div>Paginação:</div>
        {loading ? (
          <div>Carregando....</div>
        ) : (
          <div className="pokedex-grid">
            {pokemons &&
              pokemons.map((pokemon, index) => {
                return <Pokemon key={index} pokemon={pokemon} />;
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pokedex;
