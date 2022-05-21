import React from "react";
import { Avatar, Tabs, Tab } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "../Bookmarks/BookmarksHeader.css";
import { useState, useEffect } from "react";
import "./ProfileData.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import FlagIcon from "@mui/icons-material/Flag";
import "../Tweet/Tweet.css";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 320,
  height: 300,
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

const styleReport = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 470,
  height: 500,
  bgcolor: "background.paper",
  border: "0px",
  boxShadow: 24,
  padding: "15px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",
};
const style_EditProfile = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height:500,
  bgcolor: "background.paper",
  border: "0px",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  overflow:"auto",
};
/**
 * @description profile page with all the information of visited user or the logged in user
 * @param {object} props username - name - profile picture - cover photo - bio - location - birthdate - joined data
 * - indicator for wether this is my profile or not - no. of followings - no. of followers
 * @returns {div} contains all information of user, edit button if I'm the logged in user, follow button if visiting a non followed user
 * , following button if I'm visiting a following user, tab to navigate between different type of tweets for users
 */

function ProfileData(props) {
  localStorage.setItem("TopName", props.name); //for name displayed in following/follower
  const [MediaSelected, setPage] = useState(false);
  //UseState for edit profile button
  const [hoverOverLike, setHoverLike] = useState(false);
  const [hoverOverSave, setHoverSave] = useState(false);
  const [openModalEP, setOpenModalEP] = React.useState(false);


  //UseState to keep track of following and unfollowing users
  const [changeFollow, setChangeFollow] = useState(false);
  const [followed, setFollowed] = useState(props.followed);
  const [pending, setPending] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(null);
  var token = sessionStorage.getItem("tokenValue");

  async function PostFollow() {
    let response = "";
    try {
      response = await axios.post(
        "http://34.236.108.123:3000/" + props.username + "/follow",
        {},
        { headers: { Authorization: "Bearer " + token } }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
    console.log(response);
    return response;
  }

  async function deleteFollow() {
    let response = "";
    try {
      response = await axios.delete(
        "http://34.236.108.123:3000/" + props.username + "/unfollow",
        { headers: { Authorization: "Bearer " + token } }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
    console.log(response);
    return response;
  }
  function ReportType1()
  {
    console.log("reported");
    setOpenReportModal(false);
      (async () => {
        await axios.patch( "http://34.236.108.123:3000/" + props.username +"/report?q=1" ,{}, { headers: { Authorization: "Bearer " + token } });
      })();
  }
  function ReportType2()
  {
    console.log("reported");
    setOpenReportModal(false);
      (async () => {
        await axios.patch( "http://34.236.108.123:3000/" + props.username +"/report?q=2" ,{}, { headers: { Authorization: "Bearer " + token } });
      })();
  }
  function ReportType3()
  {
    console.log("reported");
    setOpenReportModal(false);
      (async () => {
        await axios.patch( "http://34.236.108.123:3000/" + props.username +"/report?q=3" ,{}, { headers: { Authorization: "Bearer " + token } });
      })();
  }
  function ReportType4()
  {
    console.log("reported");
    setOpenReportModal(false);
      (async () => {
        await axios.patch( "http://34.236.108.123:3000/" + props.username +"/report?q=4" ,{}, { headers: { Authorization: "Bearer " + token } });
      })();
  }
  function ReportType5()
  {
    console.log("reported");
    setOpenReportModal(false);
      (async () => {
        await axios.patch( "http://34.236.108.123:3000/" + props.username +"/report?q=5" ,{}, { headers: { Authorization: "Bearer " + token } });
      })();
  }
  function ReportType6()
  {
    console.log("reported");
    setOpenReportModal(false);
      (async () => {
        await axios.patch( "http://34.236.108.123:3000/" + props.username +"/report?q=6" ,{}, { headers: { Authorization: "Bearer " + token } });
      })();
  }

  function handleClickEP(event) {
    setOpenModalEP(event.currentTarget)
    console.log("edit clicked");
  }
  function handleModalCloseEP() {
    setOpenModalEP(false);
  }
    function SaveEdits()
    {

    }
  function isOverBtnSave()
    {
        setHoverSave(true);
    }
    function isOutBtnSave()
    {
        setHoverSave(false);
    }
    function handleChange() {
      setPage(true);
    }

    function isOverBtn() {
      setHoverLike(true);
  }
  function isOutBtn() {
    setHoverLike(false);
  }

  function isOverFollowingBtn() {
    setChangeFollow(true);
  }
  function isOutFollowingBtn() {
    setChangeFollow(false);
  }
  function HandleFollow() {
    setFollowed(true);
    PostFollow();
  }
  function handleUnfollow() {
    setFollowed(false);
    deleteFollow();
    handleModalClose();
  }
  function handlePending() {
    setPending(true);
  }
  function handleNotPending() {
    setPending(false);
  }

  function handleBanButtonClick() {
    setOpenModal(true);
  }
  function handleModalClose() {
    setOpenModal(false);
  }
  function handleClose() {
    setOpen(null);
  }
  function handleSettings(event) {
    setOpen(event.currentTarget);
  }
  //Modal functions for reporting user
  const [openReportModal, setOpenReportModal] = useState(false);

  function handleReportClick() {
    setOpenReportModal(true);
  }

  function handleModalreportClose() {
    setOpenReportModal(false);
  }
  return (
    <div className="profile__data">
      <div className="header">
        <div className="ArrowIcon">
          <NavLink to="/home" className="link_profile">
            <ArrowBackIcon fontSize="small" />
          </NavLink>
        </div>
        <h2>{props.name}</h2>
      </div>
      <div className="profile__head">
        <Avatar
          id="coverpic"
          src={props.coverphoto}
          variant="square"
          sx={{ width: "auto", height: 200 }}
        />
        <Avatar
          id="profilepic"
          src={props.profilepic}
          sx={{ width: 135, height: 135 }}
        />
        <div className="edit__btn">
          {props.isMe ? (
            <div><button
              onClick={handleClickEP}
              onMouseOver={isOverBtn}
              onMouseOut={isOutBtn}
              style={{ backgroundColor: hoverOverLike ? "#F5F8FA" : "white" }}
              className="Edit__profile__btn"
            >
              <b>Edit profile</b>
            </button>
            <Modal open={openModalEP} onClose={handleModalCloseEP}>
                            <Box style={{"padding-top":"0px"}} sx={style_EditProfile}>
                            <div className="modalHeader" style={{"display":"flex"}}>
                            <h2 >Edit Profile</h2>
                            <button onClick={SaveEdits} onMouseOver={isOverBtnSave} onMouseOut={isOutBtnSave}  className="Save__btn" >
                            <b style={{"color":"white", "textAlign":"center"}}>Save</b>
                            </button>
                            </div>
                            <div className="profile__head">
                                <Avatar id="coverpic" src={props.coverphoto} variant='square' sx={{ width: "auto", height: 200 }} />
                                <Avatar id="profilepic" src={props.profilepic} sx={{ width: 135, height: 135 }} />
                            </div>
                            <div>
                                <div className="Edit_boxName">
                                    <p style={{"padding-left": "10px"}}>Name</p>
                                    <input className="edit_ipBox" autocapitalize="sentences" autocomplete="off" maxlength="50" name="displayName" type="text" dir="auto"  ></input>
                                </div>
                                <div className="Edit_boxBio">
                                    <p style={{"padding-left": "10px"}}>Bio</p>
                                    <input className="edit_ipBoxBio" autocapitalize="sentences" autocomplete="off" maxlength="160" name="displayName" type="text"  ></input>
                                </div>
                                <div className="Edit_boxLoc">
                                    <p style={{"padding-left": "10px"}}>Location</p>
                                    <input className="edit_ipBox" autocapitalize="sentences" autocomplete="off" maxlength="30" name="displayName" type="text" dir="auto"  ></input>
                                </div>
                                <div className="Edit_boxWeb">
                                    <p style={{"padding-left": "10px"}}>Website</p>
                                    <input className="edit_ipBox" autocapitalize="sentences" autocomplete="off" maxlength="100" name="displayName" type="text" dir="auto"  ></input>
                                </div>
                            </div>
                        </Box>
                        </Modal>
            </div>
          ) : (
            <div className="visitedProfile">
              <button className="notifAndMoreBtn" onClick={handleSettings}>
                <MoreHorizOutlinedIcon />
              </button>
              <div className="Popover_tweet">
                <Popover
                  open={Boolean(open)}
                  anchorEl={open}
                  onClose={handleClose}
                  anchorReference="anchorEl"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  style={{
                    width: "300px",
                    height: "auto",
                  }}
                >
                  <div>
                    <Typography
                      sx={{ p: 2 }}
                      onClick={handleReportClick}
                      className="tweet_settings_bar"
                    >
                      <FlagIcon fontSize="small" /> Report @{props.username}
                    </Typography>
                    <Modal
                      open={openReportModal}
                      onClose={handleModalreportClose}
                    >
                      <Box sx={styleReport}>
                        <div style={{ display: "flex", alignItems: "center" ,gap:"7px" ,paddingBottom:"20px"}}>
                          <ArrowBackIcon fontSize="small" />{" "}
                          <h2>Report an issue</h2>
                        </div>
                         <p style={{fontSize:"18px",color:"gray",marginBottom:"15px"}}> Help us understand the problem. What issue with @{props.username} are you reporting?</p>
                        <div className="Report" style={{marginBottom:"15px", cursor: "pointer"}} onClick={ReportType1}>
                          <h3>I'm not interested in this account</h3>
                        </div>
                        <div className="Report" style={{marginBottom:"15px", cursor: "pointer"}} onClick={ReportType2}>
                          <h3>It's suspicious or spam</h3>
                        </div>
                        <div className="Report" style={{marginBottom:"15px", cursor: "pointer"}} onClick={ReportType3}>
                          <h3>It appers their account is hacked</h3>
                        </div>
                        <div className="Report" style={{marginBottom:"15px", cursor: "pointer"}} onClick={ReportType4}>
                          <h3>They are pretending to be me or someone else</h3>
                        </div>
                        <div className="Report" style={{marginBottom:"15px", cursor: "pointer"}} onClick={ReportType5}>
                          <h3>Their Tweets are abusive or hateful</h3>
                        </div>
                        <div className="Report" style={{marginBottom:"15px", cursor: "pointer"}} onClick={ReportType6}>
                          <h3>
                            They're expressing intentions of self-harm or
                            suicide
                          </h3>
                        </div>
                      </Box>
                    </Modal>
                  </div>
                </Popover>
              </div>

              {!followed && !props.isMe && !pending ? (
                <button
                  data-testid="Follow-button"
                  className="Edit__profile__btn"
                  onClick={props.protected ? handlePending : HandleFollow}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderColor: "black",
                  }}
                >
                  <b>Follow</b>
                </button>
              ) : props.protected && pending ? (
                <button
                  className="Edit__profile__btn"
                  onClick={handleNotPending}
                >
                  <b>Pending</b>
                </button>
              ) : (
                <button
                  data-testid="Following-Unfollow-button"
                  onMouseOver={isOverFollowingBtn}
                  onClick={handleBanButtonClick}
                  onMouseOut={isOutFollowingBtn}
                  className="followingBtn"
                >
                  {changeFollow ? <b>Unfollow</b> : <b>Following</b>}
                </button>
              )}
              <Modal open={openModal} onClose={handleModalClose}>
                <Box sx={style}>
                  <b
                    className="modalHeader"
                    style={{ textAlign: "center", fontSize: "20px" }}
                  >
                    Unfollow {props.username}
                  </b>
                  <p className="boxParagraph" style={{ fontSize: "15px" }}>
                    Their Tweets will no longer show up in your home timeline.
                    You can still view their profile, unless their Tweets are
                    protected.
                  </p>

                  <button
                    className="clearLink"
                    style={{ backgroundColor: "black", height: "42px" }}
                    onClick={handleUnfollow}
                  >
                    <b>Unfollow</b>
                  </button>
                  <button className="cancelButton" onClick={handleModalClose}>
                    <b>Cancel</b>
                  </button>
                </Box>
              </Modal>
            </div>
          )}
        </div>
      </div>
      <div className="profile__body">
        <div className="User__name">
          <h3>{props.name}</h3>
          <p style={{ color: "rgb(83, 100, 113)", fontSize: "14px" }}>
            @{props.username}
          </p>
        </div>
        <p
          style={{
            fontSize: "15px",
            color: "rgb(83, 100, 113)",
            marginBottom: "15px",
          }}
        >
          {props.bio}
        </p>

        <div className="Profile__information">
          {props.location !== (" " || undefined) ? (
            <div className="Profile__info__sub">
              <AddLocationOutlinedIcon fontSize="small" /> {props.location}
            </div>
          ) : null}
          {props.website !== ("" || null || undefined) ? (
            <div className="Profile__info__sub">
              <LinkIcon fontSize="small" /> {props.website}
            </div>
          ) : null}
          {props.birthdate !== (" " || null || undefined) ? (
            <div className="Profile__info__sub">
              <CakeOutlinedIcon fontSize="small" /> Born {props.birthdate}
            </div>
          ) : null}
          {props.joineddate !== ("" || null || undefined) ? (
            <div className="Profile__info__sub">
              <CalendarMonthOutlinedIcon fontSize="small" /> Joined {props.joineddate}
            </div>
          ) : null}
        </div>
        <div className="follow__section">
          <NavLink
            to={"/" + props.username + "/following"}
            style={{ color: "rgb(83, 100, 113)" }}
          >
            <span>
              <b>{props.followingCount} </b>
              Following &nbsp;{" "}
            </span>
          </NavLink>
          <NavLink
            to={"/" + props.username + "/Followers"}
            style={{ color: "rgb(83, 100, 113)" }}
          >
            <span>
              &nbsp;<b>{props.followersCount}</b> Followers{" "}
            </span>
          </NavLink>
        </div>
      </div>
      <div className="profile__footer">
        {props.protected ? (
          <div className="protectedAccount">
            <h1 style={{ margin: "10px" }}>These Tweets are protected</h1>
            <p style={{ color: "grey" }}>
              Only approved followers can see {props.username}’s Tweets. To
              request access, click Follow.
            </p>
          </div>
        ) : (
          <Tabs
            textColor="inheret"
            style={{ color: "Black" }}
            variant="fullWidth"
          >
            <NavLink to={"/" + props.username} style={{ color: "Black" }}>
              <Tab onClick={handleChange} label="Tweets" />
            </NavLink>
            <NavLink
              to={"/" + props.username + "/with_replies"}
              style={{ color: "Black", fontSize: "14px" }}
            >
              <Tab
                onClick={handleChange}
                label="Tweets & replies"
                style={{ padding: "7px 7px 7px 7px" }}
              />
            </NavLink>
            <NavLink
              to={"/" + props.username + "/media"}
              style={{ color: "Black" }}
            >
              <Tab onClick={handleChange} label="Media" />
            </NavLink>
            <NavLink
              to={"/" + props.username + "/likes"}
              style={{ color: "Black" }}
            >
              <Tab onClick={handleChange} label="Likes" />
            </NavLink>
          </Tabs>
        )}
      </div>
    </div>
  );
}

export default ProfileData;
