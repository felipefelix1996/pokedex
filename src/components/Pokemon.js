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
            src={pokemon.sprites.front_default}
            className="pokemon-image"
          />
        </div>
        <div className="pokemon-info-name">
          <h3>{pokemon.name}</h3>
          <div>{pokemon.id}</div>
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
        <button className="pokemon-heart-byn" onClick={onHeartClick}>
          {heart}
        </button>
      </div>
    </div>
  );
};

export default Pokemon;
