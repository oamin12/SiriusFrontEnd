import React from "react";
import { NavLink } from "react-router-dom";

import "./Icon.css";
function Icon({ active, iconText, IconPic, link }) {
 function clickNav()
 {
  localStorage.setItem("UserProfile",localStorage.getItem("UserName"));
 }
 
  return (
    
      <NavLink to={link} onClick={clickNav}>
        <div className={`icon ${active && "icon-active"}`}>
          <IconPic />
          <h4>{iconText}</h4>
        </div>
      </NavLink>
    
  );
}
export default Icon;
//pass a component as a prop
