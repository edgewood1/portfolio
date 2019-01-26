import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./components/home";
import Info from "./components/info";
import Blog from "./components/blog";
import PostSet from "./components/all_posts";
import Post from "./components/one_post";
import ReactPost from "./components/react_post";
import Data from "./components/data";
import React_blog from "./components/react_blog";
import Apps from "./components/apps";
import Resume from "./components/resume";
import Resume2 from "./components/resume2";
import Contact from "./components/contact";

import { BrowserRouter, Route, Redirect } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

// const history = createHistory()
const history = createHistory({ basename: "/" });

// Get the current location.
// const location = history.location
// Grabs the Routes
// var routes = require('./config/routes');

ReactDOM.render(
  <BrowserRouter history={history}>
    <div>
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
    </div>
  </BrowserRouter>,

  document.getElementById("root")
);
// ReactDOM.render(<App />, document.getElementById('root'));
