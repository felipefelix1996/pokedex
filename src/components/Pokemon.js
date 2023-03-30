import React from "react";

const Pokemon = (props) => {
  const { pokemon } = props;
  return (
    <div>
      <div>Nome: {pokemon.name}</div>
    </div>
  );
};

export default Pokemon;
