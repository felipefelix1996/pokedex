import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "./api";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";
import { FavoriteProvider } from "./contexts/favoritesContext";

const itensPerPage = 25;

function App() {
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async pokemon => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      console.log("results APP", results);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log("carregou");
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = name => {
    const updatedFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);

    if (favoriteIndex >= 0) {
      updatedFavorites.slice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    }

    setFavorites(updatedFavorites);
  };
  return (
    <div>
      <FavoriteProvider
        value={{
          favoritePokemons: favorites,
          updateFavoritePokemons: updateFavoritePokemons,
        }}
      >
        <Navbar />
        <Searchbar />
        <Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </FavoriteProvider>
    </div>
  );
}

export default App;
