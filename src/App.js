import React from "react";
import { Component } from "react";
import Header from "./Layouts/Header";
import Home from "./components/home";
import About from "./components/about";
import Works from "./components/works";
import Contact from "./components/contact";
import Footer from "./Layouts/Footer"
import './styles/main.css';
//import Weather from "./components/weather";
/* import "./App.css"; */

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Home/>
        <About/>
        <Works/>
        <Contact/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
