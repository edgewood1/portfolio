import React, { Component } from "react";

class Info extends Component {
 
    styles = {
        fontFamily: "Garamond",
        fontSize: "20px",
        
    };
    styles2 = {
fontWeight: "bold"
    }

    render() {
        return (
    <div style={this.styles}>
 
         
        <div className="container">
            <div className="row">
                    <div className="center-align">
                            <h4 style={this.styles2}> Background </h4>
                            </div>
                <div className="col s12 offset-l0">

                    <p> As a teenager, I was into fantasy novels, writing, coding, and hanging with friends, and later I began college as an engineering student before switching to literature and philosophy, both
                        of which I still have a deep affinity for. </p>
                </div>
                <div className="col s12 offset-l0">
                    <p> Since then, I've taught writing and research classes at various NC colleges.  I've also studied and worked as an outdoor guide at a contemplative
                        center and as an operations manager at a wildcrafting & outdoor school.
                    </p>
                </div>
                <div className="col s12 offset-l0">
                    <p> These days, I spend most of my time exploring software / web development.  I appreciate the way
                        this work integrates my past interests yet allows for new forms of expression, collaboration, and community. </p>
                </div>
 
            </div>
            </div>
            <br></br>
        
       
            </div>
 
    )
  }
}
export default Info;