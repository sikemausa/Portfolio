import React, { Component } from 'react';
import Headroom from 'react-headroom';

class Header extends Component {
  render() {
    return (
      <nav id="header">
        <Headroom>
          <ul className="header-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#competencies">Competencies</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </Headroom>
      </nav>
    );
  }
}

export default Header;
