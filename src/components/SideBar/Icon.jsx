import React from "react";
import { NavLink } from "react-router-dom";

import "./Icon.css";
function Icon({ active, iconText, IconPic, link }) {
  return (
    
      <NavLink to={link}>
        <div className={`icon ${active && "icon-active"}`}>
          <IconPic />
          <h4>{iconText}</h4>
        </div>
      </NavLink>
    
  );
}
export default Icon;
//pass a component as a prop
