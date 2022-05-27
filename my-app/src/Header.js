import logo from './logo.svg';
import React from "react";

export default function Header(){

  return(
  
    <header className='navbar'>
      <nav className='nav-logo'>
        <div className='logo'>
          <img src={logo} className="App-logo" alt="logo"/>
          <h3> ReactFacts</h3>
        </div>
        
        <ul className='nav-item'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
    
  )

}

