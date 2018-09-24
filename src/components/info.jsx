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
 
         
        <div className="container">
            <div className="row">
                    <div className="center-align">
                            <h4> Background </h4>
                            </div>
                <div className="col s12 offset-l0">

                    <p> As a teenager, I explored some basic forms of coding. This, in a roundabout way, led me into an Ohio
                        engineering program, which I briefly attended before switching programs in order to study literature and philosophy, both
                        of which I still have a deep affinity for. </p>
                </div>
                <div className="col s12 offset-l0">
                    <p> Later, I taught writing and research classes at various NC colleges, exploring the ways that we inform
                        and are informed by society and media. </p>
                    <p> Curious about other forms of relationship, I studied and worked as an outdoor guide at a contemplative
                        center and as an operations manager at a wildcrafting & outdoor school.
                    </p>
                </div>
                <div className="col s12 offset-l0">
                    <p> These days, I spend most of my time exploring software / web development.  I appreciate the way
                        this work integrates many of my past interests while allowing for new forms of expression. </p>
                    <p> I especially enjoy learning new computer languages and technologies for the ways they inform one another, for the kinds of applications they enable, and the forms 
                    of community and collaboration that they can foster. </p>
                </div>
 
            </div>
            </div>
            <br></br>
        
       
            </div>
 
    )
  }
}
export default Info;