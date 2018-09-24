import React, { Component } from "react";

class Contact extends Component {
 
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
            <h1> Contacts</h1>
            <hr></hr>
            <p> Linkedin  </p>
            <p> GitHub </p>
            <p> WordPress </p>
            <p> Email </p>
            <p> Text </p>
            <p> References </p>
            </div>
    </div>
    </div>
    </div>  
    )
  }
}
export default Contact;