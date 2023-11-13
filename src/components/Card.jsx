import { useState } from 'react'

function Card({pokemon}) {
  const [poke,setPoke]=useState()    


  return (
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center">
        <img className="rounded-t-lg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png" alt="" />
        <div className="p-4 flex-grow flex flex-col items-center">
          <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{pokemon.id}</h5>
          <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{pokemon.name}</h5>
        </div>
      </div>
    </div>
  )
}

export default Card