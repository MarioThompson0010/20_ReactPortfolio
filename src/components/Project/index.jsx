import React from "react";
import "../../index.css";

function Project(props) {
    return <div styleguy={props.styleguy} className={props.classguy}>{props.children}</div>;
  }
export default Project;