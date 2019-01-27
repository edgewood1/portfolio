import React from "react";
import Nav from "./nav.jsx";
import axios from "axios";
import { Base64 } from "js-base64";
var showdown = require("showdown");
var converter = new showdown.Converter({ metadata: true });

class Post extends React.Component {
  state = {
    content: "",
    title: ""
  };

  createMarkup(input) {
    return { __html: input };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    var url =
      "https://api.github.com/repos/edgewood1/portfolio/contents/markdown/" +
      id;

    axios.get(url).then(res => {
      const content = Base64.decode(res.data.content);
      var title = res.data.name;
      title = title.replace(".md", "").replace("-", " - ");
      this.setState({ content: content, title: title });
    });
  }

  titleStyle = {
    fontSize: "150%",
    marginTop: "5%",
    // marginLeft: '10%',
    textAlign: "center",
    fontWeight: "bold"
  };
  textStyle = {
    fontSize: "130%",
    marginLeft: "5%",
    marginRight: "5%",
    fontFamily: "Garamond"
  };

  render() {
    var render = converter.makeHtml(this.state.content);
    // var meta = converter.getMetadata();
    return (
      <div>
        <Nav />
        <div style={this.titleStyle}>{this.state.title}</div>
        <div
          style={this.textStyle}
          dangerouslySetInnerHTML={this.createMarkup(render)}
        />
      </div>
    );
  }
}

export default Post;
