import logo from './logo.svg';
import './App.css';
import FancyButton from './FancyButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section>
          <FancyButton />
          <FancyButton />
          <FancyButton />
        </section>
      </header>
    </div>
  );
}

export default App;
