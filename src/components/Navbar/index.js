import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-md sticky-top navbar-light bg-light">
      <Link to="/">
        About me
      </Link>

      <li className="nav-item nav-link active">
        <Link
          to="/"
        // className={
        //   window.location.pathname === "/" || window.location.pathname === "/about"
        //     ? "nav-link active"
        //     : "nav-link"
        // }
        >
          About
            </Link>
      </li>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">

          <li className="nav-item nav-link active">
            <Link
              to="/discover"
            // className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item nav-link active">
            <Link
              to="/search"
            // className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
