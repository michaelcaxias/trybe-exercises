import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <Route>
        <div>
          <h2>Home</h2>
          <p> My awesome Home component </p>
        </div>
      </Route>
    );
  }
}

export default Home;
