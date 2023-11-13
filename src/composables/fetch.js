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


const getPokemonById = async (pokemonId) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${pokemonId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching Pokemon with ID ${pokemonId}:`, error);
      return null;
    }
  };

export { getPokemon , getPokemonById};