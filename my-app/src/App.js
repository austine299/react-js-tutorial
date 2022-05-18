import logo from './logo.svg';
import './App.css';

function App() {
  const navbar =(
    <nav>
      <h1>Fun facts about react</h1>
      <ol>
        <li>Was first released in 2013</li>
        <li>Was originallytcreated by Jordan Walke</li>
        <li>Has well over 100k stars on Github </li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobel apps</li>
      </ol>
    </nav>
  )

  return (
    <div className="navbar">

      <img src={logo} className="App-logo" alt="logo" />


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
