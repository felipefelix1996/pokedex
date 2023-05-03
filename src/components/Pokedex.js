import React from "react";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";



const Pokedex = (props) => {
  const { pokemons, loading, setPage, page, totalPages } = props;

  const OnLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
    console.log("volta");
  };

  const OnRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <div>
      <div className="pokedex-hedaer">
        <h1>Pokedex</h1>
        <div>
          <Pagination
            page={page + 1}
            totalPages={totalPages}
            onLeftClick={OnLeftClickHandler}
            onRightClick={OnRightClickHandler}
          />
        </div>
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
