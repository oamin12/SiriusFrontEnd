import React from "react";
import "./VoteNotif.css";
import { Avatar } from "@mui/material";
import Tweet from "../Tweet/Tweet";
import getTweet from "./getTweet";
import getUser from "./getUser";
import axios from "axios";
import { NavLink } from "react-router-dom";

function VoteNotif(props) {
  return (
    <div className="VoteNotif">
      <Avatar alt="Profile picture" src={props.image} />
      <h4 className="VoteNotifHeader">
        {props.notifText}
      </h4>
    </div>
  );
}
export default VoteNotif;

