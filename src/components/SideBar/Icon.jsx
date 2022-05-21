import React from "react";
import { NavLink } from "react-router-dom";
import "./Icon.css";
import ReactDOM from "react-dom";
import App from "../App";

/**
 *
 * @param {object} props active, iconText, iconPic, NavLink
 * @description Component that represents one of the navigation links to be rendered by sidebar. It contains the Icon and Icontext
 * @returns {div} a div that returns the component
 */

function Icon({ active, iconText, IconPic, link }) {
  function handleClick() {
    if (iconText === "Profile") {
      localStorage.setItem("UserProfile", localStorage.getItem("UserName"));
    }
  }
  return (
    <NavLink onClick={handleClick} to={link}>
      <div className={`icon ${active && "icon-active"}`}>
        <IconPic />
        <h4>{iconText}</h4>
      </div>
    </NavLink>
  );
  };
export default Icon;
//pass a component as a prop
