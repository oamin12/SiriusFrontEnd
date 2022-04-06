import React from "react";
import "./FollowingCard.css";
import {Avatar,Tabs,Tab} from "@mui/material";


function FollowingCard(props) {
  return (
            
        <div className="FollowingCard">
        
            <Avatar style={{marginRight: "4px"}} src= {props.img} />

            <div className="FollowingData">
                <p style={{margin: "0px 0px 4px 4px"}}><b>{props.name}</b></p>
                <p style={{margin: "0px 0px 4px 4px", fontSize: "13px", color: "gray"}}>{props.username}</p>
                <p style={{margin: "0px 0px 4px 4px", fontSize: "13px", color: "gray"}}>{props.bio}</p>
            </div>

            <button className="followButton">Following</button>
        </div>
  );
}

export default FollowingCard;