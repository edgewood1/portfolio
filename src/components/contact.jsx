import React, { Component } from "react";

class Contact extends Component {
  styles = {
    fontFamily: "Garamond",
    fontSize: "20px",
    fontWeight: "bold"
  };

  info = {
    github: "https://github.com/edgewood1",
    linkedin: "https://www.linkedin.com/in/meldejesus/",
    wordpress: "https://code757.wordpress.com/",
    email: "mailto:meldejesus22@gmail.com",
    text: "919-220-8424",
    references: ""
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="center-align">
              <h1 style={this.styles}> Contacts</h1>
              <hr />
              <br />
              <a target="_blank" href={this.info.linkedin}>
                LinkedIn
              </a>
              <br />
              <br />
              <a target="_blank" href={this.info.github}>
                Github
              </a>
              <br />
              <br />
              <a target="_blank" href={this.info.wordpress}>
                WordPress
              </a>
              <br />
              <br />
              <a href={this.info.email} target="_top">
                Send Mail
              </a>
              <br />
              <p> Phone/Text: {this.info.text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
