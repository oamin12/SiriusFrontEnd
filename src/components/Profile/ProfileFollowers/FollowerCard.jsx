import React from "react";
import "./FollowerCard.css";
import "../ProfileData.css"
import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import axios from "axios";

/**
 * @description component contains the information of followers
 * @param {object} props profile pic - username - name - bio
 * @returns {div} information of users plus follow or following button depending on the state of this follower to the user
 */
function FollowerCard(props) {
  var token = sessionStorage.getItem("tokenValue");
  const [changeFollow, setChangeFollow] = useState(false);
  const [followed, setFollowed] = useState(props.followsHim);
  const [pending, setPending] = useState(false);
  const [openModal, setOpenModal] = useState(false);


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


  /////////////////////////////////////////////////////////////

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

  return (
    <div className="FollowerCard">
      <Avatar style={{ marginRight: "4px" }} src={props.img} />

      <div className="FollowerData">
        <p style={{ margin: "0px 0px 4px 4px" }}>
          <b>{props.name}</b>
        </p>
        <p
          style={{ margin: "0px 0px 4px 4px", fontSize: "13px", color: "gray" }}
        >
          {props.username}
        </p>
        <p
          style={{ margin: "0px 0px 4px 4px", fontSize: "13px", color: "gray" }}
        >
          {props.bio}
        </p>
      </div>
      {console.log("followed", followed)}
      {props.isMe ? null 
      : !followed && !props.isMe && !pending ? (
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
        <button className="Edit__profile__btn" onClick={handleNotPending}>
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
            Their Tweets will no longer show up in your home timeline. You can
            still view their profile, unless their Tweets are protected.
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
  );
}
export default FollowerCard;
