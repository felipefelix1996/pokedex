import React from "react";

const Pokemon = (props) => {
  const { pokemon } = props;
  const onHeartClick = () => {
    console.log("pode favoritar", pokemon);
  };
  const heart = "❤️";
  return (
    <div className="pokemon-card">
      <div className="pokemon-card-top">
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
        <div className="pokemon-info-name">
          <div># {pokemon.id}</div>
          <button className="pokemon-heart-byn" onClick={onHeartClick}>
            {heart}
          </button>
        </div>
      </div>
      <div className="pokemon-card-bottom">
        <h3>{pokemon.name}</h3>
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
