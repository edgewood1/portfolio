import React from "react";

import axios from "axios";
import { Fragment } from "react";
import Nav from "./nav.jsx";

class Post extends React.Component {
  state = {
    content: "",
    title: ""
  };

  htmlDecode(input) {
    var e = document.createElement("div");
    e.innerHTML = input;
    // return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    return e.childNodes[0].nodeValue;
  }
  createMarkup(input) {
    return { __html: input };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    console.log(id);

    var url =
      "https://public-api.wordpress.com/rest/v1.1/sites/code757.wordpress.com/posts/" +
      id;
    console.log(url);
    axios.get(url).then(res => {
      console.log(res.data.title);
      const content = res.data.content;

      this.setState({ content: content, title: res.data.title }),
        () => {
          console.log(this.state.content);
        };
    });
  }

  titleStyle = {
    fontSize: "150%",
    // marginLeft: '10%',
    textAlign: "center",
    fontWeight: "bold"
  };
  textStyle = {
    fontSize: "138%",
    marginLeft: "25%",
    marginRight: "25%",
    fontWeight: 540,
    fontFamily: "Garamond"
  };

  render() {
    return (
      <div>
        <Nav />
        <br />
        <div style={this.titleStyle}>{this.state.title}</div>
        <hr />

        <div
          style={this.textStyle}
          dangerouslySetInnerHTML={this.createMarkup(this.state.content)}
        />
      </div>
    );
  }
}

export default Post;
