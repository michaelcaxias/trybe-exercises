import './App.css';
import data from './data'
import Pokemon from './components/Pokemon';

function mapingPokemon() {
  return data.map((pokemon) => {
    return <Pokemon key={ pokemon.id } data={ pokemon } />
  })
}

function App() {
  return (
    <div className="App">
      { mapingPokemon() }
    </div>
  );
}



export default App;
