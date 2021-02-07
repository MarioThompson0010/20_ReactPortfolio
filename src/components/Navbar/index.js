import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-md sticky-top navbar-light bg-light">
      <Link to="/">
        <h1>
          Mario Thompson
        </h1>

      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myAwesomeInfo"
        aria-controls="myAwesomeInfo" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="myAwesomeInfo">
        <ul className="navbar-nav ml-auto">

          <li className="nav-item nav-link active">
            <Link
              to="/discover"
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item nav-link active">
            <Link
              to="/search"
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
