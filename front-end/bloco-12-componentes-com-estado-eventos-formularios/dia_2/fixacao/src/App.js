import React from 'react';
import Input from './Input'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <form>
          <select>
            <option>Belém</option>
            <option>Ananideua</option>
          </select>
          <Input name="name" type="text"/>
          <Input name="password" type="password"/>
        </form>
      </div>
    );
  }
}

export default App;
