import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo--2x.png";

class Header extends Component {
  
  render() {
    return (
       <nav className="navbar">
          <div className="nav_box">
          <div className="image_box">
            <img src={Logo} alt="jilis-logo"/>
          </div>

          <ul className="menu">
                <NavLink to="/" exact>
                  <li className="menu-item">
                      Home
                  </li>
                </NavLink>
                <NavLink to="/about">
                  <li className="menu-item">
                    About
                  </li>
                </NavLink>
                <NavLink to="/works">
                  <li className="menu-item">
                      Works
                  </li>
                </NavLink>
                <NavLink to="/contact">
                  <li className="menu-item">
                      Contact
                  </li>
                </NavLink>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
