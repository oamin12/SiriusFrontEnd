import React from "react";
import "./BlockNotif.css";
import { NavLink } from "react-router-dom";
function BlockNotif(props) {
  return (
    <div className="BlockNotif">
      <p className="BlockNotifText">
        This account will be blocked for <span className="days">{props.blockDays}</span>
        {props.blockDays > 1 && " days"}
        {props.blockDays === 1 && " day"}.
      </p>
    </div>
  );
}
export default BlockNotif;
//23mly src elavatar
