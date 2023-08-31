import React from "react";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";

const Pokedex = props => {
  const { pokemons, loading, setPage, page, totalPages } = props;

  const OnLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const OnRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <div>
      <div className="container-pokedex">
        {loading ? (
          <div>Carregando....</div>
        ) : (
          <div className="pokemon-cart-container">
            {pokemons &&
              pokemons.map((pokemon, index) => {
                return <Pokemon key={index} pokemon={pokemon} />;
              })}
          </div>
        )}
        <div className="pokemon-cart-container">
          <Pagination
            page={page + 1}
            totalPages={totalPages}
            onLeftClick={OnLeftClickHandler}
            onRightClick={OnRightClickHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
