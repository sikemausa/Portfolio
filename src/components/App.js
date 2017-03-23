import React, { Component } from 'react';
import '../styles/css/index.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Scroll from 'react-scroll';

var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class App extends Component {

  render() {
    return (
      <div id="app">
      <div id="header-container">
        <Element name="Home" className="element">
          <Header />
        </Element>
      </div>
        <Hero />
        <Element name="About" className="element">
          <About />
        </Element>
        <Element name="Work" className="element">
          <Work />
        </Element>
        <Element name="Contact">
          <Contact />
        </Element>
      </div>
    );
  }
}

export default App;
