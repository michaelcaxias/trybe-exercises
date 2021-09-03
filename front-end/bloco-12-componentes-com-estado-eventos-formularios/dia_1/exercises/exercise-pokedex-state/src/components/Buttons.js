import React from 'react';
import './Buttons.css';

class Buttons extends React.Component {
  render() {
    return (
      <section className="buttons">
        <button onClick={this.props.functionOnClick}>All</button>
        <button onClick={this.props.functionOnClick}>Electric</button>
        <button onClick={this.props.functionOnClick}>Fire</button>
        <button onClick={this.props.functionOnClick}>Bug</button>
        <button onClick={this.props.functionOnClick}>Poison</button>
        <button onClick={this.props.functionOnClick}>Psychic</button>
        <button onClick={this.props.functionOnClick}>Normal</button>
        <button onClick={this.props.functionOnClick}>Dragon</button>
      </section>
    )
  }
}

export default Buttons