import React, { Component } from "react";
import Nav from "./nav.jsx";

class Home extends Component {
  titleStyle = {
    fontFamily: "Garamond",
    fontSize: "225%",
    fontWeight: "bold",
    textAlign: "center"
  };

  textStyle = {
    fontFamily: "Garamond",
    fontSize: "140%",
    textAlign: "center"
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <p style={this.titleStyle}> Mel DeJesus</p>
            <hr />
            <div style={this.textStyle}>
              <p> JavaScript Developer</p>
              <p> MongoDB | Express | React | Node </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
