import React, { Component } from "react";

class Info extends Component {
  styles = {
    fontFamily: "Garamond",
    fontSize: "20px"
  };
  styles2 = {
    fontWeight: "bold"
  };

  render() {
    return (
      <div style={this.styles}>
        <div className="container">
          <div className="row">
            <div className="center-align">
              <h4 style={this.styles2}> Background </h4>
            </div>
            <div className="col s12 offset-l0">
              <p>
                {" "}
                In college, I studied literature and philosophy and spent many
                years teaching college writing and research classes at various
                nearby colleges.
              </p>
            </div>
            <div className="col s12 offset-l0">
              <p>
                {" "}
                I've also spent a bit of time as an outdoor guide for teens as
                well as an operations manager at a wildcrafting & outdoor
                school.
              </p>
            </div>
            <div className="col s12 offset-l0">
              <p>
                {" "}
                These days, I spend my time with my wife, daughter, and dog.
              </p>
            </div>
            <div className="col s12 offset-l0">
              <p>
                {" "}
                In terms of coding, it's easy for me to see it as an extension
                of the various forms of writing I've explored through my life.
                To this end, I appreciate the way web development integrates my
                past interests yet allows for new forms of expression,
                collaboration, and community.
              </p>
            </div>
            <div className="col s12 offset-l0">
              <p>
                {" "}
                To this end, I appreciate the way web development integrates my
                past interests yet allows for new forms of expression,
                collaboration, and community.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Info;
