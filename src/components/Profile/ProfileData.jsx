import React from "react";
import { Avatar,Tabs,Tab } from "@mui/material";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import "./ProfileData.css";

function ProfileData(props){
    return(
        <container className="profile__data" >
            <div className="profile__head">

                <Avatar id="coverpic" src={props.coverphoto} variant='square' sx={{ width: 600, height: 250 }} />
                <Avatar id="profilepic" src={props.profilepic} sx={{ width: 135, height: 135 }} />
                
            </div>  
            <div className="profile__body">
                <div className="User__name">
                    <h3>{props.name}</h3>
                    <p style={{"color":"gray","fontSize":"14px"}}>{props.username}</p>
                </div>
                <h4>{props.bio}</h4>
                {/* <span className="more__info"> <AddLocationOutlinedIcon />{props.location}    {props.website}   {props.bdate}    {props.joineddate}</span> */}
                <div className="more__info">
                    <div className="location">
                        <AddLocationOutlinedIcon />
                        <p>{props.location}</p>
                    </div>
                    <div className="location">
                        <LanguageOutlinedIcon />
                        <p> {props.website}</p>
                    </div>
                    <div className="location">
                        <CakeOutlinedIcon />
                        <p>{props.bdate}</p>
                    </div>
                    <div className="location">
                        <CalendarMonthOutlinedIcon />
                        <p>{props.joineddate}</p>
                    </div>
                </div>
                <div className="follow__section">
                    <span><b>{props.followings}</b> Following &nbsp;</span>
                    <span>&nbsp;<b>{props.followers}</b> Followers </span>
                </div>
            </div>
            <div className="profile__footer"> 
            <Tabs variant="fullWidth">
                <Tab label="Tweets" />
                <Tab label="Tweets & replies" />
                <Tab label="Media" />
                <Tab label="Likes" />    
            </Tabs>
         

            </div>
        </container>
    
    );
}

export default ProfileData