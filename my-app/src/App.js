import logo from './logo.svg';
import './App.css';

function App() {
  const navbar =(
    <nav>
      <h1>Online Store</h1>
      <ul>
        <li>Menu</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
  return (
    <div className="navbar">

      <header>
        <div>{navbar}</div>
      </header>
      
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default App;
