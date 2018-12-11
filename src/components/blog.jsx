import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";

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
        i % 2 == 0 ? col1.push(el) : col2.push(el);
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
    fontSize: "150%",
    // marginLeft: '10%',
    textAlign: "center",
    fontWeight: "bold"
  };
  textStyle = {
    fontSize: "120%",
    marginLeft: "5%",
    marginRight: "5%",
    fontWeight: 540,
    fontFamily: "Garamond"
  };

  render() {
    var col1 = [];
    var x;

    // var b= i+1
    console.log(col1);
    return (
      <div>
        <ul>
          <div className="container" style={this.titleStyle}>
            <div className="row">
              <p className="col offset-s3"> Blog Categories </p>
            </div>
          </div>
          <br />

          <div className="container" style={this.textStyle}>
            <div className="row">
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
        </ul>
      </div>
    );
  }
}

export default Blog;
