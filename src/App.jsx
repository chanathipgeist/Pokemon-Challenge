// import MyButton from './components/MyButton'
// import MyProfile from './components/MyProfile'
import Card from './components/Card'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react';
import { getPokemon } from './composables/fetch';
function App() {
  const [pokemon,setpokemon]=useState([])
  const [currentPage,setCurrentPage]=useState(1)
  const ITEMS_PER_PAGE = 10;
  const [searchPoke, setSearchPoke] = useState('');
  // const [pokemonDetail,setPokemonDetail]= useState()
  useEffect(()=>{
    const fetchData = async () => {
      const data = await getPokemon();
      setpokemon(data);
      // console.log(pokemon[0].name)
    };

    fetchData();
  })
  
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     const data = await getPokemonByName("pikachu"); 
  //     setPokemonDetail(data);
  //      console.log(pokemonDetail?.sprites.front_shiny)
  //       };

  //   fetchData();
  // })

  const filteredPokemon = pokemon.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchPoke.toLowerCase())
  );

  const totalItems = filteredPokemon.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const indexOfLastPokemon = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstPokemon = indexOfLastPokemon - ITEMS_PER_PAGE;
  const currentPokemon = filteredPokemon.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const paginate = (pageNumber) => {
    if (pageNumber === '...') return;

    setCurrentPage(pageNumber);
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    let startPage, endPage;

    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex items-center justify-center">
        <button
          onClick={goToFirstPage}
          disabled={currentPage === 1}
          className="px-3 py-1 mx-1 bg-gray-900 text-white rounded"
        >
          {'<<'}
        </button>

        <button
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 mx-1 bg-gray-700 text-white rounded"
        >
          {'<'}
        </button>

        {startPage > 1 && <span className="mx-1">...</span>}

        {pageNumbers.map((pageNumber, index) => (
          <button
            key={index}
            onClick={() => paginate(pageNumber)}
            className={`px-3 py-1 mx-1 bg-red-500 text-white rounded ${currentPage === pageNumber ? 'bg-red-700' : ''}`}
          >
            {pageNumber}
          </button>
        ))}

        {endPage < totalPages && <span className="mx-1">...</span>}

        <button
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 mx-1 bg-gray-700 text-white rounded"
        >
          {'>'}
        </button>

        <button
          onClick={goToLastPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 mx-1 bg-gray-900 text-white rounded"
        >
          {'>>'}
        </button>
      </div>
    );
  };

  return (
    <div>
      <Navbar/>
      <h1 className='flex justify-center text-4xl font-bold'>Pokémon List</h1>
       
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search Pokemon"
          className="px-4 py-2 border rounded-md"
          value={searchPoke}
          onChange={(e) => setSearchPoke(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-5 gap-4  m-6 justify-center">
        {currentPokemon.map((pokemon, index) => (
          <Card key={pokemon.name} pokemon={pokemon}/>
        ))}
      </div>

      <div className="mt-4">{renderPagination()}</div>
    </div>
  );
}

export default App;
