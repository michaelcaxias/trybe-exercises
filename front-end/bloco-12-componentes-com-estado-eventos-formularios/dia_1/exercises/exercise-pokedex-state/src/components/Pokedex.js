import React from 'react';
import './Pokedex.css';

import data from '../data'
import Pokemon from './Pokemon';
import Buttons from './Buttons';

class Pokedex extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0,
      filterType: "All",
      data: data
    }

    this.filterPokemons = this.filterPokemons.bind(this);
    this.nextPokemon = this.nextPokemon.bind(this);

  }

  filterPokemons(event) {
    if (typeof event !== 'undefined') {
      const pokemonType = event.target.innerText;
      this.setState((_stateBefore, _props) => ({
        filterType: pokemonType,
        data: data.filter((pokemon) => {
          return pokemon.type === pokemonType
        })
      }));
    }
    if (this.state.filterType === "All") return data;
    if (this.state.filterType !== "All") {
      return this.state.data;
    }
  }

  nextPokemon() {
    if (this.state.index >= 0) {
      this.setState((stateBefore, _props) => ({
        index: stateBefore.index + 1
      }));
    }
    if (this.state.index === this.state.data.length -1) {
      this.setState((_stateBefore, _props) => ({
        index: 0
      }));
    }
  }

  render() {
    return (
      <main>
        <Pokemon data={this.filterPokemons()[this.state.index]}/>
        <Buttons functionOnClick={this.filterPokemons}/>
        <button 
        onClick={this.nextPokemon}
        className="next-pokemon">Next Pokemon
        </button>
      </main>
    )
  }
}

export default Pokedex