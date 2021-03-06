import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Project from "../../components/Project";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-md sticky-top navbar-light bg-light row">
      {/* <div className="row"> */}
      <div className="col col-md-8">
        <Link to="/">
          <h1>
            Mario Thompson
            </h1>
        </Link>
      </div>
      <div className="col col-md-4">
        <Project className="ml-auto">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item nav-link active">
              <Link
                to="/portfolio"
              >
                Portfolio
            </Link>
            </li>
            <li className="nav-item nav-link active">
              <Link
                to="/contact"
              >
                Contact
            </Link>
            </li>
          </ul>
        </Project>
      </div>
      {/* </div> */}


      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myAwesomeInfo"
        aria-controls="myAwesomeInfo" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      {/* classguy="collapse navbar-collapse" */}


    </nav>
  );
}

export default Navbar;
