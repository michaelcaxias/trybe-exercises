import React from 'react';

class FancyButton extends React.Component {

  constructor() {
    super()
    this.clickedButton = this.clickedButton.bind(this)
  }

  clickedButton(e) {
    console.log(this)
    const click = e.target
    if (click.innerText === 'Clique!') alert('VOCÊ GANHOU DINHEIRO!');
    if (click.innerText === 'Não clique!') alert('VOCÊ IRÁ CHORAR!');
    if (click.innerText === 'Talvez clique?') alert('VOCÊ É O SUPERMAN!');
  }
function
  render() {
    return (
      <section>
        <button onClick={this.clickedButton}>Clique!</button>
        <button onClick={this.clickedButton}>Não clique!</button>
        <button onClick={this.clickedButton}>Talvez clique?</button>
      </section>
  );
  }
}

export default FancyButton;
