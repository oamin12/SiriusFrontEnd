import React from "react";
import "./Settings.css";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import SearchBox from "../Search/SearchBox";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyIcon from "@mui/icons-material/Key";
import BrushIcon from "@mui/icons-material/Brush";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
function Settings() {
  let navigate = useNavigate();
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
        <h3 className="header-settings">Settings</h3>

        <button
          onClick={() => navigate("/settings/accountinformation")}
          className="account-settings"
        >
          <PersonOutlineIcon className="icon1"></PersonOutlineIcon>
          Account information
          <span className="info1">
            Change your account information like your username and email
            address.
          </span>
          <ArrowForwardIosIcon fontSize="small" className="arrow1" />
        </button>

        <button
          className="password-settings"
          onClick={() => navigate("/settings/changepassword")}
        >
          <KeyIcon className="icon2"></KeyIcon>
          Change your password
          <span className="info2">Change your password at any time.</span>
          <ArrowForwardIosIcon fontSize="small" className="arrow2" />
        </button>

        <button
          className="notifications-settings"
          onClick={() => navigate("/settings/editnotifications")}
        >
          <NotificationsIcon className="icon4"></NotificationsIcon>
          Notifications
          <span className="info4">
            Select the kinds of notifications you get about your activities.
          </span>
          <ArrowForwardIosIcon fontSize="small" className="arrow4" />
        </button>
      </div>
      <div className="widgets">
        <div className="search">
          <SearchBox
            size="40"
            styling={{
              width: "30%",
              marginTop: "-15.5%",
              marginLeft: "70%",
              height: "60%",
            }}
          />
        </div>
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">
          {" "}
          <WhoToFollow />{" "}
        </div>
      </div>
    </div>
  );
}

export default Settings;
