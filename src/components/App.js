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

var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class App extends Component {

  // componentDidMount(){
  //   var path = document.querySelector('.path');
  //   var length = path.getTotalLength();
  //   path.style.transition = path.style.WebkitTransition =
  //   'none';
  //   path.style.strokeDasharray = length + ' ' + length;
  //   path.style.strokeDashoffset = length;
  //   path.getBoundingClientRect();
  //   path.style.transition = path.style.WebkitTransition =
  //   'stroke-dashoffset 8s ease-in-out';
  //   path.style.strokeDashoffset = '0';
  // }

  render() {
    return (
      <div id="app">
      <Header />
        <Element name="Hero" className="element">
          <Hero />
        </Element>
        <Element name="About" className="element">
          <About />
        </Element>
        <Element name="Work" className="element">
          <Work />
        </Element>
        <Element name="Blog">
          <Blog />
        </Element>
      </div>
    );
  }
}

export default App;
