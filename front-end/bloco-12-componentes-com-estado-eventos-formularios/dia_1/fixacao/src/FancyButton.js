import React from 'react';

class FancyButton extends React.Component {

  constructor() {
    super()
    this.state = {
      clickCounter: 0
    }
    this.clickedButton = this.clickedButton.bind(this);
    this.getColorButton = this.getColorButton.bind(this);
  }

  getColorButton(num) {
    return (num % 2 === 0)? 'green' : 'white';
  }

  clickedButton(e) {
    const click = e.target;
    click.innerText = this.setState((stateBefore, _props) => ({
      clickCounter: stateBefore.clickCounter + 1
    }));
  }
function
  render() {
    return (
        <button onClick={this.clickedButton}
        style={{ backgroundColor: this.getColorButton(this.state.clickCounter) }}>
          {this.state.clickCounter}
        </button>
  );
  }
}

export default FancyButton;
