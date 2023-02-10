import React from "react";
import "./Navbar.css";
import { ReactComponent as Cart } from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
const Navbar = () => {
  return (
    <header className="header">
      <div className="navigation">
        <nav className="navbar">
          <ul>
            <h1>sneakers</h1>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <div class="cart">
              <li>
                <Cart />
              </li>
              <li>
                <img src={avatar} alt="avatar-logo" className="avatar" />
              </li>
            </div>
          </ul>
          div.horizontal
          <hr className="horizontal_break" />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
