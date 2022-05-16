import React from "react";
import "./FollowNotif.css";
import { Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";
function FollowNotif(props) {
  return (
    <div className="FollowNotif">
      <Avatar alt="Profile picture" src={props.profilePic} />
      <h3 className="FollowNotifHeader">{props.userName}</h3>
      <p className="FollowNotifText">started following you.</p>
    </div>
  );
}
export default FollowNotif;
//23mly src elavatar
