import React from "react";
import { NavLink } from "react-router-dom";
import "./Icon.css";
import { Badge } from "@mui/material";
import ReactDOM from "react-dom";
import App from "../App";

/**
 *
 * @param {object} props active, iconText, iconPic, NavLink
 * @description Component that represents one of the navigation links to be rendered by sidebar. It contains the Icon and Icontext
 * @returns {div} a div that returns the component
 */

function Icon({ active, iconText, IconPic, link, numOfNotifs }) {
  function HandleClick() {
    if (iconText === "Profile") {
      localStorage.setItem("UserProfile", localStorage.getItem("UserName"));
    }
  }
  return (
    <NavLink onClick={HandleClick} to={link}>
      <div className={`icon ${active && "icon-active"}`}>
        <Badge
          badgeContent={numOfNotifs}
          color="primary"
          style={{ width: "auto" }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          max={99}
        >
          <IconPic />
        </Badge>
        <h4>{iconText}</h4>
      </div>
    </NavLink>
  );
}
export default Icon;
//pass a component as a prop
