import React, { Component } from 'react';
import './styles/css/App.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Competencies from './Competencies';
import Work from './Work';

class App extends Component {
  render() {
    return (
      <div id="main-page">
        <Header />
        <Hero />
        <About />
        <Competencies />
        <Work />
        <Testimonials />
        <Blog />
      </div>
    );
  }
}

export default App;
