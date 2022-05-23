import React from "react";
import "./Icon.css";
import "./FriendRequestCard.css";
import { Avatar } from "@mui/material";
import getUser from "./UserById";
import axios from "axios";

function FriendRequestCard(props) {
  function HandleReject() {
    props.HandleIndex(props.id);
  }
  function HandleAccept() {
    props.setAcceptIndex(props.userName);
  }
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar style={{ marginRight: "4px" }} src={props.profilePic} />
        <p style={{ margin: "0px 0px 4px 4px" }}>
          <b>{props.userName}</b>
        </p>
      </div>
      <div className="RequestButtons">
        <button onClick={HandleAccept} className="AcceptButton">
          Accept
        </button>
        <button onClick={HandleReject} className="RejectButton">
          Reject
        </button>
      </div>
    </div>
  );
}
export default FriendRequestCard;
//pass a component as a prop
