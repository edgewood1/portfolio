import React from "react";

import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";

class React_blog extends React.PureComponent {
  state = {
    hits: []
  };

  componentDidMount() {
    var url = "https://api.github.com/repos/edgewood1/gatsby/contents/markdown";

    axios.get(url).then(results => {
      results = results.data;
      console.log(results);
      var hits = results.map(element => {
        console.log(element.name);
        return element.name;
      });
      this.setState({ hits: hits }, () => {
        console.log(this.state.hits);
      });
    });
  }
  /// end of compDidMount

  style = {
    fontSize: "20px",
    marginLeft: "10%"
  };

  render() {
    return (
      <div style={this.style}>
        <div className="container">
          <div className="row">
            <p className="col offset-s3"> React Posts </p>
          </div>
        </div>
        <br />
        <ul>
          {this.state.hits.map(elem => (
            <li>
              <Link to={`/react_post/${elem}`}>
                {elem.replace(".md", "").replace(/[0-9]+-/, "")}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default React_blog;
