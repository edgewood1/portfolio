import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";

class Blog extends React.Component {
  state = {
    hits: []
  };

  componentWillMount() {
    const { id } = this.props.match.params;
    console.log(id);
    if (id == "React") {
      console.log("hhhiiiittt");
      var url = "/go";
      axios.get(url).then(function(res) {
        console.log("finished");
      });
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    var new_id = id.toString();
    // myStr=myStr.toLowerCase();
    new_id = new_id.replace(/(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g, ""); //this one
    new_id = new_id.replace(/\s+/g, "-");
    var newer_id = new_id.replace(/(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g, "-");
    // if (id == 'React') {
    //     skip(id)
    // }
    var hits = [];
    // 'https://public-api.wordpress.com/rest/v1/sites/code757.wordpress.com/posts/'

    var url =
      "https://public-api.wordpress.com/rest/v1.1/sites/code757.wordpress.com/posts/?tag=" +
      newer_id;
    console.log(url);
    axios.get(url).then(res => {
      var posts = res.data.posts;
      console.log(posts);
      //   var posts = decodeURIComponent(posts)
      var hits = posts.map(element => {
        console.log(element.tags);
        if (element.tags) {
          console.log(element.tags[id].name);
          if (element.tags[id].name == id) {
            console.log(element);
            return element;
          }
        }
      });
      console.log(hits);
      this.setState({ hits: hits }, () => {
        console.log(this.state.hits);
      });
    });
  }

  titleStyle = {
    fontSize: "150%",
    // marginLeft: '10%',
    textAlign: "center",
    fontWeight: "bold"
  };
  textStyle = {
    fontSize: "130%",
    marginLeft: "5%",
    marginRight: "5%",
    fontWeight: 540,
    fontFamily: "Garamond",
    color: "black"
  };

  render() {
    if (this.state.hits.length > 0) {
      console.log(Object.keys(this.state.hits[0]));
      console.log(this.state.hits[0]["title"]);
      var title = this.state.hits[0]["title"];
    }

    // var keys = Object.keys(this.state.hits[0])
    // console.log(keys)

    return (
      <div>
        <p style={this.titleStyle}> Blog Categories</p>
        <div className="container" style={this.textStyle}>
          <div className="row">
            {this.state.hits.map(elem => (
              <Link
                className="col s6"
                key={elem}
                to={`/one_post/${elem["ID"]}`}
              >
                {elem["title"].toString().replace(/[0-9 ]/, "")}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
