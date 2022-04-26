import React from "react";
import {Tabs,Tab} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../ProfileData.css";
import { NavLink} from "react-router-dom";
/**
 * @description component that contains tab to navigate between followers and followings of user, name of user
 * @param {object} props name
 * @returns {div} contains a Tab to navigate between followers and followings of user
 */
function FollowTab(props){
    return ( 
        <div style={{height:"auto" , maxWidth:"635.29px"}}>
            <div className="header">
                <div className="ArrowIcon">
                <NavLink to={"/"+props.username}>
                    <ArrowBackIcon fontSize="small" />   
                </NavLink>
                </div>
            <h2>{props.name}</h2>
            </div>
            <Tabs variant="fullWidth">
                <NavLink style={{width:"317.15px", color:"black"}} to={"/"+props.username+"/followers"}>
                <Tab label="Followers" />
                </NavLink>
                <NavLink style={{width:"317.15px", color:"black"}} to={"/"+props.username+"/followings"}>
                <Tab label="Followings" />
                </NavLink>
            </Tabs>
        </div>

    );
}
export default FollowTab;