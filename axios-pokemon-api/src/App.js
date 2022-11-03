import axios from 'axios';
import './App.css';
import { useState } from 'react'

function App() {
  const [pokemon, setPokemon] = useState([])

  const fetchPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then(response => setPokemon(response.data.results))
      .catch(error => console.error(error))
  }
  return (
    <div className="container">
      <div className="App">
        <h1>Pokemon API</h1>
        <button onClick={fetchPokemon}>Fetch Pokemon</button>
        <hr />
        <ul>
          {pokemon.length > 0 &&
            pokemon.map((pokemon, index) => {
              return <li key={index}>{pokemon.name}</li>;
            })}
        </ul>
        {/* {JSON.stringify(pokemon)} */}
      </div>
    </div>
  );
}

export default App;
