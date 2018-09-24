import React, { Component } from "react";

class Project extends Component {
 
    styles = {
        fontFamily: "Garamond",
        fontSize: "20px",
        fontWeight: "bold"
    };

    render() {
        return (
    <div style={this.styles}>
    <div className ="container"> 
        <div className ="row"> 
        <div className ="center-align">
            <h1> Project Manager </h1>
            <hr></hr>
            </div>
    </div>
    </div>
    </div>  
    )
  }
}
export default Project;