import React, { Component } from 'react';
import Project from './Project';

class Work extends Component {
  render() {
    return (
      <section id="work">
        <h1>My Work</h1>
        <section id="projects">
          <Project />
          <Project />
          <Project />
        </section>
        <a href="">See All Work</a>
      </section>
    );
  }
}

export default Work;
