import React, { Component } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-scroll';

class Header extends Component {
  render() {
    return (
      <nav id="header">
        <Headroom>
          <ul className="header-nav">
            <Link activeClass="active" to="Hero" smooth={true} offset={20} duration={1750}>
              <li>Home</li>
            </Link>
            <Link activeClass="active" to="About" smooth={true} offset={20} duration={1750}>
              <li>About</li>
            </Link>
            <Link activeClass="active" to="Work" smooth={true} offset={20} duration={1750}>
              <li>Work</li>
            </Link>
            <Link activeClass="active" to="Blog" smooth={true} offset={20} duration={1750}>
              <li>Blog</li>
            </Link>
          </ul>
        </Headroom>
      </nav>
    );
  }
}

export default Header;
