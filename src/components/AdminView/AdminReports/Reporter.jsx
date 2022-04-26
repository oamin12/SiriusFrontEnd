import React from "react";

import { Avatar} from "@mui/material";

import "./Reporter.css";
/**
 * @description information about user who reports 
 * @param {object} props profile picture - username
 * @returns {div} contains the profile picture and the username of a user
 */
function Reporter(props) {
  return (
   <div className="Reporter">
   <Avatar img={props.img}/>
   {props.username} 
   <div style={{color:"black" , marginLeft:"20px",fontWeight:"bold",fontSize:"16px"}}>
       Reported this user!
   </div>
    </div>
  );
}
export default Reporter;

