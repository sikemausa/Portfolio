import React, { Component } from 'react';
import contactPicture from '../images/contact-picture.jpg';

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div id="contact-information">
          <img id="contact-picture" src={contactPicture} />
          <h1 id="contact-name">Mike Sausa</h1>
          <h2 id="contact-job-title">Front-End Developer</h2>
          <h3><span className="contact">Email</span> • <span className="contact"> Github </span> • <span className="contact">Linkedin</span></h3>
        </div>
      </section>
    );
  }
}

export default Contact;
