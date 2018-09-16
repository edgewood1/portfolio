import React, { Component } from "react";

class Info extends Component {
 
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
            <h1> About Me </h1>
            <hr></hr>
            <p> I live on Edgewood with KP</p>
            <p> Durham NC is a small hick town </p>
            </div>
    </div>
    </div>
    </div>  
    )
  }
}
export default Info;