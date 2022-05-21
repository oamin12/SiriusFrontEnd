import React from "react";
import "./AdminWidgets.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { NavLink } from "react-router-dom";



function AdminWidgets({ Icon, type, counter, typeLink, percentage }) {
  var percentageState = false; //decreasing
if(percentage>=0){
  percentageState = true;
}
else{
  percentageState = false;
}
  return (
    <div className="AdminWidgets">
      <div className="left">
        <h2 className="cardHeader">{type}</h2>
        <p className="cardCounter">{counter}</p>
        <NavLink to="/admin/user" style={{ color: "black" }}>
          <div className="cardUsers">{typeLink}</div>
        </NavLink>
      </div>
      <div className="right">
        <div
          className="rightText"
          style={{ color: percentageState ? "green" : "red" }}
        >
          {percentageState?<KeyboardArrowUpOutlinedIcon />
          :<KeyboardArrowDownIcon />
          }
          {percentage}%
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
