import React from "react";
import "./FollowNotif.css";
import { Avatar } from "@mui/material";
import getUser from "./getUser";
import { NavLink } from "react-router-dom";
function FollowNotif(props) {
  return (
    <div className="FollowNotif">
      <Avatar alt="Profile picture" src={props.image} />
      <h4 className="FollowNotifHeader">
        {props.userName} started following you.
      </h4>
    </div>
  );
}
export default FollowNotif;
//23mly src elavatar
