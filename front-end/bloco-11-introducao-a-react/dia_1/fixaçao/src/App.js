import React from 'react';
import './App.css';
import descriptionPerson from './Component';

function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      { descriptionPerson() }
    </div>
  );
}

export default App;