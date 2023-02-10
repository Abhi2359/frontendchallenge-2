import React from 'react';
import './Navbar.css'
import {ReactComponent as Icon} from '../assets/images/ico'
const Navbar = () => {
  return (
    <header>
      <div className="navigation">

      <nav className="navbar">
        <ul>
       <h1>sneakers</h1>
       <li> <a href="#">Collections</a></li>
      <li> <a href="#">Men</a></li>  
       <li> <a href="#">Women</a></li>
       <li> <a href="#">About</a></li>
      <li> <a href="#">Contact</a></li> 
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Navbar;
