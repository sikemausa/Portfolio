import React, { Component } from 'react';
import portrait from '../images/portrait.jpg';

class About extends Component {
  render() {
    return (
      <section id="about">
        <div id="about-me-photo">
          <div className="about-text">
            <h1 className="about-title">Hello! I'm Mike Sausa</h1>
            <p className="about-description">
              I'm a Colorado based Front-End Developer
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
