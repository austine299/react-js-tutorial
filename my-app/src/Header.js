import logo from './logo.svg';
import React from "react"

export default function Header(){

    return(
    
      <header className='navbar'>
        <nav className='nav-logo'>
          <img src={logo} className="App-logo" alt="logo"/>
          <ul className='nav-item'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      
    )
    
  
  }