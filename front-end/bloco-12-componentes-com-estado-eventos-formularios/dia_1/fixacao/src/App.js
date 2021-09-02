import logo from './logo.svg';
import './App.css';

function clickedButton(e) {
  const click = e.target
  if (click.innerText === 'Clique!') alert('VOCÊ GANHOU DINHEIRO!');
  if (click.innerText === 'Não clique!') alert('VOCÊ IRÁ CHORAR!');
  if (click.innerText === 'Talvez clique?') alert('VOCÊ É O SUPERMAN!');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section>
          <button onClick={clickedButton}>Clique!</button>
          <button onClick={clickedButton}>Não clique!</button>
          <button onClick={clickedButton}>Talvez clique?</button>
        </section>
      </header>
    </div>
  );
}

export default App;
