import React, { Component } from 'react';
import Icon from './Icon';

class Overview extends Component {
  render() {
    return (
      <section id="overview">
        <h1>I develop beautiful websites and apps using web technologies</h1>
        <Icon text="Websites/Web Apps" />
        <Icon text="Desktop Apps" />
        <Icon text="Mobile Apps" />
      </section>
    );
  }
}

export default Overview;
