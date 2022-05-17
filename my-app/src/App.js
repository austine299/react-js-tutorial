import logo from './logo.svg';
import './App.css';

function App() {
  const navbar =(
    <nav>
      <h1>Fun factors about react</h1>
      <ol>
        <li>Was first released in 2013</li>
        <li>Was originallytcreated by Jordan Walke</li>
        <li>Has well over 100k stars on Github </li>
        <li>Is maintainedby Facebook</li>
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
      

      
    </div>
  );
}

export default App;
