import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav id="header">
        <ul className="header-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#competencies">Competencies</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </nav>
    );
  }
}

export default Header;
