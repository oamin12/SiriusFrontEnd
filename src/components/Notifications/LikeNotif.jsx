import React from "react";
import "./LikeNotif.css";
import { Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";
function LikeNotif(props) {
  return (
    <div className="LikeNotif">
      <Avatar alt="Profile picture" src={props.profilePic} />
      <div className="LikeNotifHeader">
        <h4>{props.userName}</h4>
        <p>Liked your tweet.</p>
      </div>
      <p className="LikeNotifText">{props.tweetText}</p>
    </div>
  );
}
export default LikeNotif;
//23mly src elavatar
