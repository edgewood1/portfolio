import React, { Component } from "react";

class Contact extends Component {
  styles = {
    fontFamily: "Garamond",
    fontSize: "20px",
    fontWeight: "bold"
  };

  info = {
    github: "https://github.com/edgewood1",
    linkedin:
      "https://www.linkedin.com/in/mel-dejesus-a5754056?trk=nav_responsive_tab_profile",
    wordpress: "https://code757.wordpress.com/",
    email: "meldejesus22@gmail.com",
    text: "919-220-8424",
    references: ""
  };

  render() {
    return (
      <div style={this.styles}>
        <div className="container">
          <div className="row">
            <div className="center-align">
              <h1> Contacts</h1>
              <hr />
              <p> Linkedin </p>
              <p> GitHub </p>
              <p> WordPress </p>
              <p> Email </p>
              <p> Text </p>
              <p> References </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
