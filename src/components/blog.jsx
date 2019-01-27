import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "./nav";

class Blog extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    var data = [];
    var col1 = [];
    var col2 = [];
    var url =
      "https://public-api.wordpress.com/rest/v1/sites/code757.wordpress.com/tags/";
    axios.get(url).then(res => {
      console.log(res);
      const posts = res.data.tags;
      var posts2 = posts.map(el => {
        if (el.post_count) return el.name;
      });
      console.log(posts2);
      posts2.forEach(el => {
        if (el) {
          data.push(el);
        }
      });
      console.log(data);
      data.forEach((el, i) => {
        console.log(i);
        i % 2 === 0 ? col1.push(el) : col2.push(el);
      });
      // this.setState({ posts: data });
      console.log(col1);
      //  this.setState({posts: [col1, col2]})
      // this.setState({col1: col1, col2: col2})
      this.setState({ posts: data });
      console.log(this.state.posts);
      // this.state.posts.forEach((e, i)=>{console.log(e[i])})
    });
  }

  titleStyle = {
    fontSize: "160%",
    marginLeft: "5%",
    marginRight: "5%",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Garamond"
  };
  textStyle = {
    fontSize: "120%",
    marginLeft: "5%",
    marginRight: "5%",
    fontWeight: 540,
    fontFamily: "Garamond",
    textAlign: "center"
  };

  render() {
    var col1 = [];

    // var b= i+1
    console.log(col1);
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <p style={this.titleStyle}> Blog Categories </p>
          </div>

          <br />

          <div className="row" style={this.textStyle}>
            {this.state.posts.map(el => (
              <Link className="col s6" key={el} to={`/all_posts/${el}`}>
                {el}
              </Link>
            ))}
            <Link className="col s6" key="React" to={`/react`}>
              React
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
