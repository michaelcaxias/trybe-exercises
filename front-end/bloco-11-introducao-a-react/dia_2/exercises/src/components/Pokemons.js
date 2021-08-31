import React from 'react';
import data from './data'
import Pokemon from './components/Pokemon';

class Pokemons extends React.Component {
  render() {
    return (
      <div className="pokemons">
        { data.map((pokemon) => {
          return <Pokemon data={pokemon} />
        }) }
      </div>
    )
  }
}

export default Pokemons