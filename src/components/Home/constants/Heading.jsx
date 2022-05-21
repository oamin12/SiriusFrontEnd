import React from "react";
import "../index.css";
/**
 * @description Components that contains the home heading
 * @returns {div} A div that contains this component
 */
function Heading(props) {
  return <h2 className={props.classname}><div className="Heading_title">{props.title}</div></h2>;
}
export default Heading;
