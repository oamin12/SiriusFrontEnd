import React from "react";
import "./Search.css";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { cancelbutton } from "../WhoToFollow/WhoToFollow_style";
import { unfollowbutton } from "../WhoToFollow/WhoToFollow_style";
import { Modal } from "@mui/material";
import { unfollowpopuppage } from "../WhoToFollow/WhoToFollow_style";
import { heading1_unfollow_popuppage } from "../WhoToFollow/WhoToFollow_style";
import { heading2_unfollow_popuppage } from "../WhoToFollow/WhoToFollow_style";
import { NavLink } from "react-router-dom";
import axios from "axios";
function Card(props) {
  const [followstate, setfollowstate] = React.useState(props.followHim!==undefined ? props.followHim: "Follow");
  const [showunfollowpoppage, setshowunfollowpoppage] = React.useState(false);
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
    return response;
  }
  function follow_unfollow() {
    if (followstate === "Following") {
      setshowunfollowpoppage(true);
      deleteFollow()

    } else setfollowstate("Following");
    PostFollow();
  }
  function closeunfollowpoppage(event) {
    if (event.target.value === "1") {
      setfollowstate("Follow");
    }
    setshowunfollowpoppage(false);
  }
  function handleclickprofile()
  {
    localStorage.setItem("UserProfile",props.username);
  }
  return (
    <div className="searchCard">
      <NavLink to={"/" + props.username} style={{ color: "black" }} onClick={handleclickprofile}>
        <Avatar src={props.img} />

        <div className="searchData">
          <p style={{ margin: "0px 0px 4px 4px" }}>
            <b>{props.name}</b>
          </p>
          <p
            style={{
              margin: "0px 0px 4px 4px",
              fontSize: "13px",
              color: "gray",
            }}
          >
            {props.username}
          </p>
          <p
            style={{
              margin: "0px 0px 4px 4px",
              fontSize: "13px",
              color: "gray",
            }}
          >
            {props.bio}
          </p>
        </div>
      </NavLink>
      {props.followbutton === true && (
        <div>
          {followstate === "Follow" ? (
            <button
              className="followButton"
              onClick={follow_unfollow}
              style={props.styling}
            >
              {followstate}
            </button>
          ) : (
            <button
              className="followingButton"
              onClick={follow_unfollow}
              style={props.styling}
            >
              {followstate}
            </button>
          )}

          <Modal open={showunfollowpoppage} onClose={closeunfollowpoppage}>
            <Box sx={unfollowpopuppage}>
              <h3 style={heading1_unfollow_popuppage}>Unfollow</h3>
              <h4 style={heading2_unfollow_popuppage}>
                Their Tweets will no longer show up in your home timeline. You
                can still view their profile, unless their Tweets are protected.
              </h4>
              <Button
                sx={unfollowbutton}
                value={1}
                onClick={closeunfollowpoppage}
              >
                Unfollow
              </Button>
              <Button
                sx={cancelbutton}
                value={2}
                onClick={closeunfollowpoppage}
              >
                Cancel
              </Button>
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default Card;
