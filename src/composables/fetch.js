import axios from 'axios';

const getPokemon = async () => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-form?limit=10000`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    return [];
  }
};

const getPokemonByName = async (pokemonName) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${pokemonName}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Pokemon with ID ${pokemonName}:`, error);
    return null;
  }
};

export { getPokemon, getPokemonByName };
