import React, { Component } from 'react';
import Project from './Project';
import memoryPalace from '../images/memoryPalace.png';
import sickBeats from '../images/sickBeats.png';
import About from './About';
import Blog from './Blog';

class Work extends Component {
  render() {
    return (
      <section id="work">
        <div id="memory-palace"></div>
        <div id="sick-beats"></div>
        <div id="reminders"></div>
      </section>
    );
  }
}

export default Work;
