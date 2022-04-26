import React from "react";
import "./AdminWidgets.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

var percentageState = false; //decreasing
/**
 * @description A component that return a widget that contains the number of added users in our system per specific duration(week/month)
 * @param {object} props Icon, counter, typeLink, percentage
 * @returns {div} returns a div that contains percentage of increasing or decreasing users
 */
function AdminWidgets({ Icon, type, counter, typeLink, percentage}) {
  return (
    <div className="AdminWidgets">
      <div className="left">
        <h2 className="cardHeader">{type}</h2>
        <p className="cardCounter">{counter}</p>
        <div className="cardUsers">{typeLink}</div>
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
