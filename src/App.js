import React, { Component } from 'react';
import './styles/css/App.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Competencies from './Competencies';
import Work from './Work';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Signature from './Signature';

class App extends Component {

  componentDidMount(){
    var path = document.querySelector('.path');
    var length = path.getTotalLength();
    path.style.transition = path.style.WebkitTransition =
    'none';
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    path.getBoundingClientRect();
    path.style.transition = path.style.WebkitTransition =
    'stroke-dashoffset 8s ease-in-out';
    path.style.strokeDashoffset = '0';
  }

  render() {
    return (
      <div id="app">
        <Header />
        <Hero />
        <About />
        <Competencies />
        <Work />
        <Testimonials />
        <Blog />
        <Signature />
      </div>
    );
  }
}

export default App;
