import React from "react";
import "./UsersCard.css";
import { Avatar } from "@mui/material";
import { NavLink} from "react-router-dom";
import "../Bookmarks/BookmarksHeader.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";

import AdminUserStats from "./AdminUserStats/AdminUserStats";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
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

const styleStats = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "600px",
  bgcolor: "background.paper",
  border: "0px",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};
/**
 * @description A component that contain the profile picture, name, username, bio of every user. 4 buttons
 * 1. Statistics button that shows the change in number, percentage of followers and percantage of tweets for user
 * 2. Profile button that shows the profile of user
 * 3. Ban button that can ban the user forever
 * 4. Reports button that renders a page showing all reports done on a user
 * @param {object} props id for user - name - username -image(profile pic) - bio
 *
 * @returns {div} containing profile data plus 4 buttons
 */
function UsersCard(props) {
  //console.log(people);
  const [openModal, setOpenModal] = useState(false);

  function handleBanButtonClick() {
    setOpenModal(true);
  }
  function handleModalClose() {
    setOpenModal(false);
  }
  function handleBanLinkClick() {
    props.handleIndexing(props.username);
    handleModalClose();
  }
  function handleCancelButtonClick() {
    handleModalClose();
  }

  const [openModalStats, setOpenModalStats] = useState(false);

  function handleStatButtonClick() {
    setOpenModalStats(true);
  }
  function handleModalStatsClose() {
    setOpenModalStats(false);
  }
  function handleUserClicked(){
    localStorage.setItem("UserProfile",props.username);
  }
  function handleReportClicked(){
    localStorage.setItem("UserProfile",props.username);
  }

  return (
    <div>
      <div className="UsersCard">
        <Avatar style={{ marginRight: "4px" }} src={props.img} />

        <div className="UsersData">
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

        <button data-testid="stat-button"
          className="followButton"
          onClick={handleStatButtonClick}
          style={{ backgroundColor: "green", marginLeft: "20px" }}
        >
          Statistics
        </button>
        <Modal data-testid="stat-Modal" open={openModalStats} onClose={handleModalStatsClose} isOpen >
          <Box sx={styleStats}>
            <h2 data-testid="Header-stat"
              className="modalHeader"
              style={{
                color: "rgb(29, 161, 242)",
                textAlign: "center",
                paddingBottom: "10px",
                borderBottom: "1px solid lightgray",
              }}
            >
              User Statistics
            </h2>
            <AdminUserStats />
            <button data-testid="cancel-stat-Modal" className="cancelButton" onClick={handleModalStatsClose}>
              Cancel
            </button>
          </Box>
        </Modal>

        <div
          className="followButton"
          style={{
            backgroundColor: "rgb(29, 161, 242)",
            minWidth: "70px",
            marginLeft: "20px",
          }}
        >
          <NavLink onClick={handleUserClicked}
            to={props.link}
            style={{ textDecoration: "none", color: "white" }}
          >
            Profile
          </NavLink>
        </div>
        <button
          data-testid="Ban-button"
          className="followButton"
          id={props.id}
          onClick={handleBanButtonClick}
          style={{
            backgroundColor: "red",
            minWidth: "70px",
            marginLeft: "20px",
          }}
        >
          Ban
        </button>
        <Modal data-testid="Ban-Modal"
        open={openModal} onClose={handleModalClose}>
          <Box sx={style}>
            <h3 className="modalHeader" style={{ textAlign: "center" }}>
              Ban User
            </h3>
            <p className="boxParagraph">
              This can't be undone and you'll ban this user
            </p>

            <button data-testid="Ban-Ban-button" className="clearLink" onClick={handleBanLinkClick}>
              Ban
            </button>
            <button data-testid="cancel-button" className="cancelButton" onClick={handleCancelButtonClick}>
              Cancel
            </button>
          </Box>
        </Modal>

        <div
          className="followButton"
          style={{ backgroundColor: "black", marginLeft: "20px" }}
        >
          <NavLink
            to={"/admin/" + props.username + "/reports"}
            style={{ textDecoration: "none", color: "white" }}
            onClick={handleReportClicked}
          >
            Reports
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default UsersCard;
