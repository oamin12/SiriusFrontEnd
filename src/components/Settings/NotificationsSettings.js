import React from "react";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./NotificationsSettings.css";
function ProtectedTweets() {
  let navigate = useNavigate();
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
        <ArrowBackIcon
          onClick={() => navigate("/settings/")}
          className="arrow-back"
        />
        <h3 className="header-notify"> Notifications</h3>
        <p className="manage-notify">
          Choose the notifications you’d like to see — and those you don’t.
        </p>
        <p className="mute-notify">Mute notifications</p>
        <input className="checkbox-notify" type="checkbox" />
      </div>
      <div className="widgets">
        <div className="search">search</div>
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">who to follow</div>
      </div>
    </div>
  );
}

export default ProtectedTweets;
