import React from 'react';
import './Navbar.css'
import {ReactComponent as Cart} from '../assets/images/icon-cart.svg'
import ass
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
    <li><Cart/></li>
    <li><img src="../assets/images/image-avatar.png" alt=""/></li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Navbar;
