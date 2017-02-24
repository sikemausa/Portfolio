import React, { Component } from 'react';
import '../styles/css/index.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Competencies from './Competencies';
import Work from './Work';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Scroll from 'react-scroll';
import AOS from 'aos';

var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class App extends Component {

  componentDidMount(){
    AOS.init();
  }

  render() {
    return (
      <div id="app">
      <div id="header-container">
      <Header />
      </div>
        <Element name="Hero" className="element">
          <Hero />
        </Element>
        <Element name="Work" className="element">
          <Work />
        </Element>
        <Element name="About" className="element">
          <About />
        </Element>
        <Element name="Blog">
          <Blog />
        </Element>
      </div>
    );
  }
}

export default App;
