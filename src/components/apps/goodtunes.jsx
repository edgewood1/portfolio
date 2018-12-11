import React, { Component } from "react";

class Contact extends Component {
  styles = {
    // fontFamily: "Garamond",
    // fontSize: "20px",
    fontWeight: "bold"
  };

  render() {
    return (
      <div class="row">
        <div class="col s12 l5 offset-l1">
          <h5 style={this.styles}> {this.props.details.title} </h5>
          {console.log(this.props.title)}
        </div>
        <div class="col s12 l5 offset-l1">
          <p>{this.props.details.tech}</p>
        </div>
        <div class="col s12 l5 offset-l1">
          <p> {this.props.details.desc}</p>
        </div>
        <div class="col s12 l5 offset-l1">
          {console.log(this.props.details.image)}
          <img
            src={this.props.details.image}
            alt={this.props.details.title}
            height="300"
            width="300"
          />
        </div>
        <div class="col s12 l5 offset-l1">
          <a href={this.props.details.link} target="_blank">
            {" "}
            View Project Here{" "}
          </a>
        </div>
      </div>
    );
  }
}
export default Contact;
