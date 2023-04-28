import logo from './logo.svg';
import './App.css';
import Home from './home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Learn React
      <p>develop your own tictactoe game</p>
      <h1>Shopping List for</h1>
       
      <Home />
      </header>
    </div>
  );
}

export default App;
