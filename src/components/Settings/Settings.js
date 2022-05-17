import React from "react";
import "./Settings.css";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyIcon from "@mui/icons-material/Key";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
          className="deactivate-settings"
          onClick={() => navigate("/settings/deactivateaccount")}
        >
          <HeartBrokenIcon className="icon3"></HeartBrokenIcon>
          Deactivate your account
          <span className="info3">
            Find out how you can deactivate your account.
          </span>
          <ArrowForwardIosIcon fontSize="small" className="arrow3" />
        </button>
      </div>
      <div className="widgets">
        <div className="search">search</div>
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">who to follow</div>
      </div>
    </div>
  );
}

export default Settings;
