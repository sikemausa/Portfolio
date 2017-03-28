import React, { Component } from 'react';
import { Link } from 'react-scroll';
import githubLogo from '../images/github.svg';
import linkedinLogo from '../images/linkedin.svg';
import Scroll from 'react-scroll';

var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class Header extends Component {
  componentDidMount() {

      Events.scrollEvent.register('begin', function(to, element) {
        console.log("begin", arguments);
      });

      Events.scrollEvent.register('end', function(to, element) {
        console.log("end", arguments);
      });

      scrollSpy.update();

    }

    componentWillUnmount() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    }

    scrollToTop() {
      scroll.scrollToTop();
    }

    scrollToBottom() {
      scroll.scrollToBottom();
    }
    scrollTo() {
      scroll.scrollTo(100);
    }
    scrollMore() {
      scroll.scrollMore(100);
    }
    handleSetActive(to) {
      console.log(to);
    }

  render() {
    return (
          <div id="header">
            <ul id="header-nav">
              <Link activeClass="active" offset={-80} to="Home" spy={true} smooth={true} duration={1750} onSetActive={this.handleSetActive}>
                <li className="nav-link">Home</li>
              </Link>
              <Link activeClass="active" offset={-80} to="About" spy={true} smooth={true} duration={1750} onSetActive={this.handleSetActive}>
                <li className="nav-link">About</li>
              </Link>
              <Link activeClass="active" offset={-80} to="Work" spy={true} smooth={true} duration={1750} onSetActive={this.handleSetActive}>
                <li className="nav-link">Portfolio</li>
              </Link>
              <Link activeClass="active" offset={-450} to="Contact" spy={true} smooth={true} duration={1750} onSetActive={this.handleSetActive}>
                <li className="nav-link">Contact</li>
              </Link>
            </ul>
            <ul id="social-media">
              <li id="linkedin"><a href="https://github.com/sikemausa" target="_blank"><img src={githubLogo} /></a></li>
              <li id="github"><a href="https://www.linkedin.com/in/mikesausa/" target="_blank"><img src={linkedinLogo} /></a></li>
            </ul>
          </div>
    );
  }
}

export default Header;
