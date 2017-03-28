import React, { Component } from 'react';
import macbook from '../images/macbook.png'
import phones from '../images/phones.png'
import iMac from '../images/iMac.png'

class Work extends Component {
  render() {
    return (
      <div>
        <div className="project SickBeats">
          <a href=""></a>
          <img className="device" id="phones" src={phones} />
          <div className="project-text">
            <h1 className="project-title">Sick Beats</h1>
            <p className="project-description">
              A mobile application that utilizes Spotify's API
              to return and visualize data for songs that are
              searched for by the user.
            </p>
            <p className="project-technologies">
              Built with: React-native, Redux, Auth-0,
            </p>
            <h3 class="github-button">View project on Github</h3>
          </div>
        </div>
        <div className="project MemoryPalace">
          <a href=""></a>
          <img className="device" id="macbook" src={macbook} />
          <div className="project-text">
            <h1 className="project-title">Memory Palace Flashcards</h1>
            <p className="project-description">
              A flashcard app that allows users to create flippable
              cards and review them.
            </p>
            <p className="project-technologies">
              Built with: React, Redux, Firebase
            </p>
          </div>
        </div>
        <div className="project NativeReminders">
          <a href=""></a>
          <img className="device" id="iMac" src={iMac} />
          <div className="project-text">
            <h1 className="project-title">Reminders</h1>
            <p className="project-description">
              A native desktop application that allows users to set reminders
              that will alert them at given intervals via the OS's native
              reminders.
            </p>
            <p className="project-technologies">
              Built with: Electron, Vue, SQLite3,
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
