import React, { Component } from "react";
import Logo from "../assets/logo--2x.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar">
        <div className="nav_box">
          <div className="image_box">
            <img src={Logo} alt="jilis-logo"/>
          </div>

          <div className="menu-toggle close">
            <span id="line-1"></span>
            <span id="line-2"></span>
            <span id="line-3"></span>
          </div>

          <ul className="menu">
              <li className="menu-item">
                <a href="#home" className="menu-link home active">
                  Home
                </a>
              </li>
              <li className="menu-item">
                <a href="#about" className="menu-link about">
                  About
                </a>
              </li>
              <li className="menu-item">
                <a href="#work" className="menu-link about">
                  Works
                </a>
              </li>
              <li className="menu-item">
                <a href="#contact" className="menu-link about">
                  Contact
                </a>
              </li>
          </ul>
        </div>
    </nav>
    );
  }
}

export default Header;
