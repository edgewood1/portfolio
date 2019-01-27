import React, { Component } from "react";
import Nav from "./nav.jsx";

class Contact extends Component {
  titleStyle = {
    fontFamily: "Garamond",
    fontSize: "160%",
    fontWeight: "bold"
  };

  textStyle = {
    color: "white",
    padding: "1%",
    borderRadius: "35%",
    background: "linear-gradient(to right,#94716b,#b79891)"
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
        <Nav />
        <div className="container">
          <div className="row">
            <div className="center-align">
              <h1 style={this.titleStyle}> Contacts</h1>
              <hr />
              <br />
              <button
                style={this.textStyle}
                target="_blank"
                href={this.info.linkedin}
              >
                LinkedIn
              </button>
              <br />
              <br />
              <button
                style={this.textStyle}
                target="_blank"
                href={this.info.github}
              >
                Github
              </button>
              <br />
              <br />
              <button
                style={this.textStyle}
                target="_blank"
                href={this.info.wordpress}
              >
                WordPress
              </button>
              <br />
              <br />
              <button
                style={this.textStyle}
                href={this.info.email}
                target="_top"
              >
                Send Mail
              </button>
              <br />
              <br />
              <button style={this.textStyle}>
                <span>Phone/Text:</span>
                <br />
                <span>{this.info.text}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
