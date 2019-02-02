import React, { Component } from "react";
import GoodTunes from "./apps/goodtunes";
import Nav from "./nav.jsx";

class Apps extends Component {
  titleStyle = {
    fontFamily: "Garamond",
    fontSize: "160%",
    fontWeight: "bold",
    textAlign: "center"
  };

  details = [
    {
      title: "Good Tunes",
      tech: "Mongo | Express | React | Node | Passport",
      desc:
        "This app gathers new song recommendations from various music sites - It also allows a user to rate and save select songs to a playlist.",
      image: require("./apps/images/goodTunes.png"),
      link: "https://warm-depths-30010.herokuapp.com/"
    },
    {
      title: "New York Times API",
      tech: "MySQL | Express | React | Node",
      desc:
        "Using a user's topic input, this app will search articles in the pages of the New York Times -- It also allows a user to save and/or delete saved articles",
      image: require("./apps/images/roadie.png"),
      link: "https://nytimes-react17.herokuapp.com/"
    },
    {
      title: "Roadie",
      tech: "JQuery| Express | Firebase",
      desc:
        "This app allows the user to save itineraries of past and future trips.",
      image: require("./apps/images/roadie.png"),
      link: "http://157.230.82.251:3005/"
    },
    {
      title: "Books to Movies",
      tech: "Javascript | Bootstrap | Firebase",
      desc:
        "This app allows you to submit a movie title, based on this title, it recommends a book - It also displays recent movies searched.",
      image: require("./apps/images/booksmovies.png"),
      link: "https://applesauce-collaborative.github.io/Movies-to-Books/"
    },
    {
      title: "Project Manager",
      tech: "MySQL | Express | Handlebars | Node",
      desc:
        "This app allows you to add projects and rate them as completed or not.",
      image: require("./apps/images/projectManager.png"),

      link: "https://hidden-everglades-36713.herokuapp.com/"
    }
  ];

  render() {
    return (
      <div>
        <Nav />
        <div class="container">
          <p style={this.titleStyle}> Applications </p>
          <hr />
          {this.details.map((e, i) => (
            <div>
              <GoodTunes details={e} />
              <br />
              <hr />
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Apps;
