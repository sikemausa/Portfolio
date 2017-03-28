import React, { Component } from 'react';
import portrait from '../images/portrait.jpg';

class About extends Component {
  render() {
    return (
      <section id="about">
        <div id="about-me-photo">
          <div className="about-text">
            <h1 className="about-title">Hi, I'm Mike.</h1>
            <p className="about-description">
                I'm a Colorado based developer with a diverse set of skills. I make web applications (HTML, CSS, Javascript),
                mobile applications (React-native), native desktop applications (Electron),
                and design / develop API's (Node and Express).
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
