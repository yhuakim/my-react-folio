import React, { Component } from "react";
import { NavLink } from "react-router-dom";
/* import {NavLink as Menu}  from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';*/
import Logo from "../assets/logo--2x.png"; 

class Header extends Component {

  /* state = {
    isOpen: false
};

 toggle =()=> {
  this.setState({
      isOpen: !this.state.isOpen
  });
  } */
  
  render() {
    return (
        <nav className="nav-bar">
            <div className="toggle">
                <span></span>
                <span></span>
                <span></span> 
            </div>
            <div className="nav_box rounded">
                <div className="image_box">
                    <NavLink to="/" exact>
                        <img src={Logo} alt="jilis-logo"/>
                    </NavLink>
                </div>

                <ul className="menu ">
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

      /* <Jumbotron>
          <Container>
              <Row>
                  <Col>
                      <h1>Welcome to React</h1>
                      <p>
                          <Button
                              tag="a"
                              color="success"
                              size="large"
                              href="http://reactstrap.github.io"
                              target="_blank"
                          >
                              View Reactstrap Docs
                          </Button>
                      </p>
                  </Col>
              </Row>
          </Container>
      </Jumbotron> */
    );
  }
}

export default Header;
