import React, { Component } from "react";

class Contact extends Component {
 
    styles = {
        fontFamily: "Garamond",
        fontSize: "20px",
        fontWeight: "bold"
    };

    render() {
        return (
 <div class="container">
            <div class="row">
        
                <div class="col s12 l5 offset-l1">
                    <h4> {this.props.details.title} </h4>
                </div>

          
                <div class="col s12 l5 offset-l1">
                    <p> {this.props.details.tech}</p>
                </div>

                <div class="col s12 l5 offset-l1">
                <p> {this.props.details.tech}</p>
              
                </div>
                <div class="col s12 l5 offset-l1">
                    <img src="assets/images/NYTimes.png" alt="nytimes" height="300" width="300"></img>
                </div>
                <div class="col s12 l5 offset-l1">
                    <a href="https://nytimes-react17.herokuapp.com/" target="_blank"> View Project Here </a>
                </div>
            </div>

        </div>
    
    )
  }
}
export default Contact;