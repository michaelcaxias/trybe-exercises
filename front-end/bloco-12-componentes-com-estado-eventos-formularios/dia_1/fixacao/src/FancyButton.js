import React from 'react';

class FancyButton extends React.Component {

  constructor() {
    super()
    this.state = {
      clickCounter: 0
    }
    this.clickedButton = this.clickedButton.bind(this)
  }

  clickedButton(e) {
    e.target.innerText = this.setState((stateBefore, _props) => ({
      clickCounter: stateBefore.clickCounter + 1
    }));
  }
function
  render() {
    return (
        <button onClick={this.clickedButton}>{this.state.clickCounter}</button>
  );
  }
}

export default FancyButton;
