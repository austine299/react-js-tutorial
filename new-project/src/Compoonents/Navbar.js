import React from 'react';
import Logo from '../img/logo3.jpg';

export default function Navbar(){
    return(
        <div className='nav-bar'>
            <nav className='logo' >
                <img src={Logo} alt="Logo" />
                <div className='store-name'>
                    <span className='text-color'>Kaly</span>Wear's
                </div>
            </nav>
        </div>
    )
}
