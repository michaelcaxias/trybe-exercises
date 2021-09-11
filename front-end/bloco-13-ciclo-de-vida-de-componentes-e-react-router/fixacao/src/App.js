import React, { Component }from 'react';
import './App.css';

class App extends Component {
 constructor(props){
     super(props);
     this.state = {
       page: 1,
       characters: [],
     };
     this.nextAndBack = this.nextAndBack.bind(this)
  }

  async fetchCharacters() {
    const { page } = this.state;
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const json = await response.json();
    this.setState({characters: json.results});
  }

  nextAndBack({ target: { name } }) {
    if (name === 'back' && this.state.page > 1) {
      this.setState(previousState => ({
        page: previousState.page - 1
      }))
      console.log('back');
    }
    if (name === 'next') {
      this.setState(previousState => ({
        page: previousState.page + 1
      }))
      console.log('next');
    }
  }

  componentDidMount() {
    console.log('montou');
    this.fetchCharacters();
  }

render() {
  const { state: { characters }, nextAndBack } = this;
  return (
    <div className="App">
      <h1>
        Ricky and Morty Characters:
      </h1>
      <button name="back" onClick={ nextAndBack }>Back</button>
      <button name="next" onClick={ nextAndBack }>Next</button>
      <div className="body">
        {characters.map(({ name, image }) => {
          return (
            <div className="container" key={name}>
              <h3>{name}</h3>
              <img src={image} alt={name}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}
}

export default App;