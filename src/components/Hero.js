import React, { Component } from 'react';
import { Link } from 'react-scroll';

class Hero extends Component {
  render() {
    return (
      <section id="hero">
        <h1 id="name">Mike Sausa</h1>
        <h2 id="title">Front-End Developer</h2>
        <Link id="arrow-link" activeClass="active" to="About" smooth={true} duration={1750}>
          <i className="Arrow nav-link" />
        </Link>
      </section>
    );
  }
}

export default Hero;
