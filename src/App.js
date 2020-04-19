import React from "react";
import { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
        <BrowserRouter>
        <Header />
          <Switch >
            <Route path="/about" exact component={About}/>
            <Route path="/works" component={Works}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/" component={Home} exact/>
          </Switch>
        </BrowserRouter>
            <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
