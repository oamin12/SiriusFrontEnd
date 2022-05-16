import React from "react";
import { Avatar,Tabs,Tab } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "../Bookmarks/BookmarksHeader.css";
import { useState } from "react";
import "./ProfileData.css";
import { Link, NavLink, useLocation } from "react-router-dom";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 320,
    height:300,
    bgcolor: "background.paper",
    border: "0px",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

/**
 * @description profile page with all the information of visited user or the logged in user
 * @param {object} props username - name - profile picture - cover photo - bio - location - birthdate - joined data
 * - indicator for wether this is my profile or not - no. of followings - no. of followers
 * @returns {div} contains all information of user, edit button if I'm the logged in user, follow button if visiting a non followed user
 * , following button if I'm visiting a following user, tab to navigate between different type of tweets for users
 */
function ProfileData(props){
    var profileId = 123;
    var visitedProfileId = 1;
    const [MediaSelected, setPage] = useState(false);
    //UseState for edit profile button
    const [hoverOverLike, setHoverLike] = useState(false);
    //UseState to keep track of following and unfollowing users
    const [changeFollow, setChangeFollow] = useState(false);
    const [followed, setFollowed] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    localStorage.setItem("TopName",props.name);//for name displayed in following/follower

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

    function isOverFollowingBtn()
    {
        setChangeFollow(true);
    }
    function isOutFollowingBtn()
    {
        setChangeFollow(false);
    }
    function handleFollow()
    {
        setFollowed(true);
    }
    function handleUnfollow()
    {
        setFollowed(false);
        handleModalClose();
    }

    function handleBanButtonClick()
    {
        setOpenModal(true);
    }
    function handleModalClose()
    {
        setOpenModal(false);
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
                    {visitedProfileId===profileId ?
                    <button onMouseOver={isOverBtn} onMouseOut={isOutBtn} style={{backgroundColor: hoverOverLike ? "#F5F8FA" : "white" }} className="Edit__profile__btn" >
                            <b>Edit profile</b>
                    </button>:
                    <div className="visitedProfile">
                       <button  className="notifAndMoreBtn">
                            <MoreHorizOutlinedIcon />
                            </button>
                            <button  className="notifAndMoreBtn">
                            <NotificationAddOutlinedIcon />
                            </button>
                            {!followed ?
                                <button data-testid="Follow-button" className="Edit__profile__btn" onClick={handleFollow} style={{backgroundColor:"black",color:"white",borderColor:"black"}}>
                               <b>Follow</b>
                        </button>
                        :
                        <button data-testid="Following-Unfollow-button" onMouseOver={isOverFollowingBtn} onClick={handleBanButtonClick} onMouseOut={isOutFollowingBtn} className="followingBtn" >
                               {changeFollow?<b>Unfollow</b>:<b>Following</b>}
                        </button>}
                        <Modal open={openModal} onClose={handleModalClose}>
                            <Box sx={style}>
                                <b className="modalHeader" style={{ textAlign: "center",fontSize:"20px" }}>
                                Unfollow {props.username}
                                </b>
                                <p className="boxParagraph" style={{fontSize:"15px"}}>
                                Their Tweets will no longer show up in your home timeline. You can still view their profile, unless their Tweets are protected.
                                </p>

                                <button className="clearLink" style={{backgroundColor:"black", height:"42px"}} onClick={handleUnfollow}>
                                <b>Unfollow</b>
                                </button>
                                <button className="cancelButton" onClick={handleModalClose}>
                                <b>Cancel</b>
                                </button>
                            </Box>
                        </Modal>

                    </div>}

                </div>

            </div>
            <div className="profile__body">
                <div className="User__name">
                    <h3>{props.name}</h3>
<<<<<<< Updated upstream
                    <p style={{"color":"gray","fontSize":"14px"}}>@{props.username}</p>
                </div>
                <p style={{fontSize:"15px"}}>{props.bio}</p>
                <div className="more__info">
                    <div className="location">
                            <AddLocationOutlinedIcon />
                            {props.location}
                        </div>
                        <div className="location" >
                            <LanguageOutlinedIcon  />
                        {props.website}
                        </div>
                        <div className="location">
                            <CakeOutlinedIcon />
                            {props.bdate}
                        </div>
                        <div className="location">
                            <CalendarMonthOutlinedIcon />
                            {props.joineddate}
                        </div>
=======
                    <p style={{color:"rgb(83, 100, 113)",fontSize:"14px"}}>@{props.username}</p>
>>>>>>> Stashed changes
                </div>
                <p style={{fontSize:"15px", color:"rgb(83, 100, 113)", marginBottom:"15px"}}>{props.bio}</p>

              
            <div className="Profile__information">
            {(props.location!==(" "||undefined))?
            <div className="Profile__info__sub"><AddLocationOutlinedIcon fontSize="small" /> {props.location}</div>
            :null}
            {(props.website!==(" "||null||undefined))?
            <div className="Profile__info__sub"><LinkIcon fontSize="small" /> {props.website}</div>
            :null}
            {(props.birthdate!==(" "||null||undefined))?
            <div className="Profile__info__sub"><CakeOutlinedIcon fontSize="small" /> {props.birthdate}</div>
            :null}
            {(props.joineddate!==(" "||null||undefined))?
            <div className="Profile__info__sub"><CalendarMonthOutlinedIcon fontSize="small" />  {props.joineddate}</div>
            :null}
            </div>
                <div className="follow__section">
                    <NavLink to={"/"+props.username+"/Followings"}  style={{color:"rgb(83, 100, 113)"}}>
                    <span>
                        <b>{props.followings} </b>
                    Following &nbsp; </span>
                    </NavLink>
                    <NavLink to={"/"+props.username+"/Followers"}  style={{color:"rgb(83, 100, 113)"}}>
                    <span>&nbsp;<b>{props.followersCount}</b> Followers </span>
                    </NavLink>
                </div>
            </div>
            <div className="profile__footer">
            <Tabs textColor="inheret" style={{color:"Black"}} variant="fullWidth">
                <NavLink to={"/"+props.username} style={{color:"Black"}}>
                <Tab onClick={handleChange} label="Tweets" />
                </NavLink>
                <NavLink to={"/"+props.username+"/with_replies"} style={{color:"Black",fontSize:"14px"}}>
                <Tab onClick={handleChange} label="Tweets & replies" style={{padding:"7px 7px 7px 7px"}} />
                </NavLink>
                <NavLink  to={"/"+props.username+"/media"} style={{color:"Black"}}>
                <Tab onClick={handleChange} label="Media" />
                </NavLink>
                <NavLink to={"/"+props.username+"/likes"} style={{color:"Black"}}>
                <Tab onClick={handleChange} label="Likes" />
                </NavLink>
            </Tabs>

            </div>
        </div>

    );
}

export default ProfileData
