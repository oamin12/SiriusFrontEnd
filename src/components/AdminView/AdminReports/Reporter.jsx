import React from "react";

import { Avatar} from "@mui/material";

import "./Reporter.css";

function Reporter(props) {
  return (
   <div className="Reporter">
   <Avatar src={props.img}/>
   {props.username} 
   <div style={{color:"black" , marginLeft:"20px",fontWeight:"bold",fontSize:"16px"}}>
       Reported this user!
   </div>
    </div>
  );
}
export default Reporter;

