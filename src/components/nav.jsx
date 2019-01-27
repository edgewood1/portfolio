import React from "react";
// import "materialize-css/js/sidenav.js";
// import "materialize-css/sass/materialize.scss";
// import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  componentDidMount() {
    // await import("materialize-css/js/sidenav.js");
    var elems = document.querySelectorAll(".sidenav");
    const options = {};
    M.Sidenav.init(elems, options);
  }
  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="nav-wrapper">
            <Link to="#" className="sidenav-trigger" data-target="slide-out">
              <i className="material-icons">menu</i>
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blogs</Link>
              </li>
              <li>
                <Link to="/apps">Apps</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <ul id="slide-out" className="sidenav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          <li>
            <Link to="/apps">Apps</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
