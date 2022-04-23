import React from "react";
import { Avatar,Tabs,Tab } from "@mui/material";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";
import "./ProfileData.css";
import { Link, NavLink, useLocation } from "react-router-dom";

function ProfileData(props){
    const [MediaSelected, setPage] = useState(false);
    const [hoverOverLike, setHoverLike] = useState(false);

    function handleChange(){
        setPage(true);
    }

    function isOverBtn()
    {
      setHoverLike(true);
    }
    function isOutBtn()
    {
      setHoverLike(false);
    }
    
    return(
        <div className="profile__data" >
            <div className="header">
                <div className="ArrowIcon">
                <NavLink to="/home">
                    <ArrowBackIcon fontSize="small" />   
                </NavLink>
                </div>
            <h2>{props.name}</h2>
            </div>
            <div className="profile__head">

                <Avatar id="coverpic" src={props.coverphoto} variant='square' sx={{ width: "auto", height: 200 }} />
                <Avatar id="profilepic" src={props.profilepic} sx={{ width: 135, height: 135 }} />
                <div className="edit__btn">
                    <button onMouseOver={isOverBtn} onMouseOut={isOutBtn} style={{backgroundColor: hoverOverLike ? "#F5F8FA" : "white" }} className="Edit__profile__btn" >
                        <b>Edit profile</b>
                    </button>
                </div>
                
            </div>  
            <div className="profile__body">
                <div className="User__name">
                    <h3>{props.name}</h3>
                    <p style={{"color":"gray","fontSize":"14px"}}>{props.username}</p>
                </div>
                <p style={{fontSize:"15px", marginBottom:10}}>{props.bio}</p>
                <div className="more__info">
                <span className="location">
                        <AddLocationOutlinedIcon />
                        {props.location}
                    </span>
                    <span className="location" >
                        <LanguageOutlinedIcon  />
                       {props.website}
                    </span>
                    <span className="location">
                        <CakeOutlinedIcon />
                        {props.bdate}
                    </span>
                    <span className="locationn">
                        <CalendarMonthOutlinedIcon />
                        {props.joineddate}
                    </span>
                </div>
                <div className="follow__section">
                    <NavLink to="/profile/Followings"  style={{color:"gray"}}>
                    <span>
                        <b>{props.followings} </b> 
                    Following &nbsp; </span>
                    </NavLink>
                    <NavLink to="/profile/Followers"  style={{color:"gray"}}>
                    <span>&nbsp;<b>{props.followers}</b> Followers </span>
                    </NavLink>
                </div>
            </div>
            <div className="profile__footer"> 
            <Tabs textColor="inheret" style={{color:"Black"}} variant="fullWidth">
                <NavLink to="/profile" style={{color:"Black"}}>
                <Tab onClick={handleChange} label="Tweets" />
                </NavLink>
                <NavLink to="/profile/with_replies" style={{color:"Black",fontSize:"14px"}}>
                <Tab onClick={handleChange} label="Tweets & replies" style={{padding:"7px 7px 7px 7px"}} />
                </NavLink>
                <NavLink  to="/profile/media" style={{color:"Black"}}>
                <Tab onClick={handleChange} label="Media" />
                </NavLink>
                <NavLink to="/profile/likes" style={{color:"Black"}}>
                <Tab onClick={handleChange} label="Likes" />  
                </NavLink>  
            </Tabs>

            </div>
        </div>
    
    );
}

export default ProfileData