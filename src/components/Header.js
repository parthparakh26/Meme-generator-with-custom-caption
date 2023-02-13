import React from 'react';
import logo from '../img/troll-face.png';

function Header(){
    return(
        <nav className="navbar">
        <img src={logo} className="App-logo" alt="logo" width="100px"/>
          <h3 className="facts">MemeGenerator</h3>
        </nav>
    );
}

export default Header;