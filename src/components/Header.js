import React, { Component } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-scroll';
import githubLogo from '../images/github.svg';
import linkedinLogo from '../images/linkedin.svg';

class Header extends Component {
  render() {
    return (
      <nav id="header">
        <Headroom>
          <ul id="header-nav">
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
        <ul id="social-media">
          <li id="linkedin"><img src={githubLogo} /></li>
          <li id="github"><img src={linkedinLogo} /></li>
        </ul>
      </nav>
    );
  }
}

export default Header;
