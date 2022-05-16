import React from "react";
import "./TweetNotif.css";
import { Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";
function TweetNotif(props) {
  return (
    <div className="TweetNotif">
      <Avatar alt="Profile picture" src={props.profilePic} />
      <h4 className="TweetNotifHeader">{props.userName}</h4>
      <p className="TweetNotifText">{props.tweetText}</p>
    </div>
  );
}
export default TweetNotif;
//23mly src elavatar
