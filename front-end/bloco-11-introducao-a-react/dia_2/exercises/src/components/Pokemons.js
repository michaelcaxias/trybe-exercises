import React from 'react';

import data from '../data'
import Pokemon from './Pokemon';

class Pokemons extends React.Component {
  render() {
    return (
      <div className="pokemons">
        { data.map((pokemon) => {
          return <Pokemon key={ pokemon.id } data={ pokemon } />
        }) }
      </div>
    )
  }
}

export default Pokemons