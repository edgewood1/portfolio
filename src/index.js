import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostSet from "./components/all_posts";
import Apps from "./components/apps";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Data from "./components/data";
import Home from "./components/home";
import Info from "./components/info";
import Post from "./components/one_post";
import React_blog from "./components/react_blog";
import ReactPost from "./components/react_post";
import Resume2 from "./components/resume2";
import "./index.css";

// Get the current location.
// const location = history.location
// Grabs the Routes
// var routes = require('./config/routes');

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={Info} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/all_posts/:id" component={PostSet} />
      <Route exact path="/one_post/:id" component={Post} />
      <Route exact path="/react_post/:id" component={ReactPost} />
      <Route exact path="/data" component={Data} />
      <Route exact path="/react" component={React_blog} />
      <Route exact path="/apps" component={Apps} />
      <Route exact path="/resume" component={Resume2} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </Router>,

  document.getElementById("root")
);
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
