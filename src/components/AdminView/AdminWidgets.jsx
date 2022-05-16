import React from "react";
import "./AdminWidgets.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { NavLink } from "react-router-dom";

var percentageState = false; //decreasing
function AdminWidgets({ Icon, type, counter, typeLink, percentage}) {
  return (
    <div className="AdminWidgets">
      <div className="left">
        <h2 className="cardHeader">{type}</h2>
        <p className="cardCounter">{counter}</p>
        <NavLink to="/adminView/user" state={{color:"black"}}>
        <div className="cardUsers">{typeLink}</div>
        </NavLink>
      </div>
      <div className="right">
        <div
          className="rightText"
          style={{ color: percentageState ? "green" : "red" }}
        >
          <KeyboardArrowUpOutlinedIcon />
          {percentage}
        </div>
        <div>
          <Icon />
        </div>
      </div>
    </div>
  );
}
export default AdminWidgets;
//pass a component as a prop
//see all users
