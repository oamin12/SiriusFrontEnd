import React from "react";
import "./Search.css";
import Avatar from '@mui/material/Avatar';

function Card(props) {
  return (
    <div className="searchCard">
        <Avatar style={{marginRight: "4px"}} src= {props.img} />

        <div className="searchData">
          <p style={{margin: "0px 0px 4px 4px"}}><b>{props.name}</b></p>
          <p style={{margin: "0px 0px 4px 4px", fontSize: "13px", color: "gray"}}>{props.username}</p>
          <p style={{margin: "0px 0px 4px 4px", fontSize: "13px", color: "gray"}}>{props.bio}</p>
        </div>

        <button className="followButton">Follow</button>
    </div>
  );
}

export default Card;