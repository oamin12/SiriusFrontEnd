import React from "react";
import {Avatar,Tabs,Tab} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../ProfileData.css";
import { Link, NavLink, useLocation } from "react-router-dom";

function FollowTab(props){
    return ( 
        <div style={{height:"auto" , maxWidth:"635.29px"}}>
            <div className="header">
                <div className="ArrowIcon">
                <NavLink to="/profile">
                    <ArrowBackIcon fontSize="small" />   
                </NavLink>
                </div>
            <h2>{props.name}</h2>
            </div>
            <Tabs variant="fullWidth">
                <NavLink style={{width:"317.15px", color:"black"}} to="/profile/followers">
                <Tab label="Followers" />
                </NavLink>
                <NavLink style={{width:"317.15px", color:"black"}} to="/profile/followings">
                <Tab label="Followings" />
                </NavLink>
            </Tabs>
        </div>

    );
}
export default FollowTab;