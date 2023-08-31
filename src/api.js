export const searchPokemon = async pokemon => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    const response = await fetch(url);

    return await response.json();
  } catch (err) {
    console.error("error", err);
  }
};

export const getPokemons = async (limit, offset) => {
  const Alimit = limit ? limit : 50;
  const Boffset = offset ? offset : 0;
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${Alimit}&offset=${Boffset}`;

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
