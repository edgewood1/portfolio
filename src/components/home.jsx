import React, { Component } from "react";

class Home extends Component {
 
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
            <h1> Mel DeJesus</h1>
            <hr></hr>
            <p> JavaScript Developer</p>
            <p> MongoDB | Express | React | Node </p>
            </div>
    </div>
    </div>
    </div>  
    )
  }
}
export default Home;