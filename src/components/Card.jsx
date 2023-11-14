import { useState,useEffect } from 'react'
import { getPokemon, getPokemonByName } from '../composables/fetch';

function Card({pokemon}) {
  const [poke,setPoke]=useState()    
  const [pokemonDetail,setPokemonDetail]= useState()

    const fetchData = async () => {
      const data = await getPokemonByName(pokemon.name); 
      setPokemonDetail(data);
    //    console.log(pokemonDetail?.id)
       console.log(pokemonDetail?.sprites.front_shiny);
        };

        fetchData()
 



  return (
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center">
        <img className="rounded-t-lg" src={pokemonDetail?.sprites.front_shiny} alt="" />
        <div className="p-4 flex-grow flex flex-col items-center">
          <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{pokemonDetail?.id}</h5>
          <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{pokemonDetail?.name}</h5>
        </div>
      </div>
    </div>
  )
}

export default Card