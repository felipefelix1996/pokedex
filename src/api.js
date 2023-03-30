export const searchPokemon = async pokemon => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    const response = await fetch(url);

    return await response.json();
  } catch (err) {
    console.error("error", err);
  }
};

export const getPokemons = async () => {
  const limit = 50;
  const offset = 0;
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    const response = await fetch(url);

    return await response.json();
  } catch (err) {
    console.error("error", err);
  }
};

export const getPokemonData = async url => {
  try {
    const response = await fetch(url);

    return await response.json();
  } catch (err) {
    console.error("error", err);
  }
};
