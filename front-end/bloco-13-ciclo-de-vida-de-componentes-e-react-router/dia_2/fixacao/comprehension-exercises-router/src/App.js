import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" >
          <Home />  
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
