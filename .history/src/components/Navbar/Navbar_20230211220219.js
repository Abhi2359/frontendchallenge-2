import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ReactComponent as Cart } from "../assets/images/icon-cart.svg";



import avatar from "../assets/images/image-avatar.png";
const Navbar = ({count}) => {
  return (
    <header className="header">
     
        <nav className="navbar">
          <ul>
            <h1>sneakers</h1>
            <li>
            <a href="">Collections</a>
            </li>
            <li>
              <a href="">Men</a>
            </li>
            <li>
              <a href="">Women</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href=''>Contact</a>
            </li>
            <div class="cart">
              <li>
              <button></button>
              </li>
              <li>
                <img src={avatar} alt="avatar-logo" className="avatar" />
              </li>
            </div>
          </ul>
          <div className="hr_tag">

          <hr  className="horizontal-line"/>
          </div>
          

          
        </nav>
    
    </header>
  );
};

export default Navbar;
